module.exports = () => {
    let { args, app } = require('electron')
    //console.log('args', args, 'process.env.APPIMAGE', process.env.APPIMAGE)

    //console.trace()
    if (process.env.APPIMAGE) {
        if (args === undefined) {
            args = []
        }
        const options = {args};
        options.execPath = process.env.APPIMAGE;
        options.args.unshift('--appimage-extract-and-run');
        app.relaunch(options);
        app.exit(0);
    } else {
        app.relaunch();
        app.exit(0);
    }


}
