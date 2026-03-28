const { ipcRenderer, shell, Store, pkg, translations } = window.electronShim;

const conf = new Store();
let translationKey = conf.get('lang');
if (!translationKey) {
    translationKey = 'en-US';
}
const translation = translations[translationKey];

global.p3x = {
    onenote: {
        conf: conf,
        domReady: false,
        uiReady: false,
        url: {
            notebooks: 'https://www.onenote.com/notebooks',
        },
        ui: {},
        hackCss: undefined,
        webview: undefined,
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
                    if (!global.p3x.onenote.uiReady) {
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
                        if (p3x.onenote.domReady !== true) {
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
    }
};

document.title = `${global.p3x.onenote.lang.title} v${global.p3x.onenote.pkg.version}`;

// ── Bar helpers ──────────────────────────────────────────────────

function updateBarLabels() {
    const lang = global.p3x.onenote.lang;
    document.getElementById('p3x-back-btn').title = lang.label.back;
    document.getElementById('p3x-forward-btn').title = lang.label.forward;
    document.getElementById('p3x-donate-label').textContent = lang.label.donate;
    document.getElementById('p3x-location-bar').title = lang.label.copyLocation;
}

function updateBarNavState() {
    const wv = global.p3x.onenote.webview;
    if (!wv || !p3x.onenote.domReady) return;
    document.getElementById('p3x-back-btn').disabled = !wv.canGoBack();
    document.getElementById('p3x-forward-btn').disabled = !wv.canGoForward();
}

function updateZoomDisplay() {
    const wv = global.p3x.onenote.webview;
    if (!wv || !p3x.onenote.domReady) {
        document.getElementById('p3x-zoom-factor').textContent = '100%';
        return;
    }
    document.getElementById('p3x-zoom-factor').textContent =
        (wv.getZoomFactor() * 100).toFixed(0) + '%';
}

global.p3x.onenote.updateLocation = (url) => {
    document.getElementById('p3x-location').textContent = url;
    updateBarNavState();
};

global.p3x.onenote.updateBarLabels = updateBarLabels;

// ── Init on window load ─────────────────────────────────────────

window.addEventListener('load', async () => {
    if (conf.get('darkThemeInvert') === true) {
        document.body.classList.add('p3x-dark-mode-invert-quirks');
    }

    const webview = document.getElementById('p3x-onenote-webview');
    global.p3x.onenote.webview = webview;
    webview.focus();

    // Import UI (toast + dialog)
    const { p3xToast, p3xPrompt } = await import('./ui.mjs');
    global.p3x.onenote.prompt = p3xPrompt;
    global.p3x.onenote.toast = p3xToast;

    // Set up bottom bar
    updateBarLabels();

    document.getElementById('p3x-back-btn').onclick = () => webview.goBack();
    document.getElementById('p3x-forward-btn').onclick = () => webview.goForward();
    document.getElementById('p3x-donate-btn').onclick = () => shell.openExternal('https://paypal.me/patrikx3');
    document.getElementById('p3x-location-bar').onclick = () => {
        import('./action/multi-action/get-location.mjs').then(m => m.default());
    };

    document.getElementById('p3x-zoom-in-btn').onclick = () => {
        const cur = webview.getZoomFactor();
        const val = cur + 0.1;
        if (val <= 5.0) {
            webview.setZoomFactor(val);
            conf.set('zoom', val);
            updateZoomDisplay();
        }
    };
    document.getElementById('p3x-zoom-out-btn').onclick = () => {
        const cur = webview.getZoomFactor();
        const val = cur - 0.1;
        if (val >= 0.75) {
            webview.setZoomFactor(val);
            conf.set('zoom', val);
            updateZoomDisplay();
        }
    };

    // Apply saved zoom on domReady
    p3x.onenote.wait.domReady().then(() => {
        let zoom = conf.get('zoom');
        if (zoom === undefined) zoom = 1.0;
        if (zoom !== 1.0) webview.setZoomFactor(zoom);
        updateZoomDisplay();
        updateBarNavState();
    });

    // Mark UI ready
    global.p3x.onenote.uiReady = true;

    // Show initial toast
    p3xToast.action(p3x.onenote.lang.slow);

    // Import and set up handlers
    const { default: ipcHandler } = await import('./ipc/handler.mjs');
    ipcHandler({ webview: webview });

    const { default: eventHandler } = await import('./event/handler.mjs');
    eventHandler({ webview: webview });

    ipcRenderer.send('did-finish-load');
});
