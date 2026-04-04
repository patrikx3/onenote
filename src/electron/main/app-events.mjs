import { app, powerMonitor, net, nativeTheme } from 'electron';
import registry from '../registry.mjs'
import notify from './notify.mjs'

let isInSuspended = false;
let isOffline = false;
let offlineDebounceTimer = null;

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
    registry.createWindow.onenote();

    // Follow system dark/light theme when mode is 'system'
    nativeTheme.on('updated', () => {
        if (registry.darkThemeMode !== 'system') return;
        const shouldDark = nativeTheme.shouldUseDarkColors;
        if (registry.darkThemeInvert === shouldDark) return;
        registry.darkThemeInvert = shouldDark;
        registry.conf.set('darkThemeInvert', shouldDark);
        const win = registry.window.onenote;
        if (win) {
            win.webContents.send('p3x-onenote-action', {
                action: 'dark-theme-invert',
                darkThemeInvert: shouldDark,
            });
        }
        registry.mainMenu();
        registry.mainTray();
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

        const win = registry.window.onenote;
        if (!win) return;

        waitForNetworkConnectivity(() => {
            console.log('[P3X-OneNote] Network restored, reloading webview...');
            // Reload webview and show a toast so the user sees it happened
            win.webContents.send('p3x-onenote-action', {
                action: 'reload-webview',
            });
        });
    });

    // Network connectivity monitoring — detect intermittent drops while awake
    const OFFLINE_CHECK_INTERVAL = 10000; // 10 seconds
    const RELOAD_DEBOUNCE = 3000; // 3 seconds debounce before reload

    function checkOnlineStatus() {
        if (isInSuspended) return; // power resume handler takes care of this

        const online = net.isOnline();

        if (!online && !isOffline) {
            // Went offline
            isOffline = true;
            console.log('[P3X-OneNote] Network lost');
            notify(registry.lang.label?.offlineNotice || 'You are offline', { sticky: true });
        } else if (online && isOffline) {
            // Back online — debounce to avoid reload spam on flaky connections
            console.log('[P3X-OneNote] Network restored');
            if (offlineDebounceTimer) clearTimeout(offlineDebounceTimer);
            offlineDebounceTimer = setTimeout(() => {
                if (!net.isOnline()) return; // still flaky, skip
                isOffline = false;
                notify(registry.lang.label?.backOnline || 'Back online');
                const win = registry.window.onenote;
                if (win) {
                    win.webContents.send('p3x-onenote-action', {
                        action: 'reload-webview',
                    });
                }
            }, RELOAD_DEBOUNCE);
        }
    }

    setInterval(checkOnlineStatus, OFFLINE_CHECK_INTERVAL);
});

app.on('window-all-closed', function () {
    if (!isInSuspended) {
        app.quit();
    }
});

app.on('activate', function () {
    if (registry.window.onenote === null) {
        registry.createWindow.onenote();
    }
});

app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
    if (contents.getType() === 'webview') {
        contents.on('new-window', function (newWindowEvent, url) {
            newWindowEvent.preventDefault();
        });
    }
});
