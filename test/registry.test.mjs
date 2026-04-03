import { describe, it, expect } from 'vitest'

describe('registry singleton', () => {
    it('main process registry is a shared object', async () => {
        const { default: r1 } = await import('../src/electron/registry.mjs')
        const { default: r2 } = await import('../src/electron/registry.mjs')
        expect(r1).toBe(r2)
    })

    it('main process registry mutations are visible across imports', async () => {
        const { default: registry } = await import('../src/electron/registry.mjs')
        registry._testValue = 42
        const { default: registry2 } = await import('../src/electron/registry.mjs')
        expect(registry2._testValue).toBe(42)
        delete registry._testValue
    })

    it('renderer registry is a shared object', async () => {
        const { default: r1 } = await import('../src/electron/window/onenote/registry.mjs')
        const { default: r2 } = await import('../src/electron/window/onenote/registry.mjs')
        expect(r1).toBe(r2)
    })

    it('main and renderer registries are separate', async () => {
        const { default: main } = await import('../src/electron/registry.mjs')
        const { default: renderer } = await import('../src/electron/window/onenote/registry.mjs')
        expect(main).not.toBe(renderer)
    })
})
