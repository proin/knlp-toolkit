#!/usr/bin/env node
var cmd = require('./modules/cmd');
var command = process.argv.slice(2)[0];

if (command == 'server') {
    var type = process.argv.slice(2)[1];
    if (type == 'hannanum') {
        var port = process.argv.slice(2)[2] ? process.argv.slice(2)[2] * 1 : 6001;
        console.log('hannaum server: http://localhost:' + port);
        cmd('sh', ['./deploy/startup.sh', 'hannanum', port]).on(function (line) {
            console.log(line.replace(/\n/gim, ''));
        }).close(function () {
        });
    } else {
        var port = process.argv.slice(2)[2] ? process.argv.slice(2)[2] * 1 : 6000;
        console.log('kkma server: http://localhost:' + port);
        cmd('sh', ['./deploy/startup.sh', 'kkma', port]).on(function (line) {
            console.log(line.replace(/\n/gim, ''));
        }).close(function () {
        });
    }
} else if (command == 'test') {
    var type = process.argv.slice(3)[0];
    var array = process.argv.slice(4);
    var msg = '';
    for (var i = 0; i < array.length; i++) msg += array[i] + ' ';
    var m = null;

    if (type == 'hannanum') {
        m = require('./extract/extract.hannanum');
    } else if (type == 'kkma') {
        m = require('./extract/extract.kkma');
    } else {
        console.log('input type, kkma or hannanum');
        return;
    }

    m({content: msg}).done(function (data) {
        console.log(data);
    });


}