angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNull',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "null";
            dataType.description = "Handles nulls";
            dataType.directive = "jerv-design-js-value-editor-field-literal";
            return dataType;
        }
    ]
);
