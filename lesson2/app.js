/**
 * Created by lwb on 2016/7/25.
 */
var express = require('express');
var utility = require('utility');

var app = express();

app.get('/',function (req , res) {
    var name = req.query.name;

    var md5Value = utility.md5(name);
    var sha1Value = utility.sha1(name);
    res.send(md5Value + sha1Value + name);
});

app.listen(3000 , function () {
   console.log('app is running ai port 3000')
});

