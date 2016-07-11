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

                var rootNamespace = attrs.rootNamespace;
                var events = JervDesignJsValueEditorService.getEvents();

                if (!rootNamespace) {
                    rootNamespace = "root"
                }

                if (!$scope.valueData) {
                    console.error("value-data attribute missing or empty");
                }

                var schemaData = JervDesignJsValueEditorService.newDataSchema(
                    rootNamespace,
                    $scope.valueData
                );
                
                var buildSchema = function (schemaData) {

                    $scope.schemas = schemaData.schema;
                    
                    var displayElm = element.find('.scheme-entries');
                    displayElm.empty();

                    var directiveElm;
                    var directiveName;
                    var directiveValue;
                    
                    for (var ns in $scope.schemas) {
                        if (ns === rootNamespace) {
                            continue;
                        }
                        directiveName = $scope.schemas[ns].directive;
                        directiveValue = "schemas['" + ns + "']";
                        //directiveElm = jQuery('<div ' + directiveName + ' schemadata="' + directiveValue + '" rootNamespace="' + rootNamespace + '">' + directiveName + '</div>');
                        directiveElm = jQuery('<div jerv-design-js-value-editor-field="" schemadata="' + directiveValue + '" rootNamespace="' + rootNamespace + '">' + directiveName + '</div>');
                        // directiveElm.attr(directiveName, directiveValue);
                        directiveElm.attr('class', 'row');
                        displayElm.append(directiveElm);
                    }

                    $compile(
                        displayElm
                    )($scope)
                };

                buildSchema(schemaData);

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
