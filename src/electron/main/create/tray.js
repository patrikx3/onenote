const {Menu, Tray} = require('electron')

const menus = require('../menus');
const action = require('../action');

function mainTray() {
    if (!global.p3x.onenote.disableHide) {
        if (global.p3x.onenote.tray === undefined) {
            global.p3x.onenote.tray = new Tray(global.p3x.onenote.iconFile)
            global.p3x.onenote.tray.setToolTip(`${global.p3x.onenote.title} v${global.p3x.onenote.pkg.version}`)
            const click = () => {
                console.info('tray on click is executed - if not shown in console. this click is not executed.')
                action.toggleVisible()
            }
            global.p3x.onenote.tray.on('click', click)

        }
        const menu = menus.default()

        menu.splice(menu.length  - 3, 0, require('./menu-display')())

        const contextMenu = Menu.buildFromTemplate(menu)
        global.p3x.onenote.tray.setContextMenu(contextMenu)

    } else {
        if (global.p3x.onenote.tray !== undefined) {
            global.p3x.onenote.tray.destroy()
            global.p3x.onenote.tray = undefined
        }
    }
}

module.exports = mainTray;
