const { ipcRenderer } = require('electron');

global.p3x = {
    onenote: {
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

