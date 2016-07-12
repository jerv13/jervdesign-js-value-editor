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
            dataType.canCreateValue = true;
            dataType.canUpdateValue = true;
            dataType.canDeleteValue = true;
            dataType.rebuildOnChange = true;
            dataType.buildSchemaValues = function (name, value, accessor, schemas) {
                for (var i = 0; i < value.length; i++) {
                    JervDesignJsValueEditorService.buildDataSchema(
                        name + '.' + i,
                        value[i],
                        accessor + '[' + i+ ']',
                        schemas
                    );
                }
            };

            /**
             * createValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.createValue = function (key, subValue, schemaValue) {
                key = Number(key);
                schemaValue[key] = subValue;
            };

            /**
             * updateValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.updateValue = function (key, subValue, schemaValue) {
                key = Number(key);
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
