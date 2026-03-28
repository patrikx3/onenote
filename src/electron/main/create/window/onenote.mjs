import { BrowserWindow, app } from 'electron'
import remoteMain from '@electron/remote/main/index.js'
import path from 'path'
import electronUpdater from 'electron-updater'
const { autoUpdater } = electronUpdater

remoteMain.initialize()

function createWindow() {



    global.p3x.onenote.window.onenote = new BrowserWindow({
        icon: global.p3x.onenote.iconFile,
        title: `${global.p3x.onenote.title} v${global.p3x.onenote.pkg.version}`,
        backgroundColor: 'black',
        autoHideMenuBar: global.p3x.onenote.optionToHideMenu,
        webPreferences: {
            nativeWindowOpen: true,
            worldSafeExecuteJavaScript: true,
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            contextIsolation: false,
            webviewTag: true,
            enableRemoteModule: true,
        }
    });
    const loadUrl = path.join(app.getAppPath(), 'src/electron/window/onenote/index.html');
    console.log('loadUrl', loadUrl)
    global.p3x.onenote.window.onenote.loadURL(`file://${loadUrl}`);

    global.p3x.onenote.window.onenote.webContents.on("did-attach-webview", (_, contents) => {
        contents.setWindowOpenHandler((details) => {
            global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-new-window', details);
            return { action: 'deny' }
        })

        // Override Accept-Language header on all requests to Microsoft domains.
        // This signals the preferred language to OneNote Online / Office 365,
        // which otherwise defaults to the Microsoft account's language setting.
        // Reads translationKey dynamically so mid-session language switches take effect.
        contents.session.webRequest.onBeforeSendHeaders(
            { urls: ['*://*.onenote.com/*', '*://*.live.com/*', '*://*.microsoft.com/*', '*://*.office.com/*', '*://*.sharepoint.com/*', '*://*.office365.com/*', '*://*.microsoftonline.com/*', '*://onenote.cloud.microsoft/*', '*://*.cloud.microsoft/*'] },
            (details, callback) => {
                const langCode = global.p3x.onenote.translationKey;
                const shortLang = langCode.split('-')[0];
                details.requestHeaders['Accept-Language'] = `${langCode},${shortLang};q=0.9,en-US;q=0.8,en;q=0.7`;
                callback({ requestHeaders: details.requestHeaders });
            }
        );
      })

    remoteMain.enable(global.p3x.onenote.window.onenote.webContents)


    if (process.env.NODE_ENV === 'debug') {
        global.p3x.onenote.window.onenote.openDevTools()
    }

    global.p3x.onenote.setVisible(process.argv.includes('--minimized') ? false : true);

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


    if (!process.argv.includes('--minimized')) {
        const windowBounds = global.p3x.onenote.conf.get('window-bounds');
        const maximized = global.p3x.onenote.conf.get('maximized');

        if (maximized === true) {
            global.p3x.onenote.window.onenote.maximize()
        }
        else if (windowBounds !== null && windowBounds !== undefined) {
            global.p3x.onenote.window.onenote.setBounds(windowBounds);
        }

    }


    global.p3x.onenote.window.onenote.on('close', () => {
        if (global.p3x.onenote.conf.get('maximized') !== true) {
            global.p3x.onenote.conf.set('window-bounds', global.p3x.onenote.window.onenote.getBounds())
        }
    })

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


    autoUpdater.on('checking-for-update', (info) => {
        console.log('checking-for-update', info)
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: global.p3x.onenote.lang.updater["checking-for-update"]
        })
    })
    autoUpdater.on('update-available', (info) => {
        console.log('update-available', info)
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: global.p3x.onenote.lang.updater["update-available"]
        })
    })

    let firstCheck = true
    autoUpdater.on('update-not-available', (info) => {
        console.log('update-not-available', info)

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
        console.error('error', error)

        /*
        if (global.p3x.onenote.window.onenote) {
            global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
                action: 'toast',
                error: error,
                message: global.p3x.onenote.lang.updater["error"]({
                    errorMessage: error.message.split('\n')[0]
                })
            })
        }*/
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

export default createWindow;
