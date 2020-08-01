global.p3x.onenote.ng.factory('p3xOnenoteToast', ($mdToast) => {

    const toast = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options,
            }
        }

        const template = '<md-toast class="md-toast p3x-onenote-toast-default" style="cursor: pointer;" ng-click="closeToast()">' + options.message + '</md-toast>'

        $mdToast.show({
            controller: function ($scope, $mdToast) {
                $scope.closeToast = function() {
                    $mdToast.hide();
                };
            },
            template: template,
            hideDelay: 5000,
            position: 'bottom right'
        });
    }

    return new function () {
        this.action = toast;
        this.setProxy = new function () {
            this.clear = () => toast(p3x.onenote.lang.dialog.setProxy.clear)
            this.set = (value) => toast(p3x.onenote.lang.dialog.setProxy.set(value))
        }
    }
})
