const translation = {
    title: 'P3X OneNote',
    restart: 'Please hang on, the application is restarting.',
    label: {
        hideMenu: 'Hide main menu (show with ALT)',
        optionToHideMenuState: {
            yes: 'After restart, it will hide the menu and show on ALT.',
        },
        donate: 'Donate',
        allowMultiple: {
            checkbox: 'Allow multiple instances (with some quirks)',
            message: {
                yes: 'Now you can use multiple instance with some quirks.',
                no: 'Now, it allows only one instance, no quirks'
            }
        },
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
        clearCache: 'First sign off, then click this menu option to clear the cache',
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
                'de-DE': 'Deutsch / German',
                'pt-BR': 'Português / Portuguese',
                'es-ES': 'Español / Spanish',
                'fr-FR': 'Français / French',
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
        form: {
            title: 'Title',
            url: 'URL'
        }
    },
    validation: {
        required: 'Required',
        url: 'Invalid url',
    },
};

module.exports = translation;
