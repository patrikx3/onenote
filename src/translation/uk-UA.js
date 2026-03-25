const translation = {
    title: 'P3X OneNote',
    restart: 'Будь ласка, зачекайте, програма перезапускається.',
    label: {
        darkThemeInvert: {
          title: 'Увімкнути темний режим з недоліками (використовуючи інверсію)'
        },
        hideMenu: 'Сховати головне меню (показати за допомогою ALT)',
        optionToHideMenuState: {
            yes: 'Після перезапуску меню буде приховано і з\'явиться при натисканні ALT.',
        },
        donate: 'Пожертвувати',
        allowMultiple: {
            checkbox: 'Дозволити кілька екземплярів (з деякими недоліками)',
            message: {
                yes: 'Тепер ви можете використовувати кілька екземплярів з деякими недоліками.',
                no: 'Тепер дозволено лише один екземпляр, без недоліків'
            }
        },
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
        clearCache: 'Спочатку вийдіть з облікового запису, потім натисніть цю опцію меню, щоб очистити кеш',
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
        form: {
            title: 'Назва',
            url: 'URL'
        }
    },
    validation: {
        required: 'Обов\'язково',
        url: 'Недійсний url',
    },
};

module.exports = translation;
