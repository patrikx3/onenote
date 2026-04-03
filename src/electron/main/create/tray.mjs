import { app, Menu, Tray } from 'electron'
import menus from '../menus.mjs'
import action from '../action.mjs'
import relaunch from '../actions/relaunch.mjs'
import registry from '../../registry.mjs'

/*
const destroyTray  = () => {
    if (registry.tray !== undefined) {
        registry.tray.destroy()
        registry.tray = undefined
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

        if (!registry.disableHide) {

            if (registry.tray === undefined ) {
                registry.tray = new Tray(registry.iconFile)
                const click = () => {
                    //console.info('tray on click is executed - if not shown in console. this click is not executed.')
                    action.toggleVisible()
                }
                registry.tray.on('click', click)
            }

            registry.tray.setToolTip(`${registry.title} v${registry.pkg.version}`)

            const menu = menus.default()

            const contextMenu = Menu.buildFromTemplate(menu)
            registry.tray.setContextMenu(contextMenu)

        } else if (registry.tray !== undefined && opts.allowQuit === true) {
            relaunch()
        }
//    })

}

export default mainTray;
