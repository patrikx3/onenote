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

    if (global.p3x.onenote.window.onenote !== undefined) {

        if (visible || (global.p3x.onenote.window.onenote.isMinimized() && !force)) {
            visible = true;
            global.p3x.onenote.window.onenote.show();
        } else {
            global.p3x.onenote.window.onenote.minimize()
            if (!global.p3x.onenote.disableHide) {
                global.p3x.onenote.window.onenote.hide();
            }
        }
    }
    global.p3x.onenote.conf.set('visible', visible);
    global.p3x.onenote.mainMenu();
    global.p3x.onenote.mainTray()


    if (visible || force) {
        global.p3x.onenote.window.onenote.focus();

        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'focus'
        })
    }
}

module.exports = setVisible;