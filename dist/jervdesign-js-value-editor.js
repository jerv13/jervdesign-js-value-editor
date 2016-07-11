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
        'JervDesignJsValueEditorDataTypeLiteral',
        'JervDesignJsValueEditorDataTypeString',
        'JervDesignJsValueEditorDataTypeNull',
        'JervDesignJsValueEditorDataTypeNumber',
        'JervDesignJsValueEditorDataTypeObject',
        'JervDesignJsValueEditorDataTypeArray',
        'JervDesignJsValueEditorDataTypeBoolean',
        function (
            JervDesignJsValueEditorService,
            JervDesignJsValueEditorDataTypeLiteral,
            JervDesignJsValueEditorDataTypeString,
            JervDesignJsValueEditorDataTypeNull,
            JervDesignJsValueEditorDataTypeNumber,
            JervDesignJsValueEditorDataTypeObject,
            JervDesignJsValueEditorDataTypeArray,
            JervDesignJsValueEditorDataTypeBoolean
        ) {
            JervDesignJsValueEditorService.setTypeService(
                JervDesignJsValueEditorDataTypeLiteral
            );
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

    self.on = function (event, listenerId, method) {

        if (!listeners[event]) {
            listeners[event] = {};
        }

        listeners[event][listenerId] = method;

        return listenerId;
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
            dataType.directive = "jerv-design-js-value-editor-field-literal";
            dataType.canCreateValue = true;
            dataType.canUpdateValue = true;
            dataType.canDeleteValue = true;
            dataType.rebuildOnChange = true;
            dataType.buildSchemaValues = function (name, value, schemas) {
                for (var i = 0; i < value.length; i++) {
                    JervDesignJsValueEditorService.buildDataSchema(
                        name + '.' + i,
                        value[i],
                        schemas
                    );
                }
            };

            /**
             * createValue
             * @param key
             * @param subValue
             * @param schemaValue
             */
            dataType.createValue = function (key, subValue, schemaValue) {
                key = Number(key);
                schemaValue[key] = subValue;
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
            dataType.directive = "jerv-design-js-value-editor-field-boolean";
            return dataType;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeLiteral',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var dataType = new JervDesignJsValueEditorFilterDataType();

            dataType.type = "literal";
            dataType.description = "Handles literals as strings";
            dataType.directive = "jerv-design-js-value-editor-field-literal";
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
            dataType.directive = "jerv-design-js-value-editor-field-literal";
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
            dataType.directive = "jerv-design-js-value-editor-field-number";
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
            dataType.directive = "jerv-design-js-value-editor-field-literal";
            dataType.canCreateValue = true;
            dataType.canUpdateValue = true;
            dataType.canDeleteValue = true;
            dataType.rebuildOnChange = true;
            dataType.buildSchemaValues = function (name, value, schemas) {
                for (var prop in value) {
                    JervDesignJsValueEditorService.buildDataSchema(
                        name + '.' + prop,
                        value[prop],
                        schemas
                    )
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
            dataType.directive = "jerv-design-js-value-editor-field-string";
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
    self.loadingSchema = {};

    /**
     * getEvents
     * @returns {JervDesignJsValueEditorEvents}
     */
    self.getEvents = function () {
        return JervDesignJsValueEditorEvents;
    };
    
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
        return self.schemas[schemaName].schema[dataParentNs];
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

    self.getDataParentNs = function (ns) {
        var nsParts = ns.split('.');
        var last = nsParts.length - 1;
        nsParts.splice(last, 1);
        nsParts.splice(0, 1);
        if(nsParts.length < 1) {
            return '';
        }
        return nsParts.join('.');
    };

    self.getDataNs = function (ns) {
        var nsParts = ns.split('.');
        nsParts.splice(0, 1);
        return nsParts.join('.');
    };

    /**
     * createValue
     * @param ns
     * @param key
     * @param value
     */
    self.createValue = function (ns, key, value) {
        var schemaName = self.getSchemaName(ns);
        var dataParentNs = self.getDataParentNs(ns);
        if(dataParentNs) {
            dataParentNs = '.' + dataParentNs
        }
        var parentSchema = self.getParentSchemaData(ns);
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemaName + '.data' + dataParentNs);

        typeServices[parentSchema.type].createValue(key, value, parentSchemaValue);

        if(typeServices[parentSchema.type].rebuildOnChange) {
            self.refreshDataSchema(schemaName);
        }
    };

    /**
     * updateValue
     * @param ns
     * @param value
     */
    self.updateValue = function (ns, value) {
        var schemaName = self.getSchemaName(ns);
        var key = self.getKey(ns);
        var dataParentNs = self.getDataParentNs(ns);
        if(dataParentNs) {
            dataParentNs = '.' + dataParentNs
        }
        var dataNs = self.getDataNs(ns);
        if(dataNs) {
            dataNs = '.' + dataNs
        }
        var parentSchema = self.getParentSchemaData(ns);
        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemaName + '.data' + dataParentNs);

        typeServices[parentSchema.type].updateValue(key, value, parentSchemaValue);

        if(typeServices[parentSchema.type].rebuildOnChange) {
            self.refreshDataSchema(schemaName);
        }
    };

    /**
     * deleteValue
     * @param ns
     */
    self.deleteValue = function (ns) {
        var schemaName = self.getSchemaName(ns);
        var key = self.getKey(ns);
        var dataParentNs = self.getDataParentNs(ns);
        if(dataParentNs) {
            dataParentNs = '.' + dataParentNs
        }
        var parentSchema = self.getParentSchemaData(ns);

        var parentSchemaValue = null;
        eval('parentSchemaValue = self.schemas.' + schemaName + '.data' + dataParentNs);

        typeServices[parentSchema.type].deleteValue(key, parentSchemaValue);

        delete self.schemas[schemaName].schema[ns];
        if(typeServices[parentSchema.type].rebuildOnChange) {
            self.refreshDataSchema(schemaName);
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
        self.schemas[schemaName].schema = self.buildDataSchema(schemaName, data, {});

        JervDesignJsValueEditorEvents.trigger('newSchema', self.schemas[schemaName]);
        self.setLoading(schemaName, false);

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

        var schema = new JervDesignJsValueEditorDataSchema();

        schema.type = type;
        schema.originalType = type;
        schema.name = name;
        schema.value = value;
        schema.originalValue = value;
        schema.displayValue = JSON.stringify(value);
        schema.originalDisplayValue = JSON.stringify(value);
        schema.dataType = typeServices[type];
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
            var spaceCnt = count - 1;

            var spaces = Array(spaceCnt).join("- - ");


            return spaces + ' ' + nsParts[last];
        };
    }
);

angular.module('JervDesignJsValueEditor').filter(
    'JervDesignJsValueEditorSchemaSearchFilter',
    function () {
        return function (input, length) {
            if (!query) {
                return input
            }
            var result = {};
            var regex = new RegExp(query, 'i');
            angular.forEach(
                input,
                function (site) {
                    if (site.domain && regex.test(site.domainName)) {
                        result[site.siteId] = site;
                    }
                }
            );
            return result;
        };
    }
);

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorStandardDisplay',
    [
        '$compile',
        'JervDesignJsValueEditorService',
        function (
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
                $scope.rootNamespace = attrs.rootNamespace;
                $scope.loadingSchema = JervDesignJsValueEditorService.loadingSchema;
                $scope.showedit = {};

                var loadingSchema = function (loadingData) {
                    if(loadingData.schemaName = $scope.rootNamespace) {
                        $scope.loadingSchema = loadingData.loading;
                    }
                };

                events.on('loadingSchema', 'JervDesignJsValueEditor', loadingSchema);

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

                    // var displayElm = element.find('.scheme-entries');
                    // displayElm.empty();
                    //
                    // var directiveElm;
                    // var directiveName;
                    // var directiveValue;

                    // for (var ns in $scope.schemas) {
                    //     if (ns === rootNamespace) {
                    //         continue;
                    //     }
                    //     directiveName = $scope.schemas[ns].directive;
                    //     directiveValue = "schemas['" + ns + "']";
                    //     directiveElm = jQuery('<div jerv-design-js-value-editor-field="" schemadata="' + directiveValue + '" rootNamespace="' + rootNamespace + '">' + directiveName + '</div>');
                    //     directiveElm.attr('class', 'row');
                    //     displayElm.append(directiveElm);
                    // }
                    //
                    // $compile(
                    //     displayElm
                    // )($scope)
                };

                buildSchema(schemaData);

                events.on('updateSchema', 'JervDesignJsValueEditor', buildSchema);
            }

            return {
                link: link,
                scope: {
                    valueData: '='
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

                    if (!$scope.createData.key) {
                        alert('Key is required');
                        return;
                    }

                    JervDesignJsValueEditorService.createValue(
                        $scope.schemadata.name + '.' + $scope.createData.key,
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
                    schemadata: '=',
                    showedit: "="
                },
                templateUrl: JervDesignJsValueEditorService.libPath + 'field.html'

            }
        }
    ]
);

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorFieldBoolean',
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
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                template: '' +
                '<div class="col-sm-6">' +
                ' <strong>' +
                '  <span ng-show="schemadata.title">{{schemadata.title}}</span> ' +
                '  <span ng-hide="schemadata.title">{{schemadata.name}}</span> ' +
                ' </strong>' +
                ' <span>({{schemadata.type}})</span> ' +
                '</div>' +
                '<div class="col-sm-6">' +
                ' <div>Value: {{schemadata.value | json}}</div>' +
                '</div>' +
                '<div class="col-sm-12">' +
                ' <input type="checkbox" name="schemadata.name" ng-model="schemadata.value" ng-value="true">' +
                '</div>'
            }
        }
    ]
);

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorFieldLiteral',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {
            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                $scope.onChange = function () {
                    
                }
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                template: '' +
                '<div class="col-sm-6">' +
                ' <strong>' +
                '  <span ng-show="schemadata.title">{{schemadata.title}}</span> ' +
                '  <span ng-hide="schemadata.title">{{schemadata.name}}</span> ' +
                ' </strong>' +
                ' <span>({{schemadata.type}})</span> ' +
                '</div>' +
                '<div class="col-sm-6">' +
                ' <div>Value: {{schemadata.value | json}}</div>' +
                '</div>' +
                '<div class="col-sm-12">' +
                ' <input ng-change="onChange()" ng-model="schemadata.value" type="text"/>' +
                '</div>'
            }
        }
    ]
);

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorFieldNumber',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {
            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                $scope.onChange = function () {
                    $scope.schemadata.value = Number($scope.schemadata.value);
                }
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                template: '' +
                '<div class="col-sm-6">' +
                ' <strong>' +
                '  <span ng-show="schemadata.title">{{schemadata.title}}</span> ' +
                '  <span ng-hide="schemadata.title">{{schemadata.name}}</span> ' +
                ' </strong>' +
                ' <span>({{schemadata.type}})</span> ' +
                '</div>' +
                '<div class="col-sm-6">' +
                ' <div>Value: {{schemadata.value | json}}</div>' +
                '</div>' +
                '<div class="col-sm-12">' +
                ' <input ng-change="onChange()" ng-model="schemadata.value" type="text"/>' +
                '</div>'
            }
        }
    ]
);

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorFieldString',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {
            /**
             * link
             * @param $scope
             * @param element
             * @param attrs
             */
            function link($scope, element, attrs) {
                $scope.onChange = function () {
                    $scope.schemadata.value = "" + $scope.schemadata.value;
                }
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                template: '' +
                '<div class="col-sm-6">' +
                ' <strong>' +
                '  <span ng-show="schemadata.title">{{schemadata.title}}</span> ' +
                '  <span ng-hide="schemadata.title">{{schemadata.name}}</span> ' +
                ' </strong>' +
                ' <span>({{schemadata.type}})</span> ' +
                '</div>' +
                '<div class="col-sm-6">' +
                ' <div>Value: {{schemadata.value | json}}</div>' +
                '</div>' +
                '<div class="col-sm-12">' +
                ' <input ng-change="onChange()" ng-model="schemadata.value" type="text"/>' +
                '</div>'
            }
        }
    ]
);
