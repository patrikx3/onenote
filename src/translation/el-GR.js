const translation = {
    title: 'P3X OneNote',
    restart: 'Παρακαλώ περιμένετε, η εφαρμογή επανεκκινείται.',
    label: {
        darkThemeInvert: {
          title: 'Ενεργοποίηση σκοτεινής λειτουργίας με ιδιορρυθμίες (χρήση αντιστροφής)'
        },
        hideMenu: 'Απόκρυψη κύριου μενού (εμφάνιση με ALT)',
        optionToHideMenuState: {
            yes: 'Μετά την επανεκκίνηση, το μενού θα κρυφτεί και θα εμφανίζεται με ALT.',
        },
        donate: 'Δωρεά',
        allowMultiple: {
            checkbox: 'Επιτρέψτε πολλαπλές παρουσίες (με κάποιες ιδιορρυθμίες)',
            message: {
                yes: 'Τώρα μπορείτε να χρησιμοποιήσετε πολλαπλές παρουσίες με κάποιες ιδιορρυθμίες.',
                no: 'Τώρα επιτρέπεται μόνο μία παρουσία, χωρίς ιδιορρυθμίες.'
            }
        },
        disableHide: {
            checkbox: 'Κλείσιμο στην περιοχή ειδοποιήσεων',
            message: {
                yes: 'Το κουμπί κλεισίματος κλείνει πραγματικά την εφαρμογή.',
                no: 'Το κουμπί κλεισίματος, αντί να τερματίσει, ελαχιστοποιεί την εφαρμογή στην περιοχή ειδοποιήσεων.',
            }
        },
        optionToDisableInternalExternalPopup: 'Απενεργοποίηση αναδυόμενου παραθύρου Εσωτερικό / Εξωτερικό (όλοι οι σύνδεσμοι εσωτερικοί)',
        settings: 'Ρυθμίσεις',
        setProxy: 'Ορισμός proxy',
        openUrl: 'Άνοιγμα URL',
        promptRedirectUrlTitle: 'Ανακατεύθυνση σε url',
        edit: 'Επεξεργασία',
        view: 'Προβολή',
        download: 'Λήψη',
        developer: 'Patrik Laszlo',
        personalHome: 'Προσωπική αρχική σελίδα',
        corporateHome: 'Εταιρική αρχική σελίδα',
        clearCache: 'Πρώτα αποσυνδεθείτε, μετά κάντε κλικ σε αυτήν την επιλογή μενού για εκκαθάριση της προσωρινής μνήμης',
        quit: 'Έξοδος',
        show: 'Εμφάνιση',
        hide: 'Απόκρυψη',
        copyLocation: 'Αντιγραφή αυτής της τοποθεσίας στο πρόχειρο',
        copyLocationCopied: 'Η τοποθεσία αντιγράφηκε στο πρόχειρο.',
        back: 'Πίσω',
        forward: 'Εμπρός',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Μπορείτε να μεταβείτε σε οποιαδήποτε URL επιθυμείτε',
            placeholder: 'μια έγκυρη URL',
        },
        minimizationBehavior: {
            title: 'Συμπεριφορά ελαχιστοποίησης',
        },
        setProxy: {
            placeholder: 'Ρύθμιση proxy',
            info: 'Για εκκαθάριση του proxy, χρησιμοποιήστε ένα κενό κείμενο.',
            clear: 'Το proxy απενεργοποιήθηκε.',
            set: (value) => {
                return `Το proxy ορίστηκε ως ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Εξωτερικό',
            urlInternal: 'Εσωτερικό',
        }
    },
    button: {
        yes: 'Ναι',
        no: 'Όχι',
        ok: 'OK',
        cancel: 'Ακύρωση',
        save: 'Αποθήκευση',
        clear: 'Εκκαθάριση',
        go: 'Μετάβαση',
        delete: 'Διαγραφή',
    },
    menu: {
        action: 'Ενέργεια',
        role: {
            edit: {
                undo: 'Αναίρεση',
                redo: 'Επανάληψη',
                cut: 'Αποκοπή',
                copy: 'Αντιγραφή',
                paste: 'Επικόλληση',
                pasteandmatchstyle: 'Επικόλληση και αντιστοίχιση στυλ',
                delete: 'Διαγραφή',
                selectall: 'Επιλογή όλων',
            },
            view: {
                reload: 'Επαναφόρτωση',
                forcereload: 'Αναγκαστική επαναφόρτωση',
                toggledevtools: 'Εναλλαγή εργαλείων ανάπτυξης',
                resetzoom: 'Επαναφορά μεγέθυνσης',
                zoomin: 'Μεγέθυνση',
                zoomout: 'Σμίκρυνση',
                togglefullscreen: 'Εναλλαγή πλήρους οθόνης',
            }
        },
        help: {
            title: 'Βοήθεια',
            checkUpdates: 'Έλεγχος ενημερώσεων'
        },
        language: {
            label: 'Ελληνικά / Language',
            alert: 'Η γλώσσα ορίστηκε σε Ελληνικά.',
            dialog: {
                label: 'Δοκιμή ρύθμισης γλώσσας του Online OneNote;',
                corporate: 'Εταιρικό',
                personal: 'Προσωπικό',
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
    redirecting: 'Περιμένετε, ανακατεύθυνση σε νέο σημειωματάριο. Χρειάζεται λίγο χρόνο...',
    slow: 'Περιμένετε, η φόρτωση του OneNote χρειάζεται λίγο χρόνο...',
    updater: {
        'checking-for-update': 'Έλεγχος για ενημέρωση ...',
        'update-available': 'Λήψη τελευταίας έκδοσης ...',
        'update-not-available': 'Δεν υπάρχει νέα ενημέρωση.',
        error: (opts) => {
            return `Σφάλμα στην αυτόματη ενημέρωση: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Λήφθηκε ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Η ενημέρωση λήφθηκε. Μπορείτε να επανεκκινήσετε την εφαρμογή για ενημέρωση.'
    },
    bookmarks: {
        title: 'Σελιδοδείκτες',
        add: 'Προσθήκη σελιδοδείκτη',
        edit: 'Επεξεργασία σελιδοδεικτών',
        form: {
            title: 'Τίτλος',
            url: 'URL'
        }
    },
    validation: {
        required: 'Απαιτείται',
        url: 'Μη έγκυρη url',
    },
};

module.exports = translation;
