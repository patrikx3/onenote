const translation = {
    title: 'P3X OneNote',
    restart: 'Proszę czekać, aplikacja jest restartowana.',
    label: {
        darkThemeInvert: {
          title: 'Włącz tryb ciemny z dziwactwami (używając invert)'
        },
        hideMenu: 'Ukryj główne menu (pokaż z ALT)',
        optionToHideMenuState: {
            yes: 'Po restarcie ukryje menu i pokaże po naciśnięciu ALT.',
        },
        donate: 'Darowizna',
        allowMultiple: {
            checkbox: 'Zezwól na wiele instancji (z pewnymi dziwactwami)',
            message: {
                yes: 'Teraz można używać wielu instancji z pewnymi dziwactwami.',
                no: 'Teraz można używać wyłącznie pojedynczej instancji, bez dziwactw.'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Zminimalizuj do paska zadań',
            message: {
                yes: 'Przycisk zamknij naprawdę zamyka aplikację.',
                no: 'Przycisk zamknij, zamiast zamykać, minimalizuje aplikację do paska zadań.',

            }
        },
        optionToDisableInternalExternalPopup: 'Wyłącz wewnętrzne / zewnętrzne wyskakujące okienka (wszyskie otwieraj wewnątrz)',
        settings: 'Ustawienia',
        setProxy: 'Ustaw proxy',
        openUrl: 'Otwórz URL',
        promptRedirectUrlTitle: 'Przekierowanie na adres URL',
        edit: 'Edytuj',
        view: 'Widok',
        download: 'Pobierz',
        developer: 'Patrik Laszlo',
        personalHome: 'Osobiste',
        corporateHome: 'Służbowe',
        clearCache: 'Najpierw wyloguj się, a następnie kliknij tę opcję menu, aby wyczyścić pamięć podręczną',
        quit: 'Zakończ',
        show: 'Pokaż',
        hide: 'Ukryj',
        copyLocation: 'Skopiuj tę ścieżkę do schowka',
        copyLocationCopied: 'Ścieżka została skopiowana do schowka.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home',
        back: 'Cofnij',
        forward: 'Dalej',
    },
    dialog: {
        info: 'Informacje',
        openUrl: {
            info: 'Możesz przejść do dowolnego URL',
            placeholder: 'prawidłowy URL',

        },
        minimizationBehavior: {
            title: 'Ustawienia minimalizacji',
        },
        setProxy: {
            placeholder: 'Ustawienia proxy',
            info: 'Aby wyłązcyć, usuń zawartość.',
            clear: 'Proxy jest wyłączone.',
            set: (value) => {
                return `Adres serwera proxy ustawiony na ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Zewnętrzny',
            urlInternal: 'Wewnętrzny',
        }
    },
    button: {
        yes: 'Tak',
        no: 'Nie',
        ok: 'OK',
        cancel: 'Anuluj',
        save: 'Zapisz',
        clear: 'Wyczyść',
        go: 'Przejdź',
        delete: 'Usuń',
    },
    menu: {
        action: 'Działanie',
        role: {
            edit: {
                undo: 'Cofnij',
                redo: 'Ponów',
                cut: 'Wytnij',
                copy: 'Kopiuj',
                paste: 'Wklej',
                pasteandmatchstyle: 'Wklej i dostosuj do formatowania',
                delete: 'Usuń',
                selectall: 'Zaznacz wszystko',
            },
            view: {
                reload: 'Załaduj ponownie',
                forcereload: 'Wymuś ponowne załadowanie',
                toggledevtools: 'Włącz/wyłącz ustawienia dewelopera',
                resetzoom: 'Resetowanie powiększenia',
                zoomin: 'Powiększ',
                zoomout: 'Pomniejsz',
                togglefullscreen: 'Włącz/wyłącz pełny ekran',
            }
        },
        help: {
            title: 'Pomoc',
            checkUpdates: 'Sprawdź dostępne aktualizacje'
        },
        language: {
            label: 'Język / Language',
            alert: 'Ustawiono język polski.',
            dialog: {
                label: 'Czy próbujesz skonfigurować język OneNote online?',
                corporate: 'Służbowe',
                personal: 'Osobiste',
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
    redirecting: 'Proszę czekać, przekierowywanie do nowego notatnika trwa ...',
    slow: 'Proszę czekać, ładowanie OneNote trwa ...',
    updater: {
        'checking-for-update': 'Sprawdzanie aktualizacji...',
        'update-available': 'Pobieranie najnowszej wersji ...',
        'update-not-available': 'Brak dostępnych aktualizacji.',
        error: (opts) => {
            return `Błąd automatycznej aktualizacji: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Pobrano ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aktualizacja pobrana. Proszę uruchomić aplikację ponownie aby zainstalować.'
    },
    bookmarks: {
        title: 'Zakładki',
        add: 'Dodaj zakładkę',
        edit: 'Edytuj zakładki',
        form: {
            title: 'Tytuł',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Add tab',
        personal: 'Personal',
        corporate: 'Corporate',
        closeTab: 'Close tab',
        cannotCloseLastTab: 'Cannot close the last tab.',
        confirmClose: (tabLabel) => `Are you sure you want to close \"${tabLabel}\"? You will be signed out of this account.`,
    },
    validation: {
        required: 'Wymagane',
        url: 'Błędny URL',
    },
};

module.exports = translation;
