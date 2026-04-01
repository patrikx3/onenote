const translation = {
    title: 'P3X OneNote',
    restart: 'يرجى الانتظار، التطبيق يعيد التشغيل.',
    label: {
        darkThemeInvert: {
          title: 'تفعيل الوضع الداكن (باستخدام العكس)',
          off: 'إيقاف',
          on: 'تشغيل',
          system: 'اتباع النظام',
        },
        hideMenu: 'إخفاء القائمة الرئيسية (إظهار بمفتاح ALT)',
        optionToHideMenuState: {
            yes: 'بعد إعادة التشغيل، سيتم إخفاء القائمة وإظهارها بمفتاح ALT.',
        },
        donate: 'تبرع',
        disableHide: {
            checkbox: 'إغلاق إلى شريط النظام',
            message: {
                yes: 'زر الإغلاق يغلق التطبيق فعلياً.',
                no: 'زر الإغلاق، بدلاً من الإنهاء، يصغّر التطبيق إلى شريط النظام.',
            }
        },
        optionToDisableInternalExternalPopup: 'تعطيل النافذة المنبثقة الداخلية / الخارجية (جميع الروابط داخلية)',
        settings: 'الإعدادات',
        setProxy: 'تعيين الوكيل',
        openUrl: 'فتح عنوان URL',
        promptRedirectUrlTitle: 'إعادة التوجيه إلى عنوان url',
        edit: 'تحرير',
        view: 'عرض',
        download: 'تنزيل',
        developer: 'Patrik Laszlo',
        personalHome: 'الصفحة الرئيسية الشخصية',
        corporateHome: 'الصفحة الرئيسية للشركة',
        clearCache: {
            title: 'مسح البيانات وإعادة التشغيل',
            allTabs: 'جميع علامات التبويب - الكل',
            currentTab: 'علامة التبويب الحالية - الكل',
            allCookies: 'جميع علامات التبويب - ملفات تعريف الارتباط فقط',
            currentCookies: 'علامة التبويب الحالية - ملفات تعريف الارتباط فقط',
            allCache: 'جميع علامات التبويب - ذاكرة التخزين المؤقت فقط',
            currentCache: 'علامة التبويب الحالية - ذاكرة التخزين المؤقت فقط',
            allLabel: 'جميع علامات التبويب',
            currentLabel: 'علامة التبويب الحالية',
            done: (scope, type) => `تم المسح: ${scope} - ${type}`,
        },
        quit: 'إنهاء',
        show: 'إظهار',
        hide: 'إخفاء',
        copyLocation: 'نسخ هذا الموقع إلى الحافظة',
        copyLocationCopied: 'تم نسخ الموقع إلى الحافظة.',
        back: 'رجوع',
        forward: 'تقدم',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'يمكنك الانتقال إلى أي عنوان URL تريده',
            placeholder: 'عنوان URL صالح',
        },
        minimizationBehavior: {
            title: 'سلوك التصغير',
        },
        setProxy: {
            placeholder: 'إعداد الوكيل',
            info: 'لمسح الوكيل، استخدم سلسلة فارغة.',
            clear: 'تم إيقاف الوكيل.',
            set: (value) => {
                return `تم تعيين الوكيل كـ ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'خارجي',
            urlInternal: 'داخلي',
        }
    },
    button: {
        yes: 'نعم',
        no: 'لا',
        ok: 'OK',
        cancel: 'إلغاء',
        save: 'حفظ',
        clear: 'مسح',
        go: 'انتقال',
        delete: 'حذف',
    },
    menu: {
        action: 'إجراء',
        role: {
            edit: {
                undo: 'تراجع',
                redo: 'إعادة',
                cut: 'قص',
                copy: 'نسخ',
                paste: 'لصق',
                pasteandmatchstyle: 'لصق ومطابقة النمط',
                delete: 'حذف',
                selectall: 'تحديد الكل',
            },
            view: {
                reload: 'إعادة تحميل',
                forcereload: 'إعادة تحميل إجبارية',
                toggledevtools: 'تبديل أدوات المطور',
                resetzoom: 'إعادة تعيين التكبير',
                zoomin: 'تكبير',
                zoomout: 'تصغير',
                togglefullscreen: 'تبديل ملء الشاشة',
            }
        },
        help: {
            title: 'مساعدة',
            checkUpdates: 'التحقق من التحديثات'
        },
        language: {
            label: 'العربية / Language',
            alert: 'تم تعيين اللغة إلى العربية.',
            dialog: {
                label: 'محاولة تهيئة لغة OneNote عبر الإنترنت؟',
                corporate: 'شركة',
                personal: 'شخصي',
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
    redirecting: 'انتظر، جارٍ إعادة التوجيه إلى دفتر ملاحظات جديد. يستغرق الأمر بعض الوقت...',
    slow: 'انتظر، تحميل OneNote يستغرق بعض الوقت...',
    updater: {
        'checking-for-update': 'جارٍ التحقق من التحديثات ...',
        'update-available': 'جارٍ تنزيل أحدث إصدار ...',
        'update-not-available': 'لا يوجد تحديث جديد.',
        error: (opts) => {
            return `خطأ في التحديث التلقائي: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'تم التنزيل ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'تم تنزيل التحديث. يمكنك إعادة تشغيل التطبيق للتحديث.'
    },
    bookmarks: {
        title: 'الإشارات المرجعية',
        add: 'إضافة إشارة مرجعية',
        edit: 'تحرير الإشارات المرجعية',
        manager: 'إدارة الإشارات المرجعية',
        managerSearch: 'البحث في الإشارات المرجعية...',
        managerEmpty: 'لم يتم العثور على إشارات مرجعية.',
        confirmDelete: 'حذف؟',
        exportBookmarks: 'تصدير الإشارات المرجعية',
        importBookmarks: 'استيراد الإشارات المرجعية',
        exported: 'تم تصدير الإشارات المرجعية.',
        imported: (count) => `تم استيراد ${count} إشارة مرجعية.`,
        exportTitle: 'تصدير الإشارات المرجعية',
        importTitle: 'استيراد الإشارات المرجعية',
        form: {
            title: 'العنوان',
            url: 'URL',
            category: 'مجلد',
            categoryPlaceholder: 'مثال: عمل/مشاريع (استخدم / للمجلدات الفرعية)',
        }
    },
    tabs: {
        addTab: 'إضافة علامة تبويب',
        personal: 'شخصي',
        corporate: 'شركة',
        closeTab: 'إغلاق علامة التبويب',
        cannotCloseLastTab: 'لا يمكن إغلاق علامة التبويب الأخيرة.',
        restoreClosedTab: 'استعادة آخر علامة تبويب مغلقة',
        noClosedTabs: 'لا توجد علامات تبويب مغلقة للاستعادة.',
        renameTab: 'إعادة تسمية علامة التبويب',
        clearName: 'مسح الاسم المخصص',
        renamePrompt: 'أدخل اسمًا مخصصًا لعلامة التبويب هذه (اتركه فارغًا لاستخدام الافتراضي)',
        renamePlaceholder: 'اسم مخصص لعلامة التبويب',
        pinTab: 'تثبيت علامة التبويب',
        unpinTab: 'إلغاء تثبيت علامة التبويب',
        cannotClosePinned: 'لا يمكن إغلاق علامة تبويب مثبتة.',
        confirmClose: (tabLabel) => `هل أنت متأكد أنك تريد إغلاق "${tabLabel}"؟ سيتم تسجيل خروجك من هذا الحساب.`,
    },
    validation: {
        required: 'مطلوب',
        url: 'عنوان url غير صالح',
    },
};

module.exports = translation;
