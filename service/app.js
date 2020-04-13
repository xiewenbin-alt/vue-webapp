//用来定义与监听后端服务器

const userApi = require('./api/UserApi');
const fs = require('fs');
const path = require('path');
//中间键bodyParser处理不同类型的请求体
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//app.use() 用来给path注册中间函数的
// app.use([path,] function [, function…])在path上安装中间件，如果path没有被设定，那么默认为”/
//中间件：就是处理HTTP请求的函数，用来完成各种特定的任务，比如检查用户是否登录、分析数据、以及其他在需要最终将数据发送给用户之前完成的任务


//处理json类型的请求体，文件解析
//用来解析json格式的中间件，能接受任何body中任何Unicode编码的字符
app.use(bodyParser.json());
//urlencoded解析body中的urlencoded字符， 只支持utf-8的编码的字符,也支持自动的解析gzip和 zlib，
app.use(bodyParser.urlencoded({extended: false}))


//后端路由。。。
app.use('/api/user', userApi);



app.listen(3000).on('error', function(err){
    console.log('on error handler');
    console.log(err);
});


process.on('uncaughtException', function(err) {
    console.log('process.on handler');
    console.log(err);
});


console.log('success listen at port: 3000')

var server = app.listen(3001, function() {
    // sutil.log("server listening at port 3001......");
});
server.setTimeout(0)
