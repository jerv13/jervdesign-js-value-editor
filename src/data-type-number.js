angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNumber',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "number";
            dataType.description = "Handles numbers";
            dataType.directive = "jerv-design-js-value-editor-field-number";
            return dataType;
        }
    ]
);
