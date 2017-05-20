#!/usr/bin/env node
const utils = require('corifeus-utils');
const path = require('path');
const mz = require('mz');

const start = async() => {

    await mz.fs.writeFile(`${process.env.HOME}/.local/share/applications/p3x-onenote.desktop`, `[Desktop Entry]
Version=1.0
Type=Application
Name=P3X Onenote
Icon=${path.resolve(__dirname + '/../src/electron/images/icon.png')}
Exec=${__filename}
Comment=https://www.patrikx3.tk
Categories=Office;
Terminal=false
`)

    utils.childProcess.exec(`${__dirname}/../node_modules/.bin/electron ${__dirname}/../src/electron/main.js`, true);
}

start();
