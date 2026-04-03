import registry from '../registry.mjs'

const { ipcRenderer } = window.electronShim;

export default async (data) => {
    let valueProxy = '';
    let cancelled = false;
    try {
        valueProxy = await registry.prompt.setProxy();
        valueProxy = valueProxy === undefined ? '' : valueProxy.trim();
    } catch (e) {
        if (e !== undefined) {
            console.error(e);
        } else {
            cancelled = true;
        }
    } finally {
        if (!cancelled) {
            registry.data.proxy = valueProxy;

            if (valueProxy === '') {
                registry.toast.setProxy.clear();
            } else {
                registry.toast.setProxy.set(valueProxy);
            }

            ipcRenderer.send('p3x-onenote-save', registry.data);
            const { default: loadProxy } = await import('./load-proxy.mjs');
            loadProxy();
        }
    }
};
