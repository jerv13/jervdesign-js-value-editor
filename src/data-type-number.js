angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNumber',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "number";
            service.description = "Handles numbers";
            service.directive = "jervdesign-js-value-editor-number";
            service.getDisplayValue = function (name, value) {
                return Number(value);
            };
            service.getDataValue = function (name, value) {
                return "" + value + "";
            };
            return service;
        }
    ]
);
