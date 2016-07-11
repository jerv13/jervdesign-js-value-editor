angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeObject',
    [
        'JervDesignJsValueEditorFilterDataType',
        'JervDesignJsValueEditorService',
        function (
            JervDesignJsValueEditorFilterDataType,
            JervDesignJsValueEditorService
        ) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "object";
            dataType.description = "Handles objects";
            dataType.directive = "jerv-design-js-value-editor-field-literal";
            dataType.canCreateValue = true;
            dataType.canUpdateValue = true;
            dataType.canDeleteValue = true;
            dataType.rebuildOnChange = true;
            dataType.buildSchemaValues = function (name, value, schemas) {
                for (var prop in value) {
                    JervDesignJsValueEditorService.buildDataSchema(
                        name + '.' + prop,
                        value[prop],
                        schemas
                    )
                }
            };
            /**
             * createValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.createValue = function (key, subValue, schemaValue) {
                schemaValue[key] = subValue;
            };

            /**
             * updateValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.updateValue = function (key, subValue, schemaValue) {
                schemaValue[key] = subValue;
            };

            /**
             * deleteValue
             * @param key
             */
            dataType.deleteValue = function (key, schemaValue) {
                delete schemaValue[key]
            };

            return dataType;
        }
    ]
);
