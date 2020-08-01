const {BrowserWindow, app} = require('electron');


function createWindow() {


    global.p3x.onenote.window.onenote = new BrowserWindow({
        icon: global.p3x.onenote.iconFile,
        title: `${global.p3x.onenote.title} v${global.p3x.onenote.pkg.version}`,
        backgroundColor: 'black',
        autoHideMenuBar: true,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            webviewTag: true,
        }
    });

    global.p3x.onenote.setVisible(true);

    global.p3x.onenote.window.onenote.loadURL(`file://${__dirname}/../../../window/onenote/index.html`);

    global.p3x.onenote.window.onenote.on('minimize', function (event) {
        //event.preventDefault()
        //global.p3x.onenote.setVisible(false, true);
    });

    global.p3x.onenote.window.onenote.on('close', function (event) {
        if (!app.isQuiting) {
            if (!global.p3x.onenote.disableHide) {
                event.preventDefault()
                global.p3x.onenote.setVisible(false);
            }
        }
        return false;
    });

    global.p3x.onenote.window.onenote.on('focus', () => {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'focus'
        })
    })


    global.p3x.onenote.window.onenote.on('focus', function () {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-window-state', {
            action: 'focus'
        })
        global.p3x.onenote.mainMenu();
        global.p3x.onenote.mainTray()
    });


    global.p3x.onenote.window.onenote.on('blur', function () {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-window-state', {
            action: 'blur'
        })
        global.p3x.onenote.mainMenu();
        global.p3x.onenote.mainTray()
    });


    global.p3x.onenote.window.onenote.on('hide', function () {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-window-state', {
            action: 'blur'
        })
    });


    //const windowBounds = global.p3x.onenote.conf.get('window-bounds');
    const maximized = global.p3x.onenote.conf.get('maximized');

    if (maximized === true) {
        global.p3x.onenote.window.onenote.maximize()
    }
    /*
    else if (windowBounds !== null && windowBounds !== undefined) {
        global.p3x.onenote.window.onenote.setBounds(windowBounds);
    }

    global.p3x.onenote.window.onenote.on('close', () => {
        if (global.p3x.onenote.conf.get('maximized') !== true) {
            global.p3x.onenote.conf.set('window-bounds', global.p3x.onenote.window.onenote.getBounds())
        }
    })
    */

    global.p3x.onenote.window.onenote.on('maximize', () => {
        global.p3x.onenote.conf.set('maximized', true)
    })


    global.p3x.onenote.window.onenote.on('unmaximize', () => {
        global.p3x.onenote.conf.set('maximized', false)

        /*
        const windowBounds = global.p3x.onenote.conf.get('window-bounds');
        if (windowBounds !== null && windowBounds !== undefined) {
            global.p3x.onenote.window.onenote.setBounds(windowBounds);
        }
        */
    })


    const {autoUpdater} = require("electron-updater");

    autoUpdater.on('checking-for-update', () => {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: global.p3x.onenote.lang.updater["checking-for-update"]
        })
    })
    autoUpdater.on('update-available', (info) => {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: global.p3x.onenote.lang.updater["update-available"]
        })
    })

    let firstCheck = true
    autoUpdater.on('update-not-available', (info) => {

        if (firstCheck) {
            firstCheck = false
            return
        }

        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: global.p3x.onenote.lang.updater["update-not-available"]
        })
    })
    autoUpdater.on('error', (error) => {
        console.error(error)
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            error: error,
            message: global.p3x.onenote.lang.updater["error"]({
                errorMessage: error.message.split('\n')[0]
            })
        })
    })

    /*
    autoUpdater.on('download-progress', (progressObj) => {
        /*
        let log_message = "Download speed: " + progressObj.bytesPerSecond;
        log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
        log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
        */
    /*
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: p3x.onenote.lang.updater["download-progress"]({
                progressObj: progressObj,
            })
        })
    })
    */

    autoUpdater.on('update-downloaded', (info) => {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: p3x.onenote.lang.updater["update-downloaded"],
        })

    });
    autoUpdater.checkForUpdatesAndNotify();
}

module.exports = createWindow;
