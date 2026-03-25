const {ipcRenderer} = require('electron');

const Store = require('electron-store').default;
const conf = new Store();
let translationKey = conf.get('lang')
const langTranslations = {
    'en-US': require('../../../translation/en-US'),
    'af-ZA': require('../../../translation/af-ZA'),
    'ar-SA': require('../../../translation/ar-SA'),
    'bn-BD': require('../../../translation/bn-BD'),
    'ca-ES': require('../../../translation/ca-ES'),
    'cs-CZ': require('../../../translation/cs-CZ'),
    'da-DK': require('../../../translation/da-DK'),
    'de-DE': require('../../../translation/de-DE'),
    'el-GR': require('../../../translation/el-GR'),
    'es-ES': require('../../../translation/es-ES'),
    'fi-FI': require('../../../translation/fi-FI'),
    'fr-FR': require('../../../translation/fr-FR'),
    'he-IL': require('../../../translation/he-IL'),
    'hu-HU': require('../../../translation/hu-HU'),
    'it-IT': require('../../../translation/it-IT'),
    'ja-JP': require('../../../translation/ja-JP'),
    'ko-KR': require('../../../translation/ko-KR'),
    'nb-NO': require('../../../translation/nb-NO'),
    'nl-NL': require('../../../translation/nl-NL'),
    'pl-PL': require('../../../translation/pl-PL'),
    'pt-BR': require('../../../translation/pt-BR'),
    'ro-RO': require('../../../translation/ro-RO'),
    'ru-RU': require('../../../translation/ru-RU'),
    'sr-RS': require('../../../translation/sr-RS'),
    'sv-SE': require('../../../translation/sv-SE'),
    'tr-TR': require('../../../translation/tr-TR'),
    'uk-UA': require('../../../translation/uk-UA'),
    'vi-VN': require('../../../translation/vi-VN'),
    'zh-CN': require('../../../translation/zh-CN'),
    'zh-TW': require('../../../translation/zh-TW'),
}
if (!translationKey) {
    translationKey = 'en-US'
}
const translation = langTranslations[translationKey]

global.p3x = {
    onenote: {
        conf: conf,
        domReady: false,
        url: {
            /*
            https://www.onenote.com/notebooks?omkt=en-US
            https://www.onenote.com/notebooks?omkt=de-DE
            https://www.onenote.com/notebooks?omkt=hu-HU
            */
            notebooks: 'https://www.onenote.com/notebooks',
        },
        ui: {},
        hackCss: undefined,
        ng: undefined,
        webview: undefined,
        pkg: require('../../../../package'),
        translations: langTranslations,
        lang: translation,
        data: {
            url: 'about:blank',
            proxy: '',
        },
        prompt: undefined,
        toast: undefined,
        root: undefined,
        wrongUrlTimeout: 1000,
        wrongUrlMaxAllowed: 5,
        wait: {
            angular: (cb) => {
                let timeout
                const exec = () => {
                    if (global.p3x.onenote.root === undefined) {
                        clearTimeout(timeout)
                        timeout = setTimeout(exec, 250)
                    } else {
                        cb()
                    }
                }
                exec()
            },
            domReady: async () => {
                return new Promise(resolve => {
                    let timeout
                    const exec = () => {
                        if (p3x.onenote.domReady !== true) {
                            clearTimeout(timeout)
                            timeout = setTimeout(exec, 250)
                        } else {
                            resolve()
                        }
                    }
                    exec()
                })
            }
        }
    }
}


document.title = `${global.p3x.onenote.lang.title} v${global.p3x.onenote.pkg.version}`;

window.p3xOneNoteOnLoad = function () {

    if (conf.get('darkThemeInvert') === true) {
        document.body.classList.add('p3x-dark-mode-invert-quirks')
    }

    const webview = document.getElementById("p3x-onenote-webview");
    global.p3x.onenote.webview = webview;
    webview.focus()

    /*
    global.p3x.onenote.webview.addEventListener("dom-ready", function () {
//require('./core/overlay')
        require('./angular')
    })
     */

    const ipcHandler = require('./ipc/handler');
    ipcHandler({
        webview: webview,
    })

    const eventHandler = require('./event/handler');
    eventHandler({
        webview: webview,
    })

    ipcRenderer.send('did-finish-load');
}
