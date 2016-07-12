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
