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
                $scope.rootNamespace = attrs.rootNamespace;
                $scope.loadingSchema = JervDesignJsValueEditorService.loadingSchema;
                $scope.showedit = {};

                var loadingSchema = function (loadingData) {
                    if(loadingData.schemaName = $scope.rootNamespace) {
                        $scope.loadingSchema = loadingData.loading;
                    }
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

                buildSchema(schemaData);

                events.on('loadingSchema', 'JervDesignJsValueEditor', loadingSchema);
                events.on('updateSchema', 'JervDesignJsValueEditor', buildSchema);
            }

            return {
                link: link,
                scope: {
                    valueData: '='
                },
                templateUrl: JervDesignJsValueEditorService.libPath + 'standard-display.html'
            }
        }
    ]
);
