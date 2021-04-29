const {ipcMain} = require('electron')

ipcMain.on('did-finish-load', function () {
    const toWebview = global.p3x.onenote.conf.get('webview-onenote');
    global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-onload-user', toWebview);
});

ipcMain.on('p3x-onenote-save', function (event, data) {
    global.p3x.onenote.conf.set('webview-onenote', data);
    //global.p3x.onenote.conf.set('window-bounds', global.p3x.onenote.window.onenote.getBounds());
})

ipcMain.on('p3x-onenote-action-bookmark-result', function (event, data) {
    //console.log('p3x-onenote-action-bookmark-result', data)
    const bookmarksOriginal = global.p3x.onenote.conf.get('bookmarks') || []

    const naturalCompareDocument = require('../lib/natural-compare-document')
    const sort = naturalCompareDocument({
        byProperty: 'title'
    })
    let bookmarks = bookmarksOriginal.sort(sort)

    if (data.opts.edit !== true) {
        bookmarks.push(data.model)
    } else {
        if (data.delete === true) {
            bookmarks.splice(data.opts.index, 1);
        } else {
            bookmarks[data.opts.index] = data.model
        }
    }

    global.p3x.onenote.conf.set('bookmarks', bookmarks.sort(sort))

    global.p3x.onenote.mainMenu();
    global.p3x.onenote.mainTray()
})


ipcMain.on('p3x-debug', (event, data) => {
    console.log(data)
})
