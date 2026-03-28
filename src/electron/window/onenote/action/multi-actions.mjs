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

function p3xInjectDarkInvertAllFrames(webview, enabled) {
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

const multiActions = (data) => {
    const webview = global.p3x.onenote.webview;

    switch (data.action) {
        case 'focus':
            if (webview !== undefined) {
                webview.focus();
            }
            break;

        case 'restart':
            const session = remote.webContents.fromId(webview.getWebContentsId()).session;
            session.clearStorageData().then(() => {
                webview.reload();
            });
            break;

        case 'home':
            webview.src = global.p3x.onenote.url.notebooks;
            break;

        case 'corporate':
            webview.src = 'https://www.onenote.com/notebooks?auth=2';
            break;

        case 'get-location':
            import('./multi-action/get-location.mjs').then(m => m.default());
            break;

        case 'toast':
            import('./multi-action/toast.mjs').then(m => m.default(data));
            break;

        case 'dark-theme-invert':
            document.body.classList.remove('p3x-dark-mode-invert-quirks');
            if (data.darkThemeInvert === true) {
                document.body.classList.add('p3x-dark-mode-invert-quirks');
            }
            if (webview !== undefined) {
                p3xInjectDarkInvertAllFrames(webview, data.darkThemeInvert === true);
            }
            break;
    }
};

export default multiActions;
