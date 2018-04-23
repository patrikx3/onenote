const electron = require('electron');
const { app, Menu, Tray, shell, dialog} = require('electron')
const ipc = electron.ipcMain;
let tray;
let mainWindow;
const iconFile = `${__dirname}/images/256x256.png`;

const title = 'P3X OneNote';


const BrowserWindow = electron.BrowserWindow;
const configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new configstore(pkg.name);

let disableHide = conf.get('disable-hide')
if (disableHide === undefined) {
    conf.set('disable-hide', true)
    disableHide = true;
}


/*
const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
    setVisible(true);
    mainWindow.webContents.reload();
})

if (isSecondInstance) {
    app.quit()
}
*/

const action = {
    restart: () => {
        mainWindow.webContents.send('p3x-onenote-action', {
            action: 'restart'
        })
    },
    home: () => {
        mainWindow.show();
        mainWindow.webContents.send('p3x-onenote-action', {
            action: 'home'
        })
    },
    corporate: () => {
        mainWindow.show();
        mainWindow.webContents.send('p3x-onenote-action', {
            action: 'corporate'
        })
    },
    toggleVisible: () => {
        if (mainWindow === undefined) {
            return;
        }
        setVisible(!mainWindow.isVisible());
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

const menus = {
    default: () => {

        let visible = false;
        if (mainWindow !== undefined) {
            visible = mainWindow.isVisible() ? true : false;
        }

        let menus = [
            {
                label: 'Personal home',
                click: action.home
            },
            {
                label: 'Corporate home',
                click: action.corporate
            },
            {
                label: 'First sign off, then click this menu option to clear the cache',
                click: action.restart
            },

            {
                label: 'Quit',
                click: action.quit
            }
        ]

        if (!disableHide) {
            const hideMenu = {
                label: visible ? 'Hide' : 'Show',
                click: action.toggleVisible
            }
            menus.splice( 3, 0, hideMenu );
        }


        return menus;
    }
}

function createMenu() {

    const minimizationBehaviorLabel = !disableHide ? 'Disable hiding the main window' : 'Enable hiding the main window'

    const template = [
        {
            label: title,
            submenu: menus.default(),
        },
        {
            label: 'Settings',
            submenu: [
                {
                    label: minimizationBehaviorLabel,
                    click: () => {
                        disableHide = !disableHide;
                        conf.set('disable-hide', disableHide);

                        const message = disableHide ? 'For now, the main window is always shown' : 'For now, when you minimize the window it will be hidden and can be only shown in the tray.'

                        dialog.showMessageBox(mainWindow, {
                            type: 'info',
                            title: 'Minimization behavior',
                            message: message,
                            buttons: ['OK']
                        })
                        createMenu()
                        createTray()
                    }
                }
            ],
        },
        {
            label: 'Edit',
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'cut'},
                {role: 'copy'},
                {role: 'paste'},
                {role: 'pasteandmatchstyle'},
                {role: 'delete'},
                {role: 'selectall'}
            ]
        },
        {
            label: 'View',
            submenu: [
                {role: 'reload'},
                {role: 'forcereload'},
                {role: 'toggledevtools'},
                {type: 'separator'},
                {role: 'resetzoom'},
                {role: 'zoomin'},
                {role: 'zoomout'},
                {type: 'separator'},
                {role: 'togglefullscreen'}
            ]
        },
        {
            role: 'help',
            submenu: [
                {
                    label: 'Download',
                    click: action.download
                },
                {
                    label: 'GitHub',
                    click: action.github
                },
                {
                    label: 'Patrik Laszlo',
                    click: action.patrik
                },
                {
                    label: 'P3X',
                    click: action.p3x
                },
                {
                    label: 'Corifeus',
                    click: action.corifeus
                },
                {
                    label: 'NPM',
                    click: action.npm
                },
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

function createTray() {
    if (tray === undefined) {
        tray = new Tray(iconFile)
        tray.setToolTip(title)
        tray.on('click', action.toggleVisible)
    }
    const contextMenu = Menu.buildFromTemplate(menus.default())
    tray.setContextMenu(contextMenu)
}

function setVisible(visible = true, force = false) {
    if (visible === null) {
        visible = true;
    }
    if (mainWindow !== undefined) {

        if (visible || (mainWindow.isMinimized() && !force)) {
            visible = true;
            mainWindow.show();
        } else {
            mainWindow.minimize()
            if (!disableHide) {
                mainWindow.hide();
            }
        }
    }
    conf.set('visible', visible);
    createMenu();
    createTray()
}


function createWindow() {

    mainWindow = new BrowserWindow({
        icon: iconFile,
        toolbar: false,
        title: title,
    });


    setVisible(true);

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('minimize', function (event) {
        event.preventDefault()
        setVisible(false, true);
    });

    mainWindow.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault()
            setVisible(false);
        }
        return false;
    });

    const windowBounds = conf.get('window-bounds');
    if (windowBounds !== null && windowBounds !== undefined) {
        mainWindow.setBounds(windowBounds);
    }



}
ipc.on('did-finish-load', function () {
    const toWebview = conf.get('to-webview');
//    console.log('Loading data', hostData);
    if (toWebview !== undefined && toWebview !== null) {
        mainWindow.webContents.send('p3x-onenote-onload-user', toWebview);
    }
});

ipc.on('p3x-onenote-save', function (event, data) {
//    console.log('p3x-onenote-save', data)
    conf.set('to-webview', data);
    conf.set('window-bounds', mainWindow.getBounds());
})

app.on('ready', createWindow);

app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});


