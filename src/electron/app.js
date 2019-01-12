const configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new configstore(pkg.name);

const { app } = require('electron');

const translation = require('../translation/default')
const path = require('path')

global.p3x = {
    onenote: {
        pkg: pkg,
        lang: translation,
        title: translation.title,
        conf: conf,
        disableHide: true,
        iconFile: path.resolve(`${__dirname}/images/256x256.png`),
        tray: undefined,
        window: {
          onenote: undefined,
        },
        action: undefined,
        menus: undefined,
        mainMenu: undefined,
        setVisible: undefined,
        createWindow: {
            onenote: undefined,
        },
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
global.p3x.onenote.mainMenu = require('./main/create/menu')
global.p3x.onenote.mainTray = require('./main/create/tray')
global.p3x.onenote.setVisible = require('./main/set-visible')
global.p3x.onenote.createWindow.onenote = require('./main/create/window/onenote')


const semver = require('semver')
if (semver.gt(process.versions.electron === undefined ? '4.0.0' : process.versions.electron, '3.0.0')) {
    const gotTheLock = app.requestSingleInstanceLock()

    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        global.p3x.onenote.setVisible(true);
        global.p3x.onenote.window.onenote.webContents.reload();
    })

    if (!gotTheLock) {
        app.quit()
        return
    }

} else {
    const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
        global.p3x.onenote.setVisible(true);
        //global.p3x.onenote.window.onenote.webContents.reload();
    })

    if (isSecondInstance) {
        return app.quit()
    }
}

// app and ipc main events and configuration
require('./main/ipc-main')
require('./main/app-events')


