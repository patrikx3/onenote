import { BrowserWindow, app } from 'electron'
import remoteMain from '@electron/remote/main/index.js'
import path from 'path'
import electronUpdater from 'electron-updater'
const { autoUpdater } = electronUpdater

remoteMain.initialize()

function createWindow() {

    const win = new BrowserWindow({
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

    global.p3x.onenote.window.onenote = win;

    win.webContents.on("did-attach-webview", (_, contents) => {
        contents.setWindowOpenHandler((details) => {
            win.webContents.send('p3x-onenote-new-window', details);
            return { action: 'deny' }
        })

        // Override Accept-Language header on all requests to Microsoft domains
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

    const loadUrl = path.join(app.getAppPath(), 'src/electron/window/onenote/index.html');
    console.log('loadUrl', loadUrl)
    win.loadURL(`file://${loadUrl}`);

    remoteMain.enable(win.webContents)

    if (process.env.NODE_ENV === 'debug') {
        win.openDevTools()
    }

    global.p3x.onenote.setVisible(process.argv.includes('--minimized') ? false : true);

    win.on('minimize', function (event) {
        //event.preventDefault()
        //global.p3x.onenote.setVisible(false, true);
    });

    win.on('close', function (event) {
        if (!app.isQuiting) {
            if (!global.p3x.onenote.disableHide) {
                event.preventDefault()
                global.p3x.onenote.setVisible(false);
            }
        }
        return false;
    });

    win.on('focus', () => {
        win.webContents.send('p3x-onenote-action', {
            action: 'focus'
        })
    })

    win.on('focus', function () {
        win.webContents.send('p3x-onenote-window-state', {
            action: 'focus'
        })
        global.p3x.onenote.mainMenu();
        global.p3x.onenote.mainTray()
    });

    win.on('blur', function () {
        win.webContents.send('p3x-onenote-window-state', {
            action: 'blur'
        })
        global.p3x.onenote.mainMenu();
        global.p3x.onenote.mainTray()
    });

    win.on('hide', function () {
        win.webContents.send('p3x-onenote-window-state', {
            action: 'blur'
        })
    });

    if (!process.argv.includes('--minimized')) {
        const windowBounds = global.p3x.onenote.conf.get('window-bounds');
        const maximized = global.p3x.onenote.conf.get('maximized');

        if (maximized === true) {
            win.maximize()
        }
        else if (windowBounds !== null && windowBounds !== undefined) {
            win.setBounds(windowBounds);
        }
    }

    win.on('close', () => {
        if (global.p3x.onenote.conf.get('maximized') !== true) {
            global.p3x.onenote.conf.set('window-bounds', win.getBounds())
        }
    })

    win.on('maximize', () => {
        global.p3x.onenote.conf.set('maximized', true)
    })

    win.on('unmaximize', () => {
        global.p3x.onenote.conf.set('maximized', false)
    })

    autoUpdater.on('checking-for-update', (info) => {
        console.log('checking-for-update', info)
        win.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: global.p3x.onenote.lang.updater["checking-for-update"]
        })
    })
    autoUpdater.on('update-available', (info) => {
        console.log('update-available', info)
        win.webContents.send('p3x-onenote-action', {
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

        win.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: global.p3x.onenote.lang.updater["update-not-available"]
        })
    })
    autoUpdater.on('error', (error) => {
        console.error('error', error)
    })

    autoUpdater.on('update-downloaded', (info) => {
        win.webContents.send('p3x-onenote-action', {
            action: 'toast',
            message: p3x.onenote.lang.updater["update-downloaded"],
        })

    });
    autoUpdater.checkForUpdatesAndNotify();

}

export default createWindow;
