const translation = {
    title: 'P3X OneNote',
    restart: '请稍等，应用程序正在重启',
    label: {
        darkThemeInvert: {
          title: '开启暗黑模式 (使用反色)',
          off: '关闭',
          on: '开启',
          system: '跟随系统',
        },
        hideMenu: '隐藏菜单栏（按下Alt键显示）',
        optionToHideMenuState: {
            yes: '重启后，菜单栏将被隐藏并可以通过Alt键显示',
        },
        donate: '捐赠',
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
        clearCache: {
            title: '清除数据并重启',
            allTabs: '所有标签页 - 全部',
            currentTab: '当前标签页 - 全部',
            allCookies: '所有标签页 - 仅Cookie',
            currentCookies: '当前标签页 - 仅Cookie',
            allCache: '所有标签页 - 仅缓存',
            currentCache: '当前标签页 - 仅缓存',
            allLabel: '所有标签页',
            currentLabel: '当前标签页',
            done: (scope, type) => `已清除: ${scope} - ${type}`,
        },
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
        manager: '管理书签',
        managerSearch: '搜索书签...',
        managerEmpty: '未找到书签。',
        confirmDelete: '删除？',
        exportBookmarks: '导出书签',
        importBookmarks: '导入书签',
        exported: '书签已导出。',
        imported: (count) => `已导入 ${count} 个书签。`,
        exportTitle: '导出书签',
        importTitle: '导入书签',
        form: {
            title: '标题',
            url: 'URL',
            category: '文件夹',
            categoryPlaceholder: '例如：工作/项目（使用 / 表示子文件夹）',
        }
    },
    tabs: {
        addTab: '添加标签页',
        personal: '个人',
        corporate: '公司',
        closeTab: '关闭标签页',
        cannotCloseLastTab: '无法关闭最后一个标签页。',
        restoreClosedTab: '恢复最近关闭的标签页',
        noClosedTabs: '没有可恢复的已关闭标签页。',
        renameTab: '重命名标签页',
        clearName: '清除自定义名称',
        renamePrompt: '输入此标签页的自定义名称（留空使用默认值）',
        renamePlaceholder: '自定义标签页名称',
        pinTab: '固定标签页',
        unpinTab: '取消固定标签页',
        cannotClosePinned: '无法关闭固定的标签页。',
        confirmClose: (tabLabel) => `确定要关闭"${tabLabel}"吗？您将从此账户退出登录。`,
    },
    validation: {
        required: 'Required',
        url: '无效的url',
    },
};

module.exports = translation;
