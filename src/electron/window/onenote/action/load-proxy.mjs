import registry from '../registry.mjs'

const { remote } = window.electronShim;

const loadProxy = async () => {
    await registry.wait.domReady();

    const webview = registry.webview;
    const wc = remote.getCurrentWebContents();
    const proxy = registry.data.proxy.trim();

    await wc.session.setProxy({
        proxyRules: proxy
    });
    webview.reload();
};

export default loadProxy;
