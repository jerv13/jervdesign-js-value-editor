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
            service.directive = "jervdesign-js-value-editor-object";
            service.getDisplayValue = function (name, value, schemas) {
                for (var prop in value) {
                        JervDesignJsValueEditorService.getDataSchema(
                            name + '.' + prop,
                            value[prop],
                            schemas
                        )
                }
                return null;
            };
            service.getDataValue = function (name, value) {
                //var parsed = {};
                //for (var prop in value) {
                //    parsed[prop] = JervDesignJsValueEditorService.getDataValue(
                //        value[prop]
                //    );
                //}
                //return parsed;
            };
            return service;
        }
    ]
);
