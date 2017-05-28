var Module = require('module');
var originalRequire = Module.prototype.require;


global.window = {};
Module.prototype.require = function(name){
    switch(name) {
        case 'electron':
            const mock = {
                on: () => {},
            };
            return {
                ipcMain: mock,
                app: Object.assign({
                    makeSingleInstance: () => {}
                }, mock)
            };

            break;
    }
    //do your thing here
    return originalRequire.apply(this, arguments);
};
