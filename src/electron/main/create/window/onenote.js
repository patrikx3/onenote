const { BrowserWindow, app } = require('electron');

function createWindow() {

    global.p3x.onenote.window.onenote = new BrowserWindow({
        icon: global.p3x.onenote.iconFile,
        toolbar: false,
        title: global.p3x.onenote.title,
    });

    global.p3x.onenote.setVisible(true);

    global.p3x.onenote.window.onenote.loadURL(`file://${__dirname}/../../../window/onenote/index.html`);

    global.p3x.onenote.window.onenote.on('minimize', function (event) {
        event.preventDefault()
        global.p3x.onenote.setVisible(false, true);
    });

    global.p3x.onenote.window.onenote.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault()
            global.p3x.onenote.setVisible(false);
        }
        return false;
    });

    global.p3x.onenote.window.onenote.on('focus', () => {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'focus'
        })
    })


    const windowBounds = global.p3x.onenote.conf.get('window-bounds');
    if (windowBounds !== null && windowBounds !== undefined) {
        global.p3x.onenote.window.onenote.setBounds(windowBounds);
    }

}

module.exports = createWindow;