const translation = {
    title: 'P3X OneNote',
    restart: 'Vänligen vänta, applikationen startar om.',
    label: {
        darkThemeInvert: {
          title: 'Aktivera mörkt läge med brister (med invertering)'
        },
        hideMenu: 'Dölj huvudmenyn (visa med ALT)',
        optionToHideMenuState: {
            yes: 'Efter omstart kommer menyn att döljas och visas med ALT.',
        },
        donate: 'Donera',
        allowMultiple: {
            checkbox: 'Tillåt flera instanser (med vissa brister)',
            message: {
                yes: 'Nu kan du använda flera instanser med vissa brister.',
                no: 'Nu tillåts bara en instans, inga brister'
            }
        },
        disableHide: {
            checkbox: 'Stäng till systemfältet',
            message: {
                yes: 'Stäng-knappen stänger verkligen appen.',
                no: 'Stäng-knappen, istället för att avsluta, minimerar appen till systemfältet.',
            }
        },
        optionToDisableInternalExternalPopup: 'Inaktivera intern / extern popup (alla länkar interna)',
        settings: 'Inställningar',
        setProxy: 'Ange proxy',
        openUrl: 'Öppna en URL',
        promptRedirectUrlTitle: 'Omdirigera till url',
        edit: 'Redigera',
        view: 'Visa',
        download: 'Ladda ner',
        developer: 'Patrik Laszlo',
        personalHome: 'Personlig startsida',
        corporateHome: 'Företagets startsida',
        clearCache: 'Logga ut först, klicka sedan på detta menyalternativ för att rensa cachen',
        quit: 'Avsluta',
        show: 'Visa',
        hide: 'Dölj',
        copyLocation: 'Kopiera denna plats till urklipp',
        copyLocationCopied: 'Platsen har kopierats till urklipp.',
        back: 'Bakåt',
        forward: 'Framåt',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Du kan gå till vilken URL du vill',
            placeholder: 'en giltig URL',
        },
        minimizationBehavior: {
            title: 'Minimiseringsbeteende',
        },
        setProxy: {
            placeholder: 'Proxyinställning',
            info: 'För att rensa proxyn, använd en tom sträng.',
            clear: 'Proxyn är avstängd.',
            set: (value) => {
                return `Proxyn är inställd som ${value}`
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
        no: 'Nej',
        ok: 'OK',
        cancel: 'Avbryt',
        save: 'Spara',
        clear: 'Rensa',
        go: 'Gå',
        delete: 'Ta bort',
    },
    menu: {
        action: 'Åtgärd',
        role: {
            edit: {
                undo: 'Ångra',
                redo: 'Gör om',
                cut: 'Klipp ut',
                copy: 'Kopiera',
                paste: 'Klistra in',
                pasteandmatchstyle: 'Klistra in och matcha stil',
                delete: 'Ta bort',
                selectall: 'Markera alla',
            },
            view: {
                reload: 'Ladda om',
                forcereload: 'Tvinga omladdning',
                toggledevtools: 'Växla utvecklarverktyg',
                resetzoom: 'Återställ zoom',
                zoomin: 'Zooma in',
                zoomout: 'Zooma ut',
                togglefullscreen: 'Växla fullskärm',
            }
        },
        help: {
            title: 'Hjälp',
            checkUpdates: 'Sök efter uppdateringar'
        },
        language: {
            label: 'Svenska / Language',
            alert: 'Språk inställt på Svenska.',
            dialog: {
                label: 'Försök att konfigurera Online OneNote-språk?',
                corporate: 'Företag',
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
    redirecting: 'Vänta, omdirigerar till en ny anteckningsbok. Det tar lite tid...',
    slow: 'Vänta, det tar lite tid att ladda OneNote...',
    updater: {
        'checking-for-update': 'Söker efter uppdateringar ...',
        'update-available': 'Laddar ner senaste versionen ...',
        'update-not-available': 'Ingen ny uppdatering.',
        error: (opts) => {
            return `Fel i automatisk uppdatering: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Nedladdat ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Uppdatering nedladdad. Du kan starta om appen för att uppdatera.'
    },
    bookmarks: {
        title: 'Bokmärken',
        add: 'Lägg till bokmärke',
        edit: 'Redigera bokmärken',
        form: {
            title: 'Titel',
            url: 'URL'
        }
    },
    validation: {
        required: 'Obligatorisk',
        url: 'Ogiltig url',
    },
};

module.exports = translation;
