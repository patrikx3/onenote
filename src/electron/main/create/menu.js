const { dialog, Menu } = require('electron')
const menus = require('../menus');
const action = require('../action');

const mainTray = require('./tray')

function mainMenu() {

    const minimizationBehaviorLabel = !global.p3x.onenote.disableHide ? global.p3x.onenote.lang.label.disableHide.no : global.p3x.onenote.lang.label.disableHide.yes

    const template = [
        {
            label: global.p3x.onenote.title,
            submenu: menus.default(),
        },
        {
            label: global.p3x.onenote.lang.label.settings,
            submenu: [
                {
                    label: minimizationBehaviorLabel,
                    click: () => {
                        global.p3x.onenote.disableHide = !global.p3x.onenote.disableHide;
                        global.p3x.onenote.conf.set('disable-hide', global.p3x.onenote.disableHide);

                        const message = global.p3x.onenote.disableHide ? global.p3x.onenote.lang.label.disableHide.message.yes : global.p3x.onenote.lang.label.disableHide.message.no

                        dialog.showMessageBox(global.p3x.onenote.window.onenote, {
                            type: 'info',
                            title: global.p3x.onenote.lang.dialog.minimizationBehavior.title,
                            message: message,
                            buttons: [ global.p3x.onenote.lang.button.ok ]
                        })
                        mainMenu()
                        mainTray()
                    }
                },
                {
                    label: global.p3x.onenote.lang.label.setProxy,
                    click: action.setProxy,
                }
            ],
        },
        {
            label: global.p3x.onenote.lang.label.edit,
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'cut'},
                {role: 'copy'},
                {role: 'paste'},
                {role: 'pasteandmatchstyle'},
                {role: 'delete'},
                {role: 'selectall'}
            ]
        },
        {
            label: global.p3x.onenote.lang.label.view,
            submenu: [
                {role: 'reload'},
                {role: 'forcereload'},
                {role: 'toggledevtools'},
                {type: 'separator'},
                {role: 'resetzoom'},
                {role: 'zoomin'},
                {role: 'zoomout'},
                {type: 'separator'},
                {role: 'togglefullscreen'}
            ]
        },
        {
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
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

module.exports = mainMenu;