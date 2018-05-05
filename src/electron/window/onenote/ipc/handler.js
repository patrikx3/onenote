const { ipcRenderer } =require('electron');

const setProxy = require('../action/set-proxy');
const multiActions = require('../action/multi-actions');

const handler = (options) => {
    const { webview } = options;

    ipcRenderer.on('p3x-onenote-onload-user', function(event, data) {
        if (data !== null) {
            global.p3x.onenote.data = data;
        }

        //console.log('p3x-onenote-onload-user', data)

        if (typeof(global.p3x.onenote.data) === 'object' && global.p3x.onenote.data.hasOwnProperty('url') && global.p3x.onenote.data.url !== 'about:blank') {
            webview.src = global.p3x.onenote.data.url;
        } else {
            webview.src = 'https://www.onenote.com/notebooks'
        }
        if (global.p3x.onenote.data.proxy.trim() !== '') {
            require('../action/load-proxy')();
        }
    })

    ipcRenderer.on('p3x-onenote-action', function(event, data) {
        multiActions(data);
    })

    ipcRenderer.on('p3x-onenote-action-set-proxy', (event, data) => {
        setProxy(data);
    })

}

module.exports = handler