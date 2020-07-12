const {shell} = require('electron');

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
            lang: global.p3x.onenote.lang,
            location: undefined,
            copyLocation: require('./action/multi-action/get-location'),
            donate: () => {
                shell.openExternal('https://paypal.me/patrikx3')
            }
        }
    }
})

angular.element(document).ready(() => {
    const bootstrapElement = document.getElementById('p3x-onenote-bootstrap');
    angular.bootstrap(bootstrapElement, ['p3x-onenote']);
})
