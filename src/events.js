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
