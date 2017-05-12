const electron = require('electron');
const ipc = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new configstore(pkg.name, {
	"windowBounds": {
		"x": 100,
		"y": 100,
		"width": 800,
		"height": 600,
	}
});

let mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        frame: true,
        "node-integration": false,
        preload: __dirname + '/js/preloadInit.js'
	});

	mainWindow.setBounds(conf.get('windowBounds'));
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

ipc.on('appClose', function() {
	conf.set('windowBounds', mainWindow.getBounds());
	mainWindow.close();
});

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
