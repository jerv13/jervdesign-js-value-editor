angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNumber',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "number";
            service.description = "Handles numbers";
            service.directive = "jerv-design-js-value-editor-field-number";
            return service;
        }
    ]
);
