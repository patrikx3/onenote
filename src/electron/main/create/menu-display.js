const mainTray = require('./tray')
const mainMenu = require('./menu')

module.exports = (menu) => {


    return {
        label: global.p3x.onenote.lang.label.hideMenu,
        type: 'checkbox',
        checked: global.p3x.onenote.hideMenu,
        click: () => {
            global.p3x.onenote.hideMenu = !global.p3x.onenote.hideMenu;
            global.p3x.onenote.conf.set('hide-menu', global.p3x.onenote.hideMenu);

            try {
                mainMenu()
                mainTray()
            } catch(e) {
                console.error(e)
            }
        }
    }

}
