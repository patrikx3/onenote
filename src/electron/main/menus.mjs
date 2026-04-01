import action from './action.mjs'

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
                label: global.p3x.onenote.lang.label.clearCache?.title || global.p3x.onenote.lang.label.clearCache || 'Clear data and restart',
                submenu: [
                    {
                        label: global.p3x.onenote.lang.label.clearCache?.allTabs || 'All tabs - everything',
                        click: () => action.sessionClear('all-everything')
                    },
                    {
                        label: global.p3x.onenote.lang.label.clearCache?.currentTab || 'Current tab - everything',
                        click: () => action.sessionClear('current-everything')
                    },
                    { type: 'separator' },
                    {
                        label: global.p3x.onenote.lang.label.clearCache?.allCookies || 'All tabs - cookies only',
                        click: () => action.sessionClear('all-cookies')
                    },
                    {
                        label: global.p3x.onenote.lang.label.clearCache?.currentCookies || 'Current tab - cookies only',
                        click: () => action.sessionClear('current-cookies')
                    },
                    { type: 'separator' },
                    {
                        label: global.p3x.onenote.lang.label.clearCache?.allCache || 'All tabs - cache only',
                        click: () => action.sessionClear('all-cache')
                    },
                    {
                        label: global.p3x.onenote.lang.label.clearCache?.currentCache || 'Current tab - cache only',
                        click: () => action.sessionClear('current-cache')
                    },
                ]
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

export default menus;
