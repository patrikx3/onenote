const { app, powerMonitor } = require('electron');
const path = require('path')

let isInSuspended = false;

const { net } = require('electron');
function waitForNetworkConnectivity(callback, retries = 60, interval = 1000) {
    let attempts = 0;

    function checkNetwork() {
        const request = net.request('https://www.bing.com'); // Use any lightweight URL
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

    
    /*
    // Handle power events
    powerMonitor.on('suspend', () => {
        if (isInSuspended) {
            return
        }
        isInSuspended = true;
        console.log('System is suspending...');
        // Close the window when the system goes to sleep
        //if (global.p3x.onenote.window.onenote) {
        //    global.p3x.onenote.window.onenote.loadURL('about:blank');
        //    global.p3x.onenote.window.onenote.hide();
        //}
    });

    powerMonitor.on('resume', () => {
        if (!isInSuspended) {
            return
        }
        isInSuspended = false;
        console.log('System has resumed...');

        global.p3x.onenote.window.onenote.loadURL(`about:blank`);
        waitForNetworkConnectivity(() => {
            const url = path.join(app.getAppPath(), 'src/electron/window/onenote/index.html');
            console.log('resume url', url)
            global.p3x.onenote.window.onenote.loadURL(`file://${url}`);
        });
    });
    */
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
