const { ipcRenderer, remote } = window.electronShim;

const handler = (options) => {
    const { webview } = options;

    for (let eventName of ['did-navigate', 'did-navigate-in-page']) {
        webview.addEventListener(eventName, function (event, url) {
            console.log(`changed the url via ${eventName}`, webview.src);

            global.p3x.onenote.data.url = webview.getURL();
            ipcRenderer.send('p3x-onenote-save', global.p3x.onenote.data);

            p3x.onenote.wait.angular(() => {
                global.p3x.onenote.updateLocation(webview.src);
            });
        });
    }

    const darkInvertCss = 'img, video, image, svg image, picture, canvas, [style*="background-image"], [role="img"] { filter: invert(1) hue-rotate(180deg) !important; }';
    const darkInvertJs = `(function() {
        var existing = document.getElementById('p3x-dark-invert-css');
        if (existing) existing.remove();
        var style = document.createElement('style');
        style.id = 'p3x-dark-invert-css';
        style.textContent = ${JSON.stringify(darkInvertCss)};
        (document.head || document.documentElement).appendChild(style);
    })()`;

    let darkInvertWcSetup = false;

    webview.addEventListener('dom-ready', event => {
        webview.blur();
        webview.focus();

        p3x.onenote.domReady = true;

        if (process.env.NODE_ENV === 'debug') {
            webview.openDevTools();
        }

        if (!darkInvertWcSetup) {
            darkInvertWcSetup = true;
            try {
                const wc = remote.webContents.fromId(webview.getWebContentsId());
                console.log('p3x-dark-invert: webContents setup, frames:', wc.mainFrame.framesInSubtree.length);
                wc.on('did-frame-finish-load', () => {
                    if (global.p3x.onenote.conf.get('darkThemeInvert') !== true) return;
                    try {
                        const frames = wc.mainFrame.framesInSubtree;
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
            } catch (e) {
                console.error('p3x-dark-invert: webContents setup error', e.message);
            }
        }
    });
};

export default handler;
