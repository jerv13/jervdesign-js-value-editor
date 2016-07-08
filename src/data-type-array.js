angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeArray',
    [
        'JervDesignJsValueEditorFilterDataType',
        'JervDesignJsValueEditorService',
        function (
            JervDesignJsValueEditorFilterDataType,
            JervDesignJsValueEditorService
        ) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "array";
            service.description = "Handles array";
            service.directive = "jerv-design-js-value-editor-field-literal";
            service.display = false;
            service.buildSchemaValues = function (name, value, schemas) {
                for (var i = 0; i < value.length; i++) {
                    JervDesignJsValueEditorService.getDataSchema(
                        name + '.' + i,
                        value[i],
                        schemas
                    );
                }
            };
            return service;
        }
    ]
);
