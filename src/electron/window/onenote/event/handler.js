const electron =require('electron');
const shell = electron.shell;
const ipc = electron.ipcRenderer;

const handler = (options) => {
    const { webview } = options;

    /*
     webview.addEventListener('did-stop-loading', function(event) {
 //		webview.insertCSS(window.cssData);
     });
     */
    const allowedUrlRegex = /^((https?:\/\/((onedrive\.live\.com\/((redir\?resid\=)|((redir|edit).aspx\?)))|((www\.)?onenote\.com))|(about\:blank)))/i
    //const disalledUrl = /^((https?:\/\/))/i

    let windowInterval

    const generateInterval = () => {
        windowInterval = setInterval(() => {
            //console.log(webview.src, global.p3x.onenote.root.p3x.onenote.location)

            if (!allowedUrlRegex.test(webview.src) && (webview.src.startsWith('https://onedrive.live.com') || webview.src.startsWith('http://onedrive.live.com'))) {
                p3x.onenote.ui.overlay.show({
                    message: p3x.onenote.lang.label.disallowedContent
                })
            } else {
                p3x.onenote.ui.overlay.hide()
            }


            if (global.p3x.onenote.root.p3x.onenote.location !== webview.src) {
                global.p3x.onenote.root.p3x.onenote.location = webview.src
                global.p3x.onenote.data.url = webview.src
                global.p3x.onenote.root.$digest()
                ipc.send('p3x-onenote-save', global.p3x.onenote.data);
            }
        }, 1500)
    }

    generateInterval()

    ipc.on('p3x-onenote-window-state', function(event, data) {
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

    webview.addEventListener('did-navigate', function(event, url) {
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

    webview.addEventListener('new-window', function(event) {
        /*
        ipc.send('p3x-debug', {
            'new-window': event,
            allowed: allowedUrlRegex.test(event.url)
        })
        */
        event.preventDefault()
        //console.log(event.url)
        if (allowedUrlRegex.test(event.url) ) {
            webview.src = event.url;
        } else {
            shell.openExternal(event.url);
        }
    });


}

module.exports =handler