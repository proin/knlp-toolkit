module.exports = function () {
    var request = require('request');

    this.post = function (url, query, callback) {
        request.post({url: url, form: query, encoding: 'utf-8'}, function (err, res, body) {
            callback(err, res, body);
        });
    };

    return this;
};