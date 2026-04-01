// ── Toast ──────────────────────────────────────────────────────────

const toastContainer = document.getElementById('p3x-toast-container');

let currentToast = null;

function dismissCurrentToast() {
    if (currentToast) {
        const el = currentToast;
        currentToast = null;
        el.classList.add('p3x-toast-out');
        el.addEventListener('animationend', () => el.remove(), { once: true });
    }
}

function showToast(options) {
    if (typeof options === 'string') {
        options = { message: options };
    }

    // Dismiss any existing toast
    dismissCurrentToast();

    const el = document.createElement('div');
    el.className = 'p3x-toast';
    el.textContent = options.message;
    currentToast = el;

    el.addEventListener('click', () => {
        if (currentToast === el) dismissCurrentToast();
    });

    toastContainer.appendChild(el);

    if (!options.sticky) {
        const duration = options.duration || 5000;
        setTimeout(() => {
            if (currentToast === el) dismissCurrentToast();
        }, duration);
    }
}

export const p3xToast = {
    action: showToast,
    setProxy: {
        clear: () => showToast(p3x.onenote.lang.dialog.setProxy.clear),
        set: (value) => showToast(p3x.onenote.lang.dialog.setProxy.set(value)),
    },
};

// ── Dialog helpers ────────────────────────────────────────────────

const dialogEl = document.getElementById('p3x-dialog');

function closeDialog() {
    dialogEl.close();
    dialogEl.innerHTML = '';
}

// ── Prompt (single text input) ───────────────────────────────────

function showPrompt({ title, text, placeholder, initialValue, cancelText, okText }) {
    return new Promise((resolve, reject) => {
        dialogEl.innerHTML = `
            <form method="dialog">
                <h3 class="p3x-dialog-title">${title}</h3>
                <div class="p3x-dialog-body">
                    ${text ? `<p>${text}</p>` : ''}
                    <input class="p3x-dialog-input" type="text"
                        placeholder="${placeholder || ''}"
                        value="${initialValue || ''}">
                </div>
                <div class="p3x-dialog-actions">
                    <button type="button" class="p3x-btn" data-action="cancel">${cancelText}</button>
                    <button type="submit" class="p3x-btn">${okText}</button>
                </div>
            </form>`;

        const input = dialogEl.querySelector('input');
        const cancelBtn = dialogEl.querySelector('[data-action="cancel"]');

        cancelBtn.onclick = () => { closeDialog(); reject(undefined); };
        dialogEl.querySelector('form').onsubmit = (e) => {
            e.preventDefault();
            const val = input.value;
            closeDialog();
            resolve(val);
        };
        dialogEl.addEventListener('cancel', () => { closeDialog(); reject(undefined); }, { once: true });

        dialogEl.showModal();
        input.focus();
        input.select();
    });
}

// ── Choice dialog (buttons only) ────────────────────────────────

function showChoice({ title, body, buttons, cancelText }) {
    return new Promise((resolve, reject) => {
        const btnHtml = buttons.map(b =>
            `<button type="button" class="p3x-btn" data-value="${b.value}">${b.label}</button>`
        ).join('');

        dialogEl.innerHTML = `
            <h3 class="p3x-dialog-title">${title}</h3>
            <div class="p3x-dialog-body">${body || ''}</div>
            <div class="p3x-dialog-actions">
                ${cancelText ? `<button type="button" class="p3x-btn" data-action="cancel">${cancelText}</button>` : ''}
                ${btnHtml}
            </div>`;

        dialogEl.querySelectorAll('[data-value]').forEach(btn => {
            btn.onclick = () => { closeDialog(); resolve(btn.dataset.value); };
        });
        const cancelBtn = dialogEl.querySelector('[data-action="cancel"]');
        if (cancelBtn) cancelBtn.onclick = () => { closeDialog(); reject(undefined); };
        dialogEl.addEventListener('cancel', () => { closeDialog(); reject(undefined); }, { once: true });

        dialogEl.showModal();
    });
}

// ── Bookmark form dialog ────────────────────────────────────────

function showBookmarkForm(opts) {
    const lang = p3x.onenote.lang;
    const isEdit = opts.edit === true;
    const title = isEdit ? lang.bookmarks.edit : lang.bookmarks.add;
    const model = opts.model || { title: '', url: '', category: '' };

    return new Promise((resolve, reject) => {
        dialogEl.innerHTML = `
            <form>
                <h3 class="p3x-dialog-title">${title}</h3>
                <div class="p3x-dialog-body">
                    <div class="p3x-dialog-field" id="p3x-field-title">
                        <label>${lang.bookmarks.form.title}</label>
                        <input class="p3x-dialog-input" name="title" required
                            value="${model.title || ''}">
                        <div class="p3x-field-error">${lang.validation.required}</div>
                    </div>
                    <div class="p3x-dialog-field" id="p3x-field-url">
                        <label>${lang.bookmarks.form.url}</label>
                        <input class="p3x-dialog-input" name="url" type="url" required
                            maxlength="2048" value="${model.url || ''}">
                        <div class="p3x-field-error">${lang.validation.url}</div>
                    </div>
                    <div class="p3x-dialog-field" id="p3x-field-category">
                        <label>${lang.bookmarks.form?.category || 'Folder'}</label>
                        <input class="p3x-dialog-input" name="category" list="p3x-category-list"
                            placeholder="${lang.bookmarks.form?.categoryPlaceholder || 'e.g. Work/Projects (use / for subfolders)'}"
                            value="${model.category || ''}">
                        <datalist id="p3x-category-list"></datalist>
                    </div>
                </div>
                <div class="p3x-dialog-actions">
                    <button type="button" class="p3x-btn" data-action="cancel">${lang.button.cancel}</button>
                    ${isEdit ? `<button type="button" class="p3x-btn p3x-btn-warn" data-action="delete">${lang.button.delete}</button>` : ''}
                    <button type="submit" class="p3x-btn">${lang.button.save}</button>
                </div>
            </form>`;

        const form = dialogEl.querySelector('form');
        const titleInput = form.querySelector('[name="title"]');
        const urlInput = form.querySelector('[name="url"]');
        const categoryInput = form.querySelector('[name="category"]');
        const titleField = dialogEl.querySelector('#p3x-field-title');
        const urlField = dialogEl.querySelector('#p3x-field-url');

        // Populate datalist with existing folder paths
        const datalist = dialogEl.querySelector('#p3x-category-list');
        const bookmarks = global.p3x.onenote.conf.get('bookmarks') || [];
        const folderSet = new Set();
        for (const bm of bookmarks) {
            if (bm.category) {
                const parts = bm.category.split('/').map(p => p.trim()).filter(p => p);
                for (let i = 1; i <= parts.length; i++) {
                    folderSet.add(parts.slice(0, i).join('/'));
                }
            }
        }
        const sortedFolders = [...folderSet].sort((a, b) => a.localeCompare(b));
        for (const folder of sortedFolders) {
            const opt = document.createElement('option');
            opt.value = folder;
            datalist.appendChild(opt);
        }

        const validate = () => {
            titleField.classList.toggle('p3x-invalid', !titleInput.value.trim());
            urlField.classList.toggle('p3x-invalid', !urlInput.validity.valid);
            return titleInput.value.trim() && urlInput.validity.valid;
        };

        const normalizeCategory = (val) => {
            return val.split('/').map(s => s.trim()).filter(s => s).join('/');
        };

        form.onsubmit = (e) => {
            e.preventDefault();
            if (!validate()) return;
            closeDialog();
            resolve({
                opts: opts,
                model: { title: titleInput.value.trim(), url: urlInput.value.trim(), category: normalizeCategory(categoryInput.value) },
            });
        };

        const deleteBtn = dialogEl.querySelector('[data-action="delete"]');
        if (deleteBtn) {
            deleteBtn.onclick = () => {
                closeDialog();
                resolve({
                    delete: true,
                    opts: opts,
                    model: { title: titleInput.value.trim(), url: urlInput.value.trim(), category: normalizeCategory(categoryInput.value) },
                });
            };
        }

        dialogEl.querySelector('[data-action="cancel"]').onclick = () => { closeDialog(); reject(undefined); };
        dialogEl.addEventListener('cancel', () => { closeDialog(); reject(undefined); }, { once: true });

        dialogEl.showModal();
        titleInput.focus();
    });
}

// ── Bookmark Manager ───────────────────────────────────────────

function showBookmarkManager() {
    const lang = p3x.onenote.lang;
    const conf = global.p3x.onenote.conf;
    let bookmarks = conf.get('bookmarks') || [];
    let filter = '';

    const normalizeCategory = (val) => val.split('/').map(s => s.trim()).filter(s => s).join('/');

    function getExistingFolders() {
        const folders = new Set();
        for (const bm of bookmarks) {
            if (bm.category) {
                const parts = bm.category.split('/').map(p => p.trim()).filter(p => p);
                for (let i = 1; i <= parts.length; i++) {
                    folders.add(parts.slice(0, i).join('/'));
                }
            }
        }
        return [...folders].sort((a, b) => a.localeCompare(b));
    }

    function save() {
        conf.set('bookmarks', bookmarks);
        const { ipcRenderer } = window.electronShim;
        ipcRenderer.send('p3x-onenote-bookmarks-manager-saved');
    }

    function render() {
        const filtered = filter
            ? bookmarks.filter(bm =>
                bm.title.toLowerCase().includes(filter) ||
                bm.url.toLowerCase().includes(filter) ||
                (bm.category || '').toLowerCase().includes(filter))
            : bookmarks;

        const folders = getExistingFolders();
        const datalistHtml = folders.map(f => `<option value="${f}">`).join('');

        const rowsHtml = filtered.length === 0
            ? `<tr><td colspan="4" class="p3x-bm-empty">${lang.bookmarks?.managerEmpty || 'No bookmarks found.'}</td></tr>`
            : filtered.map((bm, displayIdx) => {
                const realIdx = bookmarks.indexOf(bm);
                const folderHtml = bm.category
                    ? `<span class="p3x-bm-folder-tag">${bm.category}</span>`
                    : `<span style="opacity:0.4">—</span>`;
                return `<tr data-idx="${realIdx}">
                    <td class="p3x-bm-cell-edit" data-field="title" title="${bm.title}">${bm.title}</td>
                    <td class="p3x-bm-cell-edit" data-field="url" title="${bm.url}">${bm.url}</td>
                    <td class="p3x-bm-cell-edit" data-field="category">${folderHtml}</td>
                    <td class="p3x-bm-actions">
                        <button class="p3x-bm-delete" data-idx="${realIdx}" title="${lang.button.delete}">
                            <i class="fas fa-trash" style="pointer-events:none;"></i>
                        </button>
                    </td>
                </tr>`;
            }).join('');

        const listEl = dialogEl.querySelector('.p3x-bm-list');
        listEl.innerHTML = `
            <datalist id="p3x-bm-folder-list">${datalistHtml}</datalist>
            <table class="p3x-bm-table">
                <thead><tr>
                    <th>${lang.bookmarks.form.title}</th>
                    <th>${lang.bookmarks.form.url}</th>
                    <th>${lang.bookmarks.form?.category || 'Folder'}</th>
                    <th></th>
                </tr></thead>
                <tbody>${rowsHtml}</tbody>
            </table>`;

        // Wire up inline editing
        listEl.querySelectorAll('.p3x-bm-cell-edit').forEach(cell => {
            cell.addEventListener('click', () => {
                const row = cell.closest('tr');
                const idx = parseInt(row.dataset.idx);
                const field = cell.dataset.field;
                const bm = bookmarks[idx];
                if (!bm) return;

                const currentVal = bm[field] || '';
                const input = document.createElement('input');
                input.className = 'p3x-bm-inline-input';
                input.value = currentVal;
                if (field === 'category') {
                    input.setAttribute('list', 'p3x-bm-folder-list');
                    input.placeholder = lang.bookmarks.form?.categoryPlaceholder || 'e.g. Work/Projects';
                }

                const commit = () => {
                    let val = input.value.trim();
                    if (field === 'category') val = normalizeCategory(val);
                    if (field === 'title' && !val) val = currentVal; // don't allow empty title
                    bm[field] = val;
                    save();
                    render();
                };

                input.addEventListener('blur', commit);
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') { e.preventDefault(); commit(); }
                    if (e.key === 'Escape') { render(); }
                });

                cell.textContent = '';
                cell.appendChild(input);
                input.focus();
                input.select();
            });
        });

        // Wire up delete buttons with confirmation
        listEl.querySelectorAll('.p3x-bm-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.idx);
                const bm = bookmarks[idx];
                if (!bm) return;

                // Simple inline confirmation
                const row = btn.closest('tr');
                const actionsCell = btn.closest('.p3x-bm-actions');
                actionsCell.innerHTML = `
                    <span style="font-size:11px;margin-right:4px;">${lang.bookmarks?.confirmDelete || 'Delete?'}</span>
                    <button class="p3x-bm-confirm-yes" style="color:#a4262c;font-weight:bold;" title="${lang.button.yes || 'Yes'}">
                        <i class="fas fa-check" style="pointer-events:none;"></i>
                    </button>
                    <button class="p3x-bm-confirm-no" title="${lang.button.cancel || 'Cancel'}">
                        <i class="fas fa-times" style="pointer-events:none;"></i>
                    </button>
                `;
                actionsCell.querySelector('.p3x-bm-confirm-yes').addEventListener('click', () => {
                    bookmarks.splice(idx, 1);
                    save();
                    render();
                });
                actionsCell.querySelector('.p3x-bm-confirm-no').addEventListener('click', () => {
                    render();
                });
            });
        });
    }

    return new Promise((resolve) => {
        dialogEl.classList.add('p3x-bookmark-manager');
        dialogEl.innerHTML = `
            <h3 class="p3x-dialog-title">${lang.bookmarks?.manager || 'Manage Bookmarks'}</h3>
            <div class="p3x-bm-toolbar">
                <input class="p3x-dialog-input p3x-bm-search" type="text"
                    placeholder="${lang.bookmarks?.managerSearch || 'Search bookmarks...'}">
            </div>
            <div class="p3x-bm-list"></div>
            <div class="p3x-dialog-actions">
                <button type="button" class="p3x-btn" data-action="close">${lang.button.ok}</button>
            </div>`;

        const searchInput = dialogEl.querySelector('.p3x-bm-search');
        searchInput.addEventListener('input', () => {
            filter = searchInput.value.toLowerCase();
            render();
        });

        dialogEl.querySelector('[data-action="close"]').onclick = () => {
            dialogEl.classList.remove('p3x-bookmark-manager');
            closeDialog();
            resolve();
        };
        dialogEl.addEventListener('cancel', () => {
            dialogEl.classList.remove('p3x-bookmark-manager');
            closeDialog();
            resolve();
        }, { once: true });

        render();
        dialogEl.showModal();
        searchInput.focus();
    });
}

// ── Public prompt API (matches old Angular interface) ───────────

export const p3xPrompt = {
    setProxy() {
        const lang = p3x.onenote.lang;
        return showPrompt({
            title: lang.label.setProxy,
            text: lang.dialog.setProxy.info,
            placeholder: lang.dialog.setProxy.placeholder,
            initialValue: global.p3x.onenote.data.proxy,
            cancelText: lang.button.cancel,
            okText: lang.button.save,
        });
    },

    goToUrl() {
        const lang = p3x.onenote.lang;
        return showPrompt({
            title: lang.label.openUrl,
            text: lang.dialog.openUrl.info,
            placeholder: lang.dialog.openUrl.placeholder,
            initialValue: '',
            cancelText: lang.button.cancel,
            okText: lang.button.go,
        });
    },

    configureLanguge(opts) {
        const lang = p3x.onenote.lang;
        return showChoice({
            title: lang.menu.language.dialog.label,
            buttons: [
                { label: lang.menu.language.dialog.personal, value: 'personal' },
                { label: lang.menu.language.dialog.corporate, value: 'corporate' },
            ],
            cancelText: lang.button.cancel,
        });
    },

    redirect(opts) {
        const lang = p3x.onenote.lang;
        return showChoice({
            title: lang.label.promptRedirectUrlTitle,
            body: `<div>${lang.dialog.redirect.url({ url: opts.url })}</div>`,
            buttons: [
                { label: lang.dialog.redirect.urlInternal, value: 'internal' },
                { label: lang.dialog.redirect.urlExternal, value: 'external' },
            ],
            cancelText: lang.button.cancel,
        });
    },

    bookmarks(opts) {
        return showBookmarkForm(opts);
    },

    bookmarkManager() {
        return showBookmarkManager();
    },

    addTab() {
        const lang = p3x.onenote.lang;
        return showChoice({
            title: lang.tabs?.addTab || 'Add tab',
            buttons: [
                { label: lang.menu?.language?.dialog?.personal || lang.tabs?.personal || 'Personal', value: 'personal' },
                { label: lang.menu?.language?.dialog?.corporate || lang.tabs?.corporate || 'Corporate', value: 'corporate' },
            ],
            cancelText: lang.button.cancel,
        });
    },

    renameTab(currentName) {
        const lang = p3x.onenote.lang;
        return showPrompt({
            title: lang.tabs?.renameTab || 'Rename tab',
            text: lang.tabs?.renamePrompt || 'Enter a custom name for this tab (leave empty to use default)',
            placeholder: lang.tabs?.renamePlaceholder || 'Custom tab name',
            initialValue: currentName || '',
            cancelText: lang.button.cancel,
            okText: lang.button.save,
        });
    },

    confirmCloseTab(message) {
        const lang = p3x.onenote.lang;
        return showChoice({
            title: lang.tabs?.closeTab || 'Close tab',
            body: `<p>${message}</p>`,
            buttons: [
                { label: lang.button.yes || 'Yes', value: 'yes' },
            ],
            cancelText: lang.button.cancel,
        });
    },
};
