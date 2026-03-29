const { ipcRenderer, remote } = window.electronShim;

const handler = (options) => {
    const { webview } = options;

    const wc = remote.getCurrentWebContents();

    // Track iframe navigation via parent webContents frame events
    wc.on('did-frame-navigate', (event, url, httpCode, httpText, isMainFrame) => {
        if (isMainFrame) return;
        console.log('changed the url via did-frame-navigate', url);

        webview.onNavigate();
        global.p3x.onenote.data.url = url;
        ipcRenderer.send('p3x-onenote-save', global.p3x.onenote.data);

        p3x.onenote.wait.angular(() => {
            global.p3x.onenote.updateLocation(url);
        });
    });

    wc.on('did-navigate-in-page', (event, url, isMainFrame) => {
        if (isMainFrame) return;
        console.log('changed the url via did-navigate-in-page', url);

        webview.onNavigate();
        global.p3x.onenote.data.url = url;
        ipcRenderer.send('p3x-onenote-save', global.p3x.onenote.data);

        p3x.onenote.wait.angular(() => {
            global.p3x.onenote.updateLocation(url);
        });
    });

    const darkInvertCss = 'img, video, image, svg image, picture, canvas, [style*="background-image"], [role="img"] { filter: invert(1) hue-rotate(180deg) !important; }';
    const darkInvertJs = `(function() {
        var existing = document.getElementById('p3x-dark-invert-css');
        if (existing) existing.remove();
        var style = document.createElement('style');
        style.id = 'p3x-dark-invert-css';
        style.textContent = ${JSON.stringify('img, video, image, svg image, picture, canvas, [style*="background-image"], [role="img"] { filter: invert(1) hue-rotate(180deg) !important; }')};
        (document.head || document.documentElement).appendChild(style);
    })()`;

    // Track iframe frame load for dom-ready and dark mode injection
    let domReadyFired = false;

    wc.on('did-frame-finish-load', (event, isMainFrame) => {
        if (isMainFrame) return;

        if (!domReadyFired) {
            domReadyFired = true;
            webview.iframe.blur();
            webview.iframe.focus();
            p3x.onenote.domReady = true;

            if (process.env.NODE_ENV === 'debug') {
                wc.openDevTools();
            }
        }

        // Inject dark mode CSS into iframe sub-frames
        if (global.p3x.onenote.conf.get('darkThemeInvert') !== true) return;
        try {
            const iframeFrame = global.p3x.onenote.getIframeFrame();
            if (!iframeFrame) return;
            const frames = iframeFrame.framesInSubtree;
            console.log('p3x-dark-invert: did-frame-finish-load, injecting into', frames.length, 'frames');
            for (const frame of frames) {
                try {
                    frame.executeJavaScript(darkInvertJs);
                } catch (e) {
                    console.error('p3x-dark-invert: frame inject error', e.message);
                }
            }
        } catch (e) {
            console.error('p3x-dark-invert: frames iteration error', e.message);
        }
    });
};

export default handler;
