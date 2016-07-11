var JervDesignJsValueEditorService = function (
    JervDesignJsValueEditorEvents,
    JervDesignJsValueEditorDataSchema
) {

    var self = this;

    var typeServices = {};

    self.libPath = '/bower_components/jervdesign-js-value-editor/dist/';
    self.schemas = {};

    /**
     * getEvents
     * @returns {JervDesignJsValueEditorEvents}
     */
    self.getEvents = function () {
        return JervDesignJsValueEditorEvents;
    };

    /**
     * setTypeService
     * @param dataType {JervDesignJsValueEditorFilterDataType}
     */
    self.setTypeService = function (dataType) {
        if (typeServices[dataType.type]) {
            console.warn("Duplicate type set for " + dataType.type);
        }
        typeServices[dataType.type] = dataType;
    };

    /**
     * getTypeService
     * @param type
     * @returns {JervDesignJsValueEditorFilterDataType}
     */
    self.getTypeService = function (type) {
        if (!typeServices[type]) {
            throw "Type not found:" + type;
        }
        return typeServices[type]
    };

    /**
     * getType
     * @param name
     * @param value
     * @returns {string}
     */
    self.getType = function (name, value) {
        var type = self.typeOf(value);

        // @todo check schema for type

        if (!typeServices[type]) {
            console.warn('Type ' + type + ' service not available, using literal');
            type = 'literal';
        }

        return type;
    };

    /**
     * typeOf
     * @param value
     * @returns {string}
     */
    self.typeOf = function (value) {
        if (value === null) {
            return 'null';
        }

        if (value === undefined) {
            return 'null';
        }

        if (Array.isArray(value)) {
            return 'array';
        }

        return typeof value;
    };

    self.getParentSchemaData = function (ns) {
        var schemaName = self.getSchemaName(ns);
        var dataParentNs = self.getParentNs(ns);
        console.log(self.schemas[schemaName]);
        return self.schemas[schemaName][dataParentNs];
    };

    self.getKey = function (ns) {
        var nsParts = ns.split('.');
        var last = nsParts.length - 1;
        return nsParts[last];
    };

    self.getSchemaName = function (ns) {
        var nsParts = ns.split('.');
        return nsParts[0];
    };

    self.getParentNs = function (ns) {
        var nsParts = ns.split('.');
        var last = nsParts.length - 1;
        nsParts.splice(last, 1);
        return nsParts.join('.');
    };

    self.getDataNs = function (ns) {
        var nsParts = ns.split('.');
        nsParts.splice(0, 1);
        return nsParts.join('.');
    };

    /**
     *
     * @param ns
     * @returns {*}
     */
    self.getDataSchema = function (ns) {
        return self.schemas[self.getSchemaName(ns)];
    };

    /**
     * createDataSchema
     * @param ns
     * @param value
     */
    self.createDataSchema = function (ns, value) {
        var schemaName = self.getSchemaName(ns);
        var dataParentNs = self.getParentNs(ns);
        var key = self.getKey(ns);
        var parentType = self.schemas[schemaName].schema[ns].parentType;
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemaName + '.data.' + dataParentNs);

        typeServices[parentType].createValue(key, value, parentSchemaValue);

        self.refreshDataSchema(schemaName);
    };

    /**
     * updateDataSchema
     * @param ns
     * @param value
     */
    self.updateDataSchema = function (ns, value) {
        var schemaName = self.getSchemaName(ns);
        var dataParentNs = self.getParentNs(ns);
        var key = self.getKey(ns);
        var parentType = self.schemas[schemaName].schema[ns].parentType;
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemaName + '.data.' + dataParentNs);

        typeServices[parentType].updateValue(key, value, parentSchemaValue);

        self.refreshDataSchema(schemaName);
    };

    /**
     * deleteDataSchema
     * @param ns
     */
    self.deleteDataSchema = function (ns) {
        var schemaName = self.getSchemaName(ns);
        var dataParentNs = self.getParentNs(ns);
        var key = self.getKey(ns);
        var parentType = self.schemas[schemaName].schema[ns].parentType;
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemaName + '.data.' + dataParentNs);

        typeServices[parentType].deleteValue(key, parentSchemaValue);

        self.refreshDataSchema(schemaName);
    };

    /**
     * refreshDataSchema
     * @param schemaName
     */
    self.refreshDataSchema = function (schemaName) {
        self.schemas[schemaName].schema = {};
        self.buildDataSchema(
            schemaName,
            self.schemas[schemaName].data,
            self.schemas[schemaName].schema
        );

        JervDesignJsValueEditorEvents.trigger('updateSchema', self.schemas[schemaName]);
    };

    /**
     * newDataSchema
     * @param schemaName
     * @param data
     */
    self.newDataSchema = function (schemaName, data) {
        self.schemas[schemaName] = {};
        self.schemas[schemaName].data = data;
        self.schemas[schemaName].schema = self.buildDataSchema(schemaName, data, {});
        return self.schemas[schemaName];
    };

    /**
     * buildDataSchema
     * @param name
     * @param value
     * @param schemas
     * @returns {JervDesignJsValueEditorDataSchema}
     */
    self.buildDataSchema = function (name, value, schemas) {

        if (!schemas) {
            schemas = {};
        }

        if (!name) {
            name = "";
        }
        var type = self.getType(name, value);

        var parentSchemaData = self.getParentSchemaData(name);

        console.log(parentSchemaData);

        var schema = new JervDesignJsValueEditorDataSchema();

        schema.type = type;
        schema.parentType = parentSchemaData.schema.type;
        schema.name = name;
        schema.value = value;
        schema.original = value;
        schema.displayValue = JSON.stringify(value);
        schema.directive = typeServices[type].directive;
        schemas[name] = schema;

        typeServices[type].buildSchemaValues(
            name,
            value,
            schemas
        );

        return schemas;
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
        'JervDesignJsValueEditorEvents',
        'JervDesignJsValueEditorDataSchema',
        function (
            JervDesignJsValueEditorEvents,
            JervDesignJsValueEditorDataSchema
        ) {
            return new JervDesignJsValueEditorService(
                JervDesignJsValueEditorEvents,
                JervDesignJsValueEditorDataSchema
            );
        }
    ]
);
