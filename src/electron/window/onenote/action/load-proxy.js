const loadProxy = () => {
    //console.log('load proxy');
    const webview = global.p3x.onenote.webview;
    const session = webview.getWebContents().session;
    const proxy = global.p3x.onenote.data.proxy.trim();

    session.setProxy({
        proxyRules: proxy
    }, () => {
        webview.reload();
    })
}

module.exports = loadProxy;