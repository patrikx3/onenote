const translation = {
    title: 'P3X OneNote',
    restart: 'Будь ласка, зачекайте, програма перезапускається.',
    label: {
        darkThemeInvert: {
          title: 'Увімкнути темний режим (використовуючи інверсію)',
          off: 'Вимк',
          on: 'Увімк',
          system: 'Як у системі',
        },
        hideMenu: 'Сховати головне меню (показати за допомогою ALT)',
        optionToHideMenuState: {
            yes: 'Після перезапуску меню буде приховано і з\'явиться при натисканні ALT.',
        },
        donate: 'Пожертвувати',
        disableHide: {
            checkbox: 'Згорнути в системний трей',
            message: {
                yes: 'Кнопка закриття дійсно закриває програму.',
                no: 'Кнопка закриття, замість виходу, згортає програму в системний трей.',
            }
        },
        optionToDisableInternalExternalPopup: 'Вимкнути внутрішнє / зовнішнє спливаюче вікно (всі посилання внутрішні)',
        settings: 'Налаштування',
        setProxy: 'Встановити проксі',
        openUrl: 'Відкрити URL',
        promptRedirectUrlTitle: 'Перенаправити на url',
        edit: 'Редагувати',
        view: 'Перегляд',
        download: 'Завантажити',
        developer: 'Patrik Laszlo',
        personalHome: 'Особиста домашня сторінка',
        corporateHome: 'Корпоративна домашня сторінка',
        clearCache: {
            title: 'Очистити дані та перезапустити',
            allTabs: 'Усі вкладки - все',
            currentTab: 'Поточна вкладка - все',
            allCookies: 'Усі вкладки - лише куки',
            currentCookies: 'Поточна вкладка - лише куки',
            allCache: 'Усі вкладки - лише кеш',
            currentCache: 'Поточна вкладка - лише кеш',
            allLabel: 'усі вкладки',
            currentLabel: 'поточна вкладка',
            done: (scope, type) => `Очищено: ${scope} - ${type}`,
        },
        quit: 'Вийти',
        show: 'Показати',
        hide: 'Сховати',
        copyLocation: 'Копіювати цю адресу в буфер обміну',
        copyLocationCopied: 'Адресу скопійовано в буфер обміну.',
        back: 'Назад',
        forward: 'Вперед',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Ви можете перейти на будь-який URL, який бажаєте',
            placeholder: 'дійсний URL',
        },
        minimizationBehavior: {
            title: 'Поведінка мінімізації',
        },
        setProxy: {
            placeholder: 'Налаштування проксі',
            info: 'Щоб очистити проксі, використовуйте порожній рядок.',
            clear: 'Проксі вимкнено.',
            set: (value) => {
                return `Проксі встановлено як ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Зовнішнє',
            urlInternal: 'Внутрішнє',
        }
    },
    button: {
        yes: 'Так',
        no: 'Ні',
        ok: 'OK',
        cancel: 'Скасувати',
        save: 'Зберегти',
        clear: 'Очистити',
        go: 'Перейти',
        delete: 'Видалити',
    },
    menu: {
        action: 'Дія',
        role: {
            edit: {
                undo: 'Скасувати',
                redo: 'Повторити',
                cut: 'Вирізати',
                copy: 'Копіювати',
                paste: 'Вставити',
                pasteandmatchstyle: 'Вставити і узгодити стиль',
                delete: 'Видалити',
                selectall: 'Вибрати все',
            },
            view: {
                reload: 'Перезавантажити',
                forcereload: 'Примусово перезавантажити',
                toggledevtools: 'Перемкнути інструменти розробника',
                resetzoom: 'Скинути масштаб',
                zoomin: 'Збільшити',
                zoomout: 'Зменшити',
                togglefullscreen: 'Перемкнути повноекранний режим',
            }
        },
        help: {
            title: 'Допомога',
            checkUpdates: 'Перевірити оновлення'
        },
        language: {
            label: 'Українська / Language',
            alert: 'Мову встановлено на Українську.',
            dialog: {
                label: 'Спробувати налаштувати мову Online OneNote?',
                corporate: 'Корпоративний',
                personal: 'Особистий',
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
    redirecting: 'Зачекайте, перенаправлення на новий блокнот. Це займе деякий час...',
    slow: 'Зачекайте, завантаження OneNote займає деякий час...',
    updater: {
        'checking-for-update': 'Перевірка оновлень ...',
        'update-available': 'Завантаження останньої версії ...',
        'update-not-available': 'Немає нових оновлень.',
        error: (opts) => {
            return `Помилка в автоматичному оновленні: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Завантажено ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Оновлення завантажено. Ви можете перезапустити програму для оновлення.'
    },
    bookmarks: {
        title: 'Закладки',
        add: 'Додати закладку',
        edit: 'Редагувати закладки',
        manager: 'Керування закладками',
        managerSearch: 'Пошук закладок...',
        managerEmpty: 'Закладок не знайдено.',
        confirmDelete: 'Видалити?',
        exportBookmarks: 'Експорт закладок',
        importBookmarks: 'Імпорт закладок',
        exported: 'Закладки експортовано.',
        imported: (count) => `Імпортовано закладок: ${count}.`,
        exportTitle: 'Експорт закладок',
        importTitle: 'Імпорт закладок',
        form: {
            title: 'Назва',
            url: 'URL',
            category: 'Тека',
            categoryPlaceholder: 'напр. Робота/Проекти (/ для підтек)',
        }
    },
    tabs: {
        addTab: 'Додати вкладку',
        personal: 'Особистий',
        corporate: 'Корпоративний',
        closeTab: 'Закрити вкладку',
        cannotCloseLastTab: 'Неможливо закрити останню вкладку.',
        restoreClosedTab: 'Відновити останню закриту вкладку',
        noClosedTabs: 'Немає закритих вкладок для відновлення.',
        renameTab: 'Перейменувати вкладку',
        clearName: 'Видалити власну назву',
        renamePrompt: 'Введіть власну назву для цієї вкладки (залиште порожнім для стандартної)',
        renamePlaceholder: 'Власна назва вкладки',
        pinTab: 'Закріпити вкладку',
        unpinTab: 'Відкріпити вкладку',
        cannotClosePinned: 'Неможливо закрити закріплену вкладку.',
        confirmClose: (tabLabel) => `Ви впевнені, що хочете закрити «${tabLabel}»? Вас буде виходжено з цього облікового запису.`,
    },
    validation: {
        required: 'Обов\'язково',
        url: 'Недійсний url',
    },
};

module.exports = translation;
