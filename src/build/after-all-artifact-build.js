const fs = require('fs-extra')
const pkg = require('../../package')
const {spawn} = require('child_process')
const {chdir} = require('process')
const path = require('path')

const exec = async function exec(cmd, args = []) {
    const child = spawn(cmd, args, {shell: true})
    redirectOutputFor(child)
    await waitFor(child)
}

const redirectOutputFor = (child) => {
    const printStdout = (data) => {
        process.stdout.write(data.toString())
    }
    const printStderr = (data) => {
        process.stderr.write(data.toString())
    }
    child.stdout.on('data', printStdout)
    child.stderr.on('data', printStderr)

    child.once('close', () => {
        child.stdout.off('data', printStdout)
        child.stderr.off('data', printStderr)
    })
}

const waitFor = async function (child) {
    return new Promise((resolve) => {
        child.once('close', () => resolve())
    })
}

const escapeStringRegexp = require('escape-string-regexp');

module.exports = async function (context) {
    //console.log(context)
    const originalDir = process.cwd()

    const dirname = context.outDir
    chdir(dirname)

    const packageDir = 'squashfs-root'

    let downloaded = false
    const appimagetool = 'appimagetool';

    for(let artifact of context.artifactPaths) {
        if (artifact.toLowerCase().endsWith('appimage')) {

            if (downloaded === false) {

                await exec(
                    "curl",
                    [
                        "--fail",
                        "--location",
                        "--output", appimagetool,
                        `https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage`,
                    ],
                );
                await exec("chmod", ["+x", appimagetool]);
                downloaded = true
            }

            artifact = artifact.replace(/(\s+)/g, '\\$1')
            await exec('rm', ['-rf', packageDir])
//            await exec('chmod', ['+x', artifact])

            await exec(artifact, ['--appimage-extract'])

            const shFile = path.join(packageDir, "./AppRun");
            const shContentOriginal = fs.readFileSync(shFile).toString();

            const searchValue = `exec "$BIN"`;
            const replaceWith = `${searchValue} --no-sandbox`;
            let count = 0;
            const content = shContentOriginal.replace(
                new RegExp(escapeStringRegexp(searchValue), "g"),
                () => (count++, replaceWith),
            );

            if (content === shContentOriginal || count !== 2) {
                throw new Error(`Failed to patch content of the "${shFile}" file`);
            }

            fs.writeFileSync(shFile, content);

            await exec(dirname + '/' + appimagetool, [
                '-n',
                '--comp',
                'xz',
                packageDir,
                artifact,
            ])
        }
    }
    await exec('rm', ['-rf', packageDir])
    chdir(originalDir)
}
