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
    self.type = "literal";

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
            dataType.buildSchemaValues = function (name, value, schemas) {
                for (var i = 0; i < value.length; i++) {
                    JervDesignJsValueEditorService.buildDataSchema(
                        name + '.' + i + '',
                        value[i],
                        schemas
                    );
                }
            };
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
                schemaValue.push(subValue)
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

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "boolean";
            service.description = "Handles booleans";
            service.directive = "jerv-design-js-value-editor-field-boolean";
            return service;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeLiteral',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "literal";
            service.description = "Handles literals as strings";
            service.directive = "jerv-design-js-value-editor-field-literal";
            return service;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNull',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "null";
            service.description = "Handles nulls";
            service.directive = "jerv-design-js-value-editor-field-literal";
            return service;
        }
    ]
);

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorDataTypeNumber',
    [
        'JervDesignJsValueEditorFilterDataType',
        function (JervDesignJsValueEditorFilterDataType) {

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "number";
            service.description = "Handles numbers";
            service.directive = "jerv-design-js-value-editor-field-number";
            return service;
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

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "string";
            service.description = "Handles strings and nulls";
            service.directive = "jerv-design-js-value-editor-field-string";
            return service;
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

                var rootNamespace = attrs.rootNamespace;
                var events = JervDesignJsValueEditorService.getEvents();

                if (!rootNamespace) {
                    rootNamespace = "root"
                }

                if (!$scope.valueData) {
                    console.error("value-data attribute missing or empty");
                }

                var schemaData = JervDesignJsValueEditorService.newDataSchema(
                    rootNamespace,
                    $scope.valueData
                );
                
                var buildSchema = function (schemaData) {

                    $scope.schemas = schemaData.schema;
                    
                    var displayElm = element.find('.scheme-entries');
                    displayElm.empty();

                    var directiveElm;
                    var directiveName;
                    var directiveValue;
                    
                    for (var ns in $scope.schemas) {
                        if (ns === rootNamespace) {
                            continue;
                        }
                        directiveName = $scope.schemas[ns].directive;
                        directiveValue = "schemas['" + ns + "']";
                        //directiveElm = jQuery('<div ' + directiveName + ' schemadata="' + directiveValue + '" rootNamespace="' + rootNamespace + '">' + directiveName + '</div>');
                        directiveElm = jQuery('<div jerv-design-js-value-editor-field="" schemadata="' + directiveValue + '" rootNamespace="' + rootNamespace + '">' + directiveName + '</div>');
                        // directiveElm.attr(directiveName, directiveValue);
                        directiveElm.attr('class', 'row');
                        displayElm.append(directiveElm);
                    }

                    $compile(
                        displayElm
                    )($scope)
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

                $scope.save = function () {
                    try {
                        var value = JSON.parse($scope.schemadata.displayValue);
                    } catch (err) {
                        alert('Invalid JSON');
                        return;
                    }

                    JervDesignJsValueEditorService.updateDataSchema($scope.schemadata.name, value);
                };

                $scope.delete = function () {
                    JervDesignJsValueEditorService.deleteDataSchema($scope.schemadata.name);
                };
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
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
