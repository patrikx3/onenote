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
                .ok(p3x.onenote.lang.button.save)
                .cancel(p3x.onenote.lang.button.cancel);

            return $mdDialog.show(confirm)
        }
    }

})