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

                if (!$scope.valueData) {
                    console.error("value-data attribute missing or empty");
                }

                $scope.schemas = JervDesignJsValueEditorService.getDataSchema(
                    "schemas",
                    $scope.valueData
                );

                console.log($scope.schemas);

                var displayElm = element.find('.scheme-entries');
                displayElm.empty();

                var directiveElm;
                var directiveName;
                var directiveValue;
                for (var ns in $scope.schemas) {
                    directiveName = $scope.schemas[ns].directive;
                    directiveValue = JSON.stringify($scope.schemas[ns].directive);
                    directiveElm = jQuery('<div>'+directiveName+'</div>');
                    directiveElm.attr(directiveName, directiveValue);
                    displayElm.append(directiveElm);
                }
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
