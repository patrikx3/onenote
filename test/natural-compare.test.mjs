import { describe, it, expect } from 'vitest'
import naturalCompareDocument from '../src/electron/lib/natural-compare-document.mjs'

describe('naturalCompareDocument', () => {
    it('sorts strings alphabetically', () => {
        const compare = naturalCompareDocument({})
        expect(compare('apple', 'banana')).toBeLessThan(0)
        expect(compare('banana', 'apple')).toBeGreaterThan(0)
        expect(compare('apple', 'apple')).toBe(0)
    })

    it('sorts numbers naturally (2 before 10)', () => {
        const compare = naturalCompareDocument({})
        const items = ['item10', 'item2', 'item1', 'item20']
        items.sort(compare)
        expect(items).toEqual(['item1', 'item2', 'item10', 'item20'])
    })

    it('sorts by property when byProperty is set', () => {
        const compare = naturalCompareDocument({ byProperty: 'title' })
        const items = [
            { title: 'Note 10' },
            { title: 'Note 2' },
            { title: 'Note 1' },
        ]
        items.sort(compare)
        expect(items.map(i => i.title)).toEqual(['Note 1', 'Note 2', 'Note 10'])
    })

    it('handles mixed text and numbers', () => {
        const compare = naturalCompareDocument({})
        const items = ['z1', 'a10', 'a2', 'a1']
        items.sort(compare)
        expect(items).toEqual(['a1', 'a2', 'a10', 'z1'])
    })

    it('handles equal strings', () => {
        const compare = naturalCompareDocument({ byProperty: 'title' })
        expect(compare({ title: 'same' }, { title: 'same' })).toBe(0)
    })
})
