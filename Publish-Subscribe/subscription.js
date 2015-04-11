(function (exports) {
    var subscribers = {};

    var executeCallBacks = function (callback, index, array) {
        callback();
    };

    var indexOf = function (value) {
        return this.indexOf(value);
    }

    var hasOwnProp = subscribers.hasOwnProperty;
	
	exports.subscribe = function (event, callback) {
            if (!hasOwnProp.call(subscribers, event)) subscribers[event] = [];
            subscribers[event].push(callback);            
        };
	exports.publish = function (event) {
            subscribers[event].forEach(executeCallBacks);
        };		
	exports.unsubscribe = function (event, callback) {
            if (!hasOwnProp.call(subscribers, event)) return;

            var index = indexOf.call(subscribers[event], callback);
            if (index > -1) {
                Array.prototype.splice.call(subscribers[event], index, 1);
            }
        };
    
})(typeof exports === "undefined"?this['SubscriptionModel']={}:exports);
