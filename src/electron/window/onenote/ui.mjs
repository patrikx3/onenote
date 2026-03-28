// ── Toast ──────────────────────────────────────────────────────────

const toastContainer = document.getElementById('p3x-toast-container');

function showToast(options) {
    if (typeof options === 'string') {
        options = { message: options };
    }
    const el = document.createElement('div');
    el.className = 'p3x-toast';
    el.textContent = options.message;

    const dismiss = () => {
        el.classList.add('p3x-toast-out');
        el.addEventListener('animationend', () => el.remove(), { once: true });
    };

    el.addEventListener('click', dismiss);
    toastContainer.appendChild(el);

    setTimeout(dismiss, 5000);
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
    const model = opts.model || { title: '', url: '' };

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
        const titleField = dialogEl.querySelector('#p3x-field-title');
        const urlField = dialogEl.querySelector('#p3x-field-url');

        const validate = () => {
            titleField.classList.toggle('p3x-invalid', !titleInput.value.trim());
            urlField.classList.toggle('p3x-invalid', !urlInput.validity.valid);
            return titleInput.value.trim() && urlInput.validity.valid;
        };

        form.onsubmit = (e) => {
            e.preventDefault();
            if (!validate()) return;
            closeDialog();
            resolve({
                opts: opts,
                model: { title: titleInput.value.trim(), url: urlInput.value.trim() },
            });
        };

        const deleteBtn = dialogEl.querySelector('[data-action="delete"]');
        if (deleteBtn) {
            deleteBtn.onclick = () => {
                closeDialog();
                resolve({
                    delete: true,
                    opts: opts,
                    model: { title: titleInput.value.trim(), url: urlInput.value.trim() },
                });
            };
        }

        dialogEl.querySelector('[data-action="cancel"]').onclick = () => { closeDialog(); reject(undefined); };
        dialogEl.addEventListener('cancel', () => { closeDialog(); reject(undefined); }, { once: true });

        dialogEl.showModal();
        titleInput.focus();
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
};
