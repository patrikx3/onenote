import action from './action.mjs'
import registry from '../registry.mjs'

const menus = {
    default: () => {

        let visible = false;
        if (registry.window.onenote !== undefined) {
            visible = registry.isVisible() ? true : false;
        }

        let menus = [
            {
                label: registry.lang.label.personalHome,
                click: action.home
            },
            {
                label: registry.lang.label.corporateHome,
                click: action.corporate
            },
            {
                label: registry.lang.label.clearCache?.title || registry.lang.label.clearCache || 'Clear data and restart',
                submenu: [
                    {
                        label: registry.lang.label.clearCache?.allTabs || 'All tabs - everything',
                        click: () => action.sessionClear('all-everything')
                    },
                    {
                        label: registry.lang.label.clearCache?.currentTab || 'Current tab - everything',
                        click: () => action.sessionClear('current-everything')
                    },
                    { type: 'separator' },
                    {
                        label: registry.lang.label.clearCache?.allCookies || 'All tabs - cookies only',
                        click: () => action.sessionClear('all-cookies')
                    },
                    {
                        label: registry.lang.label.clearCache?.currentCookies || 'Current tab - cookies only',
                        click: () => action.sessionClear('current-cookies')
                    },
                    { type: 'separator' },
                    {
                        label: registry.lang.label.clearCache?.allCache || 'All tabs - cache only',
                        click: () => action.sessionClear('all-cache')
                    },
                    {
                        label: registry.lang.label.clearCache?.currentCache || 'Current tab - cache only',
                        click: () => action.sessionClear('current-cache')
                    },
                ]
            },
            { type: 'separator' },
            {
                label: registry.lang.label.quit,
                click: action.quit
            }
        ]

        if (!registry.disableHide) {
            const hideMenu = {
                label: visible ? registry.lang.label.hide : registry.lang.label.show,
                click: action.toggleVisible
            }
            menus.splice(3, 0, hideMenu);
        }


        return menus;
    }
}

export default menus;
