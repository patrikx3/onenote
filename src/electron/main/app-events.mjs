import { app, powerMonitor, net } from 'electron';

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
