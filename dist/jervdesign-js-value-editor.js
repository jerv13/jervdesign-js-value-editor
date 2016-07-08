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
     * display
     * @type {boolean}
     */
    dataType.display = true;

    /**
     * buildSchemaValues
     * @param name
     * @param value
     * @param schema
     */
    dataType.buildSchemaValues = function (name, value, schema) {
    };

    /**
     * getDisplayValue
     * - returns a string representation of data
     * - null if it should not be display
     *
     * @param name
     * @param value
     * @returns {string|null}
     */
    dataType.getDisplayValue = function (name, value) {
        return JSON.stringify(value);
    };

    /**
     * getDataValue
     * - returns the value in its native format
     *
     * @param name
     * @param displayValue
     * @returns {mixed}
     */
    dataType.getDataValue = function (name, displayValue) {
        return JSON.parse(displayValue);
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
            service.directive = "jerv-design-js-value-editor-field-literal";
            service.display = false;
            service.buildSchemaValues = function (name, value, schemas) {
                for (var i = 0; i < value.length; i++) {
                    JervDesignJsValueEditorService.getDataSchema(
                        name + '.' + i,
                        value[i],
                        schemas
                    );
                }
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

            var service = new JervDesignJsValueEditorFilterDataType();

            service.type = "object";
            service.description = "Handles objects";
            service.directive = "jerv-design-js-value-editor-field-literal";
            service.display = false;
            service.buildSchemaValues = function (name, value, schemas) {
                for (var prop in value) {
                    JervDesignJsValueEditorService.getDataSchema(
                        name + '.' + prop,
                        value[prop],
                        schemas
                    )
                }
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
            service.directive = "jerv-design-js-value-editor-field-string";
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
     *
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

        //console.log(name + ' is type ' + type);

        var schema = new JervDesignJsValueEditorDataSchema();
        schema.type = type;
        schema.name = name;
        schema.value = value;
        schema.original = value;
        schema.displayValue = JSON.stringify(value);
        schema.directive = typeServices[type].directive;
        schema.display = typeServices[type].display;

        typeServices[type].buildSchemaValues(
            name,
            value,
            schemas
        );

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

                if (!rootNamespace) {
                    rootNamespace = "root"
                }

                if (!$scope.valueData) {
                    console.error("value-data attribute missing or empty");
                }

                $scope.schemas = JervDesignJsValueEditorService.getDataSchema(
                    rootNamespace,
                    $scope.valueData
                );
                console.log($scope.valueData);
                console.log($scope.schemas);

                var displayElm = element.find('.scheme-entries');
                displayElm.empty();

                var directiveElm;
                var directiveName;
                var directiveValue;
                for (var ns in $scope.schemas) {
                    if (!$scope.schemas[ns].display || ns === rootNamespace) {
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
                $scope.onSave = function () {
                    JervDesignJsValueEditorService.getDataSchema();
                }
            }

            return {
                link: link,
                scope: {
                    schemadata: '='
                },
                template: '' +
                '<div class="col-sm-6" ng-if="schemadata.display">' +
                ' <strong>' +
                '  <span ng-show="schemadata.title">{{schemadata.title}}</span> ' +
                '  <span ng-hide="schemadata.title">{{schemadata.name}}</span> ' +
                ' </strong>' +
                ' <span>({{schemadata.type}})</span> ' +
                ' <button ng-click="onSave()">save</button> ' +
                '</div>' +
                '<div class="col-sm-6">' +
                ' <div>Value: {{schemadata.displayValue}}</div>' +
                '</div>' +
                '<div class="col-sm-12">' +
                ' <textarea ng-model="schemadata.displayValue"></textarea>' +
                '</div>'
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
