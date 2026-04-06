import registry from '../registry.mjs'

const { ipcRenderer, shell } = window.electronShim;

const handler = (options) => {
    const { webview } = options;

    ipcRenderer.on('p3x-onenote-onload-user', function (event, data) {
        if (data !== null && data !== undefined) {
            registry.data = data;
        }

        // Tab manager handles initial URL loading from persisted tab state.
        // Only load proxy if set.
        if (registry.data.proxy && registry.data.proxy.trim() !== '') {
            import('../action/load-proxy.mjs').then(m => m.default());
        }
    });

    ipcRenderer.on('p3x-onenote-action', function (event, data) {
        import('../action/multi-actions.mjs').then(m => m.default(data));
    });

    ipcRenderer.on('p3x-onenote-action-set-proxy', (event, data) => {
        import('../action/set-proxy.mjs').then(m => m.default(data));
    });

    ipcRenderer.on('p3x-onenote-language', async (event, data) => {
        registry.lang = registry.translations[data.translation];
        registry.toast.action(registry.lang.menu.language.alert);
        registry.updateBarLabels();
        if (registry.tabManager) {
            registry.tabManager.renderTabBar();
        }

        let type = '';
        let cancelled = false;
        try {
            type = await registry.prompt.configureLanguge(data);
            type = type === undefined ? '' : type.trim();
        } catch (e) {
            if (e !== undefined) {
                console.error(e);
            } else {
                cancelled = true;
            }
        } finally {
            if (!cancelled) {
                if (type === 'corporate') {
                    registry.webview.src = 'https://www.onenote.com/notebooks?auth=2&omkt=' + data.translation;
                } else {
                    registry.webview.src = 'https://www.onenote.com/notebooks?omkt=' + data.translation;
                }
            }
        }
    });

    ipcRenderer.on('p3x-onenote-action-open-url', async (event, data) => {
        let url = '';
        let cancelled = false;
        try {
            url = await registry.prompt.goToUrl();
            url = url === undefined ? '' : url.trim();
            if (!url.startsWith('http')) {
                url = 'https://' + url;
            }
        } catch (e) {
            if (e !== undefined) {
                console.error(e);
            } else {
                cancelled = true;
            }
        } finally {
            if (!cancelled) {
                registry.webview.src = url;
            }
        }
    });

    ipcRenderer.on('p3x-onenote-action-bookmark-open', (event, data) => {
        registry.webview.src = data.url;
    });

    ipcRenderer.on('p3x-onenote-action-bookmark-add', async (event, data) => {
        try {
            const result = await registry.prompt.bookmarks(data);
            ipcRenderer.send('p3x-onenote-action-bookmark-result', result);
        } catch (e) {
            if (e !== undefined) {
                alert(e.message);
                console.error(e);
            }
        }
    });

    ipcRenderer.on('p3x-onenote-new-window', (event, data) => {
        const url = data.url;
        if (url.trim().startsWith('about:blank')) {
            return;
        }
        if (registry.conf.get('option-to-disable-internal-external-popup') === true) {
            registry.webview.src = url;
        } else {
            registry.prompt.redirect({ url: url }).then((answer) => {
                if (answer === 'internal') {
                    registry.webview.src = url;
                } else {
                    shell.openExternal(url);
                }
            });
        }
    });
};

export default handler;
