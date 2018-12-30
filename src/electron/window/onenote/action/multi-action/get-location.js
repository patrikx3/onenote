let text
module.exports = () => {
    var copy = function (e) {
        e.preventDefault();
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', text);
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', text);
        }
    }
    text = global.p3x.onenote.webview.src
    window.addEventListener('copy', copy);
    document.execCommand('copy');
    window.removeEventListener('copy', copy);
    global.p3x.onenote.toast.action(global.p3x.onenote.lang.label.copyLocationCopied)
}