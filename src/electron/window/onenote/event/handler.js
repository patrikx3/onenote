const electron = require('electron');
const shell = electron.shell;
const ipc = electron.ipcRenderer;

const handler = (options) => {
    const {webview} = options;

    /*
     webview.addEventListener('did-stop-loading', function(event) {
 //		webview.insertCSS(window.cssData);
     });
     */
    //   const allowedUrlRegex = /^((https?:\/\/((onedrive\.live\.com\/((redir\?resid\=)|((redir|edit).aspx\?)))|((www\.)?onenote\.com)|(login\.)|(g\.live\.))|(about\:blank)))/i
    //   const allowedUrlRegex2 = /^https?:\/\/d\.docs\.live\.net\/([a-z0-9]{16})\//i

    //const disalledUrl = /^((https?:\/\/))/i

    let windowInterval

    const generateInterval = () => {
        windowInterval = setInterval(() => {
            //console.log(webview.src, global.p3x.onenote.root.p3x.onenote.location)

            /*
            ipc.send('p3x-debug', {
                'new-window': webview.src,
                allowed: allowedUrlRegex.test(webview.src)
            })
            */

            /*
            if (!allowedUrlRegex.test(webview.src)) {
                p3x.onenote.ui.overlay.show({
                    message: p3x.onenote.lang.label.disallowedContent
                })
            } else {
                p3x.onenote.ui.overlay.hide()
            }
            */

            if (global.p3x.onenote.root.p3x.onenote.location !== webview.src) {
                global.p3x.onenote.root.p3x.onenote.location = webview.src
                global.p3x.onenote.data.url = webview.src
                global.p3x.onenote.root.$digest()
                ipc.send('p3x-onenote-save', global.p3x.onenote.data);
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

    webview.addEventListener('did-navigate', function (event, url) {
        /*
        ipc.send('p3x-debug', {
            'did-navigate': event,
            url: url,
        });
        */

        global.p3x.onenote.data.url = webview.src;
        ipc.send('p3x-onenote-save', global.p3x.onenote.data);

        global.p3x.onenote.root.p3x.onenote.location = webview.src
        global.p3x.onenote.root.$digest()
    });

    webview.addEventListener("dom-ready", event => {
        //TODO Remove this once https://github.com/electron/electron/issues/14474 is fixed
        webview.blur();
        webview.focus();


        if (process.env.NODE_ENV === 'debug') {
            webview.openDevTools()
        }

    });

    webview.addEventListener('new-window', function (event) {

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

        //;

        /*
        ipc.send('p3x-debug', {
            'new-window': event.url,
            allowed: allowedUrlRegex.test(event.url)
        })
        */

        //console.log(event.url)
        /*
        if (allowedUrlRegex2.test(event.url)) {
            // https://onedrive.live.com/redir?resid=3B992A1F2BEDFFA7%21955&page=Edit
            const urlParts = event.url.match(allowedUrlRegex2)
            /*
            ipc.send('p3x-debug', {
                urlParts: urlParts
            })
            */
        /*
            p3x.onenote.toast.action(p3x.onenote.lang.redirecting)
            webview.src = `https://onedrive.live.com/redir?resid=${urlParts[1]}%21955&page=Edit`;
        } else
        */
        /*
        if (allowedUrlRegex.test(event.url) || allowedUrlRegex2.test(event.url)) {
            p3x.onenote.toast.action(p3x.onenote.lang.redirecting)
            webview.src = event.url;
        } else {
            shell.openExternal(event.url);
        }
        */
    });


}

module.exports = handler
