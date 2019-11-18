const {ipcRenderer} = require('electron');

// fontawesome
require('@fortawesome/fontawesome-free/js/all')

// jquery
global.$ = require('jquery/dist/jquery.slim')
global.jQuery = global.$

/*
const fs = require('fs')

fs.readFile(__dirname + '/hack.css', 'utf-8', function(err, data) {
    if (err) {
        ipc.send('p3x-debug', {
            'messsage': 'hack.css is not working',
            error: err,
        });
    }
    p3x.onenote.hackCss = data;
});
*/

const configstore = require('configstore');
const pkg = require('../../../../package.json');
const conf = new configstore(pkg.name);
let translationKey = conf.get('lang')

const langTranslations = {
    'en-US': require('../../../translation/en-US'),
    'de-DE': require('../../../translation/de-DE'),
    'pt-BR': require('../../../translation/pt-BR'),
}

const translation = langTranslations[translationKey]

global.p3x = {
    onenote: {
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
    }
}


document.title = `${global.p3x.onenote.lang.title} v${global.p3x.onenote.pkg.version}`;


//require('./core/overlay')
require('./angular')

window.p3xOneNoteOnLoad = function () {


    $(() => {
        global.$body = $('body');
    })


    const webview = document.getElementById("p3x-onenote-webview");
    global.p3x.onenote.webview = webview;
    webview.focus()

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

