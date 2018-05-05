const vex = require('vex-js')
vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-wireframe'

vex.dialog.buttons.YES.text = global.p3x.onenote.lang.button.yes
vex.dialog.buttons.NO.text = global.p3x.onenote.lang.button.no