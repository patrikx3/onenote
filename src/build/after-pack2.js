const pkg = require('../../package')
const { exec } = require('child_process');
const fs = require('fs-extra');
const os = require('os');
const path = require('path');
const { chdir } = require('process');
const util = require('util');

const execAsync = util.promisify(exec);

const setSandboxPermission = async ({ targets, appOutDir }) =>
    exec(`chmod 4755 ${path.join(appOutDir, 'chrome-sandbox')}`);

const disableSandboxing = async (context) => {
    const needsCheck = context.targets.find((target) => target.name === 'appImage' );

    if (!needsCheck) {
        return;
    }

    const appName = context.packager.appInfo.name.replace('/', '');
    const originalDir = process.cwd();
    const dirname = context.appOutDir;

    chdir(dirname);

    // Rename generated entry file
    await execAsync(`mv ${appName} ${appName}.bin`);

    // Create loader script with original entry file name
    const loaderScript = await fs.readFile(path.join(originalDir, 'src/build/ensure-uns-loader.sh'), 'utf8');
    fs.outputFileSync(appName, loaderScript.replace('$APP_NAME', appName));
    await execAsync(`chmod +x ${appName}`);

    chdir(originalDir);
};

exports.default = async (context) => {
    if (os.platform() === 'linux') {
        await setSandboxPermission(context);
        await disableSandboxing(context);
    }
};
