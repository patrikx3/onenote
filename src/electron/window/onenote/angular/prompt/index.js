global.p3x.onenote.ng.factory('p3xOnenotePrompt', ($mdDialog) => {

    return new function() {

        this.setProxy = () => {
            const confirm = $mdDialog.prompt()
                .title(p3x.onenote.lang.label.setProxy)
                .textContent(p3x.onenote.lang.dialog.setProxy.info)
                .placeholder(p3x.onenote.lang.dialog.setProxy.placeholder)
                .ariaLabel(p3x.onenote.lang.dialog.setProxy.placeholder)
                .initialValue(global.p3x.onenote.data.proxy)
                //.targetEvent(ev)
                //.required(true)
                .cancel(p3x.onenote.lang.button.cancel)
                .ok(p3x.onenote.lang.button.save)

            return $mdDialog.show(confirm)
        }

        this.redirect = (opts) => {
            const confirm = $mdDialog.confirm()
                .title(p3x.onenote.lang.label.promptRedirectUrlTitle)
                .textContent(p3x.onenote.lang.dialog.redirect.url({url: opts.url}))
//                .placeholder(p3x.onenote.lang.dialog.setProxy.placeholder)
//                .ariaLabel(p3x.onenote.lang.dialog.setProxy.placeholder)
//                .initialValue(global.p3x.onenote.data.proxy)
                //.targetEvent(ev)
                //.required(true)
                .cancel(p3x.onenote.lang.dialog.redirect.urlExternal)
                .ok(p3x.onenote.lang.dialog.redirect.urlInternal)
            return $mdDialog.show(confirm)
        }
    }

})
