import { describe, it, expect } from 'vitest'

// Dark theme migration logic (same as app.mjs)
function migrateDarkTheme(confGet) {
    let darkThemeMode = confGet('darkThemeMode')
    if (darkThemeMode === undefined) {
        const oldVal = confGet('darkThemeInvert')
        darkThemeMode = oldVal === true ? 'on' : 'off'
    }
    return darkThemeMode
}

// Resolve dark theme to boolean (same as app.mjs)
function resolveDarkTheme(mode, systemDark) {
    return mode === 'on' || (mode === 'system' && systemDark)
}

describe('dark theme config', () => {
    it('returns existing darkThemeMode if set', () => {
        expect(migrateDarkTheme((key) => key === 'darkThemeMode' ? 'on' : undefined)).toBe('on')
        expect(migrateDarkTheme((key) => key === 'darkThemeMode' ? 'off' : undefined)).toBe('off')
        expect(migrateDarkTheme((key) => key === 'darkThemeMode' ? 'system' : undefined)).toBe('system')
    })

    it('migrates from old boolean true to on', () => {
        const get = (key) => {
            if (key === 'darkThemeMode') return undefined
            if (key === 'darkThemeInvert') return true
        }
        expect(migrateDarkTheme(get)).toBe('on')
    })

    it('migrates from old boolean false to off', () => {
        const get = (key) => {
            if (key === 'darkThemeMode') return undefined
            if (key === 'darkThemeInvert') return false
        }
        expect(migrateDarkTheme(get)).toBe('off')
    })

    it('defaults to off when nothing is set', () => {
        expect(migrateDarkTheme(() => undefined)).toBe('off')
    })
})

describe('dark theme resolution', () => {
    it('on mode always returns true', () => {
        expect(resolveDarkTheme('on', false)).toBe(true)
        expect(resolveDarkTheme('on', true)).toBe(true)
    })

    it('off mode always returns false', () => {
        expect(resolveDarkTheme('off', false)).toBe(false)
        expect(resolveDarkTheme('off', true)).toBe(false)
    })

    it('system mode follows system preference', () => {
        expect(resolveDarkTheme('system', true)).toBe(true)
        expect(resolveDarkTheme('system', false)).toBe(false)
    })
})
