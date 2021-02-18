const {app, Menu, Tray } = require('electron')

const menus = require('../menus');
const action = require('../action');

const destroyTray  = () => {
    if (global.p3x.onenote.tray !== undefined) {
        global.p3x.onenote.tray.destroy()
        global.p3x.onenote.tray = undefined
    }
}

function mainTray() {

//    app.whenReady().then(() => {
        //destroyTray();

        if (!global.p3x.onenote.disableHide) {

            if (global.p3x.onenote.tray === undefined ) {
                global.p3x.onenote.tray = new Tray(global.p3x.onenote.iconFile)
                const click = () => {
                    console.info('tray on click is executed - if not shown in console. this click is not executed.')
                    action.toggleVisible()
                }
                global.p3x.onenote.tray.on('click', click)
            }

            global.p3x.onenote.tray.setToolTip(`${global.p3x.onenote.title} v${global.p3x.onenote.pkg.version}`)

            const menu = menus.default()

            const contextMenu = Menu.buildFromTemplate(menu)
            global.p3x.onenote.tray.setContextMenu(contextMenu)

        } else if (global.p3x.onenote.tray !== undefined) {
            let { args } = require('electron')
            //console.log('args', args, 'process.env.APPIMAGE', process.env.APPIMAGE)

            if (process.env.APPIMAGE) {
                if (args === undefined) {
                    args = []
                }
                const options = {args};
                options.execPath = process.env.APPIMAGE;
                options.args.unshift('--appimage-extract-and-run');
                app.relaunch(options);
                app.exit(0);
            } else {
                app.relaunch();
                app.exit(0);
            }


        }
//    })

}

module.exports = mainTray;
