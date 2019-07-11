global.p3x.onenote.ng.factory('p3xOnenoteToast', ($mdToast) => {

    const toast = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options,
            }
        }
        $mdToast.show(
            $mdToast.simple()
                .textContent(options.message)
                .position('bottom right')
                .hideDelay(5000)
        );
    }

    return new function () {
        this.action = toast;
        this.setProxy = new function () {
            this.clear = () => toast(p3x.onenote.lang.dialog.setProxy.clear)
            this.set = (value) => toast(p3x.onenote.lang.dialog.setProxy.set(value))
        }
    }
})
