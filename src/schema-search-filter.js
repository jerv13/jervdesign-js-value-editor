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
