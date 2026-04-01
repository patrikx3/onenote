const translation = {
    title: 'P3X OneNote',
    restart: 'Lütfen bekleyin, uygulama yeniden başlatılıyor.',
    label: {
        darkThemeInvert: {
          title: 'Enable dark mode (using invert)',
          off: 'Kapalı',
          on: 'Açık',
          system: 'Sistemi takip et',
        },
        hideMenu: 'Ana menüyü gizle (ALT tuşu ile göster)',
        optionToHideMenuState: {
            yes: 'Yeniden başlattıktan sonra menüyü gizleyecek ve ALT tuşu ile tekrar görünür yapabilirsiniz.',
        },
        donate: 'Bağış',
        disableHide: {
            //yes: 'Çıkmak yerine tepsiye simge durumuna küçültecek kapatma düğmesi davranışını ayarlayın',
            //no: 'Uygulamadan gerçekten çıkmak için kapatma düğmesi davranışını ayarlayın',
            checkbox: 'Kapatınca uygulama simgesine(tray) küçült',
            message: {
                yes: 'Kapat düğmesi, uygulamayı gerçekten kapatır.',
                no: 'Kapat düğmesi, çıkmak yerine uygulamayı tepsiye(tray) küçültür.',

            }
        },
        optionToDisableInternalExternalPopup: 'Dahili / Harici Açılır Pencereyi Devre Dışı Bırak (tüm bağlantılar dahili)',
        settings: 'Ayarlar',
        setProxy: 'Proxy ayarla',
        openUrl: 'Bir URL aç',
        promptRedirectUrlTitle: 'URL Yönlendirme',
        edit: 'Düzenle',
        view: 'Görüntüle',
        download: 'İndir',
        developer: 'Patrik Laszlo',
        personalHome: 'Personal home',
        corporateHome: 'Corporate home',
        clearCache: {
            title: 'Verileri temizle ve yeniden başlat',
            allTabs: 'Tüm sekmeler - her şey',
            currentTab: 'Mevcut sekme - her şey',
            allCookies: 'Tüm sekmeler - yalnızca çerezler',
            currentCookies: 'Mevcut sekme - yalnızca çerezler',
            allCache: 'Tüm sekmeler - yalnızca önbellek',
            currentCache: 'Mevcut sekme - yalnızca önbellek',
            allLabel: 'tüm sekmeler',
            currentLabel: 'mevcut sekme',
            done: (scope, type) => `Temizlendi: ${scope} - ${type}`,
        },
        quit: 'Çıkış',
        show: 'Göster',
        hide: 'Gizle',
        copyLocation: 'Bu konumu panoya kopyala',
        copyLocationCopied: 'Konum panoya kopyalanır.',
        //disallowedContent: 'İzin verilmeyen içerik! Çalışmıyorsa, bekleyin, varsayılan eve sıfırlanacaktır. (En fazla 5 saniye).',
        //unknownLink: 'Bekle, hedefe yüklenirken değişebilir. Bu bir OneNote sayfası değilse, P3X OneNote ana menüsüne tıklayarak ücretsiz',
        back: 'Geri',
        forward: 'İleri',
    },
    dialog: {
        info: 'Bilgi',
        openUrl: {
            info: 'İstediğiniz herhangi bir URL\'ye gidebilirsiniz',
            placeholder: 'geçerli bir URL',

        },
        minimizationBehavior: {
            title: 'Minimizasyon davranışı',
        },
        setProxy: {
            placeholder: 'Proxy ayarlar',
            info: 'Proxy\'yi temizlemek için boş bir dize kullanın.',
            clear: 'Proxy kapalı.',
            set: (value) => {
                return `Proxy, ${value} olarak değiştirildi.`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Harici',
            urlInternal: 'Dahili',
        }
    },
    button: {
        yes: 'Evet',
        no: 'Hayır',
        ok: 'TAMAM',
        cancel: 'İptal',
        save: 'Kaydet',
        clear: 'Temizle',
        go: 'İleri',
        delete: 'Sil',
    },
    menu: {
        action: 'Eylem',
        role: {
            edit: {
                undo: 'Geri al',
                redo: 'İleri al',
                cut: 'Kes',
                copy: 'Kopyala',
                paste: 'Yapıştır',
                pasteandmatchstyle: 'Stili yapıştır ve eşleştir',
                delete: 'İptal',
                selectall: 'Hepsini seç',
            },
            view: {
                reload: 'Yenile',
                forcereload: 'Zorla Yenile',
                toggledevtools: 'Toggle development tools',
                resetzoom: 'Yakınlaştırmayı Sıfırla',
                zoomin: 'Yakınlaştır',
                zoomout: 'Uzaklaştır',
                togglefullscreen: 'Tam ekrana geç',
            }
        },
        help: {
            title: 'Yardım',
            checkUpdates: 'Güncellemeleri kontrol et'
        },
        language: {
            label: 'Dil / Language',
            alert: 'Dil Türkçe olarak ayarlandı.',
            dialog: {
                label: 'Çevrimiçi OneNote dilini yapılandırmayı denediniz mi?',
                corporate: 'Corporate',
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
    redirecting: 'Bekle, yeni bir not defterine yönlendiriliyor. Biraz zaman alır...',
    slow: 'Bekle, OneNote\'un yüklenmesi biraz zaman alıyor...',
    updater: {
        'checking-for-update': 'Güncellemeler kontrol ediliyor ...',
        'update-available': 'En son sürüm indiriliyor ...',
        'update-not-available': 'Yeni güncelleme yok.',
        error: (opts) => {
            return `Otomatik güncellemede hata: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Downloaded ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Güncelleme indirildi. Güncellemek için uygulamayı yeniden başlatabilirsiniz.'
    },
    bookmarks: {
        title: 'Yer imleri',
        add: 'Yer imi ekle',
        edit: 'Yer imi düzenle',
        manager: 'Yer imlerini yönet',
        managerSearch: 'Yer imlerini ara...',
        managerEmpty: 'Yer imi bulunamadı.',
        confirmDelete: 'Silinsin mi?',
        exportBookmarks: 'Yer imlerini dışa aktar',
        importBookmarks: 'Yer imlerini içe aktar',
        exported: 'Yer imleri dışa aktarıldı.',
        imported: (count) => `${count} yer imi içe aktarıldı.`,
        exportTitle: 'Yer imlerini dışa aktar',
        importTitle: 'Yer imlerini içe aktar',
        form: {
            title: 'Başlık',
            url: 'URL',
            category: 'Klasör',
            categoryPlaceholder: 'örn. İş/Projeler (alt klasörler için / kullanın)',
        }
    },
    tabs: {
        addTab: 'Sekme ekle',
        personal: 'Kişisel',
        corporate: 'Kurumsal',
        closeTab: 'Sekmeyi kapat',
        cannotCloseLastTab: 'Son sekme kapatılamaz.',
        restoreClosedTab: 'Son kapatılan sekmeyi geri yükle',
        noClosedTabs: 'Geri yüklenecek kapatılmış sekme yok.',
        renameTab: 'Sekmeyi yeniden adlandır',
        clearName: 'Özel adı temizle',
        renamePrompt: 'Bu sekme için özel bir ad girin (varsayılan için boş bırakın)',
        renamePlaceholder: 'Özel sekme adı',
        pinTab: 'Sekmeyi sabitle',
        unpinTab: 'Sekmeyi çöz',
        cannotClosePinned: 'Sabitlenmiş bir sekme kapatılamaz.',
        confirmClose: (tabLabel) => `"${tabLabel}" sekmesini kapatmak istediğinizden emin misiniz? Bu hesaptan çıkış yapılacaktır.`,
    },
    validation: {
        required: 'Gerekli',
        url: 'Geçersiz url',
    },
};

module.exports = translation;
