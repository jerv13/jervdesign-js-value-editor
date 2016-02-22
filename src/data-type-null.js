angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNull',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "null";
            service.description = "Handles nulls";
            service.directive = "jervdesign-js-value-editor-string";
            service.getDisplayValue = function (name, value) {
                return null;
            };
            service.getDataValue = function (name, value) {
                return null;
            };
            return service;
        }
    ]
);
