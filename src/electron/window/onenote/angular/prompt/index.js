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
                        <md-button ng-click="cancel()" class="md-primary">
                           ${p3x.onenote.lang.button.cancel}
                        </md-button>
                        <md-button ng-click="exit('internal')" class="md-primary">
                           ${p3x.onenote.lang.dialog.redirect.urlInternal}
                        </md-button>
                        <md-button ng-click="exit('external')" class="md-primary">
                           ${p3x.onenote.lang.dialog.redirect.urlExternal}
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

        this.bookmarks = (opts) => {
            let deleteButton = ''
            let title
            if (opts.edit === true) {
                deleteButton = `
                        <md-button ng-click="delete()" class="md-primary">
                           ${p3x.onenote.lang.button.delete}
                        </md-button>
                `
                title = p3x.onenote.lang.bookmarks.edit
            } else {
                title = p3x.onenote.lang.bookmarks.add
            }
            return $mdDialog.show({
                template: `
                    <form novalidate name="urlForm" ng-submit="submit()">
                    <md-dialog style="min-width: 320px">

                      <md-dialog-content>
                        <md-content layout-padding>
                            <h3 flex>
                                ${title}
                            </h3>
                            <div>
                                <md-input-container class="md-block">
                                    <label> ${p3x.onenote.lang.bookmarks.form.title}</label>
                                    <input required ng-model="model.title" name="title"/>

                                     <div ng-messages="urlForm.title.$error">
                                         <div ng-message="required">${p3x.onenote.lang.validation.required}</div>
                                    </div>
                                </md-input-container>
                                <md-input-container class="md-block">
                                    <label> ${p3x.onenote.lang.bookmarks.form.url}</label>
                                    <input type="url" required ng-model="model.url" name="url"/>

                                     <div ng-messages="urlForm.url.$error">
                                         <div ng-message="required">${p3x.onenote.lang.validation.required}</div>
                                         <div ng-message="url">${p3x.onenote.lang.validation.url}</div>
                                    </div>
                                </md-input-container>
                            </div>
                        </md-content>
                      </md-dialog-content>

                      <md-dialog-actions>
                        <md-button ng-click="cancel()" class="md-primary">
                           ${p3x.onenote.lang.button.cancel}
                        </md-button>
                        ${deleteButton}
                        <md-button type="submit" class="md-primary">
                           ${p3x.onenote.lang.button.save}
                        </md-button>
                      </md-dialog-actions>
                    </md-dialog>
                    </form>
`,
                controller: function ($mdDialog, $scope) {

                    $scope.model = {
                        title: undefined,
                        url: undefined,
                    }

                    if (opts.model) {
                        $scope.model = opts.model
                    }

                    $scope.submit = () => {
                        if ($scope.urlForm.$valid) {
                            $mdDialog.hide({
                                opts: opts,
                                model: $scope.model,
                            });
                        }
                    }

                    $scope.delete = () => {
                        $mdDialog.hide({
                            delete: true,
                            opts: opts,
                            model: $scope.model,
                        });
                    }

                    $scope.exit = (answer) => {
                        $mdDialog.hide(answer);
                    }

                    $scope.cancel = $mdDialog.cancel
                }
            });

        }
    }

})
