import { describe, it, expect } from 'vitest'

// URL validation logic (same as used in tab-manager.mjs and multi-actions.mjs)
function isValidOnenoteUrl(url) {
    return url && !url.startsWith('about:') && !url.includes('login.microsoftonline.com') && !url.includes('login.live.com')
}

// Account extraction logic (same as tab-manager.mjs extractAccountInfo)
function extractAccountInfo(url) {
    try {
        if (!url.includes('client_info=')) return null
        const match = url.match(/client_info=([^&#]+)/)
        if (!match) return null
        const decoded = atob(decodeURIComponent(match[1]))
        const info = JSON.parse(decoded)
        return info.preferred_username || info.name || null
    } catch (e) {
        return null
    }
}

describe('isValidOnenoteUrl', () => {
    it('accepts regular OneNote URLs', () => {
        expect(isValidOnenoteUrl('https://www.onenote.com/notebooks')).toBe(true)
        expect(isValidOnenoteUrl('https://onenote.com/notebooks?auth=2')).toBe(true)
    })

    it('rejects about:blank', () => {
        expect(isValidOnenoteUrl('about:blank')).toBe(false)
    })

    it('rejects about: URLs', () => {
        expect(isValidOnenoteUrl('about:srcdoc')).toBe(false)
    })

    it('rejects login URLs', () => {
        expect(isValidOnenoteUrl('https://login.microsoftonline.com/common/oauth2')).toBe(false)
        expect(isValidOnenoteUrl('https://login.live.com/oauth20_authorize.srf')).toBe(false)
    })

    it('rejects null/empty', () => {
        expect(isValidOnenoteUrl(null)).toBeFalsy()
        expect(isValidOnenoteUrl('')).toBeFalsy()
        expect(isValidOnenoteUrl(undefined)).toBeFalsy()
    })
})

describe('extractAccountInfo', () => {
    it('extracts preferred_username from client_info', () => {
        const info = { preferred_username: 'user@example.com' }
        const encoded = encodeURIComponent(btoa(JSON.stringify(info)))
        const url = `https://login.live.com/callback?client_info=${encoded}&code=abc`
        expect(extractAccountInfo(url)).toBe('user@example.com')
    })

    it('falls back to name if no preferred_username', () => {
        const info = { name: 'John Doe' }
        const encoded = encodeURIComponent(btoa(JSON.stringify(info)))
        const url = `https://login.live.com/callback?client_info=${encoded}`
        expect(extractAccountInfo(url)).toBe('John Doe')
    })

    it('returns null for URLs without client_info', () => {
        expect(extractAccountInfo('https://www.onenote.com/notebooks')).toBeNull()
    })

    it('returns null for malformed client_info', () => {
        expect(extractAccountInfo('https://example.com?client_info=notbase64')).toBeNull()
    })

    it('returns null for empty info', () => {
        const encoded = encodeURIComponent(btoa('{}'))
        expect(extractAccountInfo(`https://example.com?client_info=${encoded}`)).toBeNull()
    })
})
