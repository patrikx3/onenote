import { describe, it, expect } from 'vitest'
import { createRequire } from 'module'
import { readFileSync, existsSync } from 'fs'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

describe('package.json integrity', () => {
    it('has correct name', () => {
        expect(pkg.name).toBe('p3x-onenote')
    })

    it('version follows YYYY.M.patch format', () => {
        expect(pkg.version).toMatch(/^\d{4}\.\d{1,2}\.\d+$/)
    })

    it('main entry points to app.mjs', () => {
        expect(pkg.main).toBe('src/electron/app.mjs')
    })

    it('has electron in dependencies (not devDependencies)', () => {
        expect(pkg.dependencies).toHaveProperty('electron')
        expect(pkg.devDependencies).not.toHaveProperty('electron')
    })

    it('has required dependencies', () => {
        const required = ['@electron/remote', 'electron-store', 'electron-updater']
        for (const dep of required) {
            expect(pkg.dependencies, `missing dependency: ${dep}`).toHaveProperty(dep)
        }
    })

    it('build config excludes test files', () => {
        const files = pkg.build?.files
        expect(files).toBeDefined()
        expect(files).toContain('!test/**')
        expect(files).toContain('!vitest.config.mjs')
    })

    it('has test script configured', () => {
        expect(pkg.scripts.test).toContain('vitest')
    })
})

describe('critical files exist', () => {
    const criticalFiles = [
        'src/electron/app.mjs',
        'src/electron/registry.mjs',
        'src/electron/window/onenote/registry.mjs',
        'src/electron/window/onenote/index.html',
        'src/electron/window/onenote/load.mjs',
        'src/electron/window/onenote/tab-manager.mjs',
        'src/electron/window/onenote/shim.js',
        'src/electron/window/onenote/style.css',
        'src/electron/main/create/window/onenote.mjs',
        'src/electron/main/create/menu.mjs',
        'src/electron/main/create/tray.mjs',
        'src/electron/main/ipc-main.mjs',
        'src/electron/main/app-events.mjs',
        'src/electron/images/128x128.png',
    ]

    for (const file of criticalFiles) {
        it(`${file} exists`, () => {
            expect(existsSync(file), `missing critical file: ${file}`).toBe(true)
        })
    }
})

describe('translation files exist', () => {
    const expectedLangs = [
        'en-US', 'af-ZA', 'ar-SA', 'bn-BD', 'ca-ES', 'cs-CZ', 'da-DK',
        'de-DE', 'el-GR', 'es-ES', 'fi-FI', 'fr-FR', 'he-IL', 'hu-HU',
        'it-IT', 'ja-JP', 'ko-KR', 'nb-NO', 'nl-NL', 'pl-PL', 'pt-BR',
        'ro-RO', 'ru-RU', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN',
        'zh-CN', 'zh-TW',
    ]

    for (const lang of expectedLangs) {
        it(`${lang}.js exists`, () => {
            expect(existsSync(`src/translation/${lang}.js`)).toBe(true)
        })
    }

    it('shim.js loads all 30 translations', () => {
        const shim = readFileSync('src/electron/window/onenote/shim.js', 'utf-8')
        for (const lang of expectedLangs) {
            expect(shim, `shim.js missing ${lang}`).toContain(`'${lang}'`)
        }
    })

    it('app.mjs imports all 30 translations', () => {
        const app = readFileSync('src/electron/app.mjs', 'utf-8')
        for (const lang of expectedLangs) {
            expect(app, `app.mjs missing ${lang}`).toContain(`'${lang}'`)
        }
    })
})
