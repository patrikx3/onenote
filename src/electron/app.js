const configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new configstore(pkg.name);

const translation = require('../translation/default')

global.p3x = {
    onenote: {
        lang: translation,
        title: translation.title,
        conf: conf,
        disableHide: true,
        iconFile: `${__dirname}/asset/256x256.png`,
        tray: undefined,
        mainWindow: undefined,
        action: undefined,
        menus: undefined,
        createMenu: undefined,
        setVisible: undefined,
        createWindow: undefined,
    }
}

// configuration
global.p3x.onenote.disableHide = conf.get('disable-hide')
if (global.p3x.onenote.disableHide === undefined) {
    conf.set('disable-hide', true)
    global.p3x.onenote.disableHide = true;
}

// loading
global.p3x.onenote.action = require('./main/action');
global.p3x.onenote.menus = require('./main/menus');
global.p3x.onenote.createMenu = require('./main/create/menu')
global.p3x.onenote.createTray = require('./main/create/tray')
global.p3x.onenote.setVisible = require('./main/set-visible')
global.p3x.onenote.createWindow = require('./main/create/window')


/*
const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
    global.p3x.onenote.setVisible(true);
    global.p3x.onenote.mainWindow.webContents.reload();
})

if (isSecondInstance) {
    app.quit()
}
*/

// app and ipc main events and configuration
require('./main/ipc-main')
require('./main/app-events')



