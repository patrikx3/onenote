import registry from '../../registry.mjs'

const setProxy = () => {
    registry.window.onenote.webContents.send('p3x-onenote-action-set-proxy')
}

export default setProxy;
