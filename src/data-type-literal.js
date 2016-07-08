angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeLiteral',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "literal";
            service.description = "Handles literals as strings";
            service.directive = "jerv-design-js-value-editor-field-literal";
            return service;
        }
    ]
);
