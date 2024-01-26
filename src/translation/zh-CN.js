const translation = {
    title: 'P3X OneNote',
    restart: '请稍等，应用程序正在重启',
    label: {
        darkThemeInvert: {
          title: '开启实验性暗黑模式 (使用反色)'
        },
        hideMenu: '隐藏菜单栏（按下Alt键显示）',
        optionToHideMenuState: {
            yes: '重启后，菜单栏将被隐藏并可以通过Alt键显示',
        },
        donate: '捐赠',
        allowMultiple: {
            checkbox: '允许多个应用实例（实验性）',
            message: {
                yes: '现在，您可以同时打开多个应用实例',
                no: '现在，只允许打开一个应用实例'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: '关闭至托盘',
            message: {
                yes: '按下关闭按钮会真正关闭这个应用',
                no: '按下关闭按钮不会退出而是最小化应用至托盘',

            }
        },
        optionToDisableInternalExternalPopup: '禁用内部 / 外部弹出窗口 (所有内部链接)',
        settings: '设置',
        setProxy: '代理设置',
        openUrl: '访问一个URL',
        promptRedirectUrlTitle: '重定向至url',
        edit: '编辑',
        view: '查看',
        download: '下载',
        developer: 'Patrik Laszlo',
        personalHome: '个人主页',
        corporateHome: '公司主页',
        clearCache: '请先退出登陆，再按下此按钮来清除缓存',
        quit: '退出',
        show: '显示',
        hide: '隐藏',
        copyLocation: '复制页面地址至剪贴板',
        copyLocationCopied: '页面地址已经被复制到剪贴板',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: '后退',
        forward: '前进',
    },
    dialog: {
        info: '信息',
        openUrl: {
            info: '你可以访问任何URL',
            placeholder: '一个有效的URL',

        },
        minimizationBehavior: {
            title: '最小化表现',
        },
        setProxy: {
            placeholder: '代理设置',
            info: '若要清空代理，请使用空白字符串',
            clear: '代理已经被关闭',
            set: (value) => {
                return `代理已被设为 ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: '外部',
            urlInternal: '内部',
        }
    },
    button: {
        yes: '是',
        no: '否',
        ok: '好的',
        cancel: '取消',
        save: '保存',
        clear: '清除',
        go: '前往',
        delete: '删除',
    },
    menu: {
        action: '行为',
        role: {
            edit: {
                undo: '撤销',
                redo: '恢复',
                cut: '剪切',
                copy: '复制',
                paste: '粘贴',
                pasteandmatchstyle: '粘贴并匹配格式',
                delete: '删除',
                selectall: '全选',
            },
            view: {
                reload: '重新加载',
                forcereload: '强制重新加载',
                toggledevtools: '开发者工具',
                resetzoom: '重置缩放',
                zoomin: '放大文字',
                zoomout: '缩小文字',
                togglefullscreen: '全屏',
            }
        },
        help: {
            title: '帮助',
            checkUpdates: '检查更新'
        },
        language: {
            label: '语言 / Language',
            alert: '语言设置为中文',
            dialog: {
                label: '尝试改变在线OneNote的语言配置?',
                corporate: '公司',
                personal: '个人',
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

            }
        },
    },
    redirecting: '请稍等，正在重定向至新笔记本，这会花费一些时间',
    slow: '请稍等，加载OneNote需要花费一些时间',
    updater: {
        'checking-for-update': '正在检查更新 ...',
        'update-available': '正在下载最近的发行版 ...',
        'update-not-available': '没有新的更新.',
        error: (opts) => {
            return `自动更新器错误: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return '已下载 ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': '更新已下载，重启应用以更新'
    },
    bookmarks: {
        title: '书签',
        add: '添加书签',
        edit: '编辑书签',
        form: {
            title: '标题',
            url: 'URL'
        }
    },
    validation: {
        required: 'Required',
        url: '无效的url',
    },
};

module.exports = translation;
