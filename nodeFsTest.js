/**
 * Created by lwb on 2016/7/22.
 */
var fs = require('fs');
var data = "hello lunber"
fs.readFile('fsTest.txt','utf-8',function (err , data) {
    if (err){
        console.log(err);
    }else {
        console.log(data);
    }
});
fs.readFile('fsTest.jpg',function (err , data) {
    if (err){
        console.log(err);
    }else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});
fs.writeFile('fsTest.txt',data,function (err , data ) {
    if (err){
        console.log(err);
    }else {
        console.log('ok');
    }
});
fs.readFile('fsTest.txt','utf-8',function (err) {
    if (err){
        console.log(err);
    }else {
        console.log(data);
    }
});
