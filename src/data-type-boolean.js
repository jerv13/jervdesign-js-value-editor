angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeBoolean',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "boolean";
            service.description = "Handles booleans";
            service.directive = "jerv-design-js-value-editor-field-boolean";
            return service;
        }
    ]
);
