var Resolver;

global.define = function (def) {
     Resolver = def();
};

require('../saber-promise/src/promise');

exports.pending = function () {
    var resolver = new Resolver();

    return {
        promise: resolver.promise(),

        fulfill: function (data) {
            resolver.resolve(data);
        },

        reject: function (reason) {
            resolver.reject(reason);
        }
    };
};

exports.fulfilled = function (data) {
    var resolver = new Resolver();

    resolver.resolve(data);

    return resolver.promise();
};

exports.rejected = function (reason) {
    var resolver = new Resolver();

    resolver.reject(reason);

    return resolver.promise();
};
