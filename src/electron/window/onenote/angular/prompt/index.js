global.p3x.onenote.ng.factory('p3xOnenotePrompt', ($mdDialog) => {

    return new function () {

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

        this.goToUrl = () => {
            const confirm = $mdDialog.prompt()
                .title(p3x.onenote.lang.label.openUrl)
                .textContent(p3x.onenote.lang.dialog.openUrl.info)
                .placeholder(p3x.onenote.lang.dialog.openUrl.placeholder)
                .ariaLabel(p3x.onenote.lang.dialog.openUrl.placeholder)
                //.initialValue(global.p3x.onenote.data.proxy)
                //.targetEvent(ev)
                //.required(true)
                .cancel(p3x.onenote.lang.button.cancel)
                .ok(p3x.onenote.lang.button.go)

            return $mdDialog.show(confirm)

        }

        this.configureLanguge = (opts) => {

            return $mdDialog.show({
                template: `
                    <md-dialog>

                      <md-dialog-content>
                        <md-content layout-padding>
                            <h3 flex>
                                ${p3x.onenote.lang.menu.language.dialog.label}
                            </h3>
                        </md-content>
                      </md-dialog-content>

                      <md-dialog-actions>
                        <md-button ng-click="exit('personal', ${opts.translation})" class="md-primary">
                           ${p3x.onenote.lang.menu.language.dialog.personal}
                        </md-button>
                        <md-button ng-click="exit('corporate', ${opts.translation})" class="md-primary">
                           ${p3x.onenote.lang.menu.language.dialog.corporate}
                        </md-button>
                        <md-button ng-click="cancel()" class="md-primary">
                           ${p3x.onenote.lang.button.cancel}
                        </md-button>
                      </md-dialog-actions>
                    </md-dialog>`,
                controller: function ($mdDialog, $scope) {
                    $scope.exit = (answer) => {
                        $mdDialog.hide(answer);
                    }

                    $scope.cancel = $mdDialog.cancel
                }
            });

        }

        this.redirect = (opts) => {

            return $mdDialog.show({
                template: `
                    <md-dialog>

                      <md-dialog-content>
                        <md-content layout-padding>
                            <h3 flex>
                                ${p3x.onenote.lang.label.promptRedirectUrlTitle}
                            </h3>
                            <div layout-padding>
                                ${p3x.onenote.lang.dialog.redirect.url({url: opts.url})}
                            </div>
                        </md-content>
                      </md-dialog-content>

                      <md-dialog-actions>
                        <md-button ng-click="exit('external')" class="md-primary">
                           ${p3x.onenote.lang.dialog.redirect.urlExternal}
                        </md-button>
                        <md-button ng-click="exit('internal')" class="md-primary">
                           ${p3x.onenote.lang.dialog.redirect.urlInternal}
                        </md-button>
                        <md-button ng-click="cancel()" class="md-primary">
                           ${p3x.onenote.lang.button.cancel}
                        </md-button>
                      </md-dialog-actions>
                    </md-dialog>`,
                controller: function ($mdDialog, $scope) {
                    $scope.exit = (answer) => {
                        $mdDialog.hide(answer);
                    }

                    $scope.cancel = $mdDialog.cancel
                }
            });

        }
    }

})
