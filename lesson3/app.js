/**
 * Created by lwb on 2016/7/25.
 */
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/' , function (req , res , next) {
    superagent.get('http://cnodejs.org/')
        .end(function (err , sres) {
            if (err){
                return next(err)
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .cell').each(function (idx, element) {
                var $element = $(element).find("a.topic_title");
                var $author = $(element).find("img[title]");
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href'),
                    author: $author.attr('title')
                });
            });

            res.send(items);
        });
});

app.listen(3000 , function () {
    console.log('app is running ai port 3000')
});
