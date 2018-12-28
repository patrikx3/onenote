const translation = {
    title: 'P3X OneNote',
    label: {
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
    }
};

module.exports = translation;