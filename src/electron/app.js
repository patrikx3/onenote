const configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new configstore(pkg.name);

const {app} = require('electron');

let translationKey = conf.get('lang')
if (translationKey === undefined) {
    translationKey = 'en-US'
    conf.set('lang', translationKey)
}

const path = require('path')

const langTranslations = {
    'en-US': require('../translation/en-US'),
    'de-DE': require('../translation/de-DE'),
    'pt-BR': require('../translation/pt-BR'),
}

const translation = langTranslations[translationKey]


global.p3x = {
    onenote: {
        pkg: pkg,
        lang: translation,
        translationKey: translationKey,
        translations: undefined,
        title: translation.title,
        conf: conf,
        disableHide: true,
        allowMultiple: false,
        iconFile: path.resolve(`${__dirname}/images/256x256.png`),
        tray: undefined,
        window: {
            onenote: undefined,
        },
        action: undefined,
        menus: undefined,
        mainMenu: undefined,
        setVisible: undefined,
        createWindow: {
            onenote: undefined,
        },
        isVisible: () => {
            return global.p3x.onenote.window.onenote.isVisible() && global.p3x.onenote.window.onenote.isFocused()
        }
    }
}

global.p3x.onenote.translations = langTranslations

// configuration
global.p3x.onenote.disableHide = conf.get('disable-hide')
if (global.p3x.onenote.disableHide === undefined) {
    conf.set('disable-hide', true)
    global.p3x.onenote.disableHide = true;
}

// configuration
global.p3x.onenote.allowMultiple = conf.get('allow-multiple')
if (global.p3x.onenote.allowMultiple === undefined) {
    conf.set('allow-multiple', false)
    global.p3x.onenote.allowMultiple = false;
}

// loading
global.p3x.onenote.action = require('./main/action');
global.p3x.onenote.menus = require('./main/menus');
global.p3x.onenote.mainMenu = require('./main/create/menu')
global.p3x.onenote.mainTray = require('./main/create/tray')
global.p3x.onenote.setVisible = require('./main/set-visible')
global.p3x.onenote.createWindow.onenote = require('./main/create/window/onenote')


if (global.p3x.onenote.allowMultiple === false) {
    const semver = require('semver')
    if (semver.gt(process.versions.electron === undefined ? '4.0.0' : process.versions.electron, '3.0.0')) {
        const gotTheLock = app.requestSingleInstanceLock()

        app.on('second-instance', (event, commandLine, workingDirectory) => {
            // Someone tried to run a second instance, we should focus our window.
            global.p3x.onenote.setVisible(true);
            //global.p3x.onenote.window.onenote.webContents.reload();
        })

        if (!gotTheLock) {
            app.quit()
            return
        }

    } else {
        const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
            global.p3x.onenote.setVisible(true);
            //global.p3x.onenote.window.onenote.webContents.reload();
        })

        if (isSecondInstance) {
            return app.quit()
        }
    }
}


// app and ipc main events and configuration
require('./main/ipc-main')
require('./main/app-events')


