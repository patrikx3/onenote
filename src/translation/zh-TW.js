const translation = {
    title: 'P3X OneNote',
    restart: '請稍等，程式正在重新啟動',
    label: {
        darkThemeInvert: {
          title: '使用深色模式 (using invert)'
        },
        hideMenu: '隱藏主選單 (按ALT鍵顯示)',
        optionToHideMenuState: {
            yes: '重新啟動後，即隱藏主選單，須按ALT鍵顯示',
        },
        donate: '捐助',
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
            checkbox: '最小化',
            message: {
                yes: '按關閉扭，即關閉程式',
                no: '按關閉扭，最小化',

            }
        },
        optionToDisableInternalExternalPopup: 'Disable Internal / External Popup (all link internal)',
        settings: '設定',
        setProxy: '設定代理伺服器',
        openUrl: '開啟網址',
        promptRedirectUrlTitle: 'Redirect to url',
        edit: '編輯',
        view: '顯示',
        download: '下載',
        developer: 'Patrik Laszlo',
        personalHome: 'Personal home',
        corporateHome: 'Corporate home',
        clearCache: 'First sign off, then click this menu option to clear the cache',
        quit: '退出',
        show: '顯示',
        hide: '隱藏',
        copyLocation: '複製當前頁面路徑到剪貼簿',
        copyLocationCopied: '已複製當前頁面路徑到剪貼簿',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: 'Back',
        forward: 'Forward',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: '你可以開啟任意想要開啟的網址',
            placeholder: '一個有效網址',

        },
        minimizationBehavior: {
            title: '最小化行為',
        },
        setProxy: {
            placeholder: '代理伺服器設定',
            info: '要清除代理伺服器設定，請留白',
            clear: '代理伺服器被關閉',
            set: (value) => {
                return `代理伺服器設定為 ${value}`
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
        yes: '是',
        no: '否',
        ok: '好',
        cancel: '取消',
        save: '儲存',
        clear: '清除',
        go: 'Go',
        delete: '刪除',
    },
    menu: {
        action: 'Action',
        role: {
            edit: {
                undo: '復原',
                redo: '取消復原',
                cut: '剪下',
                copy: '複製',
                paste: '貼上',
                pasteandmatchstyle: '貼上並保留格式',
                delete: '刪除',
                selectall: '全選',
            },
            view: {
                reload: '重新載入',
                forcereload: '強制重新載入',
                toggledevtools: '切換開發者模式',
                resetzoom: '重置縮放',
                zoomin: '放大',
                zoomout: '縮小',
                togglefullscreen: '使用全螢幕模式',
            }
        },
        help: {
            title: 'Help',
            checkUpdates: '檢查更新'
        },
        language: {
            label: '語言 / Language',
            alert: '語言修改成繁體中文.',
            dialog: {
                label: '要嘗試修改線上的OneNote語言嗎?',
                corporate: 'Corporate',
                personal: 'Personal',
            },
            translations: {
                'en-US': 'English',
                'de-DE': 'Deutsch / German',
                'pt-BR': 'Português / Portuguese',
                'es-ES': 'Español / Spanish',
                'fr-FR': 'Français / French',
                'nl-NL': 'Nederlands / Dutch',
                'it-IT': 'Italiano / Italian',
                'zh-CN': '简体中文 / Simplified Chinese',
                'ru-RU': 'Русский / Russian',
                'pl-PL': 'Polski / Polish',
                'tr-TR': 'Türkçe / Turkish',
                'ja-JP': '日本語 / Japanese',
                'zh-TW': '繁體中文 / Traditional Chinese'

            }
        },
    },
    redirecting: '請稍等，正在導至新的筆記本需要再一些時間...',
    slow: '請稍等，讀取OneNote需要再一些時間...',
    updater: {
        'checking-for-update': '正在檢查更新 ...',
        'update-available': '下載最新板中 ...',
        'update-not-available': '沒有新版本',
        error: (opts) => {
            return `自動更新錯誤: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return '下載 ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': '更信下載完畢，請重新啟動套用'
    },
    bookmarks: {
        title: '書籤',
        add: '新增書籤',
        edit: '修改書籤',
        form: {
            title: '標題',
            url: 'URL'
        }
    },
    validation: {
        required: 'Required',
        url: '無效網址',
    },
};

module.exports = translation;
