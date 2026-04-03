import { dialog, Menu, shell, nativeTheme } from 'electron'
import menus from '../menus.mjs'
import action from '../action.mjs'
import mainTray from './tray.mjs'
import naturalCompareDocument from '../../lib/natural-compare-document.mjs'
import relaunch from '../actions/relaunch.mjs'
import registry from '../../registry.mjs'

function mainMenu() {


    const copyLocation = {
        label: registry.lang.label.copyLocation,
        click: () => {
            registry.window.onenote.webContents.send('p3x-onenote-action', {
                action: 'get-location'
            })
        }
    }

    const minimizationBehaviorLabel = !registry.disableHide ? registry.lang.label.disableHide.no : registry.lang.label.disableHide.yes


    const languageCheckbox = [];
    for (let trans of Object.keys(registry.lang.menu.language.translations)) {
        const transLabel = registry.lang.menu.language.translations[trans]
        const transMenu = ((trans) => {
            return {
                label: transLabel,
                type: 'radio',
                checked: registry.conf.get('lang') === trans,
                click: () => {
                    registry.conf.set('lang', trans)
                    registry.translationKey = trans
                    registry.lang = registry.translations[trans]
                    mainMenu()
                    mainTray()
                    registry.window.onenote.webContents.send('p3x-onenote-language', {
                        translation: trans,
                    })
                }
            }
        })(trans)
        languageCheckbox.push(transMenu)
    }

    const bookmarksMenu = [
        {
            label: registry.lang.bookmarks.add,
            click: () => {
                registry.window.onenote.webContents.send('p3x-onenote-action-bookmark-add', {
                    edit: false,
                })
            }
        },
        {
            label: registry.lang.bookmarks.importBookmarks || 'Import bookmarks',
            click: async () => {
                try {
                    const result = await registry.window.onenote.webContents.executeJavaScript(
                        `window.electronShim.ipcRenderer.invoke('p3x-onenote-bookmarks-import')`
                    )
                    if (result && result.success) {
                        const msg = registry.lang.bookmarks.imported
                            ? registry.lang.bookmarks.imported(result.added)
                            : `Imported ${result.added} bookmark(s).`
                        registry.window.onenote.webContents.send('p3x-onenote-action', {
                            action: 'toast',
                            message: msg,
                        })
                    }
                } catch (e) {
                    console.error(e)
                }
            }
        },
    ]

    const bookmarks = registry.conf.get('bookmarks') || []

    if (bookmarks.length > 0) {
        bookmarksMenu.push({
            label: registry.lang.bookmarks.exportBookmarks || 'Export bookmarks',
            click: async () => {
                try {
                    const result = await registry.window.onenote.webContents.executeJavaScript(
                        `window.electronShim.ipcRenderer.invoke('p3x-onenote-bookmarks-export')`
                    )
                    if (result && result.success) {
                        registry.window.onenote.webContents.send('p3x-onenote-action', {
                            action: 'toast',
                            message: registry.lang.bookmarks.exported || 'Bookmarks exported.',
                        })
                    }
                } catch (e) {
                    console.error(e)
                }
            }
        })
        bookmarksMenu.push({
            label: registry.lang.bookmarks?.manager || 'Manage bookmarks',
            click: () => {
                registry.window.onenote.webContents.send('p3x-onenote-action', {
                    action: 'bookmark-manager',
                })
            }
        })
        bookmarksMenu.push({
            type: 'separator'
        })
    }

    let bookmarksSort = bookmarks.sort(naturalCompareDocument({
        byProperty: 'title'
    }))

    // Build bookmark tree from folder paths (using / as separator)
    const tree = { items: [], children: {} };

    for (let bookmarkIndex in bookmarksSort) {
        const bookmark = bookmarksSort[bookmarkIndex]
        const thisBookmarkIndex = bookmarkIndex
        const menuItem = {
            label: bookmark.title,
            click: () => {
                registry.window.onenote.webContents.send('p3x-onenote-action-bookmark-open', bookmark)
            }
        }

        if (bookmark.category) {
            const parts = bookmark.category.split('/').map(p => p.trim()).filter(p => p);
            let node = tree;
            for (const part of parts) {
                if (!node.children[part]) {
                    node.children[part] = { items: [], children: {} };
                }
                node = node.children[part];
            }
            node.items.push(menuItem);
        } else {
            tree.items.push(menuItem);
        }
    }

    // Recursively build menu from tree
    function buildTreeMenu(node) {
        const result = [];
        // Add items at this level
        for (const item of node.items) {
            result.push(item);
        }
        // Add child folders sorted alphabetically
        const childKeys = Object.keys(node.children).sort((a, b) => a.localeCompare(b));
        for (const key of childKeys) {
            result.push({
                label: '📁 ' + key,
                submenu: buildTreeMenu(node.children[key]),
            });
        }
        return result;
    }

    const treeMenu = buildTreeMenu(tree);
    for (const item of treeMenu) {
        bookmarksMenu.push(item);
    }

    const template = [
        {
            label: registry.title,
            submenu: menus.default(),
        },
        {
            label: registry.lang.bookmarks.title,
            submenu: bookmarksMenu
        },
        {
            label: registry.lang.menu.action,
            submenu: [
                copyLocation,
                {
                    label: registry.lang.label.openUrl,
                    click: () => {
                        registry.window.onenote.webContents.send('p3x-onenote-action-open-url')
                    }
                },
                {type: 'separator'},
                {
                    label: registry.lang.tabs?.restoreClosedTab || 'Restore last closed tab',
                    click: () => {
                        registry.window.onenote.webContents.send('p3x-onenote-action', {
                            action: 'restore-closed-tab',
                        })
                    }
                }
            ]
        },
        {
            label: registry.lang.label.settings,
            submenu: [
                {
                    label: registry.lang.label.hideMenu,
                    type: 'checkbox',
                    checked: registry.optionToHideMenu,
                    click: () => {
                        try {

                            registry.optionToHideMenu = !registry.optionToHideMenu
                            registry.conf.set('option-to-hide-menu', registry.optionToHideMenu,);

                            if (!registry.optionToHideMenu) {
                                registry.window.onenote.setAutoHideMenuBar(false)
                                registry.window.onenote.setMenuBarVisibility(true)
                            } else {
                                const message = `
${registry.lang.label.optionToHideMenuState.yes}

${registry.lang.restart}

${registry.lang.slow}
`

                                dialog.showMessageBox( registry.window.onenote, {
                                    type: 'info',
//                                title: registry.lang.dialog.minimizationBehavior.title,
                                    message: message,
                                    buttons: [registry.lang.button.ok]
                                }).then(() => {
                                    relaunch()
                                }).catch(e => console.error(e))

                            }


                        } catch(e) {
                            console.error(e)
                        }
                    }
                },
                {
                    label: registry.lang.label.disableHide.checkbox,
                    type: 'checkbox',
                    checked: !registry.disableHide,
                    click: () => {
                        try {
                            registry.disableHide = !registry.disableHide;
                            registry.conf.set('disable-hide', registry.disableHide);

                            let message = registry.disableHide ? registry.lang.label.disableHide.message.yes : registry.lang.label.disableHide.message.no

                            if (registry.disableHide === true && registry.tray !== undefined) {
                                message += `

${registry.lang.restart}

${registry.lang.slow}
`
                            }

                            dialog.showMessageBox( registry.window.onenote, {
                                type: 'info',
                                title: registry.lang.dialog.minimizationBehavior.title,
                                message: message,
                                buttons: [registry.lang.button.ok]
                            }).then(() => {
                                console.log('reloading tray settings')
                                mainMenu()
                                mainTray({ allowQuit: true })
                            })

                        } catch(e) {
                            console.error(e)
                        }
                    }
                },
                {
                    label: registry.lang.label.optionToDisableInternalExternalPopup,
                    type: 'checkbox',
                    checked: registry.optionToDisableInternalExternalPopup,
                    click: () => {
                        registry.optionToDisableInternalExternalPopup = !registry.optionToDisableInternalExternalPopup;
                        registry.conf.set('option-to-disable-internal-external-popup', registry.optionToDisableInternalExternalPopup);

                        mainMenu()
                        mainTray()
                    }
                },
                {
                    label: registry.lang.label.setProxy,
                    click: action.setProxy,
                },
                {
                    label: registry.lang.label.darkThemeInvert?.title || 'Dark mode (using invert)',
                    submenu: [
                        {
                            label: registry.lang.label.darkThemeInvert?.off || 'Off',
                            type: 'radio',
                            checked: registry.darkThemeMode === 'off',
                            click: () => {
                                registry.darkThemeMode = 'off'
                                registry.conf.set('darkThemeMode', 'off')
                                registry.darkThemeInvert = false
                                registry.conf.set('darkThemeInvert', false)
                                registry.window.onenote.webContents.send('p3x-onenote-action', {
                                    action: 'dark-theme-invert',
                                    darkThemeInvert: false,
                                })
                            },
                        },
                        {
                            label: registry.lang.label.darkThemeInvert?.on || 'On',
                            type: 'radio',
                            checked: registry.darkThemeMode === 'on',
                            click: () => {
                                registry.darkThemeMode = 'on'
                                registry.conf.set('darkThemeMode', 'on')
                                registry.darkThemeInvert = true
                                registry.conf.set('darkThemeInvert', true)
                                registry.window.onenote.webContents.send('p3x-onenote-action', {
                                    action: 'dark-theme-invert',
                                    darkThemeInvert: true,
                                })
                            },
                        },
                        {
                            label: registry.lang.label.darkThemeInvert?.system || 'Follow system',
                            type: 'radio',
                            checked: registry.darkThemeMode === 'system',
                            click: () => {
                                
                                registry.darkThemeMode = 'system'
                                registry.conf.set('darkThemeMode', 'system')
                                const shouldDark = nativeTheme.shouldUseDarkColors
                                registry.darkThemeInvert = shouldDark
                                registry.conf.set('darkThemeInvert', shouldDark)
                                registry.window.onenote.webContents.send('p3x-onenote-action', {
                                    action: 'dark-theme-invert',
                                    darkThemeInvert: shouldDark,
                                })
                            },
                        },
                    ],
                },

            ],
        },
        {
            label: registry.lang.menu.language.label,
            submenu: languageCheckbox,
        },
        {
            label: registry.lang.label.edit,
            submenu: [
                copyLocation,
                {type: 'separator'},
                {
                    label: registry.lang.menu.role.edit.undo,
                    role: 'undo'
                },
                {
                    label: registry.lang.menu.role.edit.redo,
                    role: 'redo'
                },
                {type: 'separator'},
                {
                    label: registry.lang.menu.role.edit.cut,
                    role: 'cut'
                },
                {
                    label: registry.lang.menu.role.edit.copy,
                    role: 'copy'
                },
                {
                    label: registry.lang.menu.role.edit.paste,
                    role: 'paste'
                },
                {
                    label: registry.lang.menu.role.edit.pasteandmatchstyle,
                    role: 'pasteandmatchstyle'
                },
                {
                    label: registry.lang.menu.role.edit.delete,
                    role: 'delete'
                },
                {
                    label: registry.lang.menu.role.edit.selectall,
                    role: 'selectall'
                }
            ]
        },
        {
            label: registry.lang.label.view,
            submenu: [
                {
                    label: registry.lang.menu.role.view.reload,
                    role: 'reload'
                },
                {
                    label: registry.lang.menu.role.view.forcereload,
                    role: 'forcereload'
                },
                {
                    label: registry.lang.menu.role.view.toggledevtools,
                    role: 'toggledevtools'
                },
                {type: 'separator'},
                {
                    label: registry.lang.menu.role.view.resetzoom,
                    role: 'resetzoom'
                },
                {
                    label: registry.lang.menu.role.view.zoomin,
                    role: 'zoomin'
                },
                {
                    label: registry.lang.menu.role.view.zoomout,
                    role: 'zoomout'
                },
                {type: 'separator'},
                {
                    label: registry.lang.menu.role.view.togglefullscreen,
                    role: 'togglefullscreen'
                }
            ]
        },
        {
            label: registry.lang.menu.help.title,
            role: 'help',
            submenu: [
                {
                    label: registry.lang.label.download,
                    click: action.download
                },
                {
                    label: 'GitHub',
                    click: action.github
                },
                {
                    label: registry.lang.label.developer,
                    click: action.patrik
                },
                {
                    label: 'P3X',
                    click: action.p3x
                },
                {
                    label: 'Corifeus',
                    click: action.corifeus
                },
                {
                    label: 'NPM',
                    click: action.npm
                },
            ]
        },
        {
            label: registry.lang.label.donate,
            click: () => {
                shell.openExternal('https://paypal.me/patrikx3')
            }
        },
    ]

    //if (process.env.APPIMAGE !== undefined) {
        template[7].submenu.push({type: 'separator'})
        template[7].submenu.push({
                label: registry.lang.menu.help.checkUpdates,
                click: async () => {
                    const electronUpdater = await import("electron-updater");
                    const { autoUpdater } = electronUpdater.default ?? electronUpdater;
                    autoUpdater.checkForUpdatesAndNotify();
                }
            },
        )
    //}


    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

export default mainMenu;
