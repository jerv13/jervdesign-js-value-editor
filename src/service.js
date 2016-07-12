var JervDesignJsValueEditorService = function (
    JervDesignJsValueEditorEvents,
    JervDesignJsValueEditorDataSchema
) {

    var self = this;

    var typeServices = {};

    self.libPath = '/bower_components/jervdesign-js-value-editor/dist/';
    self.schemas = {};
    self.loadingSchema = {};

    /**
     * getEvents
     * @returns {JervDesignJsValueEditorEvents}
     */
    self.getEvents = function () {
        return JervDesignJsValueEditorEvents;
    };

    /**
     * setLoading
     * @param schemaName
     * @param loading
     */
    self.setLoading = function (schemaName, loading) {
        self.loadingSchema[schemaName] = loading;
        JervDesignJsValueEditorEvents.trigger('loadingSchema', {schemaName: schemaName, Loading: loading});
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

        if (!typeServices[type]) {
            console.warn('Type ' + type + ' service not available');
            return 'string'
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

    /**
     * getKey
     * @param ns
     * @returns {*}
     */
    self.getKey = function (ns) {
        var nsParts = ns.split('.');
        var last = nsParts.length - 1;
        return nsParts[last];
    };

    /**
     * getSchemaName
     * @param ns
     * @returns {*}
     */
    self.getSchemaName = function (ns) {
        var nsParts = ns.split('.');
        return nsParts[0];
    };

    /**
     * createValue
     * @param parentNs
     * @param key
     * @param value
     */
    self.createValue = function (parentNs, key, value) {
        var schemasName = self.getSchemaName(parentNs);
        var parentSchema = self.getSchema(parentNs);
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemasName + '.data' + parentSchema.accessor);

        typeServices[parentSchema.type].createValue(key, value, parentSchemaValue);

        if(typeServices[parentSchema.type].rebuildOnChange) {
            self.refreshDataSchema(schemasName);
        }
    };

    /**
     * updateValue
     * @param ns
     * @param value
     */
    self.updateValue = function (ns, value) {
        var schemasName = self.getSchemaName(ns);
        var schema = self.getSchema(ns);
        var parentSchema = self.getSchema(schema.getParentName());
        var key = self.getKey(ns);
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemasName + '.data' + parentSchema.accessor);

        typeServices[parentSchema.type].updateValue(key, value, parentSchemaValue);

        if(typeServices[parentSchema.type].rebuildOnChange) {
            self.refreshDataSchema(schemasName);
        }
    };

    /**
     * deleteValue
     * @param ns
     */
    self.deleteValue = function (ns) {
        var schemasName = self.getSchemaName(ns);
        var schema = self.getSchema(ns);
        var parentSchema = self.getSchema(schema.getParentName());
        var key = self.getKey(ns);
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemasName + '.data' + parentSchema.accessor);

        typeServices[parentSchema.type].deleteValue(key, parentSchemaValue);

        delete self.schemas[schemasName].schema[ns];
        if(typeServices[parentSchema.type].rebuildOnChange) {
            self.refreshDataSchema(schemasName);
        }
    };

    /**
     *
     * @param ns
     * @returns {*}
     */
    self.getDataSchema = function (ns) {
        return self.schemas[self.getSchemaName(ns)];
    };

    self.getSchema = function (ns) {
        var dataSchema = self.getDataSchema(ns);
        return dataSchema.schema[ns];
    };

    /**
     * refreshDataSchema
     * @param schemaName
     */
    self.refreshDataSchema = function (schemaName) {
        self.setLoading(schemaName, true);
        self.schemas[schemaName].schema = {};
        self.buildDataSchema(
            schemaName,
            self.schemas[schemaName].data,
            '',
            self.schemas[schemaName].schema
        );

        JervDesignJsValueEditorEvents.trigger('updateSchema', self.schemas[schemaName]);
        self.setLoading(schemaName, false);
    };

    /**
     * newDataSchema
     * @param schemaName
     * @param data
     */
    self.newDataSchema = function (schemaName, data) {
        self.setLoading(schemaName, true);
        self.schemas[schemaName] = {};
        self.schemas[schemaName].data = data;
        self.schemas[schemaName].schema = self.buildDataSchema(schemaName, data, '', {});

        JervDesignJsValueEditorEvents.trigger('newSchema', self.schemas[schemaName]);
        self.setLoading(schemaName, false);

        return self.schemas[schemaName];
    };

    /**
     * buildDataSchema
     * @param {string} name (nameSpace)
     * @param {string} accessor (javascript property accessor)
     * @param {*} value
     * @param {*} schemas
     * @returns {JervDesignJsValueEditorDataSchema}
     */
    self.buildDataSchema = function (name, value, accessor, schemas) {

        if (!schemas) {
            schemas = {};
        }

        if (!accessor) {
            accessor = '';
        }

        if (!name) {
            name = '';
        }
        var type = self.getType(name, value);

        var schema = new JervDesignJsValueEditorDataSchema();

        schema.type = type;
        schema.originalType = type;
        schema.name = name;
        schema.accessor = accessor;
        schema.value = value;
        schema.originalValue = value;
        schema.displayValue = JSON.stringify(value);
        schema.originalDisplayValue = JSON.stringify(value);
        schema.dataType = typeServices[type];
        schemas[name] = schema;

        typeServices[type].buildSchemaValues(
            name,
            value,
            accessor,
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
