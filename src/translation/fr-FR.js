const translation = {
    title: 'P3X OneNote',
    restart: 'Veuillez patienter, l\'application redémarre.',
    label: {
        darkThemeInvert: {
            title: 'Activer le mode sombre avec des bizarreries (en utilisant l\'inversion)'
        },
        hideMenu: 'Masquer le menu principal (afficher avec ALT)',
        optionToHideMenuState: {
            yes: 'Après le redémarrage, il masquera le menu et s\'affichera sur ALT.',
        },
        donate: 'Faire un don',
        allowMultiple: {
            checkbox: 'Autoriser plusieurs instances (avec quelques bizarreries)',
            message: {
                yes: 'Vous pouvez maintenant utiliser plusieurs instances avec quelques bizarreries.',
                no: 'Une seule instance est possible, pas de bizarreries.'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Fermeture dans la barre des tâches',
            message: {
                yes: 'Le bouton de fermeture quitte l\'application.',
                no: 'Le bouton de fermeture réduit l\'application dans la barre des tâches.',

            }
        },
        optionToDisableInternalExternalPopup: 'Désactiver les popups interne et externe',
        settings: 'Paramètres',
        setProxy: 'Sélection du proxy',
        openUrl: 'Ouvrir une URL',
        promptRedirectUrlTitle: 'Redirige vers l\'URL',
        edit: 'Edition',
        view: 'Affichage',
        download: 'Télécharger',
        developer: 'Patrik Laszlo',
        personalHome: 'Compte personnel',
        corporateHome: 'Compte professionnel',
        clearCache: 'Premièrement déconnectez-vous, puis sélectionnez cette option pour nettoyer le cache',
        quit: 'Quitter',
        show: 'Afficher',
        hide: 'Cacher',
        copyLocation: 'Copier cette emplacement',
        copyLocationCopied: 'Cette emplacement a été copié dans le presse-papier.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: 'Reculer',
        forward: 'Avancer',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Il est possible d\'aller sur n\'importe quelle URL',
            placeholder: 'Une URL valide',

        },
        minimizationBehavior: {
            title: 'Comportement pour le bouton de fermeture',
        },
        setProxy: {
            placeholder: 'Paramètre du proxy',
            info: 'Pour supprimer le proxy, utilisez un champ vide.',
            clear: 'Le proxy est désactivé',
            set: (value) => {
                return `Le paramètre du proxy est : ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Externe',
            urlInternal: 'Interne',
        }
    },
    button: {
        yes: 'Oui',
        no: 'Non',
        ok: 'OK',
        cancel: 'Annuler',
        save: 'Sauvegarder',
        clear: 'Nettoyer',
        go: 'Aller à',
        delete: 'Supprimer',
    },
    menu: {
        action: 'Action',
        role: {
            edit: {
                undo: 'Annuler',
                redo: 'Rétablir',
                cut: 'Couper',
                copy: 'Copier',
                paste: 'Coller',
                pasteandmatchstyle: 'Coller en gardant le style d\'origine',
                delete: 'Supprimer',
                selectall: 'Tout sélectionner',
            },
            view: {
                reload: 'Actualiser',
                forcereload: 'Forcer l\'actualisation',
                toggledevtools: 'Afficher les outils de développement',
                resetzoom: 'Réintialiser le zoom',
                zoomin: 'Zoomer',
                zoomout: 'Dézoomer',
                togglefullscreen: 'Activer le mode plein écran',
            }
        },
        help: {
            title: 'Aide',
            checkUpdates: 'Rechercher des mises à jour'
        },
        language: {
            label: 'Langue / Language',
            alert: 'Langue paramétrée à Français.',
            dialog: {
                label: 'Essayer de configurer la langue de OneNote en ligne ?',
                corporate: 'Entreprise',
                personal: 'Personnel',
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
    redirecting: 'Veuillez patienter, redirection en cours ...',
    slow: 'Veuillez patienter, le chargement de OneNote peut être lent ...',
    updater: {
        'checking-for-update': 'Recherche de mise à jour ...',
        'update-available': 'Téléchargement des dernière mises à jour ...',
        'update-not-available': 'Pas de nouvelles mise à jour.',
        error: (opts) => {
            return `Erreur dans la mise à jour automatique : ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Téléchargé ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Mise à jour terminée. Vous devez rédemarrer l\'application pour finir la mise à jour.'
    },
    bookmarks: {
        title: 'Favoris',
        add: 'Ajouter un marque-page',
        edit: 'Modifier les favoris',
        form: {
            title: 'Titre',
            url: 'URL'
        }
    },
    validation: {
        required: 'Obligatoire',
        url: 'URL invalide',
    },
};

module.exports = translation;
