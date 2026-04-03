import { describe, it, expect } from 'vitest'
import { readdirSync } from 'fs'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const translationDir = 'src/translation'
const files = readdirSync(translationDir).filter(f => f.endsWith('.js'))

const enUS = require('../src/translation/en-US.js')

// Required top-level keys
const requiredTopKeys = ['title', 'restart', 'label', 'dialog', 'button', 'menu', 'redirecting', 'slow', 'updater', 'bookmarks', 'tabs', 'validation']

// Required label keys
const requiredLabelKeys = Object.keys(enUS.label)

// Required button keys
const requiredButtonKeys = Object.keys(enUS.button)

// Required bookmarks keys
const requiredBookmarkKeys = Object.keys(enUS.bookmarks).filter(k => typeof enUS.bookmarks[k] !== 'function')

// Required tabs keys
const requiredTabKeys = Object.keys(enUS.tabs).filter(k => typeof enUS.tabs[k] !== 'function')

describe('translations', () => {
    it('should have exactly 30 translation files', () => {
        expect(files.length).toBe(30)
    })

    it('should include en-US as base', () => {
        expect(files).toContain('en-US.js')
    })

    for (const file of files) {
        const lang = file.replace('.js', '')
        const translation = require(`../src/translation/${file}`)

        describe(lang, () => {
            it('has all required top-level keys', () => {
                for (const key of requiredTopKeys) {
                    expect(translation, `missing top-level key: ${key}`).toHaveProperty(key)
                }
            })

            it('has all required label keys', () => {
                for (const key of requiredLabelKeys) {
                    expect(translation.label, `missing label.${key}`).toHaveProperty(key)
                }
            })

            it('has all required button keys', () => {
                for (const key of requiredButtonKeys) {
                    expect(translation.button, `missing button.${key}`).toHaveProperty(key)
                }
            })

            it('has all required bookmark keys', () => {
                for (const key of requiredBookmarkKeys) {
                    expect(translation.bookmarks, `missing bookmarks.${key}`).toHaveProperty(key)
                }
            })

            it('has all required tab keys', () => {
                for (const key of requiredTabKeys) {
                    expect(translation.tabs, `missing tabs.${key}`).toHaveProperty(key)
                }
            })

            it('has title as non-empty string', () => {
                expect(typeof translation.title).toBe('string')
                expect(translation.title.length).toBeGreaterThan(0)
            })

            it('has menu.language.translations with all 30 languages', () => {
                const langKeys = Object.keys(translation.menu.language.translations)
                expect(langKeys.length).toBe(30)
            })
        })
    }
})
