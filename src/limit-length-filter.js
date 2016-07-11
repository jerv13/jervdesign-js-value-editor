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
