angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeObject',
    [
        'JervDesignJsValueEditorFilterDataType',
        'JervDesignJsValueEditorService',
        function (
            JervDesignJsValueEditorFilterDataType,
            JervDesignJsValueEditorService
        ) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "object";
            service.description = "Handles objects";
            service.directive = "jerv-design-js-value-editor-field-literal";
            service.display = false;
            service.buildSchemaValues = function (name, value, schemas) {
                for (var prop in value) {
                    JervDesignJsValueEditorService.getDataSchema(
                        name + '.' + prop,
                        value[prop],
                        schemas
                    )
                }
            };
            return service;
        }
    ]
);
