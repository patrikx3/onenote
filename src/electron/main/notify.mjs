import { Notification } from 'electron'
import registry from '../registry.mjs'

/**
 * Shared notification helper.
 * Shows in-app toast always, plus native OS notification if enabled.
 *
 * @param {string} message - The notification message (used for toast and notification body)
 * @param {object} [options] - Optional settings
 * @param {string} [options.title] - Native notification title (defaults to 'P3X OneNote')
 * @param {boolean} [options.sticky] - If true, toast stays until dismissed
 * @param {number} [options.duration] - Toast duration in ms (default 5000)
 */
function notify(message, options = {}) {
    const win = registry.window.onenote
    if (!win) return

    // Always send toast to renderer
    win.webContents.send('p3x-onenote-action', {
        action: 'toast',
        message,
        sticky: options.sticky,
        duration: options.duration,
    })

    // Native notification if enabled
    if (registry.conf.get('desktopNotifications', false)) {
        const title = options.title || 'P3X OneNote'
        const notification = new Notification({ title, body: message })
        notification.on('click', () => {
            win.show()
            win.focus()
        })
        notification.show()
    }
}

export default notify
