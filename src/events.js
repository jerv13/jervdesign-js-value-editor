var JervDesignJsValueEditorEvents = function () {

    var self = this;

    var listeners = {};

    var promises = {};

    self.on = function (event, listenerId, method) {

        if (!listeners[event]) {
            listeners[event] = {};
        }

        listeners[event][listenerId] = method;

        honorPromise(event, method);
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

        makePromise(event, args);
    };

    var makePromise = function (event, args) {
        promises[event] = args;
    };

    var honorPromise = function (event, method) {
        if (typeof promises[event] !== 'undefined') {
            method(promises[event]);
        }
    };
};

angular.module('JervDesignJsValueEditor').service(
    'JervDesignJsValueEditorEvents',
    function () {
        return new JervDesignJsValueEditorEvents();
    }
);
