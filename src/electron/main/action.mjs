import { shell, app } from 'electron'
import setProxy from './actions/set-proxy.mjs'
import registry from '../registry.mjs'

const action = {
    setProxy: setProxy,

    restart: () => {
        registry.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'restart'
        })
    },
    sessionClear: (mode) => {
        registry.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'session-clear',
            mode: mode,
        })
    },
    home: () => {
        registry.window.onenote.show();
        registry.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'home'
        })
    },
    corporate: () => {
        registry.window.onenote.show();
        registry.window.onenote.webContents.send('p3x-onenote-action', {
            action: 'corporate'
        })
    },
    toggleVisible: () => {
        if (registry.window.onenote === undefined) {
            return;
        }
        registry.setVisible(!registry.isVisible());
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

export default action;
