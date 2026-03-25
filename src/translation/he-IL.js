const translation = {
    title: 'P3X OneNote',
    restart: 'אנא המתן, האפליקציה מופעלת מחדש.',
    label: {
        darkThemeInvert: {
          title: 'הפעל מצב כהה עם בעיות (באמצעות היפוך)'
        },
        hideMenu: 'הסתר תפריט ראשי (הצג עם ALT)',
        optionToHideMenuState: {
            yes: 'לאחר הפעלה מחדש, התפריט יוסתר ויוצג עם ALT.',
        },
        donate: 'תרומה',
        allowMultiple: {
            checkbox: 'אפשר מופעים מרובים (עם כמה בעיות)',
            message: {
                yes: 'כעת ניתן להשתמש במופעים מרובים עם כמה בעיות.',
                no: 'כעת, מותר רק מופע אחד, ללא בעיות'
            }
        },
        disableHide: {
            checkbox: 'סגור למגש המערכת',
            message: {
                yes: 'כפתור הסגירה באמת סוגר את האפליקציה.',
                no: 'כפתור הסגירה, במקום לצאת, ממזער את האפליקציה למגש המערכת.',
            }
        },
        optionToDisableInternalExternalPopup: 'השבת חלון קופץ פנימי / חיצוני (כל הקישורים פנימיים)',
        settings: 'הגדרות',
        setProxy: 'הגדר פרוקסי',
        openUrl: 'פתח URL',
        promptRedirectUrlTitle: 'הפנה לכתובת URL',
        edit: 'עריכה',
        view: 'תצוגה',
        download: 'הורדה',
        developer: 'Patrik Laszlo',
        personalHome: 'דף בית אישי',
        corporateHome: 'דף בית ארגוני',
        clearCache: 'ראשית התנתק, ואז לחץ על אפשרות תפריט זו כדי לנקות את המטמון',
        quit: 'יציאה',
        show: 'הצג',
        hide: 'הסתר',
        copyLocation: 'העתק מיקום זה ללוח',
        copyLocationCopied: 'המיקום הועתק ללוח.',
        back: 'אחורה',
        forward: 'קדימה',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'ניתן לנווט לכל URL שתרצה',
            placeholder: 'URL תקין',
        },
        minimizationBehavior: {
            title: 'התנהגות מזעור',
        },
        setProxy: {
            placeholder: 'הגדרת פרוקסי',
            info: 'כדי לנקות את הפרוקסי, השתמש במחרוזת ריקה.',
            clear: 'הפרוקסי כבוי.',
            set: (value) => {
                return `הפרוקסי הוגדר כ-${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'חיצוני',
            urlInternal: 'פנימי',
        }
    },
    button: {
        yes: 'כן',
        no: 'לא',
        ok: 'OK',
        cancel: 'ביטול',
        save: 'שמור',
        clear: 'נקה',
        go: 'עבור',
        delete: 'מחק',
    },
    menu: {
        action: 'פעולה',
        role: {
            edit: {
                undo: 'בטל',
                redo: 'בצע שוב',
                cut: 'גזור',
                copy: 'העתק',
                paste: 'הדבק',
                pasteandmatchstyle: 'הדבק והתאם סגנון',
                delete: 'מחק',
                selectall: 'בחר הכל',
            },
            view: {
                reload: 'טען מחדש',
                forcereload: 'טען מחדש בכוח',
                toggledevtools: 'הצג/הסתר כלי פיתוח',
                resetzoom: 'אפס תקריב',
                zoomin: 'הגדל תקריב',
                zoomout: 'הקטן תקריב',
                togglefullscreen: 'הצג/הסתר מסך מלא',
            }
        },
        help: {
            title: 'עזרה',
            checkUpdates: 'בדוק עדכונים'
        },
        language: {
            label: 'עברית / Language',
            alert: 'השפה הוגדרה לעברית.',
            dialog: {
                label: 'לנסות להגדיר את שפת OneNote המקוון?',
                corporate: 'ארגוני',
                personal: 'אישי',
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
    redirecting: 'אנא המתן, מפנה למחברת חדשה. זה לוקח קצת זמן...',
    slow: 'אנא המתן, טעינת OneNote לוקחת קצת זמן...',
    updater: {
        'checking-for-update': 'בודק עדכונים ...',
        'update-available': 'מוריד את הגרסה האחרונה ...',
        'update-not-available': 'אין עדכון חדש.',
        error: (opts) => {
            return `שגיאה בעדכון אוטומטי: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'הורד ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'העדכון הורד. ניתן להפעיל מחדש את האפליקציה כדי לעדכן.'
    },
    bookmarks: {
        title: 'סימניות',
        add: 'הוסף סימניה',
        edit: 'ערוך סימניות',
        form: {
            title: 'כותרת',
            url: 'URL'
        }
    },
    validation: {
        required: 'שדה חובה',
        url: 'URL לא תקין',
    },
};

module.exports = translation;
