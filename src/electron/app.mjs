import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'
import Store from 'electron-store'
import { app } from 'electron'

import registry from './registry.mjs'

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

const supportedLocales = [
    'en-US', 'af-ZA', 'ar-SA', 'bn-BD', 'ca-ES', 'cs-CZ', 'da-DK',
    'de-DE', 'el-GR', 'es-ES', 'fi-FI', 'fr-FR', 'he-IL', 'hu-HU',
    'it-IT', 'ja-JP', 'ko-KR', 'nb-NO', 'nl-NL', 'pl-PL', 'pt-BR',
    'ro-RO', 'ru-RU', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN',
    'zh-CN', 'zh-TW',
]

function detectOsLocale() {
    const osLocale = app.getLocale()
    return supportedLocales.find(l => l === osLocale)
        || supportedLocales.find(l => l.startsWith(osLocale + '-'))
        || supportedLocales.find(l => osLocale.startsWith(l.split('-')[0]))
        || 'en-US'
}

let langSetting = conf.get('lang')
if (langSetting === undefined) {
    // First run — default to auto
    langSetting = 'auto'
    conf.set('lang', 'auto')
}

let translationKey = langSetting === 'auto' ? detectOsLocale() : langSetting

// Set Chromium locale to match the selected language.
// This affects navigator.language, navigator.languages, and the default Accept-Language header,
// which helps Microsoft services detect the preferred language.
app.commandLine.appendSwitch('lang', translationKey)
// Dark theme mode: 'off', 'on', 'system'
let darkThemeMode = conf.get('darkThemeMode')
if (darkThemeMode === undefined) {
    // Migrate from old boolean config
    const oldVal = conf.get('darkThemeInvert')
    darkThemeMode = oldVal === true ? 'on' : 'off'
    conf.set('darkThemeMode', darkThemeMode)
}
let darkThemeInvert = darkThemeMode === 'on' || (darkThemeMode === 'system' && require('electron').nativeTheme.shouldUseDarkColors)
conf.set('darkThemeInvert', darkThemeInvert)

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

Object.assign(registry, {
    pkg: pkg,
    detectOsLocale: detectOsLocale,
    darkThemeInvert: darkThemeInvert,
    darkThemeMode: darkThemeMode,
    lang: translation,
    translationKey: translationKey,
    translations: undefined,
    title: translation.title,
    conf: conf,
    disableHide: true,

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
    createWindow: {
        onenote: undefined,
    },
    isVisible: () => {
        return registry.window.onenote.isVisible() && registry.window.onenote.isFocused()
    }
})

registry.translations = langTranslations

// configuration
registry.disableHide = conf.get('disable-hide')
if (registry.disableHide === undefined) {
    conf.set('disable-hide', true)
    registry.disableHide = true;
}

// optionToHideMenu
registry.optionToHideMenu = conf.get('option-to-hide-menu')
if (registry.optionToHideMenu === undefined) {
    conf.set('option-to-hide-menu', false)
    registry.optionToHideMenu = false;
}

// configuration
registry.optionToDisableInternalExternalPopup = conf.get('option-to-disable-internal-external-popup')
if (registry.optionToDisableInternalExternalPopup === undefined) {
    conf.set('option-to-disable-internal-external-popup', false)
    registry.optionToDisableInternalExternalPopup = false;
}



// loading
registry.action = (await import('./main/action.mjs')).default
registry.menus = (await import('./main/menus.mjs')).default
registry.mainMenu = (await import('./main/create/menu.mjs')).default
registry.mainTray = (await import('./main/create/tray.mjs')).default
registry.setVisible = (await import('./main/set-visible.mjs')).default
registry.createWindow.onenote = (await import('./main/create/window/onenote.mjs')).default


const gotTheLock = app.requestSingleInstanceLock()

app.on('second-instance', (event, commandLine, workingDirectory) => {
    registry.setVisible(true);
})

if (!gotTheLock) {
    app.quit()
    process.exit(0)
}


// app and ipc main events and configuration
await import('./main/ipc-main.mjs')
await import('./main/app-events.mjs')
