/**
 * Created by lwb on 2016/7/25.
 */
var express = require('express');
var app = express();
app.get('/',function (req , res) {
    res.send('hello world');
});

app.listen(3000,function () {
    console.log('app is listen at port 3000')
});
