# Installation

Before you begin , you must have installed the `jdk`.

```
npm install --save knlp-toolkit
```

You can also use the `-g` flag (global) to symlink it into your PATH:

```
npm install -g knlp-toolkit
```

If that command fails with an `EACCESS` error you may have to run it again with `sudo`

---

# Usage

## knlp-toolkit Server

default `kkma` server port is `6000`, and `hannanum` server port is `6001`

```
knlp-toolkit server [kkma|hannanum] [port]
knlp-toolkit server kkma 6000
```

## knlp-toolkit Test

Before test, you have to run `knlp-toolkit server`

```
knlp-toolkit test hannanum 테스트 글입니다
knlp-toolkit test kkma 테스트 글입니다
```

## In Editing

```
var knlp = require('knlp-toolkit');

// default port is 6000
knlp.kkma({
    content: '테스트 글',
    host: 'localhost',
    port: 6000
}).done(function(result){
    console.log(result);
});

// default port is 6001
knlp.hannanum({content:'테스트 글'}).done(function(result){
    console.log(result);
});
```