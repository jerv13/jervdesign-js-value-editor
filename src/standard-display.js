angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorStandardDisplay',
    [
        '$timeout',
        '$compile',
        'JervDesignJsValueEditorService',
        function (
            $timeout,
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
                $scope.loading = JervDesignJsValueEditorService.loading;
                $scope.showedit = {};
                $scope.searchValue = '';

                var loading = function (loading) {
                    // @todo this doe not work due to dom changing while loading
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

                $scope.search = function () {
                    var ns;
                    if (!$scope.searchValue) {
                        for (ns in $scope.schemas) {
                            $scope.schemas[ns].searchHide = false;
                        }
                        return;
                    }
                    var regex = new RegExp($scope.searchValue, 'i');

                    for (ns in $scope.schemas) {
                        $scope.schemas[ns].searchHide = !regex.test(ns);
                    }
                };

                $scope.refresh = function () {
                    JervDesignJsValueEditorService.refreshDataSchema($scope.rootNamespace);
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
