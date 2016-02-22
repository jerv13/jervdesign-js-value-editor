angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeLiteral',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "literal";
            service.description = "Handles literals as strings";
            service.directive = "jervdesign-js-value-editor-literal";
            service.getDisplayValue = function (name, value) {
                return JSON.stringify(value);
            };
            service.getDataValue = function (name, value) {
                return JSON.parse(value);
            };
            return service;
        }
    ]
);
