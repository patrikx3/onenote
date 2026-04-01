import { app, powerMonitor, net, nativeTheme } from 'electron';

let isInSuspended = false;

function waitForNetworkConnectivity(callback, retries = 60, interval = 1000) {
    let attempts = 0;

    function checkNetwork() {
        const request = net.request('https://www.bing.com');
        request.on('response', () => {
            console.log('Network is available');
            callback();
        });
        request.on('error', () => {
            if (attempts < retries) {
                attempts++;
                console.log(`Waiting for network (${attempts}/${retries})...`);
                setTimeout(checkNetwork, interval);
            } else {
                console.error('Network unavailable after retries.');
                callback();
            }
        });
        request.end();
    }

    checkNetwork();
}

app.on('ready', () => {
    console.log('P3X-OneNote is ready');

    // Create the main window
    global.p3x.onenote.createWindow.onenote();

    // Follow system dark/light theme when mode is 'system'
    nativeTheme.on('updated', () => {
        if (global.p3x.onenote.darkThemeMode !== 'system') return;
        const shouldDark = nativeTheme.shouldUseDarkColors;
        if (global.p3x.onenote.darkThemeInvert === shouldDark) return;
        global.p3x.onenote.darkThemeInvert = shouldDark;
        global.p3x.onenote.conf.set('darkThemeInvert', shouldDark);
        const win = global.p3x.onenote.window.onenote;
        if (win) {
            win.webContents.send('p3x-onenote-action', {
                action: 'dark-theme-invert',
                darkThemeInvert: shouldDark,
            });
        }
        global.p3x.onenote.mainMenu();
        global.p3x.onenote.mainTray();
    });

    // Handle power events — fix sync loss after standby (#204)
    powerMonitor.on('suspend', () => {
        if (isInSuspended) {
            return;
        }
        isInSuspended = true;
        console.log('[P3X-OneNote] System is suspending...');
    });

    powerMonitor.on('resume', () => {
        if (!isInSuspended) {
            return;
        }
        isInSuspended = false;
        console.log('[P3X-OneNote] System has resumed, waiting for network...');

        const win = global.p3x.onenote.window.onenote;
        if (!win) return;

        waitForNetworkConnectivity(() => {
            console.log('[P3X-OneNote] Network restored, reloading webview...');
            // Reload webview and show a toast so the user sees it happened
            win.webContents.send('p3x-onenote-action', {
                action: 'reload-webview',
            });
        });
    });
});

app.on('window-all-closed', function () {
    if (!isInSuspended) {
        app.quit();
    }
});

app.on('activate', function () {
    if (global.p3x.onenote.window.onenote === null) {
        global.p3x.onenote.createWindow.onenote();
    }
});

app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
    if (contents.getType() === 'webview') {
        contents.on('new-window', function (newWindowEvent, url) {
            newWindowEvent.preventDefault();
        });
    }
});
