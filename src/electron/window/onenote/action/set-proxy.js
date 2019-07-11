const {ipcRenderer} = require('electron');

module.exports = async (data) => {

    let valueProxy = '';
    let cancelled = false;
    try {
        valueProxy = await global.p3x.onenote.prompt.setProxy();
        valueProxy = valueProxy === undefined ? '' : valueProxy.trim();
    } catch (e) {
        if (e !== undefined) {
            console.error(e);
        } else {
            cancelled = true;
        }
    } finally {
        if (!cancelled) {
            global.p3x.onenote.data.proxy = valueProxy;

            if (valueProxy === '') {
                global.p3x.onenote.toast.setProxy.clear()
            } else {
                global.p3x.onenote.toast.setProxy.set(valueProxy)
            }

            //console.log('set-proxy', global.p3x.onenote.data.proxy)
            ipcRenderer.send('p3x-onenote-save', global.p3x.onenote.data);
            require('./load-proxy')()
        }
    }

}
