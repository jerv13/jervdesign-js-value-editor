angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeArray',
    [
        'JervDesignJsValueEditorFilterDataType',
        'JervDesignJsValueEditorService',
        function (
            JervDesignJsValueEditorFilterDataType,
            JervDesignJsValueEditorService
        ) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "array";
            dataType.description = "Handles array";
            dataType.directive = "jerv-design-js-value-editor-field-literal";
            dataType.buildSchemaValues = function (name, value, schemas) {
                for (var i = 0; i < value.length; i++) {
                    JervDesignJsValueEditorService.buildDataSchema(
                        name + '.' + i + '',
                        value[i],
                        schemas
                    );
                }
            };
            /**
             * buildSchemaValues
             * @param name
             * @param value
             * @param schema
             */
            dataType.buildSchemaValues = function (name, value, schema) {
            };

            /**
             * createValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.createValue = function (key, subValue, schemaValue) {
                schemaValue.push(subValue)
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
                schemaValue.splice(key, 1);
            };

            return dataType;
        }
    ]
);
