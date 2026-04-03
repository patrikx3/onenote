import registry from '../registry.mjs'

function setVisible(visible = true, force = false) {
    if (visible === null) {
        visible = true;
    }


    /*
    else {
        mainWindow.webContents.send('p3x-onenote-action', {
            action: 'focus-save'
        })
    }
    */

    if (registry.window.onenote !== undefined) {

        if (visible || (registry.window.onenote.isMinimized() && !force)) {
            visible = true;
            registry.window.onenote.show();
        } else {
            registry.window.onenote.minimize()
            if (!registry.disableHide) {
                registry.window.onenote.hide();
            }
        }
    }
    registry.conf.set('visible', visible);
    registry.mainMenu();
    registry.mainTray()


    if (visible || force) {
        registry.window.onenote.focus();

        registry.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'focus'
        })
    }
}

export default setVisible;
