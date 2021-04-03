const translation = {
    title: 'P3X OneNote',
    restart: 'Aguarde, o aplicativo está reiniciando.',
    label: {
        hideMenu: 'Esconder o menu principal (mostrar com ALT)',
        optionToHideMenuState: {
            yes: 'Após reiniciar, ele irá ocultar o menu e mostrar no ALT.',
        },
        donate: 'Doar',
        allowMultiple: {
            checkbox: 'Permitir múltiplas instâncias (com algumas pecularidades)',
            message: {
                yes: 'Agora você pode utilizar múltiplas instâncias com algumas peculiaridades.',
                no: 'Agora, é permitido somente uma instância, sem peculiaridades'
            }
        },
        disableHide: {
            yes: 'Defina o comportamento do botão Fechar que irá minimizar para a bandeja em vez de sair',
            no: 'Defina o comportamento do botão Fechar para realmente sair da aplicação',
            checkbox: 'Fechar bandeja',
            message: {
                yes: 'O botão de fechar realmente fecha o app.',
                no: 'O botão de fechar, ao invés de sair, minimiza o app na bandeja.',

            }
        },
        optionToDisableInternalExternalPopup: 'Desativar pop-up interno / externo (todos link interno)',
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
        disallowedContent: 'Conteúdo desabilitado! Se não estiver funcionando, espere, ele será redefinido para o padrão. (Máximo de 5 segundos).',
        unknownLink: 'Espere um pouco, pode mudar durante o carregamento para o destino. Se esta não for uma página do OneNote, sinta-se livre para clicar na página inicial do P3X no menu',
        back: 'Voltar',
        forward: 'Prosseguir',
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
        delete: 'Excluir',
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
            label: 'Idioma / Language',
            alert: 'Idioma definido para português.',
            dialog: {
                label: 'Tentar configurar idioma do OneNote Online?',
                corporate: 'Corporativo',
                personal: 'Pessoal',
            },
            translations: {
                'en-US': 'English',
                'de-DE': 'Deutsch / German',
                'pt-BR': 'Português / Portuguese',
                'es-ES': 'Español / Spanish',
                'fr-FR': 'Français / French',
                'nl-NL': 'Nederlands / Dutch',

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
    },
    bookmarks: {
        title: 'Favoritas',
        add: 'Adicionar favorito',
        edit: 'Editar favoritos',
        form: {
            title: 'Título',
            url: 'URL'
        }
    },
    validation: {
        required: 'Requeridas',
        url: 'URL inválida',
    },
};

module.exports = translation;
