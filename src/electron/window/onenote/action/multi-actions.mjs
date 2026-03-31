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
    const allWebviews = global.p3x.onenote.tabManager?.getAllWebviews() || [];
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
    const webview = global.p3x.onenote.webview;

    switch (data.action) {
        case 'focus':
            if (webview !== undefined) {
                webview.focus();
            }
            break;

        case 'restart':
            if (webview) {
                try {
                    const wc = remote.webContents.fromId(webview.getWebContentsId());
                    wc.session.clearStorageData().then(() => {
                        webview.reload();
                    });
                } catch (e) {
                    console.error(e);
                }
            }
            break;

        case 'home':
            if (webview) webview.src = global.p3x.onenote.url.notebooks;
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
                global.p3x.onenote.toast.action({ message: global.p3x.onenote.lang.restart, sticky: true });
                webview.reload();
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
