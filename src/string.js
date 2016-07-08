angular.module('JervDesignJsValueEditor').directive(
    'JervDesignJsValueEditorString',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                
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
