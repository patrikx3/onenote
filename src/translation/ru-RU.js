const translation = {
    title: 'P3X OneNote',
    restart: 'Пожалуйста подождите, приложение перезапускается.',
    label: {
        darkThemeInvert: {
          title: 'Включить тёмную тему (применяя инверсию)',
          off: 'Выкл',
          on: 'Вкл',
          system: 'Как в системе',
        },
        hideMenu: 'Переключать строку меню через ALT',
        optionToHideMenuState: {
            yes: 'После перезапуска строка меню будет скрыта. Откройте её через ALT.',
        },
        donate: 'Пожертвовать',
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Сворачивать в трей вместо выхода',
            message: {
                yes: 'Кнопка закрытия приложения завершает приложение.',
                no: 'Кнопка закрытия приложения сворачивает приложение в трей.',

            }
        },
        optionToDisableInternalExternalPopup: 'Не предупреждать о внешней ссылке (все ссылки внутренние)',
        settings: 'Настройки',
        setProxy: 'Установить прокси',
        openUrl: 'Открыть ссылку',
        promptRedirectUrlTitle: 'Перенаправление ссылки',
        edit: 'Изменить',
        view: 'Просмотр',
        download: 'Скачать',
        developer: 'Patrik Laszlo',
        personalHome: 'Личная домашняя страница',
        corporateHome: 'Корпоративная домашняя страница',
        clearCache: {
            title: 'Очистить данные и перезапустить',
            allTabs: 'Все вкладки - всё',
            currentTab: 'Текущая вкладка - всё',
            allCookies: 'Все вкладки - только куки',
            currentCookies: 'Текущая вкладка - только куки',
            allCache: 'Все вкладки - только кеш',
            currentCache: 'Текущая вкладка - только кеш',
            allLabel: 'все вкладки',
            currentLabel: 'текущая вкладка',
            done: (scope, type) => `Очищено: ${scope} - ${type}`,
        },
        quit: 'Выйти',
        show: 'Показать',
        hide: 'Скрыть',
        copyLocation: 'Скопировать этот адрес в буфер обмена',
        copyLocationCopied: 'Адрес скопирован в буфер обмена.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: 'Назад',
        forward: 'Вперёд',
        reportIssue: 'Сообщить о проблеме / Запросить функцию',
    },
    dialog: {
        info: 'Информация',
        openUrl: {
            info: 'Вы можете перейти по любой ссылке',
            placeholder: 'введите ссылку',

        },
        minimizationBehavior: {
            title: 'Поведение сворачивания',
        },
        setProxy: {
            placeholder: 'Настройки прокси',
            info: 'Чтобы очистить прокси, оставьте строку пустой.',
            clear: 'Прокси отключен.',
            set: (value) => {
                return `Прокси установлен как ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Внешняя ссылка',
            urlInternal: 'Внутренняя ссылка',
        }
    },
    button: {
        yes: 'Да',
        no: 'Нет',
        ok: 'Ок',
        cancel: 'Отмена',
        save: 'Сохранить',
        clear: 'Очистить',
        go: 'Перейти',
        delete: 'Удалить',
    },
    menu: {
        action: 'Действие',
        role: {
            edit: {
                undo: 'Отмена',
                redo: 'Возврат',
                cut: 'Вырезать',
                copy: 'Скопировать',
                paste: 'Вставить',
                pasteandmatchstyle: 'Вставить с одинаковым стилем',
                delete: 'Удалить',
                selectall: 'Выделить всё',
            },
            view: {
                reload: 'Обновить',
                forcereload: 'Обновить принудительно',
                toggledevtools: 'Открыть инструменты разработчика',
                resetzoom: 'Сбросить масштаб',
                zoomin: 'Увеличить масштаб',
                zoomout: 'Уменьшить масштаб',
                togglefullscreen: 'Полноэкранный режим',
            }
        },
        help: {
            title: 'Помощь',
            checkUpdates: 'Проверить обновления',
        },
        language: {
            label: 'Язык / Language',
            alert: 'Язык изменён на русский.',
            dialog: {
                label: 'Try to configure Online OneNote language?',
                label: 'Попробовать настроить язык OneNote онлайн?',
                corporate: 'Корпоративный',
                personal: 'Личный',
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
    redirecting: 'Подождите, перенаправление на новую книгу. Это займёт некоторое время...',
    slow: 'Подождите, загрузка OneNote занимает некоторое время...',
    updater: {
        'checking-for-update': 'Проверка обновлений ...',
        'update-available': 'Скачиваение последней версии ...',
        'update-not-available': 'Обновлений не обнаружено.',
        error: (opts) => {
            return `Ошибка в автообновлении: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Загружено ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Обновление загружено. Вы можете перезапустить приложение для обновления.'
    },
    bookmarks: {
        title: 'Закладки',
        add: 'Добавить закладку',
        edit: 'Изменить закладки',
        manager: 'Управление закладками',
        managerSearch: 'Поиск закладок...',
        managerEmpty: 'Закладки не найдены.',
        confirmDelete: 'Удалить?',
        exportBookmarks: 'Экспорт закладок',
        importBookmarks: 'Импорт закладок',
        exported: 'Закладки экспортированы.',
        imported: (count) => `Импортировано закладок: ${count}.`,
        exportTitle: 'Экспорт закладок',
        importTitle: 'Импорт закладок',
        form: {
            title: 'Название',
            url: 'ссылка',
            category: 'Папка',
            categoryPlaceholder: 'напр. Работа/Проекты (/ для подпапок)',
        }
    },
    tabs: {
        addTab: 'Добавить вкладку',
        personal: 'Личный',
        corporate: 'Корпоративный',
        closeTab: 'Закрыть вкладку',
        cannotCloseLastTab: 'Невозможно закрыть последнюю вкладку.',
        restoreClosedTab: 'Восстановить последнюю закрытую вкладку',
        noClosedTabs: 'Нет закрытых вкладок для восстановления.',
        renameTab: 'Переименовать вкладку',
        clearName: 'Удалить пользовательское имя',
        renamePrompt: 'Введите пользовательское имя для этой вкладки (оставьте пустым для имени по умолчанию)',
        renamePlaceholder: 'Пользовательское имя вкладки',
        pinTab: 'Закрепить вкладку',
        unpinTab: 'Открепить вкладку',
        cannotClosePinned: 'Невозможно закрыть закреплённую вкладку.',
        confirmClose: (tabLabel) => `Вы уверены, что хотите закрыть «${tabLabel}»? Вы будете выходить из этого аккаунта.`,
    },
    validation: {
        required: 'Обязательное поле',
        url: 'Некорректная ссылка',
    },
};

module.exports = translation;
