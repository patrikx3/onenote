import registry from './registry.mjs'

const { ipcRenderer, shell, Store, pkg, translations } = window.electronShim;

const conf = new Store();
let translationKey = conf.get('lang');
if (!translationKey) {
    translationKey = 'en-US';
}
const translation = translations[translationKey];

Object.assign(registry, {
    conf: conf,
    uiReady: false,
    url: {
        notebooks: 'https://www.onenote.com/notebooks',
    },
    ui: {},
    hackCss: undefined,
    tabManager: undefined,
    pkg: pkg,
    translations: translations,
    lang: translation,
    data: {
        url: 'about:blank',
        proxy: '',
    },
    prompt: undefined,
    toast: undefined,
    wrongUrlTimeout: 1000,
    wrongUrlMaxAllowed: 5,
    wait: {
        angular: (cb) => {
            let timeout;
            const exec = () => {
                if (!registry.uiReady) {
                    clearTimeout(timeout);
                    timeout = setTimeout(exec, 250);
                } else {
                    cb();
                }
            };
            exec();
        },
        domReady: async () => {
            return new Promise(resolve => {
                let timeout;
                const exec = () => {
                    const tab = registry.tabManager?.getActiveTab();
                    if (!tab || tab.domReady !== true) {
                        clearTimeout(timeout);
                        timeout = setTimeout(exec, 250);
                    } else {
                        resolve();
                    }
                };
                exec();
            });
        }
    }
});

// webview and domReady as getters that proxy to active tab
Object.defineProperty(registry, 'webview', {
    get: () => registry.tabManager?.getActiveWebview(),
    configurable: true,
});

Object.defineProperty(registry, 'domReady', {
    get: () => registry.tabManager?.getActiveTab()?.domReady ?? false,
    set: (val) => {
        const tab = registry.tabManager?.getActiveTab();
        if (tab) tab.domReady = val;
    },
    configurable: true,
});

document.title = `${registry.lang.title} v${registry.pkg.version}`;

// ── Bar helpers ──────────────────────────────────────────────────

function updateBarLabels() {
    const lang = registry.lang;
    document.getElementById('p3x-back-btn').title = lang.label.back;
    document.getElementById('p3x-forward-btn').title = lang.label.forward;
    document.getElementById('p3x-donate-label').textContent = lang.label.donate;
    document.getElementById('p3x-location-bar').title = lang.label.copyLocation;
}

function updateBarNavState() {
    const wv = registry.webview;
    if (!wv || !registry.domReady) return;
    document.getElementById('p3x-back-btn').disabled = !wv.canGoBack();
    document.getElementById('p3x-forward-btn').disabled = !wv.canGoForward();
}

function updateZoomDisplay() {
    const wv = registry.webview;
    if (!wv || !registry.domReady) {
        document.getElementById('p3x-zoom-factor').textContent = '100%';
        return;
    }
    document.getElementById('p3x-zoom-factor').textContent =
        (wv.getZoomFactor() * 100).toFixed(0) + '%';
}

registry.updateLocation = (url) => {
    document.getElementById('p3x-location').textContent = url;
    updateBarNavState();
};

registry.updateZoomDisplay = updateZoomDisplay;
registry.updateBarLabels = updateBarLabels;

// ── Init on window load ─────────────────────────────────────────

window.addEventListener('load', async () => {
    if (conf.get('darkThemeInvert') === true) {
        document.body.classList.add('p3x-dark-mode-invert-quirks');
    }

    // Import UI (toast + dialog)
    const { p3xToast, p3xPrompt } = await import('./ui.mjs');
    registry.prompt = p3xPrompt;
    registry.toast = p3xToast;

    // Initialize tab manager
    const { default: tabManager } = await import('./tab-manager.mjs');
    registry.tabManager = tabManager;
    tabManager.init();

    // Set up bottom bar
    updateBarLabels();

    document.getElementById('p3x-back-btn').onclick = () => {
        const wv = registry.webview;
        if (wv) wv.goBack();
    };
    document.getElementById('p3x-forward-btn').onclick = () => {
        const wv = registry.webview;
        if (wv) wv.goForward();
    };
    document.getElementById('p3x-donate-btn').onclick = () => shell.openExternal('https://paypal.me/patrikx3');
    document.getElementById('p3x-location-bar').onclick = () => {
        import('./action/multi-action/get-location.mjs').then(m => m.default());
    };

    document.getElementById('p3x-zoom-in-btn').onclick = () => {
        const wv = registry.webview;
        if (!wv) return;
        const cur = wv.getZoomFactor();
        const val = cur + 0.1;
        if (val <= 5.0) {
            wv.setZoomFactor(val);
            registry.tabManager.setActiveTabZoom(val);
            updateZoomDisplay();
        }
    };
    document.getElementById('p3x-zoom-out-btn').onclick = () => {
        const wv = registry.webview;
        if (!wv) return;
        const cur = wv.getZoomFactor();
        const val = cur - 0.1;
        if (val >= 0.75) {
            wv.setZoomFactor(val);
            registry.tabManager.setActiveTabZoom(val);
            updateZoomDisplay();
        }
    };

    // Mark UI ready
    registry.uiReady = true;

    // Show initial toast
    p3xToast.action(registry.lang.slow);

    // Import and set up IPC handler (for actions from main process)
    const { default: ipcHandler } = await import('./ipc/handler.mjs');
    ipcHandler({ webview: null });

    ipcRenderer.send('did-finish-load');
});
