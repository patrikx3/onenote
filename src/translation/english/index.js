const translation = {
    title: 'P3X OneNote',
    label: {
        donate: 'Donate',
        disableHide: {
            yes: 'Close button - will minimize to the tray instead of quit',
            no: 'Close button - default quit close button behaviour',
            message: {
                yes: 'The close button really closed the app.',
                no: 'The close button instead of quitting it minimizes the app to the tray.',

            }
        },
        settings: 'Settings',
        setProxy: 'Set proxy',
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
        disallowedContent: 'Disallowed content, soon redirecting to home ...'
    },
    dialog: {
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
        }
    },
    button: {
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
        cancel: 'Cancel',
        save: 'Save',
        clear: 'Clear',
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
        }
    },
    redirecting: 'Hang on, redirecting to a new notebook. It takes some time...',
    slow: 'Hang on, loading a notebook takes some time...',
    updater: {
        'checking-for-update': 'Checking for update ...',
        'update-available': 'Downloading latest release ...',
        'update-not-available': 'No new update available.',
        error: (opts) => {
            return `Error in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Downloaded ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Update downloaded. You may restart the app to update.'
    }
};

module.exports = translation;