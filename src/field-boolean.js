angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorFieldBoolean',
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
                ' <input type="checkbox" name="schemadata.name" ng-model="schemadata.value" ng-value="true">' +
                '</div>'
            }
        }
    ]
);
