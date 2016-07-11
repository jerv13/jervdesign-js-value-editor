angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeBoolean',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "boolean";
            dataType.description = "Handles booleans";
            dataType.directive = "jerv-design-js-value-editor-field-boolean";
            return dataType;
        }
    ]
);
