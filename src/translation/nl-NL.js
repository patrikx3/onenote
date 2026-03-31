const translation = {
    title: 'P3X OneNote',
    restart: 'Even wachten, de applicatie start opnieuw op.',
    label: {
        darkThemeInvert: {
            title: 'Schakel de donkere modus in met eigenaardigheden (met behulp van omkeren)'
        },
        hideMenu: 'Verberg hoofd menu (maak zichtbaar met ALT)',
        optionToHideMenuState: {
            yes: 'Het hoofdmenu is verborgen na een herstart en wordt weer zichtbaar bij het indrukken van ALT.',
        },
        donate: 'Donatie',
        allowMultiple: {
            checkbox: 'Sta meerdere vensters toe (met een aantal eigenaardigheden)',
            message: {
                yes: 'Nu kunt u meerdere vensters gebruiken (met eigenaardigheden).',
                no: 'Nu is alleen maar een venster mogelijk (zonder eigenaardigheden)'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Minimaliseren naar taakbalk',
            message: {
                yes: 'Om de applicatie te sluiten moet u de afsluiten knop gebruiken.',
                no: 'De afsluit knop zal het venster minimaliseren naar de taakbalk, ipv af te sluiten.',

            }
        },
        optionToDisableInternalExternalPopup: 'Schakel Interne / Externe popup uit (alle links intern)',
        settings: 'Instellingen',
        setProxy: 'Set proxy',
        openUrl: 'Open een URL',
        promptRedirectUrlTitle: 'Doorverwijzen naar url',
        edit: 'Bewerken',
        view: 'Bekijken',
        download: 'Download',
        developer: 'Patrik Laszlo',
        personalHome: 'Persoonlijke begin pagina',
        corporateHome: 'Zakelijke begin pagina',
        clearCache: 'Meld u eerst af en klik vervolgens op deze menuoptie om de cache te wissen',
        quit: 'Afsluiten',
        show: 'Verschijnen',
        hide: 'Verbergen',
        copyLocation: 'Kopieer deze locatie naar het clipboard',
        copyLocationCopied: 'De locatie is naar het clipboard gekopieerd.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: 'Terug',
        forward: 'Vooruit',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'U kunt elke gewensten URL invullen',
            placeholder: 'een geldige URL',

        },
        minimizationBehavior: {
            title: 'Minimalisatiegedrag',
        },
        setProxy: {
            placeholder: 'Proxy instellingen',
            info: 'Door niets in te vullen kunt u de proxy instellingen wissen.',
            clear: 'De proxy is uitgeschakeld.',
            set: (value) => {
                return `De proxy is ingesteld naar ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Extern',
            urlInternal: 'Intern',
        }
    },
    button: {
        yes: 'Ja',
        no: 'Nee',
        ok: 'OK',
        cancel: 'Afbreken',
        save: 'Opslaan',
        clear: 'Wissen',
        go: 'Gaan',
        delete: 'Verwijderen',
    },
    menu: {
        action: 'Acties',
        role: {
            edit: {
                undo: 'Ongedaan maken',
                redo: 'Herhalen',
                cut: 'Knippen',
                copy: 'Kopieren',
                paste: 'Plakken',
                pasteandmatchstyle: 'Plak en match stijl',
                delete: 'Verwijderen',
                selectall: 'Alles selecteren',
            },
            view: {
                reload: 'Herladen',
                forcereload: 'Geforceerd herladen',
                toggledevtools: 'Toggle ontwikkelings gereedschappen',
                resetzoom: 'Reset zoom',
                zoomin: 'Zoom In',
                zoomout: 'Zoom out',
                togglefullscreen: 'Schakel volledig scherm',
            }
        },
        help: {
            title: 'Help',
            checkUpdates: 'Controleer op updates'
        },
        language: {
            label: 'Taal / Language',
            alert: 'Taal ingesteld naar Nederlands.',
            dialog: {
                label: 'Probeert u de Online OneNote taal te configureren?',
                corporate: 'Zakelijk',
                personal: 'Persoonlijk',
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
    redirecting: 'Even geduld, doorverwijzen naar een nieuwe notebook. Dit kan even duren...',
    slow: 'Even geduld, het laden van OneNote duurt even...',
    updater: {
        'checking-for-update': 'Controleren op update ...',
        'update-available': 'Nieuwste release downloaden ...',
        'update-not-available': 'Geen nieuwe update.',
        error: (opts) => {
            return `Fout in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return opts.progressObj.percent + '%' + ' gedownload'
        },
        'update-downloaded': 'Update gedownload. U kunt de applicatie opnieuw opstarten om de update door te voeren.'
    },
    bookmarks: {
        title: 'Bookmarks',
        add: 'Bookmark toevoegen',
        edit: 'Bookmarks bewerken',
        form: {
            title: 'Titel',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Tabblad toevoegen',
        personal: 'Persoonlijk',
        corporate: 'Zakelijk',
        closeTab: 'Tabblad sluiten',
        cannotCloseLastTab: 'Het laatste tabblad kan niet worden gesloten.',
        confirmClose: (tabLabel) => `Weet u zeker dat u "${tabLabel}" wilt sluiten? U wordt afgemeld bij dit account.`,
    },
    validation: {
        required: 'Nodig',
        url: 'Ongeldige url',
    },
};

module.exports = translation;
