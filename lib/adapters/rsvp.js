var rsvp = require('rsvp');

exports.pending = function () {
    var fulfill;
    var reject;
    var promise = rsvp.Promise(function (res, rej) {
        fulfill = res;
        reject = rej;
    });

    return {
        promise: promise,
        fulfill: fulfill,
        reject: reject    
    };
};

exports.fulfilled = function(value) {
    return new rsvp.Promise(function (resolve, reject) {
        resolve(value);
    });
};

exports.rejected = function(reason) {
    return new rsvp.Promise(function (resolve, reject) {
        reject(reason);
    });
};
