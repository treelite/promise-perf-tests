var Resolver;

global.define = function (def) {
     Resolver = def();
};

require('../saber-promise/src/promise');

function isPromise(obj) {
    return obj.then && typeof obj.then === 'function';
}

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
    return Resolver.resolved(data);
};

exports.rejected = function (error) {
    return Resolver.rejected(error);
};

function isPromise(obj) {
    return obj.then && typeof obj.then === 'function';
}

function map(arr, fn) {
    var res = [];
    var count = 0;
    var maxCount = arr.length;
    var resolver = new Resolver();

    function check() {
        if (count >= maxCount) {
            resolver.resolve(res);
        }
    }

    function fail(error) {
        resolver.reject(error);
    }

    arr.forEach(function (item, index) {
        if (isPromise(item)) {
            item.then(fn, fail).then(function (data) {
                res[index] = data;
                count++;
                check();
            });
        }
        else {
            res[index] = item;
            count++;
        }
    });

    check();

    return resolver.promise();
}

exports.map = function (arr, fn) {
    if (isPromise(arr)) {
        return arr.then(function (data) {
            map(data, fn);
        });
    }
    else {
        return map(arr, fn);
    }
};

function reduce(arr, fn, initValue) {
    var resolver = new Resolver();

    function resolve(res, item, index) {
        res = fn(res, item, index, arr.length);
        next(++index, res);
    }

    function reject(error) {
        resolver.reject(error);
    }

    function next(index, res) {
        if (index >= arr.length) {
            resolver.resolve(res);
            return;
        }

        if (res.then) {
            res.then(
                function (data) {
                    next(index, data);
                },
                reject
            );
            return;
        }

        var item = arr[index];
        if (isPromise(item)) {
            item.then(
                function (data) {
                    resolve(res, data, index);
                },
                reject
            );
        }
        else {
            resolve(res, item, index);
        }
    }

    var index = initValue ? 0 : 1;
    var res = initValue || arr[0];
    next(index, res);

    return resolver.promise();
}

exports.reduce = function (arr, fn, initValue) {
    if (isPromise(arr)) {
        return arr.then(function (data) {
            reduce(data, fn, initValue);
        });
    }
    else {
        return reduce(arr, fn, initValue);
    }
};

