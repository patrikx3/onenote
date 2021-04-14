const translation = {
    title: 'P3X OneNote',
    restart: 'Attendi, l\'applicazione si sta riavviando.',
    label: {
        darkThemeInvert: {
            title: 'Abilita la modalità oscura con stranezze (usando invert)'
        },
        hideMenu: 'Nascondi menu principale (mostra con ALT)',
        optionToHideMenuState: {
            yes: 'Dopo il riavvio, nasconderà il menu principale e verrà mostrato con il tasto ALT.',
        },
        donate: 'Dona',
        allowMultiple: {
            checkbox: 'Consenti più istanze (con alcune stranezze)',
            message: {
                yes: 'Ora puoi utilizzare più istanze con alcune stranezze.',
                no: 'Ora, consente solo un\'istanza, senza stranezze'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Chiudi nell\'area di notifica',
            message: {
                yes: 'Il pulsante chiudi chiude veramente l\'app.',
                no: 'Il pulsante chiudi, invece di chiudere l\'app, la minimizza nell\'area di notifica.',

            }
        },
        optionToDisableInternalExternalPopup: 'Disabilita popup interni/esterni (tutti i link interni)',
        settings: 'Impostazioni',
        setProxy: 'Imposta proxy',
        openUrl: 'Apri un URL',
        promptRedirectUrlTitle: 'Redirigi all\'url',
        edit: 'Modifica',
        view: 'Mostra',
        download: 'Download',
        developer: 'Patrik Laszlo',
        personalHome: 'Home Personale',
        corporateHome: 'Home Aziendale',
        clearCache: 'Per prima cosa esci, e quindi fai clic su questa opzione del menu per pulire la cache',
        quit: 'Esci',
        show: 'Mostra',
        hide: 'Nascondi',
        copyLocation: 'Copia questa posizione nella clipboard',
        copyLocationCopied: 'La posizione è stata copiata nella clipboard.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: 'Indietro',
        forward: 'Inoltra',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Tu puoi andare in qualsiasi URL vuoi',
            placeholder: 'un URL valido',

        },
        minimizationBehavior: {
            title: 'Comportamento minimizzazione',
        },
        setProxy: {
            placeholder: 'Impostazioni Proxy',
            info: 'Per pulire il proxy, usa una stringa vuota.',
            clear: 'Il proxy è spento.',
            set: (value) => {
                return `Il proxy è impostato come ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Esterno',
            urlInternal: 'Interno',
        }
    },
    button: {
        yes: 'Si',
        no: 'No',
        ok: 'OK',
        cancel: 'Annulla',
        save: 'Salva',
        clear: 'Pulisci',
        go: 'Vai',
        delete: 'Elimina',
    },
    menu: {
        action: 'Azione',
        role: {
            edit: {
                undo: 'Annulla',
                redo: 'Ripeti',
                cut: 'Taglia',
                copy: 'Copia',
                paste: 'Incolla',
                pasteandmatchstyle: 'Copia e corrispondi stile',
                delete: 'Elimina',
                selectall: 'Seleziona tutto',
            },
            view: {
                reload: 'Ricarica',
                forcereload: 'Forza ricarica',
                toggledevtools: 'Attiva/Disattiva strumenti di sviluppo',
                resetzoom: 'Reimposta Zoom',
                zoomin: 'Zoom In',
                zoomout: 'Zoom out',
                togglefullscreen: 'Attiva/Disattiva Schermo intero',
            }
        },
        help: {
            title: 'Aiuto',
            checkUpdates: 'Controlla aggiornamenti'
        },
        language: {
            label: 'Lingua / Language',
            alert: 'Lingua impostata su inglese.',
            dialog: {
                label: 'Provi a configurare la lingua di OneNote online?',
                corporate: 'Aziendale',
                personal: 'Personale',
            },
            translations: {
                'en-US': 'English',
                'de-DE': 'Deutsch / German',
                'pt-BR': 'Português / Portuguese',
                'es-ES': 'Español / Spanish',
                'fr-FR': 'Français / French',
                'nl-NL': 'Nederlands / Dutch',
                'it-IT': 'Italiano / Italian',
            }
        },
    },
    redirecting: 'Attendi, ti sto reindirizzando ad un nuovo blocco appunti. Potrebbe richiedere un pò di tempo...',
    slow: 'Attendi, il caricamento di OneNote richiede un pò di tempo...',
    updater: {
        'checking-for-update': 'Controllo aggiornamenti ...',
        'update-available': 'Scaricamento ultima versione ...',
        'update-not-available': 'Nessun nuovo aggiornamento.',
        error: (opts) => {
            return `Errore aggiornamento automatico: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Scaricato ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aggiornamento scaricato. Potresti riavviare l\'app per aggiornare.'
    },
    bookmarks: {
        title: 'Segnalibri',
        add: 'Aggiungi segnalibro',
        edit: 'Modifica segnalibro',
        form: {
            title: 'Titolo',
            url: 'URL'
        }
    },
    validation: {
        required: 'Richiesto',
        url: 'Url non valido',
    },
};

module.exports = translation;
