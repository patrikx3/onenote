import registry from '../../registry.mjs'

let text;
const getLocation = () => {
    const copy = function (e) {
        e.preventDefault();
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', text);
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', text);
        }
    };
    text = registry.webview.src;
    window.addEventListener('copy', copy);
    document.execCommand('copy');
    window.removeEventListener('copy', copy);
    registry.toast.action(registry.lang.label.copyLocationCopied);
};

export default getLocation;
