var Module = require('module');
var originalRequire = Module.prototype.require;


global.window = {};
Module.prototype.require = function(name){
    if (name === 'electron') {
        const mock = {
            on: () => {},
        };
        return {
            ipcMain: mock,
            app: mock
        };
    }
    //do your thing here
    return originalRequire.apply(this, arguments);
};
