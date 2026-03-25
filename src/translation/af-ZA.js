const translation = {
    title: 'P3X OneNote',
    restart: 'Wag asseblief, die toepassing herbegin.',
    label: {
        darkThemeInvert: {
          title: 'Aktiveer donker modus met eienaardighede (gebruik omkeer)'
        },
        hideMenu: 'Versteek hoofkieslys (wys met ALT)',
        optionToHideMenuState: {
            yes: 'Na herbegin sal dit die kieslys versteek en op ALT wys.',
        },
        donate: 'Skenk',
        allowMultiple: {
            checkbox: 'Laat veelvuldige gevalle toe (met sekere eienaardighede)',
            message: {
                yes: 'Nou kan jy veelvuldige gevalle gebruik met sekere eienaardighede.',
                no: 'Nou laat dit slegs een geval toe, geen eienaardighede nie'
            }
        },
        disableHide: {
            checkbox: 'Sluit na die stelselbalk',
            message: {
                yes: 'Die sluitknoppie sluit werklik die toepassing.',
                no: 'Die sluitknoppie, in plaas van om te sluit, minimeer die toepassing na die stelselbalk.',
            }
        },
        optionToDisableInternalExternalPopup: 'Deaktiveer Interne / Eksterne Opspring (alle skakels intern)',
        settings: 'Instellings',
        setProxy: 'Stel instaanbediener',
        openUrl: 'Maak \'n URL oop',
        promptRedirectUrlTitle: 'Herlei na url',
        edit: 'Wysig',
        view: 'Bekyk',
        download: 'Aflaai',
        developer: 'Patrik Laszlo',
        personalHome: 'Persoonlike tuisblad',
        corporateHome: 'Korporatiewe tuisblad',
        clearCache: 'Teken eers af, klik dan hierdie kieslysopsie om die kasgeheue skoon te maak',
        quit: 'Verlaat',
        show: 'Wys',
        hide: 'Versteek',
        copyLocation: 'Kopieer hierdie ligging na die knipbord',
        copyLocationCopied: 'Die ligging is na die knipbord gekopieer.',
        back: 'Terug',
        forward: 'Vorentoe',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Jy kan na enige URL gaan wat jy wil',
            placeholder: '\'n geldige URL',
        },
        minimizationBehavior: {
            title: 'Minimerings gedrag',
        },
        setProxy: {
            placeholder: 'Instaanbediener instelling',
            info: 'Om die instaanbediener te verwyder, gebruik \'n leë string.',
            clear: 'Die instaanbediener is afgeskakel.',
            set: (value) => {
                return `Die instaanbediener is gestel as ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Ekstern',
            urlInternal: 'Intern',
        }
    },
    button: {
        yes: 'Ja',
        no: 'Nee',
        ok: 'OK',
        cancel: 'Kanselleer',
        save: 'Stoor',
        clear: 'Maak skoon',
        go: 'Gaan',
        delete: 'Verwyder',
    },
    menu: {
        action: 'Aksie',
        role: {
            edit: {
                undo: 'Ontdoen',
                redo: 'Herdoen',
                cut: 'Knip',
                copy: 'Kopieer',
                paste: 'Plak',
                pasteandmatchstyle: 'Plak en pas styl aan',
                delete: 'Verwyder',
                selectall: 'Kies alles',
            },
            view: {
                reload: 'Herlaai',
                forcereload: 'Forseer herlaai',
                toggledevtools: 'Wissel ontwikkelingshulpmiddels',
                resetzoom: 'Herstel zoem',
                zoomin: 'Zoem in',
                zoomout: 'Zoem uit',
                togglefullscreen: 'Wissel volskerm',
            }
        },
        help: {
            title: 'Hulp',
            checkUpdates: 'Kyk vir opdaterings'
        },
        language: {
            label: 'Afrikaans / Language',
            alert: 'Taal is gestel na Afrikaans.',
            dialog: {
                label: 'Probeer om Aanlyn OneNote-taal op te stel?',
                corporate: 'Korporatief',
                personal: 'Persoonlik',
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
    redirecting: 'Wag asseblief, herlei na \'n nuwe notaboek. Dit neem \'n rukkie...',
    slow: 'Wag asseblief, die laai van OneNote neem \'n rukkie...',
    updater: {
        'checking-for-update': 'Kyk vir opdaterings ...',
        'update-available': 'Laai nuutste weergawe af ...',
        'update-not-available': 'Geen nuwe opdatering nie.',
        error: (opts) => {
            return `Fout in outo-opdateerder: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Afgelaai ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Opdatering afgelaai. Jy kan die toepassing herbegin om op te dateer.'
    },
    bookmarks: {
        title: 'Boekmerke',
        add: 'Voeg boekmerk by',
        edit: 'Wysig boekmerke',
        form: {
            title: 'Titel',
            url: 'URL'
        }
    },
    validation: {
        required: 'Vereis',
        url: 'Ongeldige url',
    },
};

module.exports = translation;
