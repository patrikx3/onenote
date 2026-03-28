import { app, Menu, Tray } from 'electron'
import menus from '../menus.mjs'
import action from '../action.mjs'
import relaunch from '../actions/relaunch.mjs'

/*
const destroyTray  = () => {
    if (global.p3x.onenote.tray !== undefined) {
        global.p3x.onenote.tray.destroy()
        global.p3x.onenote.tray = undefined
    }
}
*/

function mainTray(opts) {

    if (opts === undefined) {
        opts = {
            allowQuit: false
        }
    }

//    app.whenReady().then(() => {
        //destroyTray();

        if (!global.p3x.onenote.disableHide) {

            if (global.p3x.onenote.tray === undefined ) {
                global.p3x.onenote.tray = new Tray(global.p3x.onenote.iconFile)
                const click = () => {
                    //console.info('tray on click is executed - if not shown in console. this click is not executed.')
                    action.toggleVisible()
                }
                global.p3x.onenote.tray.on('click', click)
            }

            global.p3x.onenote.tray.setToolTip(`${global.p3x.onenote.title} v${global.p3x.onenote.pkg.version}`)

            const menu = menus.default()

            const contextMenu = Menu.buildFromTemplate(menu)
            global.p3x.onenote.tray.setContextMenu(contextMenu)

        } else if (global.p3x.onenote.tray !== undefined && opts.allowQuit === true) {
            relaunch()
        }
//    })

}

export default mainTray;
