const { remote } = require('electron')

const loadProxy = async () => {
    //console.log('load proxy');
    await new Promise(resolve => {
        let timeout
        const exec = () => {
            if (p3x.onenote.domReady !== true) {
                clearTimeout(timeout)
                timeout = setTimeout(exec, 250)
            } else {
                resolve()
            }
        }
        exec()
    })

    const webview = global.p3x.onenote.webview;

//    const session = webview.getWebContents().session;
    const session = remote.webContents.fromId(webview.getWebContentsId()).session
    const proxy = global.p3x.onenote.data.proxy.trim();

    await session.setProxy({
        proxyRules: proxy
    })
    webview.reload();
}

module.exports = loadProxy;
