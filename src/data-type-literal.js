angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeLiteral',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "literal";
            dataType.description = "Handles literals as strings";
            dataType.directive = "jerv-design-js-value-editor-field-literal";
            return dataType;
        }
    ]
);
