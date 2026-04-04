import { ipcMain, dialog } from 'electron'
import { writeFile, readFile } from 'fs/promises'
import naturalCompareDocument from '../lib/natural-compare-document.mjs'
import registry from '../registry.mjs'
import notify from './notify.mjs'

ipcMain.on('did-finish-load', function () {
    const toWebview = registry.conf.get('webview-onenote');
    registry.window.onenote.webContents.send('p3x-onenote-onload-user', toWebview);
});

ipcMain.on('p3x-onenote-save', function (event, data) {
    registry.conf.set('webview-onenote', data);
    //registry.conf.set('window-bounds', registry.window.onenote.getBounds());
})

ipcMain.on('p3x-onenote-action-bookmark-result', function (event, data) {
    //console.log('p3x-onenote-action-bookmark-result', data)
    const bookmarksOriginal = registry.conf.get('bookmarks') || []

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

    registry.conf.set('bookmarks', bookmarks.sort(sort))

    registry.mainMenu();
    registry.mainTray()
})


ipcMain.on('p3x-onenote-bookmarks-manager-saved', function () {
    registry.mainMenu();
    registry.mainTray();
})

ipcMain.on('p3x-debug', (event, data) => {
    console.log(data)
})


ipcMain.handle('p3x-onenote-bookmarks-export', async () => {
    const bookmarks = registry.conf.get('bookmarks') || []
    const result = await dialog.showSaveDialog(registry.window.onenote, {
        title: registry.lang.bookmarks?.exportTitle || 'Export bookmarks',
        defaultPath: 'p3x-onenote-bookmarks.json',
        filters: [{ name: 'JSON', extensions: ['json'] }],
    })
    if (result.canceled || !result.filePath) return { success: false }
    await writeFile(result.filePath, JSON.stringify(bookmarks, null, 2), 'utf-8')
    return { success: true }
})

ipcMain.handle('p3x-onenote-bookmarks-import', async () => {
    const result = await dialog.showOpenDialog(registry.window.onenote, {
        title: registry.lang.bookmarks?.importTitle || 'Import bookmarks',
        filters: [{ name: 'JSON', extensions: ['json'] }],
        properties: ['openFile'],
    })
    if (result.canceled || !result.filePaths || result.filePaths.length === 0) return { success: false }
    const content = await readFile(result.filePaths[0], 'utf-8')
    const imported = JSON.parse(content)
    if (!Array.isArray(imported)) return { success: false, error: 'invalid' }

    const existing = registry.conf.get('bookmarks') || []
    const existingUrls = new Set(existing.map(b => b.url))
    let added = 0
    for (const bookmark of imported) {
        if (bookmark.title && bookmark.url && !existingUrls.has(bookmark.url)) {
            existing.push({ title: bookmark.title, url: bookmark.url })
            existingUrls.add(bookmark.url)
            added++
        }
    }

    const sort = naturalCompareDocument({ byProperty: 'title' })
    registry.conf.set('bookmarks', existing.sort(sort))
    registry.mainMenu()
    registry.mainTray()
    return { success: true, added }
})

ipcMain.handle('p3x-onenote-settings-export', async () => {
    const allConfig = registry.conf.store
    const result = await dialog.showSaveDialog(registry.window.onenote, {
        title: registry.lang.label?.exportSettings || 'Export settings',
        defaultPath: 'p3x-onenote-settings.json',
        filters: [{ name: 'JSON', extensions: ['json'] }],
    })
    if (result.canceled || !result.filePath) return { success: false }
    await writeFile(result.filePath, JSON.stringify(allConfig, null, 2), 'utf-8')
    return { success: true }
})

ipcMain.handle('p3x-onenote-settings-import', async () => {
    const lang = registry.lang
    const confirmResult = await dialog.showMessageBox(registry.window.onenote, {
        type: 'warning',
        title: lang.label?.importSettings || 'Import settings',
        message: lang.label?.importSettingsWarning || 'This will replace all current settings. You will need to re-login on each tab. Continue?',
        buttons: [lang.button?.yes || 'Yes', lang.button?.cancel || 'Cancel'],
        defaultId: 1,
        cancelId: 1,
    })
    if (confirmResult.response !== 0) return { success: false }

    const result = await dialog.showOpenDialog(registry.window.onenote, {
        title: lang.label?.importSettings || 'Import settings',
        filters: [{ name: 'JSON', extensions: ['json'] }],
        properties: ['openFile'],
    })
    if (result.canceled || !result.filePaths || result.filePaths.length === 0) return { success: false }

    const content = await readFile(result.filePaths[0], 'utf-8')
    const imported = JSON.parse(content)
    if (!imported || typeof imported !== 'object') return { success: false }

    // Validate it looks like a p3x-onenote config
    if (!imported.tabs && !imported.bookmarks) return { success: false }

    registry.conf.store = imported
    return { success: true }
})
