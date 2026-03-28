const setProxy = () => {
    global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action-set-proxy')
}

export default setProxy;
