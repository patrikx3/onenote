const translation = {
    title: 'P3X OneNote',
    restart: 'অনুগ্রহ করে অপেক্ষা করুন, অ্যাপ্লিকেশনটি পুনরায় চালু হচ্ছে।',
    label: {
        darkThemeInvert: {
          title: 'সমস্যাসহ ডার্ক মোড সক্রিয় করুন (ইনভার্ট ব্যবহার করে)'
        },
        hideMenu: 'প্রধান মেনু লুকান (ALT দিয়ে দেখান)',
        optionToHideMenuState: {
            yes: 'পুনরায় চালু করার পর, এটি মেনু লুকাবে এবং ALT চাপলে দেখাবে।',
        },
        donate: 'দান করুন',
        allowMultiple: {
            checkbox: 'একাধিক ইনস্ট্যান্স অনুমতি দিন (কিছু সমস্যাসহ)',
            message: {
                yes: 'এখন আপনি কিছু সমস্যাসহ একাধিক ইনস্ট্যান্স ব্যবহার করতে পারেন।',
                no: 'এখন, এটি শুধুমাত্র একটি ইনস্ট্যান্স অনুমতি দেয়, কোনো সমস্যা নেই'
            }
        },
        disableHide: {
            checkbox: 'ট্রেতে বন্ধ করুন',
            message: {
                yes: 'বন্ধ বোতামটি সত্যিই অ্যাপটি বন্ধ করে।',
                no: 'বন্ধ বোতামটি, বন্ধ করার পরিবর্তে, অ্যাপটিকে ট্রেতে ছোট করে।',
            }
        },
        optionToDisableInternalExternalPopup: 'অভ্যন্তরীণ / বাহ্যিক পপআপ নিষ্ক্রিয় করুন (সমস্ত লিংক অভ্যন্তরীণ)',
        settings: 'সেটিংস',
        setProxy: 'প্রক্সি সেট করুন',
        openUrl: 'একটি URL খুলুন',
        promptRedirectUrlTitle: 'url-এ পুনঃনির্দেশ',
        edit: 'সম্পাদনা',
        view: 'দেখুন',
        download: 'ডাউনলোড',
        developer: 'Patrik Laszlo',
        personalHome: 'ব্যক্তিগত হোম',
        corporateHome: 'কর্পোরেট হোম',
        clearCache: 'প্রথমে সাইন আউট করুন, তারপর ক্যাশ পরিষ্কার করতে এই মেনু অপশনে ক্লিক করুন',
        quit: 'প্রস্থান',
        show: 'দেখান',
        hide: 'লুকান',
        copyLocation: 'এই অবস্থানটি ক্লিপবোর্ডে কপি করুন',
        copyLocationCopied: 'অবস্থানটি ক্লিপবোর্ডে কপি হয়েছে।',
        back: 'পিছনে',
        forward: 'সামনে',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'আপনি যেকোনো URL-এ যেতে পারেন',
            placeholder: 'একটি বৈধ URL',
        },
        minimizationBehavior: {
            title: 'ছোট করার আচরণ',
        },
        setProxy: {
            placeholder: 'প্রক্সি সেটিং',
            info: 'প্রক্সি মুছতে, একটি খালি স্ট্রিং ব্যবহার করুন।',
            clear: 'প্রক্সি বন্ধ করা হয়েছে।',
            set: (value) => {
                return `প্রক্সি ${value} হিসেবে সেট করা হয়েছে`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'বাহ্যিক',
            urlInternal: 'অভ্যন্তরীণ',
        }
    },
    button: {
        yes: 'হ্যাঁ',
        no: 'না',
        ok: 'OK',
        cancel: 'বাতিল',
        save: 'সংরক্ষণ',
        clear: 'পরিষ্কার',
        go: 'যান',
        delete: 'মুছুন',
    },
    menu: {
        action: 'অ্যাকশন',
        role: {
            edit: {
                undo: 'পূর্বাবস্থায় ফেরান',
                redo: 'পুনরায় করুন',
                cut: 'কাটুন',
                copy: 'কপি',
                paste: 'পেস্ট',
                pasteandmatchstyle: 'পেস্ট করুন এবং স্টাইল মেলান',
                delete: 'মুছুন',
                selectall: 'সব নির্বাচন করুন',
            },
            view: {
                reload: 'পুনরায় লোড',
                forcereload: 'জোরপূর্বক পুনরায় লোড',
                toggledevtools: 'ডেভেলপমেন্ট টুলস টগল করুন',
                resetzoom: 'জুম রিসেট',
                zoomin: 'জুম ইন',
                zoomout: 'জুম আউট',
                togglefullscreen: 'পূর্ণ স্ক্রিন টগল করুন',
            }
        },
        help: {
            title: 'সাহায্য',
            checkUpdates: 'আপডেট পরীক্ষা করুন'
        },
        language: {
            label: 'বাংলা / Language',
            alert: 'ভাষা বাংলায় সেট করা হয়েছে।',
            dialog: {
                label: 'অনলাইন OneNote ভাষা কনফিগার করার চেষ্টা করবেন?',
                corporate: 'কর্পোরেট',
                personal: 'ব্যক্তিগত',
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
    redirecting: 'অপেক্ষা করুন, একটি নতুন নোটবুকে পুনঃনির্দেশ করা হচ্ছে। এতে কিছু সময় লাগে...',
    slow: 'অপেক্ষা করুন, OneNote লোড হতে কিছু সময় লাগে...',
    updater: {
        'checking-for-update': 'আপডেট পরীক্ষা করা হচ্ছে ...',
        'update-available': 'সর্বশেষ রিলিজ ডাউনলোড হচ্ছে ...',
        'update-not-available': 'কোনো নতুন আপডেট নেই।',
        error: (opts) => {
            return `অটো-আপডেটারে ত্রুটি: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'ডাউনলোড হয়েছে ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'আপডেট ডাউনলোড হয়েছে। আপডেট করতে আপনি অ্যাপটি পুনরায় চালু করতে পারেন।'
    },
    bookmarks: {
        title: 'বুকমার্ক',
        add: 'বুকমার্ক যোগ করুন',
        edit: 'বুকমার্ক সম্পাদনা করুন',
        form: {
            title: 'শিরোনাম',
            url: 'URL'
        }
    },
    validation: {
        required: 'আবশ্যক',
        url: 'অবৈধ url',
    },
};

module.exports = translation;
