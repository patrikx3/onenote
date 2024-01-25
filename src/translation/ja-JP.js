const translation = {
    title: 'P3X OneNote',
    restart: 'アプリケーションを再起動しています。しばらくお待ちください。',
    label: {
        darkThemeInvert: {
            title: 'ダークモードを有効にする（色の反転）'
        },
        hideMenu: 'メインメニューを隠す（Altキーで表示）',
        optionToHideMenuState: {
            yes: '再起動後メニューが非表示になります。Altキーで再表示できます。',
        },
        donate: '寄付',
        allowMultiple: {
            checkbox: '複数のウィンドウを許可する（試験的）',
            message: {
                yes: '複数ウィンドウを許可しました。予期せぬ動作を起こす可能性があります。',
                no: '最大ウィンドウ数を１つに戻しました。複数ウィンドウによる副作用がなくなりました。'
            }
        },
        disableHide: {
            //yes: '閉じるボタンの動作を設定し、終了する代わりにトレイに最小化します',
            //no: '閉じるボタンの動作を設定し、アプリを終了します',
            checkbox: 'メニューバーにアプリを常駐させる',
            message: {
                yes: '閉じるボタンはアプリを終了するようになります。',
                no: '閉じるボタンは、終了せずアプリをメニューバーへしまいます。',

            }
        },
        optionToDisableInternalExternalPopup: 'リンクのポップアップ確認を無効にする（全て内部リンク扱いにする）',
        settings: '設定',
        setProxy: 'プロキシの設定',
        openUrl: 'URLを開く',
        promptRedirectUrlTitle: 'URLにリダイレクト',
        edit: '編集',
        view: '表示',
        download: 'ダウンロード',
        developer: 'Patrik Laszlo',
        personalHome: '個人のホーム',
        corporateHome: '法人のホーム',
        clearCache: 'サインアウトしてキャッシュをクリア',
        quit: '終了',
        show: '表示',
        hide: '隠す',
        copyLocation: 'URLをクリップボードにコピーする',
        copyLocationCopied: 'URLがクリップボードにコピーされました。',
        //disallowedContent: '許可されていないコンテンツです！ 動作しない場合は、リセットしてデフォルトのホームに戻します。 （最大5秒）。',
        //unknownLink: 'しばらくお待ちください。 ロード中に変更される可能性があります。 これがOneNoteページでない場合は、P3X OneNoteメニューホームをクリックしてください',
        back: '戻る',
        forward: '前へ',
    },
    dialog: {
        info: '情報',
        openUrl: {
            info: '任意のURLに移動できます',
            placeholder: '有効なURL',

        },
        minimizationBehavior: {
            title: '最小化の動作',
        },
        setProxy: {
            placeholder: 'プロキシ設定',
            info: 'プロキシをクリアするには、空の文字列のまま保存ボタンを押します。',
            clear: 'プロキシ設定を無効にしました。',
            set: (value) => {
                return `プロキシを${value}に設定しました。`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: '外部アプリ',
            urlInternal: 'アプリ内',
        }
    },
    button: {
        yes: 'はい',
        no: 'いいえ',
        ok: 'OK',
        cancel: 'キャンセル',
        save: '保存',
        clear: 'クリア',
        go: '移動',
        delete: '削除',
    },
    menu: {
        action: 'アクション',
        role: {
            edit: {
                undo: '元に戻す',
                redo: 'やり直し',
                cut: 'カット',
                copy: 'コピー',
                paste: 'ペースト',
                pasteandmatchstyle: 'ペーストしてスタイルを一致させる',
                delete: '削除',
                selectall: 'すべて選択',
            },
            view: {
                reload: 'リロード',
                forcereload: '強制リロード',
                toggledevtools: '開発ツールの表示切り替え',
                resetzoom: 'ズームをリセット',
                zoomin: '拡大',
                zoomout: '縮小',
                togglefullscreen: 'フルスクリーンの表示切り替え',
            }
        },
        help: {
            title: 'ヘルプ',
            checkUpdates: '更新を確認する'
        },
        language: {
            label: '言語',
            alert: '言語を日本語に設定しました。',
            dialog: {
                label: 'OneNote本体の言語も設定しますか？',
                corporate: '法人',
                personal: '個人',
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
                'ja-JP': '日本語 / Japanese',

            }
        },
    },
    redirecting: 'しばらくお待ちください。 新しいノートブックにリダイレクトしています。 少し時間がかかります...',
    slow: 'しばらくお待ちください。 OneNoteの読み込みは時間がかかります...',
    updater: {
        'checking-for-update': '更新を確認しています...',
        'update-available': '最新のリリースをダウンロードしています...',
        'update-not-available': '新しい更新はありません。',
        error: (opts) => {
            return `自動更新プログラムのエラー：${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return opts.progressObj.percent + '%ダウンロード済み'
        },
        'update-downloaded': '更新がダウンロードされました。 アプリを再起動して更新できます。'
    },
    bookmarks: {
        title: 'ブックマーク',
        add: 'ブックマークを追加',
        edit: 'ブックマークを編集',
        form: {
            title: 'タイトル',
            url: 'URL'
        }
    },
    validation: {
        required: '必須項目です。',
        url: '無効なURLです。',
    },
};

module.exports = translation;
