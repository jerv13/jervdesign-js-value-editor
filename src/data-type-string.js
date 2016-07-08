angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeString',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "string";
            service.description = "Handles strings and nulls";
            service.directive = "jerv-design-js-value-editor-field-string";
            return service;
        }
    ]
);
