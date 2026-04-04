#!/usr/bin/env node

const asyncStart = async () => {

    const mode = process.argv[2]
    const fs = require('fs').promises
    const path = require('path')

    const pkgFile = __dirname + '/../package.json'
    const pkg = JSON.parse((await fs.readFile(pkgFile)).toString())

    const generateSnapDescription = async () => {
        const readmePath = path.resolve(__dirname, '..', 'README.md')
        const readme = await fs.readFile(readmePath, 'utf-8')

        // Extract from "# Features" to "# Installation"
        const startMatch = readme.indexOf('# Features')
        const endMatch = readme.indexOf('# Installation')
        if (startMatch === -1 || endMatch === -1) {
            return 'P3X OneNote Linux'
        }

        let section = readme.substring(startMatch + '# Features'.length, endMatch).trim()

        // Strip markdown formatting
        section = section
            // Remove HTML comments
            .replace(/<!--[\s\S]*?-->/g, '')
            // Remove markdown tables (header, separator, and data rows)
            .replace(/\|.*\|.*\n/g, '')
            // Remove horizontal rules
            .replace(/^---+$/gm, '')
            // Remove images
            .replace(/!\[.*?\]\(.*?\)/g, '')
            // Convert links to just text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            // Remove bold
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            // Remove inline code
            .replace(/`([^`]+)`/g, '$1')
            // Remove heading markers
            .replace(/^#{1,6}\s+/gm, '')
            // Remove emoji
            .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
            // Clean up multiple blank lines
            .replace(/\n{3,}/g, '\n\n')
            .trim()

        // Snap Store limit is ~4096 chars
        if (section.length > 4000) {
            section = section.substring(0, 4000).replace(/\n[^\n]*$/, '')
        }

        return section
    }

    switch(mode) {
        case 'flathub-before':
            delete pkg.build.afterAllArtifactBuild
            break;

        case 'before':
            pkg.devDependencies.electron = pkg.dependencies.electron
            delete pkg.dependencies.electron
            break;

        case 'after':
            pkg.dependencies.electron = pkg.devDependencies.electron
            delete pkg.devDependencies.electron
            break;

        case 'snap-before':
            pkg.description = await generateSnapDescription()
            console.log('Snap description set (' + pkg.description.length + ' chars)')
            break;

        case 'snap-after':
            pkg.description = pkg.corifeus['description-npm'];
            break;

        default:
            throw new Error(`Unknown mode ${mode}`)
    }

    console.log('pkg dependencies', JSON.stringify(pkg.dependencies, null, 4))
    console.log('pkg devDependencies', JSON.stringify(pkg.devDependencies, null, 4))
    await fs.writeFile(pkgFile, JSON.stringify(pkg, null, 4))
}


asyncStart()
