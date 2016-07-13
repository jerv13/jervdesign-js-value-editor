angular.module('JervDesignJsValueEditor', []);

var JervDesignJsValueEditorConfig = {
    "schemaConfig": {
        "field.name": {
            "type": "literal",
            "title": "Field",
            "required": true,
            "filterValidate": null
        }
    },
    "types": {
        "literal": "JervDesignJsValueEditorDataTypeLiteral",
        "string": "JervDesignJsValueEditorDataTypeString",
        "null": "JervDesignJsValueEditorDataTypeNull",
        "number": "JervDesignJsValueEditorDataTypeNumber",
        "object": "JervDesignJsValueEditorDataTypeObject",
        "array": "JervDesignJsValueEditorDataTypeArray",
        "boolean": "JervDesignJsValueEditorDataTypeBoolean"
    },
    "type-changer": {
        "description": "Handles changing types",
        "directive": "jervdesign-js-value-editor-type-changer"
    },
    "distPath": "/vendor/jervdesign-js-value-editor/dist/"
};
/**
 *
 */
angular.module('JervDesignJsValueEditor').run(
    [
        'JervDesignJsValueEditorService',
        'JervDesignJsValueEditorDataTypeString',
        'JervDesignJsValueEditorDataTypeNull',
        'JervDesignJsValueEditorDataTypeNumber',
        'JervDesignJsValueEditorDataTypeObject',
        'JervDesignJsValueEditorDataTypeArray',
        'JervDesignJsValueEditorDataTypeBoolean',
        function (
            JervDesignJsValueEditorService,
            JervDesignJsValueEditorDataTypeString,
            JervDesignJsValueEditorDataTypeNull,
            JervDesignJsValueEditorDataTypeNumber,
            JervDesignJsValueEditorDataTypeObject,
            JervDesignJsValueEditorDataTypeArray,
            JervDesignJsValueEditorDataTypeBoolean
        ) {
            JervDesignJsValueEditorService.setTypeService(
                JervDesignJsValueEditorDataTypeString
            );
            JervDesignJsValueEditorService.setTypeService(
                JervDesignJsValueEditorDataTypeNull
            );
            JervDesignJsValueEditorService.setTypeService(
                JervDesignJsValueEditorDataTypeNumber
            );
            JervDesignJsValueEditorService.setTypeService(
                JervDesignJsValueEditorDataTypeObject
            );
            JervDesignJsValueEditorService.setTypeService(
                JervDesignJsValueEditorDataTypeArray
            );
            JervDesignJsValueEditorService.setTypeService(
                JervDesignJsValueEditorDataTypeBoolean
            );
        }
    ]
);

var JervDesignJsValueEditorEvents = function () {

    var self = this;

    var listeners = {};

    var promises = {};

    self.on = function (event, listenerId, method) {

        if (!listeners[event]) {
            listeners[event] = {};
        }

        listeners[event][listenerId] = method;

        honorPromise(event, method);
    };

    self.trigger = function (event, args) {

        if (listeners[event]) {

            var listenerList = listeners[event];

            for (var key in listenerList) {
                if (!listenerList.hasOwnProperty(key)) continue;

                var value = listenerList[key];

                if (typeof value === 'function') {
                    value(args);
                }
            }
        }

        makePromise(event, args);
    };

    var makePromise = function (event, args) {
        promises[event] = args;
    };

    var honorPromise = function (event, method) {
        if (typeof promises[event] !== 'undefined') {
            method(promises[event]);
        }
    };
};

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorEvents',
    function () {
        return new JervDesignJsValueEditorEvents();
    }
);

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
     * parentName
     * @type {string}
     */
    self.parentName = "";

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
     * getParentName
     * @returns {string}
     */
    self.getParentName = function () {
        if (!self.parentName) {
            return self.name;
        }
        return self.parentName;
    };

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
     * @param accessor
     * @param schemas
     */
    dataType.buildSchemaValues = function (name, value, accessor, schemas) {

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

var JervDesignJsValueEditorFilterValidateResult = function () {
    /**
     * self
     * @type {JervDesignJsValueEditorFilterValidateResult}
     */
    var self = this;
    /**
     * message
     * @type {string}
     */
    self.message = "OK";
    /**
     * isValid
     * @type {boolean}
     */
    self.isValid = true;
};

angular.module('JervDesignJsValueEditor').factory(
    'JervDesignJsValueEditorFilterValidateResult',
    function () {
        return JervDesignJsValueEditorFilterValidateResult;
    }
);

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

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeBoolean',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "boolean";
            dataType.description = "Handles booleans";
            return dataType;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNull',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "null";
            dataType.description = "Handles nulls";
            return dataType;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNumber',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "number";
            dataType.description = "Handles numbers";
            return dataType;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeObject',
    [
        'JervDesignJsValueEditorFilterDataType',
        'JervDesignJsValueEditorService',
        function (
            JervDesignJsValueEditorFilterDataType,
            JervDesignJsValueEditorService
        ) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "object";
            dataType.description = "Handles objects";
            dataType.canCreateValue = true;
            dataType.canUpdateValue = true;
            dataType.canDeleteValue = true;
            dataType.rebuildOnChange = true;
            dataType.buildSchemaValues = function (name, value, accessor, schemas) {
                var childName;
                var childAccessor;
                for (var prop in value) {
                    childName = name + '.' + prop;
                    childAccessor = accessor + '["' + prop + '"]';
                    JervDesignJsValueEditorService.buildDataSchema(
                        childName,
                        value[prop],
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
                schemaValue[key] = subValue;
            };

            /**
             * updateValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.updateValue = function (key, subValue, schemaValue) {
                schemaValue[key] = subValue;
            };

            /**
             * deleteValue
             * @param key
             */
            dataType.deleteValue = function (key, schemaValue) {
                delete schemaValue[key]
            };

            return dataType;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeString',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "string";
            dataType.description = "Handles strings and nulls";
            return dataType;
        }
    ]
);

var JervDesignJsValueEditorService = function (
    JervDesignJsValueEditorEvents,
    JervDesignJsValueEditorDataSchema
) {

    var self = this;

    var typeServices = {};

    self.libPath = '/bower_components/jervdesign-js-value-editor/dist/';
    self.schemas = {};
    self.loading = [];

    /**
     * getEvents
     * @returns {JervDesignJsValueEditorEvents}
     */
    self.getEvents = function () {
        return JervDesignJsValueEditorEvents;
    };

    /**
     * setLoading
     * @param name
     * @param loading
     */
    self.setLoading = function (name, loading) {
        
        var index = self.loading.indexOf(name);
        var isNameLoading = (index > -1);
        
        if(loading && !isNameLoading) {
            self.loading.push(name);
        }

        if(!loading && isNameLoading) {
            self.loading.splice(index, 1);
        }

        var anyLoading = (self.loading.length > 0);

        JervDesignJsValueEditorEvents.trigger('loading', anyLoading);
        
        return anyLoading;
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
     * save
     * @param schemasName
     */
    self.save = function (schemasName) {

        var data = self.schemas[schemasName].data;

        JervDesignJsValueEditorEvents.trigger('save:'+schemasName, data);
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
        self.schemas[schemaName].schema = {};
        self.buildDataSchema(
            schemaName,
            self.schemas[schemaName].data,
            '',
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
        self.schemas[schemaName].schema = self.buildDataSchema(schemaName, data, '', {});

        JervDesignJsValueEditorEvents.trigger('newSchema', self.schemas[schemaName]);
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

        self.setLoading(name, true);

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
        self.setLoading(name, false);
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

angular.module('JervDesignJsValueEditor').filter(
    'JervDesignJsValueEditorLimitLength',
    function () {
        return function (input, length) {
            input = "" + input;
            var result = input.substring(0, length);

            if(result.length !== input.length) {
                result = result + ' ...';
            }

            return result;
        };
    }
);

angular.module('JervDesignJsValueEditor').filter(
    'JervDesignJsValueEditorNsFormatFilter',
    function () {
        return function (ns) {
            ns = "" + ns;

            var nsParts = ns.split('.');
            var count = nsParts.length;
            var last = count - 1;
            var spaceCnt = count;

            var spaces = Array(spaceCnt).join(" -");
            
            return spaces + ' ' + nsParts[last];
        };
    }
);

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorStandardDisplay',
    [
        '$window',
        '$compile',
        'JervDesignJsValueEditorService',
        function (
            $window,
            $compile,
            JervDesignJsValueEditorService
        ) {
            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                var events = JervDesignJsValueEditorService.getEvents();
                $scope.loading = JervDesignJsValueEditorService.loading;
                $scope.showedit = {};
                $scope.searchValue = '';

                var loading = function (loading) {
                    $scope.loading = loading;
                };

                if (!$scope.rootNamespace) {
                    $scope.rootNamespace = "root"
                }

                if (!$scope.valueData) {
                    console.error("value-data attribute missing or empty");
                }

                var schemaData = JervDesignJsValueEditorService.newDataSchema(
                    $scope.rootNamespace,
                    $scope.valueData
                );

                var buildSchema = function (schemaData) {
                    $scope.schemas = schemaData.schema;
                };

                $scope.save = function () {
                    JervDesignJsValueEditorService.save($scope.rootNamespace);
                };

                $scope.search = function () {
                    if (!$scope.searchValue) {
                        for (var ns in $scope.schemas) {
                            $scope.schemas[ns].searchHide = false;
                        }
                        return;
                    }
                    var regex = new RegExp($scope.searchValue, 'i');

                    for (var ns in $scope.schemas) {
                        $scope.schemas[ns].searchHide = !regex.test(ns);
                    }
                };

                buildSchema(schemaData);

                events.on('loading', 'JervDesignJsValueEditor', loading);
                events.on('updateSchema', 'JervDesignJsValueEditor', buildSchema);
            }

            return {
                link: link,
                scope: {
                    valueData: '=',
                    rootNamespace: '='
                },
                templateUrl: JervDesignJsValueEditorService.libPath + 'standard-display.html'
            }
        }
    ]
);

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorField',
    [
        'JervDesignJsValueEditorService',
        function (JervDesignJsValueEditorService) {
            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                $scope.typeChanged = false;

                if (!$scope.rootNamespace) {
                    throw console.error("root-namespace attribute missing or empty");
                }

                $scope.isRoot = ($scope.rootNamespace === $scope.schemadata.name);

                $scope.createData = {
                    key: '',
                    displayValue: ''
                };

                $scope.onRawChange = function () {
                    $scope.typeChanged = ($scope.schemadata.originalDisplayValue !== $scope.schemadata.displayValue);
                };

                var onUpdate = function () {
                    $scope.showedit = false;
                };

                $scope.cancel = function () {
                    $scope.schemadata.displayValue = $scope.schemadata.originalDisplayValue;
                    $scope.schemadata.value = $scope.schemadata.originalValue;
                    $scope.schemadata.type = $scope.schemadata.originalType;
                    onUpdate();
                };

                $scope.create = function () {
                    try {
                        var value = JSON.parse($scope.createData.displayValue);
                    } catch (err) {
                        alert('Invalid JSON');
                        return;
                    }

                    JervDesignJsValueEditorService.createValue(
                        $scope.schemadata.name,
                        $scope.createData.key,
                        value
                    );
                    onUpdate();
                };

                $scope.save = function () {
                    try {
                        var value = JSON.parse($scope.schemadata.displayValue);
                    } catch (err) {
                        alert('Invalid JSON');
                        return;
                    }

                    JervDesignJsValueEditorService.updateValue(
                        $scope.schemadata.name,
                        value
                    );
                    onUpdate();
                };

                $scope.delete = function () {
                    JervDesignJsValueEditorService.deleteValue(
                        $scope.schemadata.name
                    );
                    onUpdate();
                };
            }

            return {
                link: link,
                scope: {
                    rootNamespace: '=',
                    schemadata: '=',
                    showedit: "="
                },
                templateUrl: JervDesignJsValueEditorService.libPath + 'field.html'

            }
        }
    ]
);
