let mainWindow;
const setProxy = () => {
    if (mainWindow === undefined) {
        mainWindow = global.p3x.onenote.mainWindow;
    }

    mainWindow.webContents.send('p3x-onenote-action-set-proxy')
}

module.exports = setProxy;