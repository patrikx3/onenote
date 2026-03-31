const translation = {
    title: 'P3X OneNote',
    restart: 'Si us plau, espereu, l\'aplicació s\'està reiniciant.',
    label: {
        darkThemeInvert: {
          title: 'Activa el mode fosc amb peculiaritats (usant inversió)'
        },
        hideMenu: 'Amaga el menú principal (mostra amb ALT)',
        optionToHideMenuState: {
            yes: 'Després de reiniciar, amagarà el menú i el mostrarà amb ALT.',
        },
        donate: 'Dona',
        allowMultiple: {
            checkbox: 'Permet múltiples instàncies (amb algunes peculiaritats)',
            message: {
                yes: 'Ara pots utilitzar múltiples instàncies amb algunes peculiaritats.',
                no: 'Ara, només permet una instància, sense peculiaritats'
            }
        },
        disableHide: {
            checkbox: 'Tanca a la safata del sistema',
            message: {
                yes: 'El botó de tancar realment tanca l\'aplicació.',
                no: 'El botó de tancar, en lloc de sortir, minimitza l\'aplicació a la safata del sistema.',
            }
        },
        optionToDisableInternalExternalPopup: 'Desactiva la finestra emergent Interna / Externa (tots els enllaços interns)',
        settings: 'Configuració',
        setProxy: 'Estableix el proxy',
        openUrl: 'Obre un URL',
        promptRedirectUrlTitle: 'Redirigeix a url',
        edit: 'Edita',
        view: 'Visualitza',
        download: 'Descarrega',
        developer: 'Patrik Laszlo',
        personalHome: 'Inici personal',
        corporateHome: 'Inici corporatiu',
        clearCache: 'Primer tanca la sessió, després fes clic en aquesta opció del menú per netejar la memòria cau',
        quit: 'Surt',
        show: 'Mostra',
        hide: 'Amaga',
        copyLocation: 'Copia aquesta ubicació al porta-retalls',
        copyLocationCopied: 'La ubicació s\'ha copiat al porta-retalls.',
        back: 'Enrere',
        forward: 'Endavant',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Pots anar a qualsevol URL que vulguis',
            placeholder: 'un URL vàlid',
        },
        minimizationBehavior: {
            title: 'Comportament de minimització',
        },
        setProxy: {
            placeholder: 'Configuració del proxy',
            info: 'Per netejar el proxy, utilitza una cadena buida.',
            clear: 'El proxy s\'ha desactivat.',
            set: (value) => {
                return `El proxy s'ha establert com ${value}`
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
        yes: 'Sí',
        no: 'No',
        ok: 'OK',
        cancel: 'Cancel·la',
        save: 'Desa',
        clear: 'Neteja',
        go: 'Vés',
        delete: 'Elimina',
    },
    menu: {
        action: 'Acció',
        role: {
            edit: {
                undo: 'Desfés',
                redo: 'Refés',
                cut: 'Retalla',
                copy: 'Copia',
                paste: 'Enganxa',
                pasteandmatchstyle: 'Enganxa i coincideix l\'estil',
                delete: 'Elimina',
                selectall: 'Selecciona-ho tot',
            },
            view: {
                reload: 'Recarrega',
                forcereload: 'Força la recàrrega',
                toggledevtools: 'Commuta les eines de desenvolupament',
                resetzoom: 'Restableix el zoom',
                zoomin: 'Amplia',
                zoomout: 'Redueix',
                togglefullscreen: 'Commuta la pantalla completa',
            }
        },
        help: {
            title: 'Ajuda',
            checkUpdates: 'Comprova actualitzacions'
        },
        language: {
            label: 'Català / Language',
            alert: 'L\'idioma s\'ha establert a Català.',
            dialog: {
                label: 'Intentar configurar l\'idioma d\'OneNote en línia?',
                corporate: 'Corporatiu',
                personal: 'Personal',
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
    redirecting: 'Espera, redirigint a una llibreta nova. Triga una estona...',
    slow: 'Espera, carregar OneNote triga una estona...',
    updater: {
        'checking-for-update': 'Comprovant actualitzacions ...',
        'update-available': 'Descarregant l\'última versió ...',
        'update-not-available': 'No hi ha cap actualització nova.',
        error: (opts) => {
            return `Error en l'actualitzador automàtic: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Descarregat ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Actualització descarregada. Pots reiniciar l\'aplicació per actualitzar.'
    },
    bookmarks: {
        title: 'Marcadors',
        add: 'Afegeix un marcador',
        edit: 'Edita els marcadors',
        form: {
            title: 'Títol',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Afegeix pestanya',
        personal: 'Personal',
        corporate: 'Corporatiu',
        closeTab: 'Tanca la pestanya',
        cannotCloseLastTab: 'No es pot tancar l\'última pestanya.',
        confirmClose: (tabLabel) => `Esteu segur que voleu tancar "${tabLabel}"? Es tancarà la sessió d'aquest compte.`,
    },
    validation: {
        required: 'Obligatori',
        url: 'url no vàlid',
    },
};

module.exports = translation;
