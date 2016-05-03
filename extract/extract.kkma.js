var m = function (opts) {
    var http = (require('./modules/http.js'))();
    if (!opts) opts = {};
    var content = opts.content ? opts.content : "";
    var host = opts.host ? opts.host : "127.0.0.1";
    var port = opts.port ? opts.port * 1 : 6000;
    var done = function () {
    };
    if (opts.done) done = opts.done;

    content = content.replace(/[^(가-힣ㄱ-ㅎa-zA-Z0-9)]/gi, ' ').split(' ');
    var tmp = '';
    for (var i = 0; i < content.length; i++) {
        if (content[i].length > 12) content[i] = content[i].substring(0, 12);
        tmp += content[i] + ' ';
    }
    content = tmp;

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