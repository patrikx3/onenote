const translation = {
    title: 'P3X OneNote',
    restart: 'Bitte warten Sie, die Anwendung wird neu gestartet.',
    label: {
        darkThemeInvert: {
            title: 'Aktivieren Sie den Dunkelmodus mit Macken (mit invertieren)'
        },
        hideMenu: 'Hauptmenü ausblenden (mit ALT anzeigen)',
        optionToHideMenuState: {
            yes: 'Nach dem Neustart wird das Menü ausgeblendet und auf ALT angezeigt.',
        },
        donate: 'Spenden',
        allowMultiple: {
            checkbox: 'Mehrere App-Instanzen erlauben (mit ein paar Tricks)',
            message: {
                yes: 'Nutzung mehrerer Instanzen aktiv (mit ein paar Tricks).',
                no: 'Nutzung mehrerer Instanzen deaktiviert (ohne Tricks).'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Schließen-Knopf Einstellung',
            message: {
                yes: 'Schließen-Knopf beendet die Anwendung.',
                no: 'Schließen-Knopf minimiert die Anwendung.',

            }
        },
        optionToDisableInternalExternalPopup: 'Deaktivere Popup beim öffnen externener Links (alle Links intern öffnen)',
        settings: 'Einstellungen',
        setProxy: 'Proxy-Einstellungen',
        openUrl: 'URL öffnen',
        promptRedirectUrlTitle: 'Weiter zu URL',
        edit: 'Bearbeiten',
        view: 'Anzeigen',
        download: 'Download',
        developer: 'Patrik Laszlo',
        personalHome: 'Persönlich',
        corporateHome: 'Business',
        clearCache: 'Abmelden und Cache leeren',
        quit: 'Beenden',
        show: 'Maximieren',
        hide: 'Minimieren',
        copyLocation: 'Speicherort in Zwischenablage kopieren',
        copyLocationCopied: 'Speicherort in Zwischenablage kopiert.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home'
        back: 'Zurück',
        forward: 'Weiter',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Sie können zu jeder gewünschten URL gelangen',
            placeholder: 'Eine gültige URL',

        },
        minimizationBehavior: {
            title: 'Minimiere Einstellungen',
        },
        setProxy: {
            placeholder: 'Proxy-Einstellungen',
            info: 'Zum deaktiveren alles löschen.',
            clear: 'Der Proxy ist deaktiviert.',
            set: (value) => {
                return `Proxyserver-Adresse ist ${value}`
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
        no: 'Nein',
        ok: 'OK',
        cancel: 'Abbrechen',
        save: 'Speichern',
        clear: 'Neu',
        go: 'Los',
        delete: 'Löschen',
    },
    menu: {
        action: 'Bearbeiten',
        role: {
            edit: {
                undo: 'Rückgängig',
                redo: 'Wiederherstellen',
                cut: 'Ausschneiden',
                copy: 'Kopieren',
                paste: 'Einfügen',
                pasteandmatchstyle: 'Einfügen und Formattierung beibehalten',
                delete: 'Löschen',
                selectall: 'Alles auswählen',
            },
            view: {
                reload: 'Neu laden',
                forcereload: 'Neu laden erzwingen',
                toggledevtools: 'Entwicklereinstellungen aktivieren/deaktivieren',
                resetzoom: 'Normale Größe',
                zoomin: 'Vergrößern',
                zoomout: 'Verkleinern',
                togglefullscreen: 'Vollbild',
            }
        },
        help: {
            title: 'Hilfe',
            checkUpdates: 'Auf Updates prüfen'
        },
        language: {
            label: 'Sprache / Language',
            alert: 'Sprache auf Deutsch eingestellt.',
            dialog: {
                label: 'Versuchen Sie, die Online OneNote-Sprache zu konfigurieren?',
                corporate: 'Business',
                personal: 'Persönlich',
            },
            translations: {
                'en-US': 'Englisch / English',
                'de-DE': 'Deutsch / German',
                'pt-BR': 'Portugisisch / Português',
                'es-ES': 'Spanisch / Spanish',
                'fr-FR': 'Französisch / French',
                'nl-NL': 'Niederländisch / Dutch',
                'it-IT': 'Italiänisch / Italian',

            },
        },
    },
    redirecting: 'Einen Moment, es wird zu einem neuen Notzibuch umgeleitet. Dies kann eine Weile dauern...',
    slow: 'Einen Moment, das Laden von OneNote kann eine Weile dauern...',
    updater: {
        'checking-for-update': 'Prüfen auf neue Updates ...',
        'update-available': 'Aktuellste Version wird geladen ...',
        'update-not-available': 'Version ist aktuell.',
        error: (opts) => {
            return `Error in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Heruntergeladen ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aktuellste Version heruntergeladen. Neustarten um den Updatevorgang abzuschließen.'
    },
    bookmarks: {
        title: 'Lesezeichen',
        add: 'Lesezeichen hinzufügen',
        edit: 'Lesezeichen bearbeiten',
        form: {
            title: 'Titel',
            url: 'URL'
        }
    },
    validation: {
        required: 'Erforderlich',
        url: 'Ungültige URL',
    },
};

module.exports = translation;
