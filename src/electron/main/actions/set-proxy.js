let mainWindow;
const eventName = 'p3x-onenote-response-set-proxy';

const setProxy = () => {
    if (mainWindow === undefined) {
        mainWindow = global.p3x.onenote.mainWindow;
    }

    const currentValue = global.p3x.onenote.conf.get('proxy')
    mainWindow.webContents.send('p3x-onenote-action-set-proxy', {
        responseEvent: eventName,
        proxy: typeof(currentValue) === 'string' ? currentValue : '',
    })
}

module.exports = setProxy;