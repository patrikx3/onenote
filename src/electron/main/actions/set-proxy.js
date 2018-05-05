const setProxy = () => {
    global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action-set-proxy')
}

module.exports = setProxy;