angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorField',
    [
        'JervDesignJsValueEditorService',
        function (JervDesignJsValueEditorService) {
            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                $scope.typeChanged = false;

                $scope.createData = {
                    key: '',
                    displayValue: ''
                };

                $scope.onRawChange = function () {
                    $scope.typeChanged = ($scope.schemadata.originalDisplayValue !== $scope.schemadata.displayValue);
                };

                var onUpdate = function () {
                    $scope.showedit = false;
                };

                $scope.cancel = function () {
                    $scope.schemadata.displayValue = $scope.schemadata.originalDisplayValue;
                    $scope.schemadata.value = $scope.schemadata.originalValue;
                    $scope.schemadata.type = $scope.schemadata.originalType;
                    onUpdate();
                };

                $scope.create = function () {
                    try {
                        var value = JSON.parse($scope.createData.displayValue);
                    } catch (err) {
                        alert('Invalid JSON');
                        return;
                    }

                    JervDesignJsValueEditorService.createValue(
                        $scope.schemadata.name,
                        $scope.createData.key,
                        value
                    );
                    onUpdate();
                };

                $scope.save = function () {
                    try {
                        var value = JSON.parse($scope.schemadata.displayValue);
                    } catch (err) {
                        alert('Invalid JSON');
                        return;
                    }

                    JervDesignJsValueEditorService.updateValue(
                        $scope.schemadata.name,
                        value
                    );
                    onUpdate();
                };

                $scope.delete = function () {
                    JervDesignJsValueEditorService.deleteValue(
                        $scope.schemadata.name
                    );
                    onUpdate();
                };
            }

            return {
                link: link,
                scope: {
                    schemadata: '=',
                    showedit: "="
                },
                templateUrl: JervDesignJsValueEditorService.libPath + 'field.html'

            }
        }
    ]
);
