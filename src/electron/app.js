const electron = require('electron');
const { app, Menu, Tray, shell} = require('electron')
const ipc = electron.ipcMain;
let tray;
let mainWindow;
const iconFile = `${__dirname}/images/256x256.png`;

const title = 'P3X OneNote';


const BrowserWindow = electron.BrowserWindow;
const configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new configstore(pkg.name);

const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
    setVisible(true);
    mainWindow.webContents.reload();
})

if (isSecondInstance) {
    app.quit()
}


const action = {
    restart: () => {
        mainWindow.webContents.send('action', {
            action: 'restart'
        })
    },
    home: () => {
        mainWindow.show();
        mainWindow.webContents.send('action', {
            action: 'home'
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
        return [
            {
                label: 'Home',
                click: action.home
            },
            {
                label: 'Restart / Logout',
                tooltip: 'You logout and can login again',
                click: action.restart
            },
            {
                label: visible ? 'Hide' : 'Show',
                click: action.toggleVisible
            },
            {
                label: 'Download',
                click: action.download
            },
            {
                label: 'Quit',
                click: action.quit
            }
        ]
    }
}

function createMenu() {
    const template = [
        {
            label: title,
            submenu: menus.default(),
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
                    label: 'Npm',
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

function setVisible(visible = true) {
    if (visible === null) {
        visible = true;
    }
    if (mainWindow !== undefined) {
        if (visible) {
            mainWindow.show();
        } else {
            mainWindow.hide();
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


    setVisible(conf.get('visible'));

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('minimize', function (event) {
        event.preventDefault()
        setVisible(false);
    });

    mainWindow.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault()
            setVisible(false);
        }
        return false;
    });

    const windowBounds = conf.get('windowBounds');
    if (windowBounds !== null && windowBounds !== undefined) {
        mainWindow.setBounds(windowBounds);
    }



}
ipc.on('did-finish-load', function () {
    const hostData = conf.get('toHost');
//    console.log('Loading data', hostData);
    if (hostData !== undefined && hostData !== null) {
        mainWindow.webContents.send('onload-user', hostData);
    }
});

ipc.on('save', function (event, data) {
//    console.log('Save', data)
    conf.set('toHost', data);
    conf.set('windowBounds', mainWindow.getBounds());
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


