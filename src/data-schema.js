var JervDesignJsValueEditorDataSchema = function () {
    /**
     * self
     * @type {JervDesignJsValueEditorDataSchema}
     */
    var self = this;

    /**
     * type
     * @type {string}
     */
    self.type = "null";

    /**
     * originalType
     * @type {string}
     */
    self.originalType = "null";

    /**
     * name
     * @type {string}
     */
    self.name = "";

    /**
     * accessor
     * @type {string}
     */
    self.accessor = "";

    /**
     * value
     * @type {mixed}
     */
    self.value = null;

    /**
     * originalValue
     * @type {null}
     */
    self.originalValue = null;

    /**
     * displayValue
     * @type {string}
     */
    self.displayValue = "";

    /**
     * originalDisplayValue
     * @type {string}
     */
    self.originalDisplayValue = "";

    /**
     * directive
     * @type {string}
     */
    self.directive = null;

    /**
     * filterValidate - filter and validate value
     * @returns {JervDesignJsValueEditorFilterValidateResult}
     */
    self.filterValidate = function () {
        return new JervDesignJsValueEditorFilterValidateResult;
    };
};


angular.module('JervDesignJsValueEditor').factory(
    'JervDesignJsValueEditorDataSchema',
    [
        function () {
            return JervDesignJsValueEditorDataSchema;
        }
    ]
);
