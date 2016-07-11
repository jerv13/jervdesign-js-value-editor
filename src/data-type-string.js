angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeString',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "string";
            dataType.description = "Handles strings and nulls";
            dataType.directive = "jerv-design-js-value-editor-field-string";
            return dataType;
        }
    ]
);
