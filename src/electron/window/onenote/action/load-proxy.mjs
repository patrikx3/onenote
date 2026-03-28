const { remote } = window.electronShim;

const loadProxy = async () => {
    await p3x.onenote.wait.domReady();

    const webview = global.p3x.onenote.webview;
    const session = remote.webContents.fromId(webview.getWebContentsId()).session;
    const proxy = global.p3x.onenote.data.proxy.trim();

    await session.setProxy({
        proxyRules: proxy
    });
    webview.reload();
};

export default loadProxy;
