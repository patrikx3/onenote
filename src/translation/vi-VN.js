const translation = {
    title: 'P3X OneNote',
    restart: 'Vui lòng chờ, ứng dụng đang khởi động lại.',
    label: {
        darkThemeInvert: {
          title: 'Bật chế độ tối với một số lỗi (sử dụng đảo ngược)'
        },
        hideMenu: 'Ẩn menu chính (hiển thị bằng ALT)',
        optionToHideMenuState: {
            yes: 'Sau khi khởi động lại, menu sẽ bị ẩn và hiển thị khi nhấn ALT.',
        },
        donate: 'Quyên góp',
        allowMultiple: {
            checkbox: 'Cho phép nhiều phiên bản (với một số lỗi)',
            message: {
                yes: 'Bây giờ bạn có thể sử dụng nhiều phiên bản với một số lỗi.',
                no: 'Bây giờ, chỉ cho phép một phiên bản, không có lỗi'
            }
        },
        disableHide: {
            checkbox: 'Đóng vào khay hệ thống',
            message: {
                yes: 'Nút đóng thực sự đóng ứng dụng.',
                no: 'Nút đóng, thay vì thoát, sẽ thu nhỏ ứng dụng vào khay hệ thống.',
            }
        },
        optionToDisableInternalExternalPopup: 'Tắt cửa sổ bật lên nội bộ / bên ngoài (tất cả liên kết nội bộ)',
        settings: 'Cài đặt',
        setProxy: 'Đặt proxy',
        openUrl: 'Mở một URL',
        promptRedirectUrlTitle: 'Chuyển hướng đến url',
        edit: 'Chỉnh sửa',
        view: 'Xem',
        download: 'Tải xuống',
        developer: 'Patrik Laszlo',
        personalHome: 'Trang chủ cá nhân',
        corporateHome: 'Trang chủ doanh nghiệp',
        clearCache: 'Đăng xuất trước, sau đó nhấp vào tùy chọn menu này để xóa bộ nhớ đệm',
        quit: 'Thoát',
        show: 'Hiển thị',
        hide: 'Ẩn',
        copyLocation: 'Sao chép địa chỉ này vào bộ nhớ tạm',
        copyLocationCopied: 'Địa chỉ đã được sao chép vào bộ nhớ tạm.',
        back: 'Quay lại',
        forward: 'Tiến tới',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Bạn có thể truy cập bất kỳ URL nào bạn muốn',
            placeholder: 'một URL hợp lệ',
        },
        minimizationBehavior: {
            title: 'Hành vi thu nhỏ',
        },
        setProxy: {
            placeholder: 'Cài đặt proxy',
            info: 'Để xóa proxy, sử dụng chuỗi rỗng.',
            clear: 'Proxy đã được tắt.',
            set: (value) => {
                return `Proxy được đặt là ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Bên ngoài',
            urlInternal: 'Nội bộ',
        }
    },
    button: {
        yes: 'Có',
        no: 'Không',
        ok: 'OK',
        cancel: 'Hủy',
        save: 'Lưu',
        clear: 'Xóa',
        go: 'Đi',
        delete: 'Xóa',
    },
    menu: {
        action: 'Hành động',
        role: {
            edit: {
                undo: 'Hoàn tác',
                redo: 'Làm lại',
                cut: 'Cắt',
                copy: 'Sao chép',
                paste: 'Dán',
                pasteandmatchstyle: 'Dán và khớp kiểu',
                delete: 'Xóa',
                selectall: 'Chọn tất cả',
            },
            view: {
                reload: 'Tải lại',
                forcereload: 'Buộc tải lại',
                toggledevtools: 'Bật/tắt công cụ phát triển',
                resetzoom: 'Đặt lại thu phóng',
                zoomin: 'Phóng to',
                zoomout: 'Thu nhỏ',
                togglefullscreen: 'Bật/tắt toàn màn hình',
            }
        },
        help: {
            title: 'Trợ giúp',
            checkUpdates: 'Kiểm tra cập nhật'
        },
        language: {
            label: 'Tiếng Việt / Language',
            alert: 'Ngôn ngữ được đặt thành Tiếng Việt.',
            dialog: {
                label: 'Thử cấu hình ngôn ngữ Online OneNote?',
                corporate: 'Doanh nghiệp',
                personal: 'Cá nhân',
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
    redirecting: 'Vui lòng chờ, đang chuyển hướng đến sổ ghi chép mới. Quá trình này mất một chút thời gian...',
    slow: 'Vui lòng chờ, việc tải OneNote mất một chút thời gian...',
    updater: {
        'checking-for-update': 'Đang kiểm tra cập nhật ...',
        'update-available': 'Đang tải xuống bản phát hành mới nhất ...',
        'update-not-available': 'Không có cập nhật mới.',
        error: (opts) => {
            return `Lỗi trong trình cập nhật tự động: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Đã tải xuống ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Cập nhật đã tải xuống. Bạn có thể khởi động lại ứng dụng để cập nhật.'
    },
    bookmarks: {
        title: 'Dấu trang',
        add: 'Thêm dấu trang',
        edit: 'Chỉnh sửa dấu trang',
        form: {
            title: 'Tiêu đề',
            url: 'URL'
        }
    },
    tabs: {
        addTab: 'Thêm thẻ',
        personal: 'Cá nhân',
        corporate: 'Doanh nghiệp',
        closeTab: 'Đóng thẻ',
        cannotCloseLastTab: 'Không thể đóng thẻ cuối cùng.',
        confirmClose: (tabLabel) => `Bạn có chắc chắn muốn đóng "${tabLabel}" không? Bạn sẽ bị đăng xuất khỏi tài khoản này.`,
    },
    validation: {
        required: 'Bắt buộc',
        url: 'URL không hợp lệ',
    },
};

module.exports = translation;
