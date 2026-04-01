const translation = {
    title: 'P3X OneNote',
    restart: 'Please hang on, the application is restarting.',
    label: {
        darkThemeInvert: {
          title: 'Dark mode (using invert)',
          off: 'Off',
          on: 'On',
          system: 'Follow system',
        },
        hideMenu: 'Hide main menu (show with ALT)',
        optionToHideMenuState: {
            yes: 'After restart, it will hide the menu and show on ALT.',
        },
        donate: 'Donate',
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Close to the tray',
            message: {
                yes: 'The close button really closes the app.',
                no: 'The close button, instead of quitting, it minimizes the app to the tray.',

            }
        },
        optionToDisableInternalExternalPopup: 'Disable Internal / External Popup (all link internal)',
        settings: 'Settings',
        setProxy: 'Set proxy',
        openUrl: 'Open an URL',
        promptRedirectUrlTitle: 'Redirect to url',
        edit: 'Edit',
        view: 'View',
        download: 'Download',
        developer: 'Patrik Laszlo',
        personalHome: 'Personal home',
        corporateHome: 'Corporate home',
        clearCache: {
            title: 'Clear data and restart',
            allTabs: 'All tabs - everything',
            currentTab: 'Current tab - everything',
            allCookies: 'All tabs - cookies only',
            currentCookies: 'Current tab - cookies only',
            allCache: 'All tabs - cache only',
            currentCache: 'Current tab - cache only',
            allLabel: 'all tabs',
            currentLabel: 'current tab',
            done: (scope, type) => `Cleared ${type} for ${scope}.`,
        },
        quit: 'Quit',
        show: 'Show',
        hide: 'Hide',
        copyLocation: 'Copy this location to the clipboard',
        copyLocationCopied: 'The location is copied to the clipboard.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: 'Back',
        forward: 'Forward',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'You can go to any URL you wish',
            placeholder: 'a valid URL',

        },
        minimizationBehavior: {
            title: 'Minimization behavior',
        },
        setProxy: {
            placeholder: 'Proxy setting',
            info: 'To clear the proxy, use an empty string.',
            clear: 'The proxy is turned off.',
            set: (value) => {
                return `The proxy is set as ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'External',
            urlInternal: 'Internal',
        }
    },
    button: {
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
        cancel: 'Cancel',
        save: 'Save',
        clear: 'Clear',
        go: 'Go',
        delete: 'Delete',
    },
    menu: {
        action: 'Action',
        role: {
            edit: {
                undo: 'Undo',
                redo: 'Redo',
                cut: 'Cut',
                copy: 'Copy',
                paste: 'Paste',
                pasteandmatchstyle: 'Paste and match style',
                delete: 'Delete',
                selectall: 'Select all',
            },
            view: {
                reload: 'Reload',
                forcereload: 'Force reload',
                toggledevtools: 'Toggle development tools',
                resetzoom: 'Reset Zoom',
                zoomin: 'Zoom In',
                zoomout: 'Zoom out',
                togglefullscreen: 'Toggle full screen',
            }
        },
        help: {
            title: 'Help',
            checkUpdates: 'Check updates'
        },
        language: {
            label: 'Language',
            alert: 'Language set to english.',
            dialog: {
                label: 'Try to configure Online OneNote language?',
                corporate: 'Corporate',
                personal: 'Personal',
            },
            translations: {
                'en-US': 'English',
                'af-ZA': 'Afrikaans',
                'ar-SA': 'العربية / Arabic',
                'bn-BD': 'বাংলা / Bengali',
                'ca-ES': 'Català / Catalan',
                'cs-CZ': 'Čeština / Czech',
                'da-DK': 'Dansk / Danish',
                'de-DE': 'Deutsch / German',
                'el-GR': 'Ελληνικά / Greek',
                'es-ES': 'Español / Spanish',
                'fi-FI': 'Suomi / Finnish',
                'fr-FR': 'Français / French',
                'he-IL': 'עברית / Hebrew',
                'hu-HU': 'Magyar / Hungarian',
                'it-IT': 'Italiano / Italian',
                'ja-JP': '日本語 / Japanese',
                'ko-KR': '한국어 / Korean',
                'nb-NO': 'Norsk / Norwegian',
                'nl-NL': 'Nederlands / Dutch',
                'pl-PL': 'Polski / Polish',
                'pt-BR': 'Português / Portuguese',
                'ro-RO': 'Română / Romanian',
                'ru-RU': 'Русский / Russian',
                'sr-RS': 'Српски / Serbian',
                'sv-SE': 'Svenska / Swedish',
                'tr-TR': 'Türkçe / Turkish',
                'uk-UA': 'Українська / Ukrainian',
                'vi-VN': 'Tiếng Việt / Vietnamese',
                'zh-CN': '简体中文 / Simplified Chinese',
                'zh-TW': '繁體中文 / Traditional Chinese',
            }
        },
    },
    redirecting: 'Hang on, redirecting to a new notebook. It takes some time...',
    slow: 'Hang on, loading OneNote takes some time...',
    updater: {
        'checking-for-update': 'Checking for update ...',
        'update-available': 'Downloading latest release ...',
        'update-not-available': 'No new update.',
        error: (opts) => {
            return `Error in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Downloaded ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Update downloaded. You may restart the app to update.'
    },
    bookmarks: {
        title: 'Bookmarks',
        add: 'Add bookmark',
        edit: 'Edit bookmarks',
        manager: 'Manage bookmarks',
        managerSearch: 'Search bookmarks...',
        managerEmpty: 'No bookmarks found.',
        confirmDelete: 'Delete?',
        exportBookmarks: 'Export bookmarks',
        importBookmarks: 'Import bookmarks',
        exported: 'Bookmarks exported.',
        imported: (count) => `Imported ${count} bookmark(s).`,
        exportTitle: 'Export bookmarks',
        importTitle: 'Import bookmarks',
        form: {
            title: 'Title',
            url: 'URL',
            category: 'Folder',
            categoryPlaceholder: 'e.g. Work/Projects (use / for subfolders)',
        }
    },
    tabs: {
        addTab: 'Add tab',
        closeTab: 'Close tab',
        personal: 'Personal',
        corporate: 'Corporate',
        cannotCloseLastTab: 'Cannot close the last tab.',
        restoreClosedTab: 'Restore last closed tab',
        noClosedTabs: 'No closed tabs to restore.',
        renameTab: 'Rename tab',
        clearName: 'Clear custom name',
        renamePrompt: 'Enter a custom name for this tab (leave empty to use default)',
        renamePlaceholder: 'Custom tab name',
        pinTab: 'Pin tab',
        unpinTab: 'Unpin tab',
        cannotClosePinned: 'Cannot close a pinned tab.',
        confirmClose: (tabLabel) => `Are you sure you want to close "${tabLabel}"? You will be signed out of this account.`,
    },
    validation: {
        required: 'Required',
        url: 'Invalid url',
    },
};

module.exports = translation;
