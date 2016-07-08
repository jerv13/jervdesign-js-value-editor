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
     * display
     * @type {boolean}
     */
    dataType.display = true;

    /**
     * buildSchemaValues
     * @param name
     * @param value
     * @param schema
     */
    dataType.buildSchemaValues = function (name, value, schema) {
    };

    /**
     * getDisplayValue
     * - returns a string representation of data
     * - null if it should not be display
     *
     * @param name
     * @param value
     * @returns {string|null}
     */
    dataType.getDisplayValue = function (name, value) {
        return JSON.stringify(value);
    };

    /**
     * getDataValue
     * - returns the value in its native format
     *
     * @param name
     * @param displayValue
     * @returns {mixed}
     */
    dataType.getDataValue = function (name, displayValue) {
        return JSON.parse(displayValue);
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
