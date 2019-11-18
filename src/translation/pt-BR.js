const translation = {
    title: 'P3X OneNote',
    label: {
        donate: 'Doar',
        allowMultiple: {
            checkbox: 'Permitir múltiplas instâncias (com algumas pecularidades)',
            message: {
                yes: 'Agora você pode utilizar múltiplas instâncias com algumas peculiaridades.',
                no: 'Agora, é permitido somente uma instância, sem peculiaridades'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: 'Fechar bandeja',
            message: {
                yes: 'O botão de fechar realmente fecha o app.',
                no: 'O botão de fechar, ao invés de sair, minimiza o app na bandeja.',

            }
        },
        settings: 'Configurações',
        setProxy: 'Definir um proxy',
        openUrl: 'Abrir uma URL',
        promptRedirectUrlTitle: 'Redirecionar para URL',
        edit: 'Editar',
        view: 'Ver',
        download: 'Baixar',
        developer: 'Patrik Laszlo',
        personalHome: 'Página pessoal',
        corporateHome: 'Negócios',
        clearCache: 'Primeiro saia, depois clique nessa opção para limpar o cache',
        quit: 'Sair',
        show: 'Mostrar',
        hide: 'Esconder',
        copyLocation: 'Copiar para área de transferência',
        copyLocationCopied: 'A localização foi copiada para a área de transferência.',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home'
    },
    dialog: {
        info: 'Informações',
        openUrl: {
            info: 'Você pode ir para qualquer URL que deseja',
            placeholder: 'uma URL válida',

        },
        minimizationBehavior: {
            title: 'Comportamento de minimização',
        },
        setProxy: {
            placeholder: 'Configurações de proxy',
            info: 'Para limpar o proxy, deixe em branco.',
            clear: 'O proxy é desligado.',
            set: (value) => {
                return `O proxy é definido como ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Externo',
            urlInternal: 'Interno',
        }
    },
    button: {
        yes: 'Sim',
        no: 'Não',
        ok: 'OK',
        cancel: 'Cancelar',
        save: 'Salvar',
        clear: 'Limpar',
        go: 'Ir',

    },
    menu: {
        action: 'Ação',
        role: {
            edit: {
                undo: 'Desfazer',
                redo: 'Refazer',
                cut: 'Cortar',
                copy: 'Copiar',
                paste: 'Colar',
                pasteandmatchstyle: 'Colar com o mesmo estilo',
                delete: 'Deletar',
                selectall: 'Selecionar tudo',
            },
            view: {
                reload: 'Recarregar',
                forcereload: 'Forçar recarregamento',
                toggledevtools: 'Alternar ferramentas de desenvolvimento',
                resetzoom: 'Resetar zoom',
                zoomin: 'Aumentar zoom',
                zoomout: 'Diminuir zoom',
                togglefullscreen: 'Tela cheia',
            }
        },
        help: {
            title: 'Ajuda',
            checkUpdates: 'Verificar atualizações'
        },
        language: {
            label: 'Idioma',
            alert: 'Idioma definido para inglês.',
            dialog: {
                label: 'Tentar configurar idioma do OneNote Online?',
                coperate: 'Colaborar',
                personal: 'Pessoal',
            },
            translations: {
                'en-US': 'English',
                'de-DE': 'Deutsch / German',
                'pt-BR': 'Português / Portuguese',
            }
        },
    },
    redirecting: 'Aguarde, redirecionando para um novo caderno. Isso leva algum tempo...',
    slow: 'Aguarde, o carregamento do OneNote leva algum tempo...',
    updater: {
        'checking-for-update': 'Verificando atualizações ...',
        'update-available': 'Baixando última atualização ...',
        'update-not-available': 'Nenhuma atualização.',
        error: (opts) => {
            return `Erro no atualizador: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Baixado ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Atualização baixada. Você precisa reiniciar o app para fazer efeito.'
    }
};

module.exports = translation;
