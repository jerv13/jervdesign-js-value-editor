angular.module('JervDesignJsValueEditor').filter(
    'JervDesignJsValueEditorSchemaSearchFilter',
    function () {
        return function (input, query) {
            if (!query) {
                return input
            }
            var result = {};
            var regex = new RegExp(query, 'i');

            for(var prop in input) {
                if (regex.test(prop)) {
                    result[prop] = input[prop];
                }
            }
            return result;
        };
    }
);
