angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorStandardDisplay',
    [
        'JervDesignJsValueEditorService',
        function (JervDesignJsValueEditorService) {
            function link($scope, element, attrs) {
                var dataValues = attrs.jervDesignJsValueEditorStandardDisplay;

                if(!dataValues) {
                    console.error("data-values attribute missing");
                }

                $scope.data = JervDesignJsValueEditorService.getDataSchema("data", dataValues);
            }

            return {
                link: link,
                template: '' +
                '<div>' +
                ' DIR:<pre>{{data | json}}</pre>' +
                '</div>'
            }
        }
    ]
);
