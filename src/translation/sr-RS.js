const translation = {
    title: 'P3X OneNote',
    restart: 'Молимо сачекајте, апликација се поново покреће.',
    label: {
        darkThemeInvert: {
          title: 'Укључи тамни режим са недостацима (користећи инверзију)'
        },
        hideMenu: 'Сакриј главни мени (прикажи са ALT)',
        optionToHideMenuState: {
            yes: 'После поновног покретања, сакриће мени и приказати га на ALT.',
        },
        donate: 'Донирај',
        allowMultiple: {
            checkbox: 'Дозволи више инстанци (са неким недостацима)',
            message: {
                yes: 'Сада можете користити више инстанци са неким недостацима.',
                no: 'Сада дозвољава само једну инстанцу, без недостатака'
            }
        },
        disableHide: {
            checkbox: 'Затвори у системску траку',
            message: {
                yes: 'Дугме за затварање заиста затвара апликацију.',
                no: 'Дугме за затварање, уместо да изађе, минимизује апликацију у системску траку.',
            }
        },
        optionToDisableInternalExternalPopup: 'Онемогући интерни / екстерни искачући прозор (сви линкови интерни)',
        settings: 'Подешавања',
        setProxy: 'Подеси прокси',
        openUrl: 'Отвори URL',
        promptRedirectUrlTitle: 'Преусмери на url',
        edit: 'Уреди',
        view: 'Приказ',
        download: 'Преузми',
        developer: 'Patrik Laszlo',
        personalHome: 'Лична почетна',
        corporateHome: 'Корпоративна почетна',
        clearCache: 'Прво се одјавите, а затим кликните на ову опцију менија да обришете кеш',
        quit: 'Изађи',
        show: 'Прикажи',
        hide: 'Сакриј',
        copyLocation: 'Копирај ову локацију у клипборд',
        copyLocationCopied: 'Локација је копирана у клипборд.',
        back: 'Назад',
        forward: 'Напред',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Можете отићи на било који URL који желите',
            placeholder: 'важећи URL',
        },
        minimizationBehavior: {
            title: 'Понашање минимизације',
        },
        setProxy: {
            placeholder: 'Подешавање проксија',
            info: 'Да бисте обрисали прокси, користите празан стринг.',
            clear: 'Прокси је искључен.',
            set: (value) => {
                return `Прокси је подешен као ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Екстерни',
            urlInternal: 'Интерни',
        }
    },
    button: {
        yes: 'Да',
        no: 'Не',
        ok: 'OK',
        cancel: 'Откажи',
        save: 'Сачувај',
        clear: 'Обриши',
        go: 'Иди',
        delete: 'Обриши',
    },
    menu: {
        action: 'Акција',
        role: {
            edit: {
                undo: 'Поништи',
                redo: 'Понови',
                cut: 'Исеци',
                copy: 'Копирај',
                paste: 'Налепи',
                pasteandmatchstyle: 'Налепи и усклади стил',
                delete: 'Обриши',
                selectall: 'Изабери све',
            },
            view: {
                reload: 'Поново учитај',
                forcereload: 'Присилно поново учитај',
                toggledevtools: 'Пребаци алате за развој',
                resetzoom: 'Ресетуј зум',
                zoomin: 'Увећај',
                zoomout: 'Умањи',
                togglefullscreen: 'Пребаци цео екран',
            }
        },
        help: {
            title: 'Помоћ',
            checkUpdates: 'Провери ажурирања'
        },
        language: {
            label: 'Српски / Language',
            alert: 'Језик подешен на Српски.',
            dialog: {
                label: 'Покушати да конфигуришете језик Online OneNote?',
                corporate: 'Корпоративни',
                personal: 'Лични',
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
    redirecting: 'Сачекајте, преусмеравање на нову бележницу. Потребно је неко време...',
    slow: 'Сачекајте, учитавање OneNote потраје неко време...',
    updater: {
        'checking-for-update': 'Провера ажурирања ...',
        'update-available': 'Преузимање најновије верзије ...',
        'update-not-available': 'Нема нових ажурирања.',
        error: (opts) => {
            return `Грешка у аутоматском ажурирању: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Преузето ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Ажурирање преузето. Можете поново покренути апликацију да бисте ажурирали.'
    },
    bookmarks: {
        title: 'Обележивачи',
        add: 'Додај обележивач',
        edit: 'Уреди обележиваче',
        form: {
            title: 'Наслов',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Додај картицу',
        personal: 'Лични',
        corporate: 'Корпоративни',
        closeTab: 'Затвори картицу',
        cannotCloseLastTab: 'Не може се затворити последња картица.',
        confirmClose: (tabLabel) => `Да ли сте сигурни да желите да затворите „${tabLabel}"? Бићете одјављени са овог налога.`,
    },
    validation: {
        required: 'Обавезно',
        url: 'Неважећи url',
    },
};

module.exports = translation;
