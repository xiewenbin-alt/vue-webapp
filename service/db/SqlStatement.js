var SqlStatement={
    //数据库语句
    user:{
        //添加用户
        add_user:'insert into user(username,password) VALUES (?,?)',
        //查找用户
        select_user:'select * from user',
        //更新用户数据
        updata_user:'update user set'
    }
}
module.exports = SqlStatement;