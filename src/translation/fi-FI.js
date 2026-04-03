const translation = {
    title: 'P3X OneNote',
    restart: 'Odota hetki, sovellus käynnistyy uudelleen.',
    label: {
        darkThemeInvert: {
          title: 'Ota tumma tila käyttöön (käyttäen kääntöä)',
          off: 'Pois',
          on: 'Päällä',
          system: 'Seuraa järjestelmää',
        },
        hideMenu: 'Piilota päävalikko (näytä ALT-näppäimellä)',
        optionToHideMenuState: {
            yes: 'Uudelleenkäynnistyksen jälkeen valikko piilotetaan ja näytetään ALT-näppäimellä.',
        },
        donate: 'Lahjoita',
        disableHide: {
            checkbox: 'Sulje ilmaisinalueelle',
            message: {
                yes: 'Sulje-painike todella sulkee sovelluksen.',
                no: 'Sulje-painike pienentää sovelluksen ilmaisinalueelle lopettamisen sijaan.',
            }
        },
        optionToDisableInternalExternalPopup: 'Poista Sisäinen / Ulkoinen ponnahdusikkuna käytöstä (kaikki linkit sisäisiä)',
        settings: 'Asetukset',
        setProxy: 'Aseta välityspalvelin',
        openUrl: 'Avaa URL',
        promptRedirectUrlTitle: 'Uudelleenohjaa osoitteeseen',
        edit: 'Muokkaa',
        view: 'Näytä',
        download: 'Lataa',
        developer: 'Patrik Laszlo',
        personalHome: 'Henkilökohtainen kotisivu',
        corporateHome: 'Yrityksen kotisivu',
        clearCache: {
            title: 'Tyhjennä tiedot ja käynnistä uudelleen',
            allTabs: 'Kaikki välilehdet - kaikki',
            currentTab: 'Nykyinen välilehti - kaikki',
            allCookies: 'Kaikki välilehdet - vain evästeet',
            currentCookies: 'Nykyinen välilehti - vain evästeet',
            allCache: 'Kaikki välilehdet - vain välimuisti',
            currentCache: 'Nykyinen välilehti - vain välimuisti',
            allLabel: 'kaikki välilehdet',
            currentLabel: 'nykyinen välilehti',
            done: (scope, type) => `Tyhjennetty: ${scope} - ${type}`,
        },
        quit: 'Lopeta',
        show: 'Näytä',
        hide: 'Piilota',
        copyLocation: 'Kopioi tämä sijainti leikepöydälle',
        copyLocationCopied: 'Sijainti on kopioitu leikepöydälle.',
        back: 'Takaisin',
        forward: 'Eteenpäin',
        reportIssue: 'Ilmoita ongelma / Pyydä ominaisuutta',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Voit siirtyä mihin tahansa URL-osoitteeseen',
            placeholder: 'kelvollinen URL-osoite',
        },
        minimizationBehavior: {
            title: 'Pienennyksen käyttäytyminen',
        },
        setProxy: {
            placeholder: 'Välityspalvelimen asetus',
            info: 'Tyhjennä välityspalvelin käyttämällä tyhjää merkkijonoa.',
            clear: 'Välityspalvelin on poistettu käytöstä.',
            set: (value) => {
                return `Välityspalvelin on asetettu arvoon ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Ulkoinen',
            urlInternal: 'Sisäinen',
        }
    },
    button: {
        yes: 'Kyllä',
        no: 'Ei',
        ok: 'OK',
        cancel: 'Peruuta',
        save: 'Tallenna',
        clear: 'Tyhjennä',
        go: 'Siirry',
        delete: 'Poista',
    },
    menu: {
        action: 'Toiminto',
        role: {
            edit: {
                undo: 'Kumoa',
                redo: 'Tee uudelleen',
                cut: 'Leikkaa',
                copy: 'Kopioi',
                paste: 'Liitä',
                pasteandmatchstyle: 'Liitä ja sovita tyyli',
                delete: 'Poista',
                selectall: 'Valitse kaikki',
            },
            view: {
                reload: 'Lataa uudelleen',
                forcereload: 'Pakota uudelleenlataus',
                toggledevtools: 'Vaihda kehitystyökalut',
                resetzoom: 'Palauta zoomaus',
                zoomin: 'Lähennä',
                zoomout: 'Loitonna',
                togglefullscreen: 'Vaihda koko näyttö',
            }
        },
        help: {
            title: 'Ohje',
            checkUpdates: 'Tarkista päivitykset'
        },
        language: {
            label: 'Suomi / Language',
            alert: 'Kieli asetettu suomeksi.',
            dialog: {
                label: 'Yritetäänkö määrittää Online OneNote -kieli?',
                corporate: 'Yritys',
                personal: 'Henkilökohtainen',
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
    redirecting: 'Odota, uudelleenohjataan uuteen muistikirjaan. Se kestää hetken...',
    slow: 'Odota, OneNoten lataaminen kestää hetken...',
    updater: {
        'checking-for-update': 'Tarkistetaan päivitystä ...',
        'update-available': 'Ladataan uusinta julkaisua ...',
        'update-not-available': 'Ei uutta päivitystä.',
        error: (opts) => {
            return `Virhe automaattisessa päivityksessä: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Ladattu ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Päivitys ladattu. Voit käynnistää sovelluksen uudelleen päivittääksesi.'
    },
    bookmarks: {
        title: 'Kirjanmerkit',
        add: 'Lisää kirjanmerkki',
        edit: 'Muokkaa kirjanmerkkejä',
        manager: 'Hallitse kirjanmerkkejä',
        managerSearch: 'Etsi kirjanmerkkejä...',
        managerEmpty: 'Kirjanmerkkejä ei löytynyt.',
        confirmDelete: 'Poista?',
        exportBookmarks: 'Vie kirjanmerkit',
        importBookmarks: 'Tuo kirjanmerkit',
        exported: 'Kirjanmerkit viety.',
        imported: (count) => `${count} kirjanmerkkiä tuotu.`,
        exportTitle: 'Vie kirjanmerkit',
        importTitle: 'Tuo kirjanmerkit',
        form: {
            title: 'Otsikko',
            url: 'URL',
            category: 'Kansio',
            categoryPlaceholder: 'esim. Työ/Projektit (käytä / alikansioihin)',
        }
    },
    tabs: {
        addTab: 'Lisää välilehti',
        personal: 'Henkilökohtainen',
        corporate: 'Yritys',
        closeTab: 'Sulje välilehti',
        cannotCloseLastTab: 'Viimeistä välilehteä ei voi sulkea.',
        restoreClosedTab: 'Palauta viimeksi suljettu välilehti',
        noClosedTabs: 'Ei suljettuja välilehtiä palautettavaksi.',
        renameTab: 'Nimeä välilehti uudelleen',
        clearName: 'Tyhjennä mukautettu nimi',
        renamePrompt: 'Anna mukautettu nimi tälle välilehdelle (jätä tyhjäksi oletukselle)',
        renamePlaceholder: 'Mukautettu välilehden nimi',
        pinTab: 'Kiinnitä välilehti',
        unpinTab: 'Irrota välilehti',
        cannotClosePinned: 'Kiinnitettyä välilehteä ei voi sulkea.',
        confirmClose: (tabLabel) => `Haluatko varmasti sulkea "${tabLabel}"? Sinut kirjataan ulos tältä tililtä.`,
    },
    validation: {
        required: 'Pakollinen',
        url: 'Virheellinen url',
    },
};

module.exports = translation;
