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
            service.directive = "jervdesign-js-value-editor-array";
            service.getDisplayValue = function (name, value) {
                var parsed = [];
                for (var i = 0; i < value.length; i++) {
                    parsed.push(
                        JervDesignJsValueEditorService.getDataSchema(
                            name + '.' + i,
                            value[i]
                        )
                    );
                }
                return parsed;
            };
            service.getDataValue = function (name, value) {
                var parsed = [];
                for (var i = 0; i < value.length; i++) {
                    parsed.push(JervDesignJsValueEditorService.getDataValue(value[i]));
                }
                return parsed;
            };
            return service;
        }
    ]
);
