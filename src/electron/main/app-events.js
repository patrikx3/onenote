const { app } = require('electron')

app.on('ready', global.p3x.onenote.createWindow);

app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (global.p3x.onenote.mainWindow === null) {
        global.p3x.onenote.createWindow();
    }
});
