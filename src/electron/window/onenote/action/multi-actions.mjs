import registry from '../registry.mjs'

const { remote } = window.electronShim;

const p3xDarkInvertCss = 'img, video, image, svg image, picture, canvas, [style*="background-image"], [role="img"] { filter: invert(1) hue-rotate(180deg) !important; }';

const p3xDarkInvertJs = `
(function(enabled) {
    var existing = document.getElementById('p3x-dark-invert-css');
    if (existing) existing.remove();
    if (enabled) {
        var style = document.createElement('style');
        style.id = 'p3x-dark-invert-css';
        style.textContent = ${JSON.stringify('img, video, image, svg image, picture, canvas, [style*="background-image"], [role="img"] { filter: invert(1) hue-rotate(180deg) !important; }')};
        (document.head || document.documentElement).appendChild(style);
    }
})`;

function p3xInjectDarkInvertAllFrames(enabled) {
    // Inject into ALL tab webviews, not just the active one
    const allWebviews = registry.tabManager?.getAllWebviews() || [];
    for (const webview of allWebviews) {
        try {
            const wc = remote.webContents.fromId(webview.getWebContentsId());
            const frames = wc.mainFrame.framesInSubtree;
            for (const frame of frames) {
                try {
                    frame.executeJavaScript(`(${p3xDarkInvertJs})(${enabled})`);
                } catch (e) {}
            }
        } catch (e) {}
    }
}

const multiActions = (data) => {
    const webview = registry.webview;

    switch (data.action) {
        case 'focus':
            if (webview !== undefined) {
                webview.focus();
            }
            break;

        case 'restart':
            // Legacy: clear current tab everything
            if (webview) {
                try {
                    const wc = remote.webContents.fromId(webview.getWebContentsId());
                    wc.session.clearStorageData().then(() => {
                        const tab = registry.tabManager?.getActiveTab();
                        const url = (tab && tab.url && !tab.url.startsWith('about:'))
                            ? tab.url
                            : 'https://www.onenote.com/notebooks';
                        webview.src = url;
                    });
                } catch (e) {
                    console.error(e);
                }
            }
            break;

        case 'session-clear':
            {
                const tabManager = registry.tabManager;
                if (!tabManager) break;

                const mode = data.mode || 'current-everything';
                const [scope, type] = mode.split('-');
                const webviews = scope === 'all' ? tabManager.getAllWebviews() : (webview ? [webview] : []);

                const storagesMap = {
                    everything: undefined, // undefined = clear all
                    cookies: ['cookies'],
                    cache: ['cacheStorage'],
                };
                const storages = storagesMap[type];
                const clearOpts = storages ? { storages } : {};

                let cleared = 0;
                const total = webviews.length;

                const onDone = () => {
                    cleared++;
                    if (cleared === total) {
                        // Navigate affected webviews to their saved URL
                        const allTabs = registry.tabManager?.tabs || [];
                        for (const wv of webviews) {
                            try {
                                const tab = allTabs.find(t => t.webview === wv);
                                const url = (tab && tab.url && !tab.url.startsWith('about:'))
                                    ? tab.url
                                    : 'https://www.onenote.com/notebooks';
                                wv.src = url;
                            } catch (e) {}
                        }
                        const lang = registry.lang;
                        const msg = lang.label.clearCache?.done
                            ? lang.label.clearCache.done(scope === 'all' ? (lang.label.clearCache?.allLabel || 'all tabs') : (lang.label.clearCache?.currentLabel || 'current tab'), type)
                            : `Cleared ${type} for ${scope === 'all' ? 'all tabs' : 'current tab'}.`;
                        registry.toast.action(msg);
                    }
                };

                for (const wv of webviews) {
                    try {
                        const wc = remote.webContents.fromId(wv.getWebContentsId());
                        wc.session.clearStorageData(clearOpts).then(onDone).catch(() => onDone());
                    } catch (e) {
                        onDone();
                    }
                }
            }
            break;

        case 'home':
            if (webview) webview.src = registry.url.notebooks;
            break;

        case 'corporate':
            if (webview) webview.src = 'https://www.onenote.com/notebooks?auth=2';
            break;

        case 'get-location':
            import('./multi-action/get-location.mjs').then(m => m.default());
            break;

        case 'toast':
            import('./multi-action/toast.mjs').then(m => m.default(data));
            break;

        case 'reload-webview':
            if (webview !== undefined) {
                console.log('[P3X-OneNote] Reloading webview after resume');
                registry.toast.action({ message: registry.lang.restart, sticky: true });
                webview.reload();
            }
            break;

        case 'bookmark-manager':
            if (registry.prompt) {
                registry.prompt.bookmarkManager();
            }
            break;

        case 'restore-closed-tab':
            if (registry.tabManager) {
                registry.tabManager.restoreClosedTab();
            }
            break;

        case 'dark-theme-invert':
            document.body.classList.remove('p3x-dark-mode-invert-quirks');
            if (data.darkThemeInvert === true) {
                document.body.classList.add('p3x-dark-mode-invert-quirks');
            }
            p3xInjectDarkInvertAllFrames(data.darkThemeInvert === true);
            break;
    }
};

export default multiActions;
