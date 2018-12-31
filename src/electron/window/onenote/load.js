const { ipcRenderer } = require('electron');

/*
const fs = require('fs')

fs.readFile(__dirname + '/hack.css', 'utf-8', function(err, data) {
    if (err) {
        ipc.send('p3x-debug', {
            'messsage': 'hack.css is not working',
            error: err,
        });
    }
    p3x.onenote.hackCss = data;
});
*/

global.p3x = {
    onenote: {
        hackCss: undefined,
        ng:undefined,
        webview: undefined,
        pkg: require('../../../../package'),
        lang: require('../../../translation/default'),
        data: {
            url: 'about:blank',
            proxy: '',
        },
        prompt: undefined,
        toast: undefined,
        root: undefined,
    }
}

document.title = `${global.p3x.onenote.lang.title} v${global.p3x.onenote.pkg.version}`;

require('./angular')

window.p3xOneNoteOnLoad = function() {
    const webview = document.getElementById("p3x-onenote-webview");
    global.p3x.onenote.webview = webview;
    webview.focus()

    const ipcHandler = require('./ipc/handler');
    ipcHandler({
        webview: webview,
    })

    const eventHandler = require('./event/handler');
    eventHandler({
        webview: webview,
    })

    ipcRenderer.send('did-finish-load');
}

