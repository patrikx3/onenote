const electron = require('electron');
const shell = electron.shell;
const ipc = electron.ipcRenderer;
const remote = require('@electron/remote');

const handler = (options) => {
    const {webview} = options;

    require('../angular')

    /*
     webview.addEventListener('did-stop-loading', function(event) {
 //		webview.insertCSS(window.cssData);
     });
     */
    //   const allowedUrlRegex = /^((https?:\/\/((onedrive\.live\.com\/((redir\?resid\=)|((redir|edit).aspx\?)))|((www\.)?onenote\.com)|(login\.)|(g\.live\.))|(about\:blank)))/i
    //   const allowedUrlRegex2 = /^https?:\/\/d\.docs\.live\.net\/([a-z0-9]{16})\//i

    //const disalledUrl = /^((https?:\/\/))/i

    /*
    let windowInterval
    const generateInterval = () => {
        windowInterval = setInterval(() => {
            if (global.p3x.onenote.root && global.p3x.onenote.root.p3x.onenote.location !== webview.src) {
                console.log('changed the url via interval', webview.src)
                p3x.onenote.wait.angular(() => {
                        global.p3x.onenote.root.p3x.onenote.location = webview.src
                        global.p3x.onenote.data.url = webview.src
                        global.p3x.onenote.root.$digest()
                        ipc.send('p3x-onenote-save', global.p3x.onenote.data);
                })
            }

        }, p3x.onenote.wrongUrlTimeout)
    }

    generateInterval()

    ipc.on('p3x-onenote-window-state', function (event, data) {
        clearInterval(windowInterval)
        if (data.action === 'focus') {
            generateInterval()
        }
    })
    */

    /*
    webview.addEventListener('did-stop-loading', function(event) {
       // webview.insertCSS(p3x.onenote.hackCss);
    });

    webview.addEventListener('will-navigate', function(event, url) {
        ipc.send('p3x-debug', {
            'will-navigate': event,
            url: url,
        });
    });

    webview.addEventListener('will-redirect', function(event, url) {
        ipc.send('p3x-debug', {
            'will-redirect': event,
            url: url,
        });
    });
    */

    for(let eventName of ['did-navigate', 'did-navigate-in-page']) {
        webview.addEventListener(eventName, function (event, url) {
            /*
            ipc.send('p3x-debug', {
                'did-navigate': event,
                url: url,
            });
            */
            console.log(`changed the url via ${eventName}`, webview.src)

            //global.p3x.onenote.data.url = webview.src;
            global.p3x.onenote.data.url = webview.getURL()
            ipc.send('p3x-onenote-save', global.p3x.onenote.data);

            p3x.onenote.wait.angular(() => {
                global.p3x.onenote.root.p3x.onenote.location = webview.src
                global.p3x.onenote.root.$digest()
            })

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
        //TODO Remove this once https://github.com/electron/electron/issues/14474 is fixed
        webview.blur();
        webview.focus();

        p3x.onenote.domReady = true

        if (process.env.NODE_ENV === 'debug') {
            webview.openDevTools()
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
                            } catch(e) {
                                console.error('p3x-dark-invert: frame inject error', e.message);
                            }
                        }
                    } catch(e) {
                        console.error('p3x-dark-invert: frames iteration error', e.message);
                    }
                });
            } catch(e) {
                console.error('p3x-dark-invert: webContents setup error', e.message);
            }
        }
    });

    /*
    webview.addEventListener('new-window', function (event) {

        console.log('new-window', event.url)

        event.preventDefault()
        //p3x.onenote.toast.action(p3x.onenote.lang.label.unknownLink)

        if (event.url.trim().startsWith('about:blank')) {
            //webview.src = event.url;
            return
        }
        if (global.p3x.onenote.conf.get('option-to-disable-internal-external-popup') === true) {
            webview.src = event.url
        } else {
            global.p3x.onenote.prompt.redirect({url: event.url}).then((answer) => {
                if (answer === 'internal') {
                    webview.src = event.url;
                } else {
                    shell.openExternal(event.url)
                }
            })
        }
    });
    */

    /*
    for(let event of [
        'did-finish-load',
        'did-frame-finish-load',
        'did-start-loading',
        'page-title-updated',
        'will-navigate',
        'did-start-navigation',
        'did-redirect-navigation',
        'did-navigate',
        'did-frame-navigate',
        'did-navigate-in-page',
        'update-target-url',
    ]) {
        webview.addEventListener(event, function(eventData) {
            if (eventData.url) {
                console.log(event, event.url)
            }
        })
    }
    */

}

module.exports = handler
