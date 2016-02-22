angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeString',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "string";
            service.description = "Handles strings and nulls";
            service.directive = "jervdesign-js-value-editor-string";
            service.getDisplayValue = function (name, value) {
                return "" + value + "";
            };
            service.getDataValue = function (name, value) {
                return "" + value + "";
            };
            return service;
        }
    ]
);
