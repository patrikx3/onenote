const Module = require('module');
const originalRequire = Module.prototype.require;

Module.prototype.require = function(name){
    switch(name) {
        case 'electron':
            const mock = {
                on: () => {},
            };
            return {
                ipcMain: mock,
                app: Object.assign({
                    requestSingleInstanceLock: () => {},
                    quit: () => {},
                }, mock)
            };

            break;
    }
    //do your thing here
    return originalRequire.apply(this, arguments);
};

const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

global.document = dom.window.document;
global.window = dom.window

require('angular/angular');
require('angular-mocks');

global.angular = window.angular;
global.inject = global.angular.mock.inject;
global.ngModule = global.angular.mock.module;
