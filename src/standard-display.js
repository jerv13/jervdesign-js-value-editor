angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorStandardDisplay',
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

                var valueData = attrs.valueData;

                if (!valueData) {
                    console.error("value-data attribute missing");
                }

                $scope.schemas = [];

                $scope.$watch('valueData', function(value){
                    if(value){
                        $scope.schemas = JervDesignJsValueEditorService.getDataSchema(
                            "schemas",
                            value
                        );
                    }
                });
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
