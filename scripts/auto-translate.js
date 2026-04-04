#!/usr/bin/env node

/**
 * Auto-translate missing translation keys from en-US to all other locales.
 * Uses Claude CLI for translation.
 *
 * Usage:
 *   node scripts/auto-translate.js          # translate all locales
 *   node scripts/auto-translate.js de-DE    # translate only German
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const TRANSLATION_DIR = path.resolve(__dirname, '../src/translation')

// Language names for Claude context
const LANGUAGE_NAMES = {
    'af-ZA': 'Afrikaans',
    'ar-SA': 'Arabic',
    'bn-BD': 'Bengali',
    'ca-ES': 'Catalan',
    'cs-CZ': 'Czech',
    'da-DK': 'Danish',
    'de-DE': 'German',
    'el-GR': 'Greek',
    'es-ES': 'Spanish',
    'fi-FI': 'Finnish',
    'fr-FR': 'French',
    'he-IL': 'Hebrew',
    'hu-HU': 'Hungarian',
    'it-IT': 'Italian',
    'ja-JP': 'Japanese',
    'ko-KR': 'Korean',
    'nb-NO': 'Norwegian',
    'nl-NL': 'Dutch',
    'pl-PL': 'Polish',
    'pt-BR': 'Brazilian Portuguese',
    'ro-RO': 'Romanian',
    'ru-RU': 'Russian',
    'sr-RS': 'Serbian',
    'sv-SE': 'Swedish',
    'tr-TR': 'Turkish',
    'uk-UA': 'Ukrainian',
    'vi-VN': 'Vietnamese',
    'zh-CN': 'Simplified Chinese',
    'zh-TW': 'Traditional Chinese',
}

// Recursively get all leaf key paths from an object
// Returns array of { path: 'a.b.c', value: 'string', type: 'string'|'function' }
function getKeyPaths(obj, prefix = '') {
    const results = []
    for (const [key, value] of Object.entries(obj)) {
        const fullPath = prefix ? `${prefix}.${key}` : key
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            results.push(...getKeyPaths(value, fullPath))
        } else if (typeof value === 'string') {
            results.push({ path: fullPath, value, type: 'string' })
        } else if (typeof value === 'function') {
            results.push({ path: fullPath, value: value.toString(), type: 'function' })
        }
    }
    return results
}

// Get a nested value by dot-path
function getByPath(obj, pathStr) {
    return pathStr.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj)
}

// Set a nested value by dot-path, creating intermediate objects
function setByPath(obj, pathStr, value) {
    const keys = pathStr.split('.')
    let current = obj
    for (let i = 0; i < keys.length - 1; i++) {
        if (current[keys[i]] === undefined) {
            current[keys[i]] = {}
        }
        current = current[keys[i]]
    }
    current[keys[keys.length - 1]] = value
}

// Serialize a translation object back to JS source
function serializeTranslation(obj, indent = 0) {
    const pad = '    '.repeat(indent)
    const padInner = '    '.repeat(indent + 1)
    const entries = []

    for (const [key, value] of Object.entries(obj)) {
        const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`

        if (value && typeof value === 'object' && !Array.isArray(value)) {
            entries.push(`${padInner}${safeKey}: ${serializeTranslation(value, indent + 1)}`)
        } else if (typeof value === 'function') {
            entries.push(`${padInner}${safeKey}: ${value.toString()}`)
        } else if (typeof value === 'string') {
            // Use single quotes, escape internal single quotes
            const escaped = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
            entries.push(`${padInner}${safeKey}: '${escaped}'`)
        }
    }

    return `{\n${entries.join(',\n')},\n${pad}}`
}

// Build the full file content from translation object
function buildFileContent(translationObj) {
    const body = serializeTranslation(translationObj, 0)
    return `const translation = ${body};\n\nmodule.exports = translation;\n`
}

// Translate missing keys using Claude CLI
function translateWithClaude(missingKeys, targetLang) {
    if (missingKeys.length === 0) return {}

    const keysDescription = missingKeys.map(k => {
        if (k.type === 'function') {
            return `- ${k.path} (JavaScript function, translate only the human-readable text inside template literals, keep the function structure and variable interpolation intact): ${k.value}`
        }
        return `- ${k.path}: ${k.value}`
    }).join('\n')

    const prompt = `Translate the following P3X OneNote application UI strings from English to ${targetLang}.

IMPORTANT RULES:
- Return ONLY a valid JSON object mapping each key path to its translated value
- For function entries: return the FULL JavaScript arrow function as a string, with only the human-readable text translated. Keep variable names, template literal syntax, and function structure EXACTLY the same.
- Do NOT translate: technical terms (URL, proxy, P3X OneNote, OneNote, ALT), variable names, or brand names
- Keep the same tone (casual/formal) as the original
- Do NOT add any explanation, markdown fencing, or extra text — ONLY the JSON object

Keys to translate:
${keysDescription}

Return format example:
{"tabs.duplicateTab": "Translated text", "label.startOnLogin": "Translated text"}`

    const tmpFile = path.resolve(__dirname, '../.translate-prompt.tmp')
    fs.writeFileSync(tmpFile, prompt)

    try {
        const result = execSync(
            `cat ${JSON.stringify(tmpFile)} | claude -p - --no-session-persistence`,
            { encoding: 'utf-8', timeout: 120000 }
        ).trim()

        // Extract JSON from response (Claude might wrap it)
        const jsonMatch = result.match(/\{[\s\S]*\}/)
        if (!jsonMatch) {
            console.error(`  Failed to parse Claude response for ${targetLang}`)
            return {}
        }

        return JSON.parse(jsonMatch[0])
    } catch (e) {
        console.error(`  Claude translation failed for ${targetLang}:`, e.message)
        return {}
    } finally {
        try { fs.unlinkSync(tmpFile) } catch {}
    }
}

// Main
async function main() {
    const targetLocale = process.argv[2] // optional: specific locale

    // Load English as source of truth
    delete require.cache[require.resolve(path.join(TRANSLATION_DIR, 'en-US.js'))]
    const enTranslation = require(path.join(TRANSLATION_DIR, 'en-US.js'))
    const enKeys = getKeyPaths(enTranslation)

    // Skip the language.translations block — it's the same in all locales
    const translatableKeys = enKeys.filter(k => !k.path.startsWith('menu.language.translations.'))

    const localeFiles = fs.readdirSync(TRANSLATION_DIR)
        .filter(f => f.endsWith('.js') && f !== 'en-US.js')
        .filter(f => !targetLocale || f === `${targetLocale}.js`)

    if (localeFiles.length === 0) {
        console.log(targetLocale ? `Locale ${targetLocale} not found.` : 'No locale files found.')
        return
    }

    let totalTranslated = 0

    for (const file of localeFiles) {
        const locale = file.replace('.js', '')
        const langName = LANGUAGE_NAMES[locale] || locale
        const filePath = path.join(TRANSLATION_DIR, file)

        // Clear require cache and reload
        delete require.cache[require.resolve(filePath)]
        const localeTranslation = require(filePath)

        // Find missing keys
        const missingKeys = translatableKeys.filter(k => {
            const existing = getByPath(localeTranslation, k.path)
            return existing === undefined
        })

        if (missingKeys.length === 0) {
            console.log(`✓ ${locale} (${langName}) — all keys present`)
            continue
        }

        console.log(`→ ${locale} (${langName}) — ${missingKeys.length} missing key(s), translating...`)

        const translations = translateWithClaude(missingKeys, langName)
        let translated = 0

        for (const key of missingKeys) {
            const translatedValue = translations[key.path]
            if (translatedValue !== undefined) {
                if (key.type === 'function') {
                    // Store function as eval-able string — we'll handle serialization
                    try {
                        // Validate it's a valid function
                        eval(`(${translatedValue})`)
                        setByPath(localeTranslation, key.path, eval(`(${translatedValue})`))
                        translated++
                    } catch {
                        console.error(`    Skipping ${key.path} — invalid function syntax`)
                    }
                } else {
                    setByPath(localeTranslation, key.path, translatedValue)
                    translated++
                }
            } else {
                console.error(`    Missing translation for ${key.path}`)
            }
        }

        if (translated > 0) {
            const content = buildFileContent(localeTranslation)
            fs.writeFileSync(filePath, content)
            console.log(`  ✓ Updated ${translated} key(s)`)
            totalTranslated += translated
        }
    }

    console.log(`\nDone. Total translations added: ${totalTranslated}`)
}

main().catch(console.error)
