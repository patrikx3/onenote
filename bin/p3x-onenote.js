#!/usr/bin/env node
if (!require('fs').existsSync(`${__dirname}/../node_modules`)) {
    require('child_process').execSync(`cd ${__dirname}/..; npm install`, {
        stdio: 'inherit'
    });
}

const utils = require('corifeus-utils');
const path = require('path');
const mz = require('mz');

const start = async() => {

    const desktopEntry = `${process.env.HOME}/.local/share/applications/p3x-onenote.desktop`;
    const exists = await utils.fs.ensureFile(desktopEntry, `[Desktop Entry]
Version=1.0
Type=Application
Name=P3X Onenote
Icon=${path.resolve(__dirname + '/../src/electron/images/256x256.png')}
Exec=${__filename}
Comment=https://www.patrikx3.tk
Categories=Office;
Terminal=false
`)
    if (!exists) {
        await mz.fs.chmod(desktopEntry , '0755');
        await utils.childProcess.exec('gtk-update-icon-cache || true');
    }
    await utils.childProcess.exec(`${__dirname}/../node_modules/.bin/electron ${__dirname}/../src/electron/main.js`, true);
}

start();
