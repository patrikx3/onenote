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
    }

})