var m = function (opts) {
    var http = (require('./modules/http.js'))();
    if (!opts) opts = {};
    var content = opts.content ? opts.content : "";
    var host = opts.host ? opts.host : "127.0.0.1";
    var port = opts.port ? opts.port * 1 : 6000;
    var done = function () {
    };
    if (opts.done) done = opts.done;

    http.post('http://' + host + ':' + port + '/extract'
        , {content: content}
        , function (err, res, body) {
            body = decodeURI(body);
            body = body.replace(/%3A/gim, ':');
            body = body.replace(/%2C/gim, ',');
            body = JSON.parse(body);

            done(body);
        }
    );

    return {
        done: function (callback) {
            if (callback) done = callback;
        }
    };
};

exports = module.exports = m;