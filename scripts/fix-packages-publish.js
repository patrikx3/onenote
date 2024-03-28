#!/usr/bin/env node

const asyncStart = async () => {

    const mode = process.argv[2]
    const fs = require('fs').promises

    const pkgFile = __dirname + '/../package.json'
    const pkg = JSON.parse((await fs.readFile(pkgFile)).toString())

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
            pkg.description = pkg.corifeus['description-snap'];
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
