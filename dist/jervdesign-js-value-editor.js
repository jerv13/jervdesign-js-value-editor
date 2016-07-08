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

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "array";
            service.description = "Handles array";
            service.directive = "jervdesign-js-value-editor-array";
            service.getDisplayValue = function (name, value, schemas) {
                for (var i = 0; i < value.length; i++) {
                    JervDesignJsValueEditorService.getDataSchema(
                        name + '.' + i,
                        value[i],
                        schemas
                    );
                }
                return null;
            };
            service.getDataValue = function (name, value) {
                var parsed = [];
                for (var i = 0; i < value.length; i++) {
                    parsed.push(JervDesignJsValueEditorService.getDataValue(value[i]));
                }
                return parsed;
            };
            return service;
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
            service.directive = "jervdesign-js-value-editor-boolean";
            service.getDisplayValue = function (name, value) {
                return (value);
            };
            service.getDataValue = function (name, value) {
                return (value);
            };
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
            service.directive = "jervdesign-js-value-editor-literal";
            service.getDisplayValue = function (name, value) {
                return JSON.stringify(value);
            };
            service.getDataValue = function (name, value) {
                return JSON.parse(value);
            };
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
            service.directive = "jervdesign-js-value-editor-string";
            service.getDisplayValue = function (name, value) {
                return null;
            };
            service.getDataValue = function (name, value) {
                return null;
            };
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
            service.directive = "jervdesign-js-value-editor-number";
            service.getDisplayValue = function (name, value) {
                return Number(value);
            };
            service.getDataValue = function (name, value) {
                return "" + value + "";
            };
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

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "object";
            service.description = "Handles objects";
            service.directive = "jervdesign-js-value-editor-object";
            service.getDisplayValue = function (name, value, schemas) {
                for (var prop in value) {
                        JervDesignJsValueEditorService.getDataSchema(
                            name + '.' + prop,
                            value[prop],
                            schemas
                        )
                }
                return null;
            };
            service.getDataValue = function (name, value) {
                //var parsed = {};
                //for (var prop in value) {
                //    parsed[prop] = JervDesignJsValueEditorService.getDataValue(
                //        value[prop]
                //    );
                //}
                //return parsed;
            };
            return service;
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
            service.directive = "jervdesign-js-value-editor-string";
            service.getDisplayValue = function (name, value) {
                return "" + value + "";
            };
            service.getDataValue = function (name, value) {
                return "" + value + "";
            };
            return service;
        }
    ]
);

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

angular.module('JervDesignJsValueEditor').directive(
    'jervDesignJsValueEditorStandardDisplay',
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

                if (!$scope.valueData) {
                    console.error("value-data attribute missing or empty");
                }

                $scope.schemas = JervDesignJsValueEditorService.getDataSchema(
                    "schemas",
                    $scope.valueData
                );

                console.log($scope.schemas);

                var displayElm = element.find('.scheme-entries');
                displayElm.empty();

                var directiveElm;
                var directiveName;
                var directiveValue;
                for (var ns in $scope.schemas) {
                    directiveName = $scope.schemas[ns].directive;
                    directiveValue = JSON.stringify($scope.schemas[ns].directive);
                    directiveElm = jQuery('<div>'+directiveName+'</div>');
                    directiveElm.attr(directiveName, directiveValue);
                    displayElm.append(directiveElm);
                }
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
