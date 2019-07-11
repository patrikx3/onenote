const {shell, app} = require('electron')

const action = {
    setProxy: require('./actions/set-proxy'),

    restart: () => {
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'restart'
        })
    },
    home: () => {
        global.p3x.onenote.window.onenote.show();
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'home'
        })
    },
    corporate: () => {
        global.p3x.onenote.window.onenote.show();
        global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'corporate'
        })
    },
    toggleVisible: () => {
        if (global.p3x.onenote.window.onenote === undefined) {
            return;
        }
        global.p3x.onenote.setVisible(!global.p3x.onenote.isVisible());
    },
    quit: function () {
        app.isQuiting = true;
        app.quit();
    },
    github: () => {
        shell.openExternal('https://github.com/patrikx3/onenote')
    },
    patrik: () => {
        shell.openExternal('https://patrikx3.com')
    },
    p3x: () => {
        shell.openExternal('https://github.com/patrikx3')
    },
    corifeus: () => {
        shell.openExternal('https://corifeus.com')
    },
    npm: () => {
        shell.openExternal('https://www.npmjs.com/~patrikx3')
    },
    download: () => {
        shell.openExternal('https://github.com/patrikx3/onenote/releases')
    },
}

module.exports = action;
