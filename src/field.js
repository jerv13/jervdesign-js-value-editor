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
                $scope.onSave = function () {
                    JervDesignJsValueEditorService.getDataSchema();
                }
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                template: '' +
                '<div class="col-sm-6" ng-if="schemadata.display">' +
                ' <strong>' +
                '  <span ng-show="schemadata.title">{{schemadata.title}}</span> ' +
                '  <span ng-hide="schemadata.title">{{schemadata.name}}</span> ' +
                ' </strong>' +
                ' <span>({{schemadata.type}})</span> ' +
                ' <button ng-click="onSave()">save</button> ' +
                '</div>' +
                '<div class="col-sm-6">' +
                ' <div>Value: {{schemadata.displayValue}}</div>' +
                '</div>' +
                '<div class="col-sm-12">' +
                ' <textarea ng-model="schemadata.displayValue"></textarea>' +
                '</div>'
            }
        }
    ]
);
