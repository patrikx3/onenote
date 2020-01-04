const action = require('./action')

const menus = {
    default: () => {

        let visible = false;
        if (global.p3x.onenote.window.onenote !== undefined) {
            visible = global.p3x.onenote.isVisible() ? true : false;
        }

        let menus = [
            {
                label: global.p3x.onenote.lang.label.personalHome,
                click: action.home
            },
            {
                label: global.p3x.onenote.lang.label.corporateHome,
                click: action.corporate
            },
            {
                label: global.p3x.onenote.lang.label.clearCache,
                click: action.restart
            },
            { type: 'separator' },
            {
                label: global.p3x.onenote.lang.label.quit,
                click: action.quit
            }
        ]

        if (!global.p3x.onenote.disableHide) {
            const hideMenu = {
                label: visible ? global.p3x.onenote.lang.label.hide : global.p3x.onenote.lang.label.show,
                click: action.toggleVisible
            }
            menus.splice(3, 0, hideMenu);
        }


        return menus;
    }
}

module.exports = menus;
