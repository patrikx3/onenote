import { describe, it, expect } from 'vitest'

// Tab persistence logic (same as tab-manager.mjs persistState)
function serializeTab(tab) {
    return {
        id: tab.id,
        type: tab.type || 'personal',
        account: tab.account || '',
        partition: tab.partition,
        url: (tab.url && !tab.url.startsWith('about:')) ? tab.url : 'https://www.onenote.com/notebooks',
        zoom: tab.zoom !== undefined ? tab.zoom : 1.0,
        customName: tab.customName || '',
        pinned: tab.pinned || false,
    }
}

// Tab label logic (same as tab-manager.mjs getTabLabel)
function getTabLabel(tab, lang) {
    if (tab.customName) return tab.customName
    const typeLabel = tab.type === 'corporate'
        ? (lang.menu?.language?.dialog?.corporate || lang.tabs?.corporate || 'Corporate')
        : (lang.menu?.language?.dialog?.personal || lang.tabs?.personal || 'Personal')
    return tab.account ? `${typeLabel}: ${tab.account}` : typeLabel
}

// Migration logic (same as tab-manager.mjs init)
function migrateOldData(oldData) {
    const url = (oldData && oldData.url && !oldData.url.startsWith('about:blank'))
        ? oldData.url
        : 'https://www.onenote.com/notebooks'
    return [{ id: 0, type: 'personal', account: '', partition: 'persist:tab-0', url }]
}

describe('tab serialization', () => {
    it('serializes a full tab', () => {
        const tab = {
            id: 1, type: 'corporate', account: 'user@test.com',
            partition: 'persist:tab-1', url: 'https://onenote.com/notebooks',
            zoom: 1.5, customName: 'My Tab', pinned: true,
        }
        const data = serializeTab(tab)
        expect(data).toEqual({
            id: 1, type: 'corporate', account: 'user@test.com',
            partition: 'persist:tab-1', url: 'https://onenote.com/notebooks',
            zoom: 1.5, customName: 'My Tab', pinned: true,
        })
    })

    it('defaults type to personal', () => {
        const data = serializeTab({ id: 0, partition: 'p', url: 'https://onenote.com' })
        expect(data.type).toBe('personal')
    })

    it('defaults zoom to 1.0', () => {
        const data = serializeTab({ id: 0, partition: 'p', url: 'https://onenote.com' })
        expect(data.zoom).toBe(1.0)
    })

    it('defaults pinned to false', () => {
        const data = serializeTab({ id: 0, partition: 'p', url: 'https://onenote.com' })
        expect(data.pinned).toBe(false)
    })

    it('replaces about:blank URL with default', () => {
        const data = serializeTab({ id: 0, partition: 'p', url: 'about:blank' })
        expect(data.url).toBe('https://www.onenote.com/notebooks')
    })

    it('replaces about:srcdoc URL with default', () => {
        const data = serializeTab({ id: 0, partition: 'p', url: 'about:srcdoc' })
        expect(data.url).toBe('https://www.onenote.com/notebooks')
    })

    it('replaces null URL with default', () => {
        const data = serializeTab({ id: 0, partition: 'p', url: null })
        expect(data.url).toBe('https://www.onenote.com/notebooks')
    })

    it('keeps valid OneNote URL', () => {
        const data = serializeTab({ id: 0, partition: 'p', url: 'https://www.onenote.com/notebooks?auth=2' })
        expect(data.url).toBe('https://www.onenote.com/notebooks?auth=2')
    })
})

describe('tab label', () => {
    const lang = {
        menu: { language: { dialog: { corporate: 'Corporate', personal: 'Personal' } } },
        tabs: { corporate: 'Corporate', personal: 'Personal' },
    }

    it('shows custom name when set', () => {
        expect(getTabLabel({ customName: 'My Notes', type: 'personal' }, lang)).toBe('My Notes')
    })

    it('shows personal type without account', () => {
        expect(getTabLabel({ type: 'personal' }, lang)).toBe('Personal')
    })

    it('shows corporate type without account', () => {
        expect(getTabLabel({ type: 'corporate' }, lang)).toBe('Corporate')
    })

    it('shows type with account email', () => {
        expect(getTabLabel({ type: 'personal', account: 'user@test.com' }, lang)).toBe('Personal: user@test.com')
    })

    it('shows corporate with account', () => {
        expect(getTabLabel({ type: 'corporate', account: 'work@corp.com' }, lang)).toBe('Corporate: work@corp.com')
    })

    it('falls back when lang keys are missing', () => {
        const minLang = {}
        expect(getTabLabel({ type: 'personal' }, minLang)).toBe('Personal')
        expect(getTabLabel({ type: 'corporate' }, minLang)).toBe('Corporate')
    })
})

describe('switch tab by index', () => {
    const mockTabs = [
        { id: 5, type: 'personal' },
        { id: 12, type: 'corporate' },
        { id: 7, type: 'personal' },
    ]

    function getTabIdByIndex(tabs, index) {
        if (index >= 0 && index < tabs.length) {
            return tabs[index].id
        }
        return null
    }

    it('returns correct tab id for index 0', () => {
        expect(getTabIdByIndex(mockTabs, 0)).toBe(5)
    })

    it('returns correct tab id for index 1', () => {
        expect(getTabIdByIndex(mockTabs, 1)).toBe(12)
    })

    it('returns correct tab id for last index', () => {
        expect(getTabIdByIndex(mockTabs, 2)).toBe(7)
    })

    it('returns null for out of range index', () => {
        expect(getTabIdByIndex(mockTabs, 9)).toBeNull()
    })

    it('returns null for negative index', () => {
        expect(getTabIdByIndex(mockTabs, -1)).toBeNull()
    })
})

describe('migration from old format', () => {
    it('migrates old data with valid URL', () => {
        const result = migrateOldData({ url: 'https://onenote.com/notebooks?page=123' })
        expect(result[0].url).toBe('https://onenote.com/notebooks?page=123')
        expect(result[0].partition).toBe('persist:tab-0')
        expect(result[0].type).toBe('personal')
    })

    it('uses default URL when old data has about:blank', () => {
        const result = migrateOldData({ url: 'about:blank' })
        expect(result[0].url).toBe('https://www.onenote.com/notebooks')
    })

    it('uses default URL when old data is null', () => {
        const result = migrateOldData(null)
        expect(result[0].url).toBe('https://www.onenote.com/notebooks')
    })

    it('uses default URL when old data is undefined', () => {
        const result = migrateOldData(undefined)
        expect(result[0].url).toBe('https://www.onenote.com/notebooks')
    })

    it('always produces exactly one tab', () => {
        expect(migrateOldData({}).length).toBe(1)
    })
})
