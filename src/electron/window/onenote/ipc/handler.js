const {shell, ipcRenderer} = require('electron');

const setProxy = require('../action/set-proxy');
const multiActions = require('../action/multi-actions');

const handler = (options) => {
    const {webview} = options;

    ipcRenderer.on('p3x-onenote-onload-user', function (event, data) {
        if (data !== null && data !== undefined) {
            global.p3x.onenote.data = data;
        }

        //console.log('p3x-onenote-onload-user', data)


        if (typeof (global.p3x.onenote.data) === 'object' && global.p3x.onenote.data.hasOwnProperty('url') && !global.p3x.onenote.data.url.startsWith('about:blank')) {
            webview.src = global.p3x.onenote.data.url;
        } else {
            webview.src = 'https://www.onenote.com/notebooks'
        }
        if (global.p3x.onenote.data.proxy.trim() !== '') {
            require('../action/load-proxy')();
        }
    })

    ipcRenderer.on('p3x-onenote-action', function (event, data) {
        multiActions(data);
    })

    ipcRenderer.on('p3x-onenote-action-set-proxy', (event, data) => {
        setProxy(data);
    })

    ipcRenderer.on('p3x-onenote-language', async (event, data) => {
        global.p3x.onenote.lang = global.p3x.onenote.translations[data.translation]
        global.p3x.onenote.toast.action(global.p3x.onenote.lang.menu.language.alert)

        global.p3x.onenote.root.p3x.onenote.lang = global.p3x.onenote.lang

        let type = '';
        let cancelled = false;
        try {
            type = await global.p3x.onenote.prompt.configureLanguge(data);
            type = type === undefined ? '' : type.trim();
        } catch (e) {
            if (e !== undefined) {
                console.error(e);
            } else {
                cancelled = true;
            }
        } finally {
            if (!cancelled) {
                if (type === 'corporate') {
                    global.p3x.onenote.webview.src = 'https://www.onenote.com/notebooks?auth=2&omkt=' + data.translation
                } else {
                    global.p3x.onenote.webview.src = 'https://www.onenote.com/notebooks?omkt=' + data.translation
                }
            }
        }

    })

    ipcRenderer.on('p3x-onenote-action-open-url', async (event, data) => {
        let url = '';
        let cancelled = false;
        try {
            url = await global.p3x.onenote.prompt.goToUrl();
            url = url === undefined ? '' : url.trim();
            if (!url.startsWith('http')) {
                url = 'https://' + url
            }
        } catch (e) {
            if (e !== undefined) {
                console.error(e);
            } else {
                cancelled = true;
            }
        } finally {
            if (!cancelled) {
                global.p3x.onenote.webview.src = url
            }
        }
    })

    ipcRenderer.on('p3x-onenote-action-bookmark-open', (event, data) => {
        global.p3x.onenote.webview.src = data.url
    })

    ipcRenderer.on('p3x-onenote-action-bookmark-add', async (event, data) => {
        try {
            const result = await global.p3x.onenote.prompt.bookmarks(data);
            ipcRenderer.send('p3x-onenote-action-bookmark-result', result);

        } catch (e) {
            if (e !== undefined) {
                alert(e.message)
                console.error(e);
            }
        }
    })


    ipcRenderer.on('p3x-onenote-new-window', (event, data) => {
        const url = data.url
        if (url.trim().startsWith('about:blank')) {
            //webview.src = event.url;
            return
        }
        if (global.p3x.onenote.conf.get('option-to-disable-internal-external-popup') === true) {
            webview.src = url
        } else {
            global.p3x.onenote.prompt.redirect({url: url}).then((answer) => {
                if (answer === 'internal') {
                    webview.src = url;
                } else {
                    shell.openExternal(url)
                }
            })
        }
    })

}

 module.exports = handler
