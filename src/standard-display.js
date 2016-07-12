angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorStandardDisplay',
    [
        '$compile',
        'JervDesignJsValueEditorService',
        function (
            $compile,
            JervDesignJsValueEditorService
        ) {
            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                var events = JervDesignJsValueEditorService.getEvents();
                //$scope.rootNamespace = attrs.rootNamespace;
                $scope.loading = JervDesignJsValueEditorService.loading;
                $scope.showedit = {};

                var loading = function (loading) {
                    $scope.loading = loading;
                };

                if (!$scope.rootNamespace) {
                    $scope.rootNamespace = "root"
                }

                if (!$scope.valueData) {
                    console.error("value-data attribute missing or empty");
                }

                var schemaData = JervDesignJsValueEditorService.newDataSchema(
                    $scope.rootNamespace,
                    $scope.valueData
                );

                var buildSchema = function (schemaData) {
                    $scope.schemas = schemaData.schema;
                };

                $scope.save = function () {
                    JervDesignJsValueEditorService.save($scope.rootNamespace);
                };

                buildSchema(schemaData);

                events.on('loading', 'JervDesignJsValueEditor', loading);
                events.on('updateSchema', 'JervDesignJsValueEditor', buildSchema);
            }

            return {
                link: link,
                scope: {
                    valueData: '=',
                    rootNamespace: '='
                },
                templateUrl: JervDesignJsValueEditorService.libPath + 'standard-display.html'
            }
        }
    ]
);
