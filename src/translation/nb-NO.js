const translation = {
    title: 'P3X OneNote',
    restart: 'Vennligst vent, applikasjonen starter på nytt.',
    label: {
        darkThemeInvert: {
          title: 'Aktiver mørk modus med feil (ved bruk av invertering)'
        },
        hideMenu: 'Skjul hovedmeny (vis med ALT)',
        optionToHideMenuState: {
            yes: 'Etter omstart vil menyen være skjult og vises med ALT.',
        },
        donate: 'Doner',
        allowMultiple: {
            checkbox: 'Tillat flere instanser (med noen feil)',
            message: {
                yes: 'Nå kan du bruke flere instanser med noen feil.',
                no: 'Nå tillates bare én instans, ingen feil'
            }
        },
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
        clearCache: 'Logg ut først, og klikk deretter på dette menyvalget for å tømme hurtigbufferen',
        quit: 'Avslutt',
        show: 'Vis',
        hide: 'Skjul',
        copyLocation: 'Kopier denne plasseringen til utklippstavlen',
        copyLocationCopied: 'Plasseringen er kopiert til utklippstavlen.',
        back: 'Tilbake',
        forward: 'Fremover',
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
        form: {
            title: 'Tittel',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Legg til fane',
        personal: 'Personlig',
        corporate: 'Bedrift',
        closeTab: 'Lukk fane',
        cannotCloseLastTab: 'Kan ikke lukke den siste fanen.',
        confirmClose: (tabLabel) => `Er du sikker på at du vil lukke "${tabLabel}"? Du vil bli logget ut av denne kontoen.`,
    },
    validation: {
        required: 'Påkrevd',
        url: 'Ugyldig URL',
    },
};

module.exports = translation;
