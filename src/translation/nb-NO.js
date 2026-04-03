const translation = {
    title: 'P3X OneNote',
    restart: 'Vennligst vent, applikasjonen starter på nytt.',
    label: {
        darkThemeInvert: {
          title: 'Aktiver mørk modus (ved bruk av invertering)',
          off: 'Av',
          on: 'På',
          system: 'Følg system',
        },
        hideMenu: 'Skjul hovedmeny (vis med ALT)',
        optionToHideMenuState: {
            yes: 'Etter omstart vil menyen være skjult og vises med ALT.',
        },
        donate: 'Doner',
        disableHide: {
            checkbox: 'Lukk til systemstatusfeltet',
            message: {
                yes: 'Lukk-knappen lukker virkelig appen.',
                no: 'Lukk-knappen, i stedet for å avslutte, minimerer appen til systemstatusfeltet.',
            }
        },
        optionToDisableInternalExternalPopup: 'Deaktiver intern / ekstern popup (alle lenker interne)',
        settings: 'Innstillinger',
        setProxy: 'Angi proxy',
        openUrl: 'Åpne en URL',
        promptRedirectUrlTitle: 'Omdiriger til URL',
        edit: 'Rediger',
        view: 'Vis',
        download: 'Last ned',
        developer: 'Patrik Laszlo',
        personalHome: 'Personlig hjem',
        corporateHome: 'Bedriftshjem',
        clearCache: {
            title: 'Tøm data og start på nytt',
            allTabs: 'Alle faner - alt',
            currentTab: 'Gjeldende fane - alt',
            allCookies: 'Alle faner - kun informasjonskapsler',
            currentCookies: 'Gjeldende fane - kun informasjonskapsler',
            allCache: 'Alle faner - kun hurtigbuffer',
            currentCache: 'Gjeldende fane - kun hurtigbuffer',
            allLabel: 'alle faner',
            currentLabel: 'gjeldende fane',
            done: (scope, type) => `Tømt: ${scope} - ${type}`,
        },
        quit: 'Avslutt',
        show: 'Vis',
        hide: 'Skjul',
        copyLocation: 'Kopier denne plasseringen til utklippstavlen',
        copyLocationCopied: 'Plasseringen er kopiert til utklippstavlen.',
        back: 'Tilbake',
        forward: 'Fremover',
        reportIssue: 'Rapporter problem / Be om funksjon',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Du kan gå til hvilken som helst URL du ønsker',
            placeholder: 'en gyldig URL',
        },
        minimizationBehavior: {
            title: 'Minimeringsatferd',
        },
        setProxy: {
            placeholder: 'Proxy-innstilling',
            info: 'For å fjerne proxyen, bruk en tom streng.',
            clear: 'Proxyen er slått av.',
            set: (value) => {
                return `Proxyen er satt til ${value}`
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
        no: 'Nei',
        ok: 'OK',
        cancel: 'Avbryt',
        save: 'Lagre',
        clear: 'Tøm',
        go: 'Gå',
        delete: 'Slett',
    },
    menu: {
        action: 'Handling',
        role: {
            edit: {
                undo: 'Angre',
                redo: 'Gjør om',
                cut: 'Klipp ut',
                copy: 'Kopier',
                paste: 'Lim inn',
                pasteandmatchstyle: 'Lim inn og samsvar stil',
                delete: 'Slett',
                selectall: 'Merk alt',
            },
            view: {
                reload: 'Last inn på nytt',
                forcereload: 'Tving innlasting på nytt',
                toggledevtools: 'Veksle utviklerverktøy',
                resetzoom: 'Tilbakestill zoom',
                zoomin: 'Zoom inn',
                zoomout: 'Zoom ut',
                togglefullscreen: 'Veksle fullskjerm',
            }
        },
        help: {
            title: 'Hjelp',
            checkUpdates: 'Se etter oppdateringer'
        },
        language: {
            label: 'Norsk / Language',
            alert: 'Språket er satt til norsk.',
            dialog: {
                label: 'Prøv å konfigurere Online OneNote-språk?',
                corporate: 'Bedrift',
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
    redirecting: 'Vennligst vent, omdirigerer til en ny notatbok. Det tar litt tid...',
    slow: 'Vennligst vent, lasting av OneNote tar litt tid...',
    updater: {
        'checking-for-update': 'Ser etter oppdatering ...',
        'update-available': 'Laster ned siste versjon ...',
        'update-not-available': 'Ingen ny oppdatering.',
        error: (opts) => {
            return `Feil i automatisk oppdatering: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Lastet ned ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Oppdatering lastet ned. Du kan starte appen på nytt for å oppdatere.'
    },
    bookmarks: {
        title: 'Bokmerker',
        add: 'Legg til bokmerke',
        edit: 'Rediger bokmerker',
        manager: 'Administrer bokmerker',
        managerSearch: 'Søk bokmerker...',
        managerEmpty: 'Ingen bokmerker funnet.',
        confirmDelete: 'Slette?',
        exportBookmarks: 'Eksporter bokmerker',
        importBookmarks: 'Importer bokmerker',
        exported: 'Bokmerker eksportert.',
        imported: (count) => `${count} bokmerke(r) importert.`,
        exportTitle: 'Eksporter bokmerker',
        importTitle: 'Importer bokmerker',
        form: {
            title: 'Tittel',
            url: 'URL',
            category: 'Mappe',
            categoryPlaceholder: 'f.eks. Arbeid/Prosjekter (bruk / for undermapper)',
        }
    },
    tabs: {
        addTab: 'Legg til fane',
        personal: 'Personlig',
        corporate: 'Bedrift',
        closeTab: 'Lukk fane',
        cannotCloseLastTab: 'Kan ikke lukke den siste fanen.',
        restoreClosedTab: 'Gjenopprett sist lukket fane',
        noClosedTabs: 'Ingen lukkede faner å gjenopprette.',
        renameTab: 'Gi nytt navn til fane',
        clearName: 'Fjern egendefinert navn',
        renamePrompt: 'Skriv inn et egendefinert navn for denne fanen (la stå tomt for standard)',
        renamePlaceholder: 'Egendefinert fanenavn',
        pinTab: 'Fest fane',
        unpinTab: 'Løsne fane',
        cannotClosePinned: 'En festet fane kan ikke lukkes.',
        confirmClose: (tabLabel) => `Er du sikker på at du vil lukke "${tabLabel}"? Du vil bli logget ut av denne kontoen.`,
    },
    validation: {
        required: 'Påkrevd',
        url: 'Ugyldig URL',
    },
};

module.exports = translation;
