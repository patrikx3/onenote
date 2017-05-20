const electron = require('electron');
const ipc = electron.ipcMain;

const BrowserWindow = electron.BrowserWindow;

const configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new configstore(pkg.name);
const {app, Menu} = require('electron')

let mainWindow;

function createWindow () {

    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Restart',
                    click () {
                        mainWindow.webContents.send('action', {
                            action: 'restart'
                        });
                    }
                },
                {role: 'minimize'},
                {role: 'close'}
            ]
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
                    label: 'Info',
                    click () { require('electron').shell.openExternal('https://github.com/patrikx3/onenote') }
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    mainWindow = new BrowserWindow({
		icon: `${__dirname}/images/icon.png`,
        toolbar: false,
    });

     mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

    const windowBounds = conf.get('windowBounds');
    if (windowBounds !== null && windowBounds !== undefined) {
       mainWindow.setBounds(windowBounds);
    }

}
ipc.on('did-finish-load',function(){
	const hostData = conf.get('toHost');
	console.log('Loading data', hostData);
	if (hostData !== undefined && hostData !== null) {
        mainWindow.webContents.send('onload-user', hostData);
	}
});

ipc.on('save', function(event, data) {
    console.log('Save', data)
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
