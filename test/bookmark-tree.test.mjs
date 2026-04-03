import { describe, it, expect } from 'vitest'

// Bookmark tree building logic (same as menu.mjs)
function buildBookmarkTree(bookmarks) {
    const tree = { items: [], children: {} }

    for (const bookmark of bookmarks) {
        const menuItem = { label: bookmark.title, url: bookmark.url }

        if (bookmark.category) {
            const parts = bookmark.category.split('/').map(p => p.trim()).filter(p => p)
            let node = tree
            for (const part of parts) {
                if (!node.children[part]) {
                    node.children[part] = { items: [], children: {} }
                }
                node = node.children[part]
            }
            node.items.push(menuItem)
        } else {
            tree.items.push(menuItem)
        }
    }
    return tree
}

function buildTreeMenu(node) {
    const result = []
    for (const item of node.items) {
        result.push(item)
    }
    const childKeys = Object.keys(node.children).sort((a, b) => a.localeCompare(b))
    for (const key of childKeys) {
        result.push({
            label: key,
            submenu: buildTreeMenu(node.children[key]),
        })
    }
    return result
}

describe('bookmark tree', () => {
    it('builds flat bookmarks without categories', () => {
        const bookmarks = [
            { title: 'Note A', url: 'https://a.com' },
            { title: 'Note B', url: 'https://b.com' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        expect(tree.items.length).toBe(2)
        expect(Object.keys(tree.children).length).toBe(0)
    })

    it('builds single-level folder', () => {
        const bookmarks = [
            { title: 'Note A', url: 'https://a.com', category: 'Work' },
            { title: 'Note B', url: 'https://b.com', category: 'Work' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        expect(tree.items.length).toBe(0)
        expect(tree.children['Work'].items.length).toBe(2)
    })

    it('builds nested folders with / separator', () => {
        const bookmarks = [
            { title: 'Deep', url: 'https://d.com', category: 'Work/Projects/Alpha' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        expect(tree.children['Work'].children['Projects'].children['Alpha'].items[0].label).toBe('Deep')
    })

    it('handles mixed categorized and uncategorized', () => {
        const bookmarks = [
            { title: 'Root', url: 'https://r.com' },
            { title: 'Nested', url: 'https://n.com', category: 'Folder' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        expect(tree.items.length).toBe(1)
        expect(tree.children['Folder'].items.length).toBe(1)
    })

    it('trims whitespace in category parts', () => {
        const bookmarks = [
            { title: 'Test', url: 'https://t.com', category: ' Work / Projects ' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        expect(tree.children['Work']).toBeDefined()
        expect(tree.children['Work'].children['Projects']).toBeDefined()
    })

    it('ignores empty category parts from double slashes', () => {
        const bookmarks = [
            { title: 'Test', url: 'https://t.com', category: 'Work//Projects' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        expect(tree.children['Work'].children['Projects'].items[0].label).toBe('Test')
    })

    it('buildTreeMenu sorts folders alphabetically', () => {
        const bookmarks = [
            { title: 'Z', url: 'https://z.com', category: 'Zebra' },
            { title: 'A', url: 'https://a.com', category: 'Alpha' },
            { title: 'M', url: 'https://m.com', category: 'Middle' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        const menu = buildTreeMenu(tree)
        expect(menu.map(m => m.label)).toEqual(['Alpha', 'Middle', 'Zebra'])
    })

    it('buildTreeMenu puts items before subfolders', () => {
        const bookmarks = [
            { title: 'Root Item', url: 'https://r.com' },
            { title: 'Folder Item', url: 'https://f.com', category: 'Folder' },
        ]
        const tree = buildBookmarkTree(bookmarks)
        const menu = buildTreeMenu(tree)
        expect(menu[0].label).toBe('Root Item')
        expect(menu[1].label).toBe('Folder')
        expect(menu[1].submenu[0].label).toBe('Folder Item')
    })

    it('handles empty bookmarks array', () => {
        const tree = buildBookmarkTree([])
        expect(tree.items.length).toBe(0)
        expect(Object.keys(tree.children).length).toBe(0)
        const menu = buildTreeMenu(tree)
        expect(menu.length).toBe(0)
    })
})
