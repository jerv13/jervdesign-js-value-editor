angular.module('JervDesignJsValueEditor').filter(
    'JervDesignJsValueEditorNsFormatFilter',
    function () {
        return function (ns) {
            ns = "" + ns;

            var nsParts = ns.split('.');
            var count = nsParts.length;
            var last = count - 1;
            var spaceCnt = count - 1;

            var spaces = Array(spaceCnt).join(" -");
            
            return spaces + ' ' + nsParts[last];
        };
    }
);
