let shown = false
let hideTimeout
const ipc = require('electron').ipcRenderer;
let showCount = 0

if (process.versions.hasOwnProperty('electron')) {

    p3x.onenote.ui.overlay = new function() {
        const template = (options = {}) => {

            return `
<div id="p3xr-overlay">
    <div id="p3xr-overlay-info">
        <i class="fas fa-cog fa-spin fa-4x"></i>
        ${options.hasOwnProperty('message') ? "<br/><br/>" : ''}
        ${options.hasOwnProperty('message') ? options.message : ''}
    </div>
</div>
        
        `
        }

        this.show = (options = {}) => {
            /*
            ipc.send('p3x-debug', {
                'overlay show': shown,
            })
            */
            showCount++

            if (showCount > 5) {
                require('../action/multi-actions')({
                    action: 'home'
                })
                this.hide()
            }

            if (shown) {
                return
            }
            shown = true
            ///this.hide()
            //console.warn('p3xr.ui.overlay show')
            $body.append(template(options))
        }

        this.hide = () => {

            /*
            ipc.send('p3x-debug', {
                'overlay hide': 'done',
            })
            */
            //console.warn('p3xr.ui.overlay hide')
            $body.find('#p3xr-overlay').remove()
            shown = false
            showCount = 0
        }
    }

}

