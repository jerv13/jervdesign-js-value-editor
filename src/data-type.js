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
     * getDisplayValue - returns a string representation of data or array of DataSchema
     * @param name
     * @param value
     * @returns {string|array}
     */
    dataType.getDisplayValue = function (name, value) {
        return JSON.stringify(value);
    };

    /**
     * getDataValue - returns the value in its native format
     * @param name
     * @param value
     * @returns {mixed}
     */
    dataType.getDataValue = function (name, value) {
        return JSON.parse(value);
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
