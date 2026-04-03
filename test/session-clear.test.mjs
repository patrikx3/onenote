import { describe, it, expect } from 'vitest'

// Session clear mode parsing logic (same as multi-actions.mjs)
function parseSessionClearMode(mode) {
    const [scope, type] = (mode || 'current-everything').split('-')
    const storagesMap = {
        everything: undefined,
        cookies: ['cookies'],
        cache: ['cacheStorage'],
    }
    return { scope, type, storages: storagesMap[type] }
}

describe('session clear mode parsing', () => {
    it('parses all-everything', () => {
        const { scope, type, storages } = parseSessionClearMode('all-everything')
        expect(scope).toBe('all')
        expect(type).toBe('everything')
        expect(storages).toBeUndefined()
    })

    it('parses current-everything', () => {
        const { scope, type } = parseSessionClearMode('current-everything')
        expect(scope).toBe('current')
        expect(type).toBe('everything')
    })

    it('parses all-cookies', () => {
        const { scope, type, storages } = parseSessionClearMode('all-cookies')
        expect(scope).toBe('all')
        expect(type).toBe('cookies')
        expect(storages).toEqual(['cookies'])
    })

    it('parses current-cookies', () => {
        const { scope, type, storages } = parseSessionClearMode('current-cookies')
        expect(scope).toBe('current')
        expect(storages).toEqual(['cookies'])
    })

    it('parses all-cache', () => {
        const { scope, type, storages } = parseSessionClearMode('all-cache')
        expect(scope).toBe('all')
        expect(type).toBe('cache')
        expect(storages).toEqual(['cacheStorage'])
    })

    it('parses current-cache', () => {
        const { scope, storages } = parseSessionClearMode('current-cache')
        expect(scope).toBe('current')
        expect(storages).toEqual(['cacheStorage'])
    })

    it('defaults to current-everything when mode is null', () => {
        const { scope, type } = parseSessionClearMode(null)
        expect(scope).toBe('current')
        expect(type).toBe('everything')
    })

    it('defaults to current-everything when mode is undefined', () => {
        const { scope, type } = parseSessionClearMode(undefined)
        expect(scope).toBe('current')
        expect(type).toBe('everything')
    })
})
