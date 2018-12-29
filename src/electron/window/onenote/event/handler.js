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

    setInterval(() => {
        console.log(webview.src, global.p3x.onenote.root.p3x.onenote.location)
        if (global.p3x.onenote.root.p3x.onenote.location !== webview.src) {
            global.p3x.onenote.root.p3x.onenote.location = webview.src
            global.p3x.onenote.data.url = webview.src
            global.p3x.onenote.root.$digest()
            ipc.send('p3x-onenote-save', global.p3x.onenote.data);
        }
    }, 1000)

    webview.addEventListener('did-navigate', function(event, url) {
        global.p3x.onenote.data.url = webview.src;
        ipc.send('p3x-onenote-save', global.p3x.onenote.data);

        global.p3x.onenote.root.p3x.onenote.location = webview.src
        global.p3x.onenote.root.$digest()
    });

    webview.addEventListener('new-window', function(event) {
        //console.log(event.url)
        if (/^https?:\/\/((onedrive\.live\.com\/redir\?resid\=)|((www\.)?onenote\.com))/.test(event.url) ) {
            webview.src = event.url;
        } else {
            shell.openExternal(event.url);
        }
    });


}

module.exports =handler