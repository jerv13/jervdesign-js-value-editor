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
    self.type = "literal";

    /**
     * name
     * @type {string}
     */
    self.name = "TEMP";

    /**
     * value
     * @type {mixed}
     */
    self.value = null;

    /**
     * displayValue
     * @type {string}
     */
    self.displayValue = "";

    // From schema
    /**
     * title
     * @type {string}
     */
    self.title = self.name;

    /**
     * filterValidate - filter and validate value
     * @returns {JervDesignJsValueEditorFilterValidateResult}
     */
    self.filterValidate = function () {
        return new JervDesignJsValueEditorFilterValidateResult;
    };

    /**
     * set a new display value if is function
     * @type {null}
     */
    self.addDisplayValue = null;
};


angular.module('JervDesignJsValueEditor').factory(
    'JervDesignJsValueEditorDataSchema',
    [
        function () {
            return JervDesignJsValueEditorDataSchema;
        }
    ]
);
