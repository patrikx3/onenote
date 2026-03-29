const { remote } = window.electronShim;

const loadProxy = async () => {
    await p3x.onenote.wait.domReady();

    const webview = global.p3x.onenote.webview;
    const wc = remote.getCurrentWebContents();
    const proxy = global.p3x.onenote.data.proxy.trim();

    await wc.session.setProxy({
        proxyRules: proxy
    });
    webview.reload();
};

export default loadProxy;
