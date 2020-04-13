const formValidation = {
    //手机号码验证正则
    checkuser(number) {
        var partten = /^(13[0-9]|14[0-9]|15[0-9]|16[6]|18[0-9]|19[6,9]|17[0-9])\d{8}$/i;
        return partten.test(number);
    },
    //登陆密码验证正则
    checkpassword(number){
        var patrn=/^[A-Z]{1}([a-zA-Z0-9]){4,19}$/;
        return patrn.test(number);
    }
}
export default formValidation
