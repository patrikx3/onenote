// Per-webview event handling is now managed by tab-manager.mjs
// This module is kept for backward compatibility with the import in load.mjs

const handler = (options) => {
    // No-op: all webview events are set up per-tab in tab-manager.mjs
};

export default handler;
