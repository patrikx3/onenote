#!/usr/bin/env node
//const os = require('os');
//const process = require('process');
//const cores = os.cpus().length < 4 ? 4 : os.cpus().length;
//process.env.UV_THREADPOOL_SIZE = cores;
//console.debug(`P3X sets UV_THREADPOOL_SIZE to ${cores} thread pool`)

/*
if (!require('fs').existsSync(`${__dirname}/../node_modules`)) {
    require('child_process').execSync(`cd ${__dirname}/..; npm install --only=prod`, {
        stdio: 'inherit'
    });
}
*/

const utils = require('corifeus-utils');
const path = require('path');
const mz = require('mz');

const start = async() => {
/*
    const desktopEntry = `${process.env.HOME}/.local/share/applications/p3x-onenote.desktop`;
    const exists = await utils.fs.ensureFile(desktopEntry, `[Desktop Entry]
Version=1.0
Type=Application
Name=P3X Onenote
Icon=${path.resolve(__dirname + '/../src/electron/images/256x256.png')}
Exec=${__filename}
Comment=https://www.patrikx3.com
Categories=Office;
Terminal=false
`)
    if (!exists) {
        await mz.fs.chmod(desktopEntry , '0755');
        await utils.childProcess.exec('gtk-update-icon-cache || true');
    }
*/
    try {
        await utils.childProcess.exec(`${__dirname}/../node_modules/.bin/electron ${__dirname}/../src/electron/app.js`, true);
    } catch (e) {
        console.error(e);
        throw e;
    }
}

start();
