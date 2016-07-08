angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNull',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "null";
            service.description = "Handles nulls";
            service.directive = "jerv-design-js-value-editor-field-literal";
            return service;
        }
    ]
);
