const { ipcRenderer } = window.electronShim;

const tabs = [];
let activeTabId = null;

const tabBar = () => document.getElementById('p3x-onenote-tab-bar');
const container = () => document.getElementById('p3x-onenote-webview-container');
const conf = () => global.p3x.onenote.conf;

// Always compute label from type + account + current language
function getTabLabel(tab) {
    if (tab.customName) return tab.customName;
    const lang = global.p3x.onenote.lang;
    const typeLabel = tab.type === 'corporate'
        ? (lang.menu?.language?.dialog?.corporate || lang.tabs?.corporate || 'Corporate')
        : (lang.menu?.language?.dialog?.personal || lang.tabs?.personal || 'Personal');
    return tab.account ? `${typeLabel}: ${tab.account}` : typeLabel;
}

function createWebview(partition) {
    const wv = document.createElement('webview');
    wv.setAttribute('webpreferences', 'nativewindowopen=yes,contextisolation=no');
    wv.setAttribute('allowpopups', '');
    wv.setAttribute('partition', partition);
    wv.classList.add('p3x-onenote-webview', 'p3x-hidden');
    container().appendChild(wv);
    return wv;
}

function extractAccountInfo(url) {
    try {
        if (!url.includes('client_info=')) return null;
        const match = url.match(/client_info=([^&#]+)/);
        if (!match) return null;
        const decoded = atob(decodeURIComponent(match[1]));
        const info = JSON.parse(decoded);
        return info.preferred_username || info.name || null;
    } catch (e) {
        return null;
    }
}

function setupWebviewHandlers(tab) {
    const { webview } = tab;

    for (const eventName of ['did-navigate', 'did-navigate-in-page']) {
        webview.addEventListener(eventName, () => {
            // Check both getURL() and src - hash fragment may only be in one
            const url1 = webview.getURL();
            const url2 = webview.src;

            // Only save valid OneNote URLs — skip blank, auth, and login pages
            const isValid = url1 && !url1.startsWith('about:') && !url1.includes('login.microsoftonline.com') && !url1.includes('login.live.com');
            if (isValid) {
                tab.url = url1;
            }

            // Try to extract account email from OAuth callback
            const account = extractAccountInfo(url1) || extractAccountInfo(url2);
            if (account && tab.account !== account) {
                tab.account = account;
                renderTabBar();
                persistState();
            }

            if (tab.id === activeTabId) {
                global.p3x.onenote.data.url = tab.url;
                ipcRenderer.send('p3x-onenote-save', global.p3x.onenote.data);
                p3x.onenote.wait.angular(() => {
                    global.p3x.onenote.updateLocation(webview.src);
                });
            }
            persistState();
        });
    }

    const { remote } = window.electronShim;
    const darkInvertCss = 'img, video, image, svg image, picture, canvas, [style*="background-image"], [role="img"] { filter: invert(1) hue-rotate(180deg) !important; }';
    const darkInvertJs = `(function() {
        var existing = document.getElementById('p3x-dark-invert-css');
        if (existing) existing.remove();
        var style = document.createElement('style');
        style.id = 'p3x-dark-invert-css';
        style.textContent = ${JSON.stringify(darkInvertCss)};
        (document.head || document.documentElement).appendChild(style);
    })()`;

    let wcSetup = false;

    webview.addEventListener('dom-ready', () => {
        tab.domReady = true;

        // Apply per-tab zoom for all tabs on dom-ready
        const zoom = tab.zoom !== undefined ? tab.zoom : 1.0;
        if (zoom !== 1.0) webview.setZoomFactor(zoom);

        if (tab.id === activeTabId) {
            webview.blur();
            webview.focus();

            if (global.p3x.onenote.updateZoomDisplay) {
                global.p3x.onenote.updateZoomDisplay();
            }

            if (process.env.NODE_ENV === 'debug') {
                webview.openDevTools();
            }
        }

        if (!wcSetup) {
            wcSetup = true;
            try {
                const wc = remote.webContents.fromId(webview.getWebContentsId());

                // Extract account email from OAuth sub-frame navigations
                wc.on('did-frame-navigate', (event, url) => {
                    const account = extractAccountInfo(url);
                    if (account && tab.account !== account) {
                        tab.account = account;
                        renderTabBar();
                        persistState();
                    }
                });

                // Dark mode injection into sub-frames
                wc.on('did-frame-finish-load', () => {
                    if (conf().get('darkThemeInvert') !== true) return;
                    try {
                        const frames = wc.mainFrame.framesInSubtree;
                        for (const frame of frames) {
                            try {
                                frame.executeJavaScript(darkInvertJs);
                            } catch (e) {}
                        }
                    } catch (e) {}
                });
            } catch (e) {}
        }
    });
}

function createTab(opts = {}) {
    const id = conf().get('tabNextId') || tabs.length;
    conf().set('tabNextId', id + 1);

    const type = opts.type || 'personal';
    const account = opts.account || '';
    const partition = opts.partition || `persist:tab-${id}`;
    const url = opts.url || 'https://www.onenote.com/notebooks';

    const webview = createWebview(partition);
    const zoom = opts.zoom !== undefined ? opts.zoom : 1.0;
    const customName = opts.customName || '';
    const pinned = opts.pinned || false;
    const tab = { id, type, account, partition, url, webview, domReady: false, zoom, customName, pinned };
    tabs.push(tab);

    setupWebviewHandlers(tab);
    renderTabBar();
    switchTab(id);

    webview.src = url;

    persistState();
    return tab;
}

function removeTab(id) {
    if (tabs.length <= 1) {
        global.p3x.onenote.toast.action(
            global.p3x.onenote.lang.tabs?.cannotCloseLastTab || 'Cannot close the last tab.'
        );
        return;
    }

    const idx = tabs.findIndex(t => t.id === id);
    if (idx === -1) return;

    const tab = tabs[idx];

    if (tab.pinned) {
        global.p3x.onenote.toast.action(
            global.p3x.onenote.lang.tabs?.cannotClosePinned || 'Cannot close a pinned tab.'
        );
        return;
    }

    // Save to closed tabs history before removing
    const closedTabs = conf().get('closedTabsHistory') || [];
    closedTabs.unshift({
        type: tab.type,
        account: tab.account,
        partition: tab.partition,
        url: tab.url,
        zoom: tab.zoom,
        customName: tab.customName,
    });
    if (closedTabs.length > 10) closedTabs.length = 10;
    conf().set('closedTabsHistory', closedTabs);

    tab.webview.remove();
    tabs.splice(idx, 1);

    if (activeTabId === id) {
        const nextTab = tabs[Math.min(idx, tabs.length - 1)];
        switchTab(nextTab.id);
    }

    renderTabBar();
    persistState();
}

function switchTab(id) {
    activeTabId = id;
    for (const tab of tabs) {
        if (tab.id === id) {
            tab.webview.classList.remove('p3x-hidden');
            if (tab.domReady) {
                tab.webview.focus();
                const zoom = tab.zoom !== undefined ? tab.zoom : 1.0;
                tab.webview.setZoomFactor(zoom);
            }
            global.p3x.onenote.data.url = tab.url;
            p3x.onenote.wait.angular(() => {
                global.p3x.onenote.updateLocation(tab.url);
                if (global.p3x.onenote.updateZoomDisplay) {
                    global.p3x.onenote.updateZoomDisplay();
                }
            });
        } else {
            tab.webview.classList.add('p3x-hidden');
        }
    }
    renderTabBar();
    conf().set('activeTabId', id);
}

function getActiveWebview() {
    const tab = tabs.find(t => t.id === activeTabId);
    return tab ? tab.webview : null;
}

function getActiveTab() {
    return tabs.find(t => t.id === activeTabId) || null;
}

function getAllWebviews() {
    return tabs.map(t => t.webview);
}

let dragSourceTabId = null;

function renderTabBar() {
    const bar = tabBar();
    bar.innerHTML = '';

    for (const tab of tabs) {
        const el = document.createElement('div');
        el.className = 'p3x-tab' + (tab.id === activeTabId ? ' p3x-tab-active' : '');
        el.draggable = true;
        el.dataset.tabId = tab.id;

        if (tab.pinned) {
            const pinIcon = document.createElement('i');
            pinIcon.className = 'fas fa-thumbtack';
            pinIcon.style.fontSize = '9px';
            pinIcon.style.opacity = '0.7';
            el.appendChild(pinIcon);
        }

        const label = document.createElement('span');
        label.textContent = getTabLabel(tab);
        label.style.overflow = 'hidden';
        label.style.textOverflow = 'ellipsis';
        el.appendChild(label);

        // Drag-and-drop reordering
        el.addEventListener('dragstart', (e) => {
            dragSourceTabId = tab.id;
            el.classList.add('p3x-tab-dragging');
            e.dataTransfer.effectAllowed = 'move';
        });

        el.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            if (dragSourceTabId !== null && dragSourceTabId !== tab.id) {
                el.classList.add('p3x-tab-drag-over');
            }
        });

        el.addEventListener('dragleave', () => {
            el.classList.remove('p3x-tab-drag-over');
        });

        el.addEventListener('drop', (e) => {
            e.preventDefault();
            el.classList.remove('p3x-tab-drag-over');
            if (dragSourceTabId === null || dragSourceTabId === tab.id) return;

            const fromIdx = tabs.findIndex(t => t.id === dragSourceTabId);
            const toIdx = tabs.findIndex(t => t.id === tab.id);
            if (fromIdx === -1 || toIdx === -1) return;

            const [moved] = tabs.splice(fromIdx, 1);
            tabs.splice(toIdx, 0, moved);
            persistState();
            renderTabBar();
        });

        el.addEventListener('dragend', () => {
            dragSourceTabId = null;
            // Clean up all drag classes
            bar.querySelectorAll('.p3x-tab-dragging, .p3x-tab-drag-over').forEach(el => {
                el.classList.remove('p3x-tab-dragging', 'p3x-tab-drag-over');
            });
        });

        // Right-click context menu
        el.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const { remote } = window.electronShim;
            const { Menu, MenuItem } = remote;
            const menu = new Menu();
            const lang = global.p3x.onenote.lang;
            menu.append(new MenuItem({
                label: lang.tabs?.renameTab || 'Rename tab',
                click: async () => {
                    try {
                        const name = await global.p3x.onenote.prompt.renameTab(tab.customName || '');
                        tab.customName = name || '';
                        persistState();
                        renderTabBar();
                    } catch (e) {
                        // cancelled
                    }
                }
            }));
            if (tab.customName) {
                menu.append(new MenuItem({
                    label: lang.tabs?.clearName || 'Clear custom name',
                    click: () => {
                        tab.customName = '';
                        persistState();
                        renderTabBar();
                    }
                }));
            }
            menu.append(new MenuItem({ type: 'separator' }));
            menu.append(new MenuItem({
                label: tab.pinned
                    ? (lang.tabs?.unpinTab || 'Unpin tab')
                    : (lang.tabs?.pinTab || 'Pin tab'),
                click: () => {
                    tab.pinned = !tab.pinned;
                    persistState();
                    renderTabBar();
                }
            }));
            menu.popup();
        });

        el.addEventListener('click', (e) => {
            if (e.target.classList.contains('p3x-tab-close')) return;
            switchTab(tab.id);
        });

        if (tabs.length > 1 && !tab.pinned) {
            const close = document.createElement('button');
            close.className = 'p3x-tab-close';
            close.innerHTML = '<i class="fas fa-times"></i>';
            close.addEventListener('click', async (e) => {
                e.stopPropagation();
                try {
                    const lang = global.p3x.onenote.lang;
                    const tabLabel = getTabLabel(tab);
                    const confirmMsg = lang.tabs?.confirmClose
                        ? lang.tabs.confirmClose(tabLabel)
                        : `Are you sure you want to close "${tabLabel}"? You will be signed out of this account.`;
                    await global.p3x.onenote.prompt.confirmCloseTab(confirmMsg);
                    removeTab(tab.id);
                } catch (e) {
                    // cancelled
                }
            });
            el.appendChild(close);
        }

        bar.appendChild(el);
    }

    const addBtn = document.createElement('button');
    addBtn.id = 'p3x-tab-add';
    addBtn.innerHTML = '<i class="fas fa-plus"></i>';
    addBtn.addEventListener('click', async () => {
        try {
            const type = await global.p3x.onenote.prompt.addTab();
            if (type === 'personal') {
                createTab({ type: 'personal', url: 'https://www.onenote.com/notebooks' });
            } else if (type === 'corporate') {
                createTab({ type: 'corporate', url: 'https://www.onenote.com/notebooks?auth=2' });
            }
        } catch (e) {
            // cancelled
        }
    });
    bar.appendChild(addBtn);
}

function restoreClosedTab() {
    const closedTabs = conf().get('closedTabsHistory') || [];
    if (closedTabs.length === 0) {
        global.p3x.onenote.toast.action(
            global.p3x.onenote.lang.tabs?.noClosedTabs || 'No closed tabs to restore.'
        );
        return;
    }

    const data = closedTabs.shift();
    conf().set('closedTabsHistory', closedTabs);
    createTab({
        type: data.type,
        account: data.account,
        partition: data.partition,
        url: data.url,
        zoom: data.zoom,
    });
}

function setActiveTabZoom(zoom) {
    const tab = tabs.find(t => t.id === activeTabId);
    if (tab) {
        tab.zoom = zoom;
        persistState();
    }
}

function persistState() {
    const data = tabs.map(t => ({
        id: t.id,
        type: t.type || 'personal',
        account: t.account || '',
        partition: t.partition,
        url: (t.url && !t.url.startsWith('about:')) ? t.url : 'https://www.onenote.com/notebooks',
        zoom: t.zoom !== undefined ? t.zoom : 1.0,
        customName: t.customName || '',
        pinned: t.pinned || false,
    }));
    conf().set('tabs', data);
    conf().set('activeTabId', activeTabId);
}

function init() {
    // Migration: convert old single-webview data to tabs format
    let tabsData = conf().get('tabs');
    if (!tabsData || !Array.isArray(tabsData) || tabsData.length === 0) {
        const oldData = conf().get('webview-onenote');
        const url = (oldData && oldData.url && !oldData.url.startsWith('about:blank'))
            ? oldData.url
            : 'https://www.onenote.com/notebooks';
        tabsData = [{ id: 0, type: 'personal', account: '', partition: 'persist:tab-0', url }];
        conf().set('tabs', tabsData);
        conf().set('activeTabId', 0);
        conf().set('tabNextId', 1);
    }

    const savedActiveId = conf().get('activeTabId') ?? tabsData[0].id;

    for (const data of tabsData) {
        const webview = createWebview(data.partition);
        const tab = {
            id: data.id,
            type: data.type || 'personal',
            account: data.account || '',
            partition: data.partition,
            url: data.url,
            zoom: data.zoom !== undefined ? data.zoom : 1.0,
            customName: data.customName || '',
            pinned: data.pinned || false,
            webview,
            domReady: false,
        };
        tabs.push(tab);
        setupWebviewHandlers(tab);
        webview.src = data.url;
    }

    activeTabId = savedActiveId;
    for (const tab of tabs) {
        if (tab.id === activeTabId) {
            tab.webview.classList.remove('p3x-hidden');
        }
    }

    renderTabBar();
}

export default { init, createTab, removeTab, switchTab, getActiveWebview, getActiveTab, getAllWebviews, renderTabBar, setActiveTabZoom, restoreClosedTab, tabs };
