angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorService',
    [
        'JervDesignJsValueEditorDataSchema',
        'JervDesignJsValueEditorFilterValidateResult',
        function (
            JervDesignJsValueEditorDataSchema,
            JervDesignJsValueEditorFilterValidateResult
        ) {

            var service = function () {

                var self = this;

                var typeServices = {};

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
                self.getDataSchema = function (name, value) {

                    if (!name) {
                        name = "";
                    }
                    var type = self.getType(name, value);

                    var schema = new JervDesignJsValueEditorDataSchema();
                    schema.type = type;
                    schema.name = name;
                    schema.value = value;
                    schema.displayValue = typeServices[type].getDisplayValue(
                        name,
                        value
                    );

                    return schema;
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

            return new service;
        }
    ]
);
