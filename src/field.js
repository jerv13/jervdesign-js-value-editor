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

                $scope.save = function () {
                    try {
                        var value = JSON.parse($scope.schemadata.displayValue);
                    } catch (err) {
                        alert('Invalid JSON');
                        return;
                    }

                    JervDesignJsValueEditorService.updateDataSchema($scope.schemadata.name, value);
                };

                $scope.delete = function () {
                    JervDesignJsValueEditorService.deleteDataSchema($scope.schemadata.name);
                };
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                templateUrl: JervDesignJsValueEditorService.libPath + 'field.html'

            }
        }
    ]
);
