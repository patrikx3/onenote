import { BrowserWindow, app, screen } from 'electron'
import remoteMain from '@electron/remote/main/index.js'
import path from 'path'
import electronUpdater from 'electron-updater'
import registry from '../../../registry.mjs'
import notify from '../../notify.mjs'
const { autoUpdater } = electronUpdater

remoteMain.initialize()

function createWindow() {

    const win = new BrowserWindow({
        icon: registry.iconFile,
        title: `${registry.title} v${registry.pkg.version}`,
        backgroundColor: 'black',
        autoHideMenuBar: registry.optionToHideMenu,
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

    registry.window.onenote = win;

    win.webContents.on("did-attach-webview", (_, contents) => {
        contents.setWindowOpenHandler((details) => {
            win.webContents.send('p3x-onenote-new-window', details);
            return { action: 'deny' }
        })

        // Override Accept-Language header on all requests to Microsoft domains
        contents.session.webRequest.onBeforeSendHeaders(
            { urls: ['*://*.onenote.com/*', '*://*.live.com/*', '*://*.microsoft.com/*', '*://*.office.com/*', '*://*.sharepoint.com/*', '*://*.office365.com/*', '*://*.microsoftonline.com/*', '*://onenote.cloud.microsoft/*', '*://*.cloud.microsoft/*'] },
            (details, callback) => {
                const langCode = registry.translationKey;
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

    registry.setVisible(process.argv.includes('--minimized') ? false : true);

    win.on('minimize', function (event) {
        //event.preventDefault()
        //registry.setVisible(false, true);
    });

    win.on('close', function (event) {
        if (!app.isQuiting) {
            if (!registry.disableHide) {
                event.preventDefault()
                registry.setVisible(false);
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
        registry.mainMenu();
        registry.mainTray()
    });

    win.on('blur', function () {
        win.webContents.send('p3x-onenote-window-state', {
            action: 'blur'
        })
        registry.mainMenu();
        registry.mainTray()
    });

    win.on('hide', function () {
        win.webContents.send('p3x-onenote-window-state', {
            action: 'blur'
        })
    });

    if (!process.argv.includes('--minimized')) {
        const windowBounds = registry.conf.get('window-bounds');
        const maximized = registry.conf.get('maximized');

        if (maximized === true) {
            win.maximize()
        }
        else if (windowBounds !== null && windowBounds !== undefined) {
            // Validate bounds are within any available display
            const displays = screen.getAllDisplays();
            const isVisible = displays.some(display => {
                const db = display.bounds;
                return windowBounds.x < db.x + db.width &&
                       windowBounds.x + windowBounds.width > db.x &&
                       windowBounds.y < db.y + db.height &&
                       windowBounds.y + windowBounds.height > db.y;
            });
            if (isVisible) {
                win.setBounds(windowBounds);
            } else {
                win.center();
            }
        }
    }

    win.on('close', () => {
        if (registry.conf.get('maximized') !== true) {
            registry.conf.set('window-bounds', win.getBounds())
        }
    })

    win.on('maximize', () => {
        registry.conf.set('maximized', true)
    })

    win.on('unmaximize', () => {
        registry.conf.set('maximized', false)
    })

    let firstCheck = true
    autoUpdater.on('checking-for-update', (info) => {
        console.log('checking-for-update', info)
        if (!firstCheck) {
            notify(registry.lang.updater["checking-for-update"])
        }
    })
    autoUpdater.on('update-available', (info) => {
        console.log('update-available', info)
        notify(registry.lang.updater["update-available"])
    })

    autoUpdater.on('update-not-available', (info) => {
        console.log('update-not-available', info)

        if (firstCheck) {
            firstCheck = false
            return
        }

        notify(registry.lang.updater["update-not-available"])
    })
    autoUpdater.on('error', (error) => {
        console.error('error', error)
    })

    autoUpdater.on('update-downloaded', (info) => {
        notify(registry.lang.updater["update-downloaded"])
    });
    autoUpdater.checkForUpdatesAndNotify();

}

export default createWindow;
