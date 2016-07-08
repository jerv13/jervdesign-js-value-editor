angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorFieldLiteral',
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
                $scope.onChange = function () {
                    
                }
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                template: '' +
                '<div class="col-sm-6">' +
                ' <strong>' +
                '  <span ng-show="schemadata.title">{{schemadata.title}}</span> ' +
                '  <span ng-hide="schemadata.title">{{schemadata.name}}</span> ' +
                ' </strong>' +
                ' <span>({{schemadata.type}})</span> ' +
                '</div>' +
                '<div class="col-sm-6">' +
                ' <div>Value: {{schemadata.value | json}}</div>' +
                '</div>' +
                '<div class="col-sm-12">' +
                ' <input ng-change="onChange()" ng-model="schemadata.value" type="text"/>' +
                '</div>'
            }
        }
    ]
);
