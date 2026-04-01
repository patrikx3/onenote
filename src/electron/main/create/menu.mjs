import { dialog, Menu, shell, nativeTheme } from 'electron'
import menus from '../menus.mjs'
import action from '../action.mjs'
import mainTray from './tray.mjs'
import naturalCompareDocument from '../../lib/natural-compare-document.mjs'
import relaunch from '../actions/relaunch.mjs'

function mainMenu() {


    const copyLocation = {
        label: global.p3x.onenote.lang.label.copyLocation,
        click: () => {
            global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
                action: 'get-location'
            })
        }
    }

    const minimizationBehaviorLabel = !global.p3x.onenote.disableHide ? global.p3x.onenote.lang.label.disableHide.no : global.p3x.onenote.lang.label.disableHide.yes


    const languageCheckbox = [];
    for (let trans of Object.keys(global.p3x.onenote.lang.menu.language.translations)) {
        const transLabel = global.p3x.onenote.lang.menu.language.translations[trans]
        const transMenu = ((trans) => {
            return {
                label: transLabel,
                type: 'radio',
                checked: global.p3x.onenote.conf.get('lang') === trans,
                click: () => {
                    global.p3x.onenote.conf.set('lang', trans)
                    global.p3x.onenote.translationKey = trans
                    global.p3x.onenote.lang = global.p3x.onenote.translations[trans]
                    mainMenu()
                    mainTray()
                    global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-language', {
                        translation: trans,
                    })
                }
            }
        })(trans)
        languageCheckbox.push(transMenu)
    }

    const bookmarksMenu = [
        {
            label: global.p3x.onenote.lang.bookmarks.add,
            click: () => {
                global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action-bookmark-add', {
                    edit: false,
                })
            }
        },
        {
            label: global.p3x.onenote.lang.bookmarks.importBookmarks || 'Import bookmarks',
            click: async () => {
                try {
                    const result = await global.p3x.onenote.window.onenote.webContents.executeJavaScript(
                        `window.electronShim.ipcRenderer.invoke('p3x-onenote-bookmarks-import')`
                    )
                    if (result && result.success) {
                        const msg = global.p3x.onenote.lang.bookmarks.imported
                            ? global.p3x.onenote.lang.bookmarks.imported(result.added)
                            : `Imported ${result.added} bookmark(s).`
                        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
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

    const bookmarks = global.p3x.onenote.conf.get('bookmarks') || []

    if (bookmarks.length > 0) {
        bookmarksMenu.push({
            label: global.p3x.onenote.lang.bookmarks.exportBookmarks || 'Export bookmarks',
            click: async () => {
                try {
                    const result = await global.p3x.onenote.window.onenote.webContents.executeJavaScript(
                        `window.electronShim.ipcRenderer.invoke('p3x-onenote-bookmarks-export')`
                    )
                    if (result && result.success) {
                        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
                            action: 'toast',
                            message: global.p3x.onenote.lang.bookmarks.exported || 'Bookmarks exported.',
                        })
                    }
                } catch (e) {
                    console.error(e)
                }
            }
        })
        bookmarksMenu.push({
            label: global.p3x.onenote.lang.bookmarks?.manager || 'Manage bookmarks',
            click: () => {
                global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
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
                global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action-bookmark-open', bookmark)
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
            label: global.p3x.onenote.title,
            submenu: menus.default(),
        },
        {
            label: global.p3x.onenote.lang.bookmarks.title,
            submenu: bookmarksMenu
        },
        {
            label: p3x.onenote.lang.menu.action,
            submenu: [
                copyLocation,
                {
                    label: global.p3x.onenote.lang.label.openUrl,
                    click: () => {
                        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action-open-url')
                    }
                },
                {type: 'separator'},
                {
                    label: global.p3x.onenote.lang.tabs?.restoreClosedTab || 'Restore last closed tab',
                    click: () => {
                        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
                            action: 'restore-closed-tab',
                        })
                    }
                }
            ]
        },
        {
            label: global.p3x.onenote.lang.label.settings,
            submenu: [
                {
                    label: global.p3x.onenote.lang.label.hideMenu,
                    type: 'checkbox',
                    checked: global.p3x.onenote.optionToHideMenu,
                    click: () => {
                        try {

                            global.p3x.onenote.optionToHideMenu = !global.p3x.onenote.optionToHideMenu
                            global.p3x.onenote.conf.set('option-to-hide-menu', global.p3x.onenote.optionToHideMenu,);

                            if (!global.p3x.onenote.optionToHideMenu) {
                                global.p3x.onenote.window.onenote.setAutoHideMenuBar(false)
                                global.p3x.onenote.window.onenote.setMenuBarVisibility(true)
                            } else {
                                const message = `
${global.p3x.onenote.lang.label.optionToHideMenuState.yes}

${global.p3x.onenote.lang.restart}

${global.p3x.onenote.lang.slow}
`

                                dialog.showMessageBox( global.p3x.onenote.window.onenote, {
                                    type: 'info',
//                                title: global.p3x.onenote.lang.dialog.minimizationBehavior.title,
                                    message: message,
                                    buttons: [global.p3x.onenote.lang.button.ok]
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
                    label: global.p3x.onenote.lang.label.disableHide.checkbox,
                    type: 'checkbox',
                    checked: !global.p3x.onenote.disableHide,
                    click: () => {
                        try {
                            global.p3x.onenote.disableHide = !global.p3x.onenote.disableHide;
                            global.p3x.onenote.conf.set('disable-hide', global.p3x.onenote.disableHide);

                            let message = global.p3x.onenote.disableHide ? global.p3x.onenote.lang.label.disableHide.message.yes : global.p3x.onenote.lang.label.disableHide.message.no

                            if (global.p3x.onenote.disableHide === true && global.p3x.onenote.tray !== undefined) {
                                message += `

${global.p3x.onenote.lang.restart}

${global.p3x.onenote.lang.slow}
`
                            }

                            dialog.showMessageBox( global.p3x.onenote.window.onenote, {
                                type: 'info',
                                title: global.p3x.onenote.lang.dialog.minimizationBehavior.title,
                                message: message,
                                buttons: [global.p3x.onenote.lang.button.ok]
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
                    label: global.p3x.onenote.lang.label.optionToDisableInternalExternalPopup,
                    type: 'checkbox',
                    checked: global.p3x.onenote.optionToDisableInternalExternalPopup,
                    click: () => {
                        global.p3x.onenote.optionToDisableInternalExternalPopup = !global.p3x.onenote.optionToDisableInternalExternalPopup;
                        global.p3x.onenote.conf.set('option-to-disable-internal-external-popup', global.p3x.onenote.optionToDisableInternalExternalPopup);

                        mainMenu()
                        mainTray()
                    }
                },
                {
                    label: global.p3x.onenote.lang.label.setProxy,
                    click: action.setProxy,
                },
                {
                    label: global.p3x.onenote.lang.label.darkThemeInvert?.title || 'Dark mode (using invert)',
                    submenu: [
                        {
                            label: global.p3x.onenote.lang.label.darkThemeInvert?.off || 'Off',
                            type: 'radio',
                            checked: global.p3x.onenote.darkThemeMode === 'off',
                            click: () => {
                                global.p3x.onenote.darkThemeMode = 'off'
                                global.p3x.onenote.conf.set('darkThemeMode', 'off')
                                global.p3x.onenote.darkThemeInvert = false
                                global.p3x.onenote.conf.set('darkThemeInvert', false)
                                global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
                                    action: 'dark-theme-invert',
                                    darkThemeInvert: false,
                                })
                            },
                        },
                        {
                            label: global.p3x.onenote.lang.label.darkThemeInvert?.on || 'On',
                            type: 'radio',
                            checked: global.p3x.onenote.darkThemeMode === 'on',
                            click: () => {
                                global.p3x.onenote.darkThemeMode = 'on'
                                global.p3x.onenote.conf.set('darkThemeMode', 'on')
                                global.p3x.onenote.darkThemeInvert = true
                                global.p3x.onenote.conf.set('darkThemeInvert', true)
                                global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
                                    action: 'dark-theme-invert',
                                    darkThemeInvert: true,
                                })
                            },
                        },
                        {
                            label: global.p3x.onenote.lang.label.darkThemeInvert?.system || 'Follow system',
                            type: 'radio',
                            checked: global.p3x.onenote.darkThemeMode === 'system',
                            click: () => {
                                
                                global.p3x.onenote.darkThemeMode = 'system'
                                global.p3x.onenote.conf.set('darkThemeMode', 'system')
                                const shouldDark = nativeTheme.shouldUseDarkColors
                                global.p3x.onenote.darkThemeInvert = shouldDark
                                global.p3x.onenote.conf.set('darkThemeInvert', shouldDark)
                                global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
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
            label: global.p3x.onenote.lang.menu.language.label,
            submenu: languageCheckbox,
        },
        {
            label: global.p3x.onenote.lang.label.edit,
            submenu: [
                copyLocation,
                {type: 'separator'},
                {
                    label: p3x.onenote.lang.menu.role.edit.undo,
                    role: 'undo'
                },
                {
                    label: p3x.onenote.lang.menu.role.edit.redo,
                    role: 'redo'
                },
                {type: 'separator'},
                {
                    label: p3x.onenote.lang.menu.role.edit.cut,
                    role: 'cut'
                },
                {
                    label: p3x.onenote.lang.menu.role.edit.copy,
                    role: 'copy'
                },
                {
                    label: p3x.onenote.lang.menu.role.edit.paste,
                    role: 'paste'
                },
                {
                    label: p3x.onenote.lang.menu.role.edit.pasteandmatchstyle,
                    role: 'pasteandmatchstyle'
                },
                {
                    label: p3x.onenote.lang.menu.role.edit.delete,
                    role: 'delete'
                },
                {
                    label: p3x.onenote.lang.menu.role.edit.selectall,
                    role: 'selectall'
                }
            ]
        },
        {
            label: global.p3x.onenote.lang.label.view,
            submenu: [
                {
                    label: p3x.onenote.lang.menu.role.view.reload,
                    role: 'reload'
                },
                {
                    label: p3x.onenote.lang.menu.role.view.forcereload,
                    role: 'forcereload'
                },
                {
                    label: p3x.onenote.lang.menu.role.view.toggledevtools,
                    role: 'toggledevtools'
                },
                {type: 'separator'},
                {
                    label: p3x.onenote.lang.menu.role.view.resetzoom,
                    role: 'resetzoom'
                },
                {
                    label: p3x.onenote.lang.menu.role.view.zoomin,
                    role: 'zoomin'
                },
                {
                    label: p3x.onenote.lang.menu.role.view.zoomout,
                    role: 'zoomout'
                },
                {type: 'separator'},
                {
                    label: p3x.onenote.lang.menu.role.view.togglefullscreen,
                    role: 'togglefullscreen'
                }
            ]
        },
        {
            label: global.p3x.onenote.lang.menu.help.title,
            role: 'help',
            submenu: [
                {
                    label: global.p3x.onenote.lang.label.download,
                    click: action.download
                },
                {
                    label: 'GitHub',
                    click: action.github
                },
                {
                    label: global.p3x.onenote.lang.label.developer,
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
            label: global.p3x.onenote.lang.label.donate,
            click: () => {
                shell.openExternal('https://paypal.me/patrikx3')
            }
        },
    ]

    //if (process.env.APPIMAGE !== undefined) {
        template[7].submenu.push({type: 'separator'})
        template[7].submenu.push({
                label: global.p3x.onenote.lang.menu.help.checkUpdates,
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
