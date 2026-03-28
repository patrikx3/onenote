import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'
import Store from 'electron-store'
import { app } from 'electron'
import semver from 'semver'

import enUS from '../translation/en-US.js'
import afZA from '../translation/af-ZA.js'
import arSA from '../translation/ar-SA.js'
import bnBD from '../translation/bn-BD.js'
import caES from '../translation/ca-ES.js'
import csCZ from '../translation/cs-CZ.js'
import daDK from '../translation/da-DK.js'
import deDE from '../translation/de-DE.js'
import elGR from '../translation/el-GR.js'
import esES from '../translation/es-ES.js'
import fiFI from '../translation/fi-FI.js'
import frFR from '../translation/fr-FR.js'
import heIL from '../translation/he-IL.js'
import huHU from '../translation/hu-HU.js'
import itIT from '../translation/it-IT.js'
import jaJP from '../translation/ja-JP.js'
import koKR from '../translation/ko-KR.js'
import nbNO from '../translation/nb-NO.js'
import nlNL from '../translation/nl-NL.js'
import plPL from '../translation/pl-PL.js'
import ptBR from '../translation/pt-BR.js'
import roRO from '../translation/ro-RO.js'
import ruRU from '../translation/ru-RU.js'
import srRS from '../translation/sr-RS.js'
import svSE from '../translation/sv-SE.js'
import trTR from '../translation/tr-TR.js'
import ukUA from '../translation/uk-UA.js'
import viVN from '../translation/vi-VN.js'
import zhCN from '../translation/zh-CN.js'
import zhTW from '../translation/zh-TW.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

const conf = new Store();

// On Snap, or when DISABLE_WAYLAND=1, force X11 per Electron 38+ breaking changes.
// Only apply if user didn't already specify --ozone-platform.
try {
    const userSpecifiedOzone = app.commandLine.hasSwitch('ozone-platform');
    const isSnap = Boolean(process.env.SNAP || process.env.SNAP_NAME);
    const disableWayland = ['1', 'true', 'yes'].includes(String(process.env.DISABLE_WAYLAND || '').toLowerCase());
    if (!userSpecifiedOzone && (isSnap || disableWayland)) {
        app.commandLine.appendSwitch('ozone-platform', 'x11');
        // Optional debug log to help with support
        console.log('[P3X-OneNote] Forcing --ozone-platform=x11 (Snap or DISABLE_WAYLAND)');
    }
} catch (err) {
    console.error('[P3X-OneNote] ozone-platform init error:', err);
}

//app.allowRendererProcessReuse = true
//app.disableHardwareAcceleration()

let translationKey = conf.get('lang')
if (translationKey === undefined) {
    translationKey = 'en-US'
    conf.set('lang', translationKey)
}

// Set Chromium locale to match the selected language.
// This affects navigator.language, navigator.languages, and the default Accept-Language header,
// which helps Microsoft services detect the preferred language.
app.commandLine.appendSwitch('lang', translationKey)
let darkThemeInvert = conf.get('darkThemeInvert')
if (darkThemeInvert === undefined) {
    darkThemeInvert = false
    conf.set('darkThemeInvert', darkThemeInvert)
}

const langTranslations = {
    'en-US': enUS,
    'af-ZA': afZA,
    'ar-SA': arSA,
    'bn-BD': bnBD,
    'ca-ES': caES,
    'cs-CZ': csCZ,
    'da-DK': daDK,
    'de-DE': deDE,
    'el-GR': elGR,
    'es-ES': esES,
    'fi-FI': fiFI,
    'fr-FR': frFR,
    'he-IL': heIL,
    'hu-HU': huHU,
    'it-IT': itIT,
    'ja-JP': jaJP,
    'ko-KR': koKR,
    'nb-NO': nbNO,
    'nl-NL': nlNL,
    'pl-PL': plPL,
    'pt-BR': ptBR,
    'ro-RO': roRO,
    'ru-RU': ruRU,
    'sr-RS': srRS,
    'sv-SE': svSE,
    'tr-TR': trTR,
    'uk-UA': ukUA,
    'vi-VN': viVN,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
}

const translation = langTranslations[translationKey]

global.p3x = {
    onenote: {
        pkg: pkg,
        darkThemeInvert: darkThemeInvert,
        lang: translation,
        translationKey: translationKey,
        translations: undefined,
        title: translation.title,
        conf: conf,
        disableHide: true,
        allowMultiple: false,
        optionToDisableInternalExternalPopup: false,
        optionToHideMenu: false,
        iconFile: path.resolve(`${__dirname}/images/128x128.png`),
        tray: undefined,
        window: {
            onenote: undefined,
        },
        action: undefined,
        menus: undefined,
        mainMenu: undefined,
        setVisible: undefined,
        bookmarksEditMode: false,
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

// optionToHideMenu
global.p3x.onenote.optionToHideMenu = conf.get('option-to-hide-menu')
if (global.p3x.onenote.optionToHideMenu === undefined) {
    conf.set('option-to-hide-menu', false)
    global.p3x.onenote.optionToHideMenu = false;
}

// configuration
global.p3x.onenote.optionToDisableInternalExternalPopup = conf.get('option-to-disable-internal-external-popup')
if (global.p3x.onenote.optionToDisableInternalExternalPopup === undefined) {
    conf.set('option-to-disable-internal-external-popup', false)
    global.p3x.onenote.optionToDisableInternalExternalPopup = false;
}

// configuration
global.p3x.onenote.allowMultiple = conf.get('allow-multiple')
if (global.p3x.onenote.allowMultiple === undefined) {
    conf.set('allow-multiple', false)
    global.p3x.onenote.allowMultiple = false;
}

// loading
global.p3x.onenote.action = (await import('./main/action.mjs')).default
global.p3x.onenote.menus = (await import('./main/menus.mjs')).default
global.p3x.onenote.mainMenu = (await import('./main/create/menu.mjs')).default
global.p3x.onenote.mainTray = (await import('./main/create/tray.mjs')).default
global.p3x.onenote.setVisible = (await import('./main/set-visible.mjs')).default
global.p3x.onenote.createWindow.onenote = (await import('./main/create/window/onenote.mjs')).default


if (global.p3x.onenote.allowMultiple === false) {
    if (semver.gt(process.versions.electron === undefined ? '4.0.0' : process.versions.electron, '3.0.0')) {
        const gotTheLock = app.requestSingleInstanceLock()

        app.on('second-instance', (event, commandLine, workingDirectory) => {
            // Someone tried to run a second instance, we should focus our window.
            global.p3x.onenote.setVisible(true);
            //global.p3x.onenote.window.onenote.webContents.reload();
        })

        if (!gotTheLock) {
            app.quit()
            process.exit(0)
        }

    } else {
        const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
            global.p3x.onenote.setVisible(true);
            //global.p3x.onenote.window.onenote.webContents.reload();
        })

        if (isSecondInstance) {
            app.quit()
            process.exit(0)
        }
    }
}


// app and ipc main events and configuration
await import('./main/ipc-main.mjs')
await import('./main/app-events.mjs')
