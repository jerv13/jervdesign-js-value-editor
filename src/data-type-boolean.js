angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeBoolean',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "boolean";
            service.description = "Handles booleans";
            service.directive = "jervdesign-js-value-editor-boolean";
            service.getDisplayValue = function (name, value) {
                return (value);
            };
            service.getDataValue = function (name, value) {
                return (value);
            };
            return service;
        }
    ]
);
