var JervDesignJsValueEditorService = function (
    JervDesignJsValueEditorDataSchema
) {

    var self = this;

    var typeServices = {};

    self.libPath = '/bower_components/jervdesign-js-value-editor/dist/';

    /**
     *
     * @param dataType {JervDesignJsValueEditorFilterDataType}
     */
    self.setTypeService = function (dataType) {
        if (typeServices[dataType.type]) {
            console.warn("Duplicate type set for " + dataType.type);
        }
        typeServices[dataType.type] = dataType;
    };

    /**
     *
     * @param name
     * @param value
     * @returns {string}
     */
    self.getType = function (name, value) {
        var type = typeof value;

        // @todo check schema for type

        if (!typeServices[type]) {
            console.warn('Type ' + type + ' service not available, using literal');
            type = 'literal';
        }

        return type;
    };

    /**
     * getDataSchema
     * @param name
     * @param value
     * @returns {JervDesignJsValueEditorDataSchema}
     */
    self.getDataSchema = function (name, value, schemas) {

        if (!schemas) {
            schemas = {};
        }

        if (!name) {
            name = "";
        }
        var type = self.getType(name, value);

        console.log(name + ' is type ' + type);

        var schema = new JervDesignJsValueEditorDataSchema();
        schema.type = type;
        schema.name = name;
        schema.value = value;
        schema.displayValue = typeServices[type].getDisplayValue(
            name,
            value,
            schemas
        );
        schema.directive = typeServices[type].directive;

        schemas[name] = schema;

        return schemas;
    };

    /**
     * getDisplayValue
     * @param name
     * @param value
     * @returns {string|array|*}
     */
    self.getDisplayValue = function (name, value) {

        var type = self.getType(name, value);

        return typeServices[type].getDisplayValue(
            name,
            value
        );
    };

    /**
     * getDataValue
     * @param name
     * @param value
     * @returns {*|mixed}
     */
    self.getDataValue = function (name, value) {

        var type = self.getType(name, value);

        return typeServices[type].getDataValue(
            name,
            value
        );
    };

    /**
     * filterValidate
     * @param schema
     * @returns {JervDesignJsValueEditorFilterValidateResult|*}
     */
    self.filterValidate = function (schema) {

        var type = self.getType(name, value);

        return typeServices[type].filterValidate(
            name,
            value
        );
    }
};


angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorService',
    [
        'JervDesignJsValueEditorDataSchema',
        function (
            JervDesignJsValueEditorDataSchema
        ) {
            return new JervDesignJsValueEditorService(JervDesignJsValueEditorDataSchema);
        }
    ]
);
