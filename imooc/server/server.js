/*
 * @Author: Administrator
 * @Date:   2018-05-17 22:12:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-05-21 22:00:10
 */

const express = require('express');
const mongoose = require('mongoose');
//连接mongo，并且使用imooc集合
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('mongodb connect success!!!!');
})

//类似mysql表，mongodb有字段，文档的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}));
// User.create({
//     user: 'xiaohuawll',
//     age: 14
// }, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })
User.update({
    'user': 'xiaohuawll'
}, {
    '$set': {
        age: 35
    }
}, function(err, doc) {
    console.log(doc);
})

// User.remove({
//     age: 12
// }, function(err, doc) {
//     console.log(doc)
// })

const app = express();

app.get('/', function(req, res) { //访问根目录
    res.send('<h1>hello........kally</h1>');
})

app.get('/data', function(req, res) {
    User.findOne({
        user: 'imooc'
    }, function(err, doc) {
        res.json(doc);
    });
// res.json({
//     name: 'imooc',
//     type: 'itttt'
// });
});


app.listen(9093, function() {
    console.log('node app start at port 9093!!!');
})