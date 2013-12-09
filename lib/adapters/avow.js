/* Copyright (c) 2012-2013 Brian Cavalier */
// see https://github.com/briancavalier/avow/blob/master/test/avow-adapter.js
var avow = require('avow');

exports.pending = function() {
        var pending = {};

        pending.promise = avow(function(resolve, reject) {
                pending.fulfill = resolve;
                pending.reject = reject;
        });

        return pending;
};
exports.fulfilled = avow.lift;
exports.rejected = avow.reject;
