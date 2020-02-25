const translation = {
    title: 'P3X OneNote',
    label: {
        hideMenu: 'Esconder Menu Principal',
        donate: 'Donar',
        allowMultiple: {
            checkbox: 'Permitir múltiples instancias (podría haber algún comportamiento extraño)',
            message: {
                yes: 'Puedes usar múltiples instancias, con algún comportamiento extraño.',
                no: 'Una sola instancia permitida, sin comportamientos extraños.',
            }
        },
        disableHide: {
            //yes: 'Configurar el cierre de manera que la aplicación se minimice a la barra de tareas',
            //no: 'Configurar el botónn de cierre de manera que se quite la aplicación',
            checkbox: 'Minimizar a la barra de tareas',
            message: {
                yes: 'El botón de cierre cerrará directamente la aplicación.',
                no: 'El botón de cierre, en vez de cerrar la aplicación, la minimizará a la barra de tareas.',

            }
        },
        settings: 'Configuración',
        setProxy: 'Configuración del proxy',
        openUrl: 'Abrir URL',
        promptRedirectUrlTitle: 'Redireccionar a la URL',
        edit: 'Editar',
        view: 'Ver',
        download: 'Bajar',
        developer: 'Patrik Laszlo',
        personalHome: 'Home Personal',
        corporateHome: 'Home Corporativo',
        clearCache: 'Salga primero y después haga click en esta opción del menú para borrar la caché.',
        quit: 'Quitar',
        show: 'Mostrar',
        hide: 'Esconder',
        copyLocation: 'Copiar esta dirección al portapapeles',
        copyLocationCopied: 'Dirección copiada al portapapeles.',
        //disallowedContent: '¡Contenido no permitido!.Si no funciona, espere. Se reseteará al home por defecto. (Máx 5 segundos).',
        //unknownLink: 'Espere, cambiará mientras carga el destino. Si esto no es una página de OneNote, haga clic en el menú dentro de P3X OneNote home'
    },
    dialog: {
        info: 'Info',
        openUrl: {
            info: 'Puede ir a cualquier URL que desee.',
            placeholder: 'Inserte una URL válida',

        },
        minimizationBehavior: {
            title: 'Comportamiento al minimizar',
        },
        setProxy: {
            placeholder: 'Configuración del proxy',
            info: 'Para limpiar el proxy, introduzca una cadena vacía.',
            clear: 'Proxy apagado.',
            set: (value) => {
                return `Proxy configurado como ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'Externa',
            urlInternal: 'Interna',
        }
    },
    button: {
        yes: 'Si',
        no: 'No',
        ok: 'OK',
        cancel: 'Cancelar',
        save: 'Salvar',
        clear: 'Limpiar',
        go: 'Ir',

    },
    menu: {
        action: 'Acción',
        role: {
            edit: {
                undo: 'Deshacer',
                redo: 'Rehacer',
                cut: 'Cortar',
                copy: 'Copiar',
                paste: 'Pegar',
                pasteandmatchstyle: 'Pegar con el mismo estilo',
                delete: 'Borrar',
                selectall: 'Seleccionar todo',
            },
            view: {
                reload: 'Recargar',
                forcereload: 'Fozar recarga',
                toggledevtools: 'Conmutar herramientas de desarrollo',
                resetzoom: 'Resetear Zoom',
                zoomin: 'Aumentar zoom',
                zoomout: 'Disminuir zoom',
                togglefullscreen: 'Cambiar a pantalla completa',
            }
        },
        help: {
            title: 'Ayuda',
            checkUpdates: 'Revisar actualizaciones'
        },
        language: {
            label: 'Lenguaje / Language',
            alert: 'Idioma configurado para español.',
            dialog: {
                label: 'Configurar el lenguaje en la herramienta en línea de Onenote?',
                coperate: 'Cooperar',
                personal: 'Personal',
            },
            translations: {
                'en-US': 'Inglés / English',
                'de-DE': 'Alemán / German',
                'pt-BR': 'Português / Portuguese',
                'es-ES': 'Español / Spanish',
            }
        },
    },
    redirecting: 'Espere... redireccionando a una nueva libreta. Tardará un poco...',
    slow: 'Espere, cargar OneNote tarda un poco...',
    updater: {
        'checking-for-update': 'Buscando actualizaciones...',
        'update-available': 'Bajando la última release ...',
        'update-not-available': 'No existen nuevas actualizaciones.',
        error: (opts) => {
            return `Error en el auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Bajado ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Actualización bajada. Reinicie la aplicación para actualizar.'
    }
};

module.exports = translation;
