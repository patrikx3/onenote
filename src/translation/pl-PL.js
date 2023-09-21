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
                'de-DE': 'Deutsch / German',
                'pt-BR': 'Português / Portuguese',
                'es-ES': 'Español / Spanish',
                'fr-FR': 'Français / French',
                'nl-NL': 'Nederlands / Dutch',
                'it-IT': 'Italiano / Italian',
                'zh-CN': '简体中文 / Simplified Chinese',
                'ru-RU': 'Русский / Russian',
                'pl-PL': 'Polski / Polish',
                'tr-TR': 'Türkçe / Turkish',
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
    validation: {
        required: 'Wymagane',
        url: 'Błędny URL',
    },
};

module.exports = translation;
