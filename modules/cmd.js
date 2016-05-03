module.exports = function (command, args) {
    var spawn = require('child_process').spawn;
    var cmd = spawn(command, args);

    var dummy = function () {
    };

    var event = {};
    event.on = dummy;
    event.close = dummy;

    var result = {};
    result.on = function (callback) {
        if (!callback) callback = dummy;
        event.on = callback;
        return result;
    };
    result.close = function (callback) {
        if (!callback) callback = dummy;
        event.close = callback;
        return result;
    };

    cmd.stdout.on('data', function (data) {
        event.on(data + '');
    });

    cmd.on('close', function () {
        event.close();
    });

    return result;
};