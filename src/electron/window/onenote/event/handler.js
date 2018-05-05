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

    webview.addEventListener('did-navigate', function(event, url) {
        global.p3x.onenote.data.url = webview.src;
        ipc.send('p3x-onenote-save', global.p3x.onenote.data);
    });

    webview.addEventListener('new-window', function(event) {
        if (/https?:\/\/(www\.)?onenote\.com/.test(event.url)) {
            webview.src = event.url;
        } else {
            shell.openExternal(event.url);
        }
    });


}

module.exports =handler