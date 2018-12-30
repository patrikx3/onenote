const translation = {
    title: 'P3X OneNote',
    label: {
        donate: 'Donate',
        disableHide: {
            yes: 'Enable hiding the main window',
            no: 'Disable hiding the main window',
            message: {
                yes: 'For now, the main window is always shown',
                no: 'For now, when you minimize the window it will be hidden and can be only shown in the tray.',

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
        }
    },
    updater: {
        'checking-for-update': 'Checking for update ...',
        'update-available': 'Update available.',
        'update-not-available': 'No new update available.',
        error: (opts) => {
            return `Error in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Downloaded ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Update downloaded.'
    }
};

module.exports = translation;