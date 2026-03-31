const translation = {
    title: 'P3X OneNote',
    restart: 'Vă rugăm așteptați, aplicația repornește.',
    label: {
        darkThemeInvert: {
          title: 'Activează modul întunecat cu probleme (folosind inversare)'
        },
        hideMenu: 'Ascunde meniul principal (afișează cu ALT)',
        optionToHideMenuState: {
            yes: 'După repornire, va ascunde meniul și îl va afișa la ALT.',
        },
        donate: 'Donează',
        allowMultiple: {
            checkbox: 'Permite instanțe multiple (cu unele probleme)',
            message: {
                yes: 'Acum puteți folosi instanțe multiple cu unele probleme.',
                no: 'Acum, permite doar o singură instanță, fără probleme'
            }
        },
        disableHide: {
            checkbox: 'Închide în zona de notificare',
            message: {
                yes: 'Butonul de închidere chiar închide aplicația.',
                no: 'Butonul de închidere, în loc să iasă, minimizează aplicația în zona de notificare.',
            }
        },
        optionToDisableInternalExternalPopup: 'Dezactivează fereastra pop-up internă / externă (toate linkurile interne)',
        settings: 'Setări',
        setProxy: 'Setează proxy',
        openUrl: 'Deschide un URL',
        promptRedirectUrlTitle: 'Redirecționează la url',
        edit: 'Editare',
        view: 'Vizualizare',
        download: 'Descarcă',
        developer: 'Patrik Laszlo',
        personalHome: 'Pagina personală',
        corporateHome: 'Pagina corporativă',
        clearCache: 'Mai întâi deconectați-vă, apoi faceți clic pe această opțiune de meniu pentru a șterge cache-ul',
        quit: 'Ieșire',
        show: 'Afișează',
        hide: 'Ascunde',
        copyLocation: 'Copiază această locație în clipboard',
        copyLocationCopied: 'Locația a fost copiată în clipboard.',
        back: 'Înapoi',
        forward: 'Înainte',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Puteți naviga la orice URL doriți',
            placeholder: 'un URL valid',
        },
        minimizationBehavior: {
            title: 'Comportament de minimizare',
        },
        setProxy: {
            placeholder: 'Setare proxy',
            info: 'Pentru a șterge proxy-ul, folosiți un șir gol.',
            clear: 'Proxy-ul este dezactivat.',
            set: (value) => {
                return `Proxy-ul este setat ca ${value}`
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
        yes: 'Da',
        no: 'Nu',
        ok: 'OK',
        cancel: 'Anulare',
        save: 'Salvează',
        clear: 'Șterge',
        go: 'Mergi',
        delete: 'Șterge',
    },
    menu: {
        action: 'Acțiune',
        role: {
            edit: {
                undo: 'Anulare',
                redo: 'Refacere',
                cut: 'Taie',
                copy: 'Copiază',
                paste: 'Lipește',
                pasteandmatchstyle: 'Lipește și potrivește stilul',
                delete: 'Șterge',
                selectall: 'Selectează tot',
            },
            view: {
                reload: 'Reîncarcă',
                forcereload: 'Forțează reîncărcarea',
                toggledevtools: 'Comută instrumentele de dezvoltare',
                resetzoom: 'Resetează zoom-ul',
                zoomin: 'Mărește',
                zoomout: 'Micșorează',
                togglefullscreen: 'Comută ecran complet',
            }
        },
        help: {
            title: 'Ajutor',
            checkUpdates: 'Verifică actualizări'
        },
        language: {
            label: 'Română / Language',
            alert: 'Limba setată la Română.',
            dialog: {
                label: 'Încercați să configurați limba OneNote Online?',
                corporate: 'Corporativ',
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
    redirecting: 'Așteptați, redirecționare către un nou caiet. Durează ceva timp...',
    slow: 'Așteptați, încărcarea OneNote durează ceva timp...',
    updater: {
        'checking-for-update': 'Se verifică actualizări ...',
        'update-available': 'Se descarcă ultima versiune ...',
        'update-not-available': 'Nicio actualizare nouă.',
        error: (opts) => {
            return `Eroare în actualizarea automată: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Descărcat ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Actualizare descărcată. Puteți reporni aplicația pentru a actualiza.'
    },
    bookmarks: {
        title: 'Marcaje',
        add: 'Adaugă marcaj',
        edit: 'Editează marcaje',
        form: {
            title: 'Titlu',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Adaugă filă',
        personal: 'Personal',
        corporate: 'Corporativ',
        closeTab: 'Închide fila',
        cannotCloseLastTab: 'Nu se poate închide ultima filă.',
        confirmClose: (tabLabel) => `Sunteți sigur că doriți să închideți „${tabLabel}"? Veți fi deconectat din acest cont.`,
    },
    validation: {
        required: 'Obligatoriu',
        url: 'URL invalid',
    },
};

module.exports = translation;
