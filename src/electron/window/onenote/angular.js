const remote = require("@electron/remote");
const {shell} = require("electron");
const execAsync = async () => {

    const {shell} = require('electron');
    const remote = require('@electron/remote')

    let win
    while(!win) {
        const BrowserWindow = remote.BrowserWindow;
        win = BrowserWindow.getFocusedWindow();
        await new Promise(resolve => setTimeout(resolve, 100))
    }

    require('angular/angular');
    require('angular-aria');
    require('angular-animate');
    require('angular-messages');
    require('angular-material');

    global.p3x.onenote.ng = angular.module('p3x-onenote', [
        'ngMaterial', 'ngMessages'
    ]);
    require('./angular/prompt');
    require('./angular/toast');

    let zoom = p3x.onenote.conf.get('zoom')
    if (zoom === undefined) {
        zoom = 1.0
    }
    if (zoom !== 1.0) {
        win.webContents.setZoomFactor(zoom);
    }

    /*
    win.webContents
        .setVisualZoomLevelLimits(1, 5)
        .then(console.log("Zoom Levels Have been Set between 100% and 500%"))
        .catch((err) => console.error(err));
     */


    global.p3x.onenote.ng.config(($mdAriaProvider, $mdThemingProvider) => {

        $mdAriaProvider.disableWarnings();

        $mdThemingProvider.theme('default').primaryPalette('purple').accentPalette('blue')//.warnPalette('amber');
    })

    global.p3x.onenote.ng.run((p3xOnenotePrompt, p3xOnenoteToast, $rootScope, $animate, $mdMedia) => {
        $animate.enabled(false)
        global.p3x.onenote.prompt = p3xOnenotePrompt;
        global.p3x.onenote.toast = p3xOnenoteToast;
        global.p3x.onenote.root = $rootScope

        $rootScope.$mdMedia = $mdMedia

        p3x.onenote.toast.action(p3x.onenote.lang.slow)

        $rootScope.p3x = {
            onenote: {
                go: (action) => {
                    global.p3x.onenote.webview[action === 'back' ? 'goBack' : 'goForward']()
                },
                canGo: (action) => {
                    if (action === 'back') {
                        return global.p3x.onenote.webview && global.p3x.onenote.webview.canGoBack()
                    }
                    return global.p3x.onenote.webview && global.p3x.onenote.webview.canGoForward()
                },
                lang: global.p3x.onenote.lang,
                location: undefined,
                copyLocation: require('./action/multi-action/get-location'),
                donate: () => {
                    shell.openExternal('https://paypal.me/patrikx3')
                },
                zoom: (zoom) => {
                    const currentZoom = win.webContents.getZoomFactor();
                    let value
                    if (zoom >= 0) {
                        value = currentZoom + 0.1;
                    } else {
                        value = currentZoom - 0.1;
                    }
                    if (value >= 0.75 && value <= 5.0) {
                        win.webContents.zoomFactor = value
                        p3x.onenote.conf.set('zoom', win.webContents.zoomFactor)
                    }
                },
                get zoomFactor() {
                    return (win.webContents.zoomFactor * 100).toFixed(0)
                }
            }
        }
    })

    angular.element(document).ready(() => {
        const bootstrapElement = document.getElementById('p3x-onenote-bootstrap');
        angular.bootstrap(bootstrapElement, ['p3x-onenote']);
    })


}
execAsync()
