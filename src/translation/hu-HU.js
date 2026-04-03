const translation = {
    title: 'P3X OneNote',
    restart: 'Kérjük, várjon, az alkalmazás újraindul.',
    label: {
        darkThemeInvert: {
          title: 'Sötét mód engedélyezése (invertálással)',
          off: 'Ki',
          on: 'Be',
          system: 'Rendszer követése',
        },
        hideMenu: 'Főmenü elrejtése (megjelenítés ALT-tal)',
        optionToHideMenuState: {
            yes: 'Újraindítás után a menü rejtve lesz, és ALT-tal jeleníthető meg.',
        },
        donate: 'Adományozás',
        disableHide: {
            checkbox: 'Bezárás a tálcára',
            message: {
                yes: 'A bezárás gomb valóban bezárja az alkalmazást.',
                no: 'A bezárás gomb a kilépés helyett a tálcára minimalizálja az alkalmazást.',
            }
        },
        optionToDisableInternalExternalPopup: 'Belső / Külső felugró ablak letiltása (minden link belső)',
        settings: 'Beállítások',
        setProxy: 'Proxy beállítása',
        openUrl: 'URL megnyitása',
        promptRedirectUrlTitle: 'Átirányítás URL-re',
        edit: 'Szerkesztés',
        view: 'Nézet',
        download: 'Letöltés',
        developer: 'Patrik Laszlo',
        personalHome: 'Személyes kezdőlap',
        corporateHome: 'Vállalati kezdőlap',
        clearCache: {
            title: 'Adatok törlése és újraindítás',
            allTabs: 'Összes fül - minden',
            currentTab: 'Aktuális fül - minden',
            allCookies: 'Összes fül - csak sütik',
            currentCookies: 'Aktuális fül - csak sütik',
            allCache: 'Összes fül - csak gyorsítótár',
            currentCache: 'Aktuális fül - csak gyorsítótár',
            allLabel: 'összes fül',
            currentLabel: 'aktuális fül',
            done: (scope, type) => `Törölve: ${scope} - ${type}`,
        },
        quit: 'Kilépés',
        show: 'Megjelenítés',
        hide: 'Elrejtés',
        copyLocation: 'Hely másolása a vágólapra',
        copyLocationCopied: 'A hely a vágólapra másolva.',
        back: 'Vissza',
        forward: 'Előre',
        reportIssue: 'Hiba bejelentése / Funkció kérése',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Bármilyen URL-re navigálhat',
            placeholder: 'érvényes URL',
        },
        minimizationBehavior: {
            title: 'Minimalizálási viselkedés',
        },
        setProxy: {
            placeholder: 'Proxy beállítás',
            info: 'A proxy törléséhez használjon üres karakterláncot.',
            clear: 'A proxy ki van kapcsolva.',
            set: (value) => {
                return `A proxy beállítva: ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Külső',
            urlInternal: 'Belső',
        }
    },
    button: {
        yes: 'Igen',
        no: 'Nem',
        ok: 'OK',
        cancel: 'Mégse',
        save: 'Mentés',
        clear: 'Törlés',
        go: 'Ugrás',
        delete: 'Törlés',
    },
    menu: {
        action: 'Művelet',
        role: {
            edit: {
                undo: 'Visszavonás',
                redo: 'Újra',
                cut: 'Kivágás',
                copy: 'Másolás',
                paste: 'Beillesztés',
                pasteandmatchstyle: 'Beillesztés és stílus egyeztetése',
                delete: 'Törlés',
                selectall: 'Összes kijelölése',
            },
            view: {
                reload: 'Újratöltés',
                forcereload: 'Kényszerített újratöltés',
                toggledevtools: 'Fejlesztői eszközök ki/be',
                resetzoom: 'Nagyítás visszaállítása',
                zoomin: 'Nagyítás',
                zoomout: 'Kicsinyítés',
                togglefullscreen: 'Teljes képernyő ki/be',
            }
        },
        help: {
            title: 'Súgó',
            checkUpdates: 'Frissítések keresése'
        },
        language: {
            label: 'Magyar / Language',
            alert: 'A nyelv magyarra van állítva.',
            dialog: {
                label: 'Megpróbálja beállítani az Online OneNote nyelvét?',
                corporate: 'Vállalati',
                personal: 'Személyes',
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
    redirecting: 'Kérjük, várjon, átirányítás egy új jegyzetfüzetbe. Ez eltart egy ideig...',
    slow: 'Kérjük, várjon, a OneNote betöltése eltart egy ideig...',
    updater: {
        'checking-for-update': 'Frissítés keresése ...',
        'update-available': 'A legújabb verzió letöltése ...',
        'update-not-available': 'Nincs új frissítés.',
        error: (opts) => {
            return `Hiba az automatikus frissítőben: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Letöltve ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'A frissítés letöltve. Indítsa újra az alkalmazást a frissítéshez.'
    },
    bookmarks: {
        title: 'Könyvjelzők',
        add: 'Könyvjelző hozzáadása',
        edit: 'Könyvjelzők szerkesztése',
        manager: 'Könyvjelzők kezelése',
        managerSearch: 'Könyvjelzők keresése...',
        managerEmpty: 'Nem található könyvjelző.',
        confirmDelete: 'Törlés?',
        exportBookmarks: 'Könyvjelzők exportálása',
        importBookmarks: 'Könyvjelzők importálása',
        exported: 'Könyvjelzők exportálva.',
        imported: (count) => `Importálva ${count} könyvjelző.`,
        exportTitle: 'Könyvjelzők exportálása',
        importTitle: 'Könyvjelzők importálása',
        form: {
            title: 'Cím',
            url: 'URL',
            category: 'Mappa',
            categoryPlaceholder: 'pl. Munka/Projektek (használj / almappákhoz)',
        }
    },
    tabs: {
        addTab: 'Lap hozzáadása',
        personal: 'Személyes',
        corporate: 'Vállalati',
        closeTab: 'Lap bezárása',
        cannotCloseLastTab: 'Az utolsó lapot nem lehet bezárni.',
        restoreClosedTab: 'Utolsó bezárt fül visszaállítása',
        noClosedTabs: 'Nincs visszaállítható bezárt fül.',
        renameTab: 'Fül átnevezése',
        clearName: 'Egyéni név törlése',
        renamePrompt: 'Adjon meg egy egyéni nevet ehhez a fülhöz (hagyja üresen az alapértelmezetthez)',
        renamePlaceholder: 'Egyéni fülnév',
        pinTab: 'Fül rögzítése',
        unpinTab: 'Fül rögzítésének feloldása',
        cannotClosePinned: 'Rögzített fül nem zárható be.',
        confirmClose: (tabLabel) => `Biztosan bezárja a(z) "${tabLabel}" lapot? Ki lesz jelentkezve ebből a fiókból.`,
    },
    validation: {
        required: 'Kötelező',
        url: 'Érvénytelen URL',
    },
};

module.exports = translation;
