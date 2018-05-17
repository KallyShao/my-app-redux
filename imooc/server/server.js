/*
 * @Author: Administrator
 * @Date:   2018-05-17 22:12:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-05-17 22:36:19
 */

const express = require('express');

const app = express();

app.get('/', function(req, res) { //访问根目录
    res.send('<h1>hello........kally</h1>');
})

app.get('/data', function(req, res) {
    res.json({
        name: 'imooc',
        type: 'itttt'
    })
})

app.listen(9093, function() {
    console.log('node app start at port 9093');
})