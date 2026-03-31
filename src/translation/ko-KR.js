const translation = {
    title: 'P3X OneNote',
    restart: '잠시만 기다려 주세요, 애플리케이션이 다시 시작됩니다.',
    label: {
        darkThemeInvert: {
          title: '다크 모드 활성화 (반전 사용, 약간의 문제 있음)'
        },
        hideMenu: '메인 메뉴 숨기기 (ALT로 표시)',
        optionToHideMenuState: {
            yes: '다시 시작한 후 메뉴가 숨겨지며 ALT로 표시됩니다.',
        },
        donate: '기부',
        allowMultiple: {
            checkbox: '다중 인스턴스 허용 (약간의 문제 있음)',
            message: {
                yes: '이제 약간의 문제와 함께 여러 인스턴스를 사용할 수 있습니다.',
                no: '이제 하나의 인스턴스만 허용되며, 문제가 없습니다'
            }
        },
        disableHide: {
            checkbox: '트레이로 닫기',
            message: {
                yes: '닫기 버튼이 실제로 앱을 종료합니다.',
                no: '닫기 버튼은 종료 대신 앱을 트레이로 최소화합니다.',
            }
        },
        optionToDisableInternalExternalPopup: '내부 / 외부 팝업 비활성화 (모든 링크 내부)',
        settings: '설정',
        setProxy: '프록시 설정',
        openUrl: 'URL 열기',
        promptRedirectUrlTitle: 'URL로 리디렉션',
        edit: '편집',
        view: '보기',
        download: '다운로드',
        developer: 'Patrik Laszlo',
        personalHome: '개인 홈',
        corporateHome: '회사 홈',
        clearCache: '먼저 로그아웃한 다음 이 메뉴 옵션을 클릭하여 캐시를 지우세요',
        quit: '종료',
        show: '표시',
        hide: '숨기기',
        copyLocation: '이 위치를 클립보드에 복사',
        copyLocationCopied: '위치가 클립보드에 복사되었습니다.',
        back: '뒤로',
        forward: '앞으로',
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: '원하는 URL로 이동할 수 있습니다',
            placeholder: '유효한 URL',
        },
        minimizationBehavior: {
            title: '최소화 동작',
        },
        setProxy: {
            placeholder: '프록시 설정',
            info: '프록시를 지우려면 빈 문자열을 사용하세요.',
            clear: '프록시가 꺼졌습니다.',
            set: (value) => {
                return `프록시가 ${value}(으)로 설정되었습니다`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: '외부',
            urlInternal: '내부',
        }
    },
    button: {
        yes: '예',
        no: '아니오',
        ok: 'OK',
        cancel: '취소',
        save: '저장',
        clear: '지우기',
        go: '이동',
        delete: '삭제',
    },
    menu: {
        action: '작업',
        role: {
            edit: {
                undo: '실행 취소',
                redo: '다시 실행',
                cut: '잘라내기',
                copy: '복사',
                paste: '붙여넣기',
                pasteandmatchstyle: '붙여넣기 및 스타일 일치',
                delete: '삭제',
                selectall: '모두 선택',
            },
            view: {
                reload: '새로고침',
                forcereload: '강제 새로고침',
                toggledevtools: '개발자 도구 전환',
                resetzoom: '확대/축소 초기화',
                zoomin: '확대',
                zoomout: '축소',
                togglefullscreen: '전체 화면 전환',
            }
        },
        help: {
            title: '도움말',
            checkUpdates: '업데이트 확인'
        },
        language: {
            label: '한국어 / Language',
            alert: '언어가 한국어로 설정되었습니다.',
            dialog: {
                label: '온라인 OneNote 언어를 설정하시겠습니까?',
                corporate: '회사',
                personal: '개인',
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
    redirecting: '잠시만 기다려 주세요, 새 노트북으로 리디렉션 중입니다. 시간이 좀 걸립니다...',
    slow: '잠시만 기다려 주세요, OneNote를 로드하는 데 시간이 좀 걸립니다...',
    updater: {
        'checking-for-update': '업데이트 확인 중 ...',
        'update-available': '최신 릴리스 다운로드 중 ...',
        'update-not-available': '새로운 업데이트가 없습니다.',
        error: (opts) => {
            return `자동 업데이터 오류: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return '다운로드됨 ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': '업데이트가 다운로드되었습니다. 앱을 다시 시작하여 업데이트할 수 있습니다.'
    },
    bookmarks: {
        title: '북마크',
        add: '북마크 추가',
        edit: '북마크 편집',
        form: {
            title: '제목',
            url: 'URL'
        }
    },
    tabs: {
        addTab: '탭 추가',
        personal: '개인',
        corporate: '회사',
        closeTab: '탭 닫기',
        cannotCloseLastTab: '마지막 탭은 닫을 수 없습니다.',
        confirmClose: (tabLabel) => `"${tabLabel}"을(를) 닫으시겠습니까? 이 계정에서 로그아웃됩니다.`,
    },
    validation: {
        required: '필수',
        url: '잘못된 URL',
    },
};

module.exports = translation;
