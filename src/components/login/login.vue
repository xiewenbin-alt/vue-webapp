<template>
  <div id="login">
    <div class="header">
      <div class="search">
        <div class="black_img">
          <img src="/static/assets/category/go-hist.png" alt @click="$router.push('/')" />
        </div>
        <div class="login">登陆</div>
        <div class="crear">
          <router-link :to="{name:'注册页'}">注册</router-link>
        </div>
      </div>
    </div>
    <div class="from_log">
      <form :mode="form">
        <div class="username">
          <input type="text"  @blur.prevent="changeCountUserName()" v-model="form.username" placeholder="用户名/邮箱/手机号" />
        </div>
        <div class="password">
          <input :type="this.checked?'text':'password'" v-model="form.password" placeholder="请输入6-20位密码" />
          <div class="switch">
            <van-switch v-model="checked" @click="Showpassword()"  active-color="#00bad6" inactive-color="#e9e9e9" />
          </div>
        </div>
        <div class="footer">
          <label for>
            <van-checkbox v-model="checked2"  checked-color="#00bad6" default>两周内自动登录</van-checkbox>
          </label>
          <div class="footer_right">
            <span>找回密码</span>
            <span>验证码登录</span>
          </div>
        </div>
        <div class="LogBut">
          <button @click="login()" type="button">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "codetest",

  data() {
    return {
      checked: false,
      checked2: true,
      a1:false,
      type:'password',
      radio: "1",
      form: {
        username: "",
        password: ""
      },
      
    };
  },
  methods: {
    changeCountUserName(){
      if(this.form.username!=0){
            console.log('账号不等于0')
            return (this.a1=true)
      }else{
          console.log("账号等于0");
          return (this.a1=false)
      }
    },
    login() {

      if(this.a1==true){
        // console.log('有输入密码')
        this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        onClose: ()=> {
            let _this = this;
          // post请求参数是以键值对的形式存在请求体里，用JSON.stringify()就是把传入的对象转换为键值对。
      _this.axios.post(
          "http://localhost:3000/api/user/login",JSON.stringify(_this.form)
        )
        .then(response => {
          console.log(response);

          switch (response.data) {
            case -1:
              _this.$toast("此用户尚未注册，登陆失败！！");
              break;
            case 0:
              _this.$toast.fail("密码错误,请重新输入！！");
              break;
            default:
              _this.$toast.success("登陆成功！！");
              console.log(123)
            _this.$toast.success({
              message:"登陆成功",
              forbidClick: true,
               onClose:()=>{
                 _this.$router.push("/")
              //  将登录名使用vuex传递到Home页面
             this.$store.commit('handleUserName',response.data[0].username);
             //保持登录状态
             localStorage.setItem('token',true)
               }

            })
            
           
          }
        });
        }
      });
      }else{
      this.$toast("请输入账号")
      }


      
    
    },
    Showpassword(){
      this.checked=!this.checked
      console.log(123)
        console.log( this.checked)
    }

  }
};
</script>
<style lang="scss" scoped>
#login {
  .header {
    height: 0.9rem;
    line-height: 0.9rem;
    width: 7.5rem;
    background: linear-gradient(#00ccee, #61e7fb);
    .search {
      display: flex;
      position: relative;

      .black_img {
        height: 0.9rem;
        position: relative;
        left: 4%;
        line-height: 0.9rem;
        img {
          height: 0.4rem;
          vertical-align: middle;
          position: absolute;
          top: 0.25rem;
        }
      }
      .login {
        margin: 0 auto;
        font-size: 0.3rem;
        color: white;
      }
      .crear {
        font-size: 0.3rem;
        color: gray;
        position: absolute;
        right: 0.5rem;
      }
    }
  }
  .from_log {
    border-top: 1px solid #c9c9c9;
    padding: 0 10px;

    form {
      margin-top: 0.2rem;
      .username {
        border: 1px solid #e9e9e9;
        height: 40px;
        line-height: 40px;
        position: relative;
        input {
          width: 94%;
          height: 38px;
          font-size: 0.25rem;
          position: absolute;
          margin-left: 10px;
          border: none;
        }
      }
      .password {
        border: 1px solid #e9e9e9;
        height: 40px;
        line-height: 40px;
        position: relative;
        margin-top: 0.2rem;
        input {
          width: 94%;
          height: 38px;
          font-size: 0.25rem;
          position: absolute;
          margin-left: 10px;
          border: none;
        }
        .switch {
          position: absolute;
          top: -4px;
          right: 10px;
        }
      }
      .footer {
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
        label {
          .van-checkbox {
            // background: red;
            color: #00ccee;
            font-size: 0.25rem;
          }
        }
        .footer_right {
          font-size: 0.25rem;
          color: #c9c9c9;
          width: 130px;
          display: flex;
          justify-content: space-between;
        }
      }
      .LogBut {
        margin: 20px 0px;
        button {
          width: 100%;
          font-size: 16px;
          color: #fff;
          text-align: center;
          font-size: 14px;
          line-height: 40px;
          height: 40px;
          border: none;
          border-radius: 5px;
          background-image: linear-gradient(#00bad6, #00bad6);
        }
      }
    }
  }
  .code {
    margin: 400px auto;
    width: 114px;
    height: 40px;
    border: 1px solid red;
  }
}
</style>