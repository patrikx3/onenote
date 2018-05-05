const { Menu, Tray } = require('electron')

const menus = require('../menus');
const action = require('../action');

function createTray() {
    if (global.p3x.onenote.tray === undefined) {
        global.p3x.onenote.tray = new Tray(global.p3x.onenote.iconFile)
        global.p3x.onenote.tray.setToolTip(global.p3x.onenote.title)
        global.p3x.onenote.tray.on('click', action.toggleVisible)
    }
    const contextMenu = Menu.buildFromTemplate(menus.default())
    global.p3x.onenote.tray.setContextMenu(contextMenu)
}

module.exports = createTray;