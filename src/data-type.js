var JervDesignJsValueEditorFilterDataType = function () {
    var dataType = this;

    /**
     * type
     * @type {string}
     */
    dataType.type = "DEFAULT";

    /**
     * description - over-ride me
     * @type {string}
     */
    dataType.description = "DEFAULT";

    /**
     * directive - over-ride me
     * @type {string}
     */
    dataType.directive = "";

    /**
     * canCreateValue
     * @type {boolean}
     */
    dataType.canCreateValue = false;

    /**
     * canUpdateValue
     * @type {boolean}
     */
    dataType.canUpdateValue = false;

    /**
     * canDeleteValue
     * @type {boolean}
     */
    dataType.canDeleteValue = false;

    /**
     * rebuildOnChange
     * @type {boolean}
     */
    dataType.rebuildOnChange = false;
    
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
    };

    /**
     * updateValue
     * @param key
     * @param subValue
     * @param schemaValue
     */
    dataType.updateValue = function (key, subValue, schemaValue) {
    };

    /**
     * deleteValue
     * @param key
     * @param schemaValue
     */
    dataType.deleteValue = function (key, schemaValue) {
    };

    /**
     * filterValidate
     * @param name
     * @param value
     * @returns {JervDesignJsValueEditorFilterValidateResult}
     */
    dataType.filterValidate = function (name, value) {
        return new JervDesignJsValueEditorFilterValidateResult();
    };
};

angular.module('JervDesignJsValueEditor').factory(
    'JervDesignJsValueEditorFilterDataType',
    [
        function () {
            return JervDesignJsValueEditorFilterDataType;
        }
    ]
);
