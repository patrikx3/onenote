const translation = {
    title: 'P3X OneNote',
    restart: 'Vent venligst, applikationen genstarter.',
    label: {
        darkThemeInvert: {
          title: 'Aktiver mørk tilstand med fejl (ved brug af invertering)'
        },
        hideMenu: 'Skjul hovedmenu (vis med ALT)',
        optionToHideMenuState: {
            yes: 'Efter genstart vil menuen være skjult og vises med ALT.',
        },
        donate: 'Doner',
        allowMultiple: {
            checkbox: 'Tillad flere instanser (med nogle fejl)',
            message: {
                yes: 'Nu kan du bruge flere instanser med nogle fejl.',
                no: 'Nu tillades kun én instans, ingen fejl.'
            }
        },
        disableHide: {
            checkbox: 'Luk til systembakken',
            message: {
                yes: 'Luk-knappen lukker virkelig appen.',
                no: 'Luk-knappen minimerer appen til systembakken i stedet for at afslutte.',
            }
        },
        optionToDisableInternalExternalPopup: 'Deaktiver Intern / Ekstern popup (alle links interne)',
        settings: 'Indstillinger',
        setProxy: 'Indstil proxy',
        openUrl: 'Åbn en URL',
        promptRedirectUrlTitle: 'Omdiriger til url',
        edit: 'Rediger',
        view: 'Vis',
        download: 'Download',
        developer: 'Patrik Laszlo',
        personalHome: 'Personlig startside',
        corporateHome: 'Virksomhedens startside',
        clearCache: 'Log først af, klik derefter på denne menuindstilling for at rydde cachen',
        quit: 'Afslut',
        show: 'Vis',
        hide: 'Skjul',
        copyLocation: 'Kopier denne placering til udklipsholderen',
        copyLocationCopied: 'Placeringen er kopieret til udklipsholderen.',
        back: 'Tilbage',
        forward: 'Frem',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Du kan gå til enhver URL du ønsker',
            placeholder: 'en gyldig URL',
        },
        minimizationBehavior: {
            title: 'Minimeringsadfærd',
        },
        setProxy: {
            placeholder: 'Proxyindstilling',
            info: 'For at rydde proxyen, brug en tom streng.',
            clear: 'Proxyen er slået fra.',
            set: (value) => {
                return `Proxyen er sat til ${value}`
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
        no: 'Nej',
        ok: 'OK',
        cancel: 'Annuller',
        save: 'Gem',
        clear: 'Ryd',
        go: 'Gå',
        delete: 'Slet',
    },
    menu: {
        action: 'Handling',
        role: {
            edit: {
                undo: 'Fortryd',
                redo: 'Gentag',
                cut: 'Klip',
                copy: 'Kopier',
                paste: 'Indsæt',
                pasteandmatchstyle: 'Indsæt og tilpas stil',
                delete: 'Slet',
                selectall: 'Vælg alle',
            },
            view: {
                reload: 'Genindlæs',
                forcereload: 'Tving genindlæsning',
                toggledevtools: 'Skift udviklingsværktøjer',
                resetzoom: 'Nulstil zoom',
                zoomin: 'Zoom ind',
                zoomout: 'Zoom ud',
                togglefullscreen: 'Skift fuldskærm',
            }
        },
        help: {
            title: 'Hjælp',
            checkUpdates: 'Tjek opdateringer'
        },
        language: {
            label: 'Dansk / Language',
            alert: 'Sprog sat til dansk.',
            dialog: {
                label: 'Prøv at konfigurere Online OneNote sprog?',
                corporate: 'Virksomhed',
                personal: 'Personlig',
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
    redirecting: 'Vent venligst, omdirigerer til en ny notesbog. Det tager lidt tid...',
    slow: 'Vent venligst, indlæsning af OneNote tager lidt tid...',
    updater: {
        'checking-for-update': 'Søger efter opdatering ...',
        'update-available': 'Downloader seneste udgivelse ...',
        'update-not-available': 'Ingen ny opdatering.',
        error: (opts) => {
            return `Fejl i automatisk opdatering: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Downloadet ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Opdatering downloadet. Du kan genstarte appen for at opdatere.'
    },
    bookmarks: {
        title: 'Bogmærker',
        add: 'Tilføj bogmærke',
        edit: 'Rediger bogmærker',
        form: {
            title: 'Titel',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Add tab',
        personal: 'Personal',
        corporate: 'Corporate',
        closeTab: 'Close tab',
        cannotCloseLastTab: 'Cannot close the last tab.',
        confirmClose: (tabLabel) => `Are you sure you want to close \"${tabLabel}\"? You will be signed out of this account.`,
    },
    validation: {
        required: 'Påkrævet',
        url: 'Ugyldig url',
    },
};

module.exports = translation;
