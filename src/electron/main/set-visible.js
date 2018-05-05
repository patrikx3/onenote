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

    if (global.p3x.onenote.mainWindow !== undefined) {

        if (visible || (global.p3x.onenote.mainWindow.isMinimized() && !force)) {
            visible = true;
            global.p3x.onenote.mainWindow.show();
        } else {
            global.p3x.onenote.mainWindow.minimize()
            if (!global.p3x.onenote.disableHide) {
                global.p3x.onenote.mainWindow.hide();
            }
        }
    }
    global.p3x.onenote.conf.set('visible', visible);
    global.p3x.onenote.createMenu();
    global.p3x.onenote.createTray()


    if (visible || force) {
        global.p3x.onenote.mainWindow.webContents.send('p3x-onenote-action', {
            action: 'focus'
        })
    }
}

module.exports = setVisible;