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
                var childName;
                var childAccessor;
                for (var i = 0; i < value.length; i++) {
                    childName = name + '.' + i;
                    childAccessor = accessor + '[' + i + ']';
                    JervDesignJsValueEditorService.buildDataSchema(
                        childName,
                        value[i],
                        childAccessor,
                        schemas
                    );

                    schemas[childName].parentName = name;
                }
            };

            /**
             * createValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.createValue = function (key, subValue, schemaValue) {
                if (key) {
                    key = Number(key);
                    schemaValue[key] = subValue;
                    return;
                }

                schemaValue.push(subValue)
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
