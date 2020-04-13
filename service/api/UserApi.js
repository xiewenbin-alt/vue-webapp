// var models = require('../db/data');
var express = require('express');
var router = express.Router();
var $sql = require('../db/SqlStatement');
// //导入数据库驱动
var mysql = require('mysql')

// //定义数据库
var conn = mysql.createConnection({
    //主机名字
    host: 'localhost',
    //登陆名字
    user: 'root',
    //密码
    password: 'root',
    //默认端口
    // port: '8080',
    //数据库名字
    database: 'regdata'
});

//链接数据库
conn.connect();


var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}



//添加用户接口,请求req，相应res
//子路由
router.post('/addUser', (req, res) => {
    // console.log(123456)
    var sql = $sql.user.add_user;
    var params = req.body;
    var sqlname = $sql.user.select_user;
    sqlname += " where username ='" + params.username + "'";
    console.log(sqlname);
    conn.query(sqlname, params.username, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result[0] === undefined) {
            console.log(params.username)
            conn.query(sql, [params.username, params.password], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    jsonWrite(res, result);
                    console.log('注册成功')
                }
            })
        } else {
            res.send('-1') //当前注册username与数据库重复时，data返回-1
        }
    })
    // }



});


// //查找用户接口
router.post('/login', (req, res) => {
    var sql_name = $sql.user.select_user;
    var params = req.body;
    // console.log(params)
    var keywords = JSON.parse(Object.keys(params)[0]);
    console.log('keywords' + keywords)
    if (keywords.username) {
        sql_name += " where username ='" + keywords.username + "'";
        console.log(sql_name);
    }
    conn.query(sql_name, keywords.username, function (err, result) {

        if (result) {
            if (!result[0]) {
                res.send('-1')
                console.log("没有此用户，登陆失败！！")
            } else {
                var resultArray = result[0];
                if (resultArray.password === keywords.password) {
                    jsonWrite(res, result);
                    console.log("登陆成功！！！！")
                } else {
                    res.send('0')
                    console.log('登陆失败123')
                }
            }
        }
        if (err) {
            console.log('登陆失败');
        }

    })
});
module.exports = router;