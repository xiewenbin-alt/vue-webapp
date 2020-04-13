<template>
  <div class="reg">
    <div class="header">
      <div class="search">
        <div class="black_img">
          <img src="/static/assets/category/go-hist.png" alt @click="$router.push('/')" />
        </div>
        <div class="login">注册</div>
        <div class="crear">
          <router-link :to="{name:'登录页'}">登录</router-link>
        </div>
      </div>
    </div>
    <div class="reg_form">
      <form action :model="form">
        <div class="info_Err" v-if="Erra">
          <img src="../../../public/static/assets/reg/01.png" alt />
          <span style="margin-left: 0.1rem;font-size:0.28rem">{{Err}}</span>
        </div>
        <div class="username">
          <!-- <input type="text" placeholder="用户名/邮箱/手机号" id="username" /> -->
          <van-cell-group prop="name">
            <van-field
              v-model="form.username"
              type="number"
              maxlength="11"
              @blur.prevent="changeCountUserName()"
              placeholder="请输入手机号码"
            />
          </van-cell-group>
        </div>
        <div class="VerificationNum">
          <van-cell-group>
            <van-field
              v-model="yanzengma"
              maxlength="4"
              type="number"
              @blur.prevent="changeCountYzm()"
              placeholder="填写验证码"
            />
          </van-cell-group>
          <div class="login-code">
            <v-identify :identifyCode="identifyCode"></v-identify>
          </div>
          <a href="javascript:" @click="refreshCode">看不清？换一个</a>
        </div>
        <div class="dxVerification">
          <van-cell-group>
            <van-field
              v-model="sms"
              type="number"
              maxlength="6"
              center
              clearable
              @blur.prevent="changeCountDxYzm()"
              placeholder="请输入短信验证码"
            ></van-field>
            <button
              class="butt"
              type="button"
              :v-switch="canClick"
              :v-model="dxyz"
              @click="djs()"
            >{{daojishi}}</button>
          </van-cell-group>
        </div>
        <div class="password">
          <!-- <input type="password" placeholder="请设置6-20位数字、字母或符合组合的登陆密码" /> -->
          <van-cell-group prop="password">
            <van-field
              v-model="form.password"
              type="password"
              @blur.prevent="changeCountpassword()"
              placeholder="请设置6-20位数字、字母或符合组合的登陆密码"
            />
          </van-cell-group>
        </div>
        <div class="twopassword">
          <van-cell-group>
            <van-field
              v-model="passwordtwo"
              type="password"
              @blur.prevent="changeCountpasswordtwo()"
              placeholder="请再次输入密码"
            />
          </van-cell-group>
        </div>
        <div class="Protocol_Button">
          <van-checkbox v-model="checked2" @click="checked()" checked-color="#00bad6" default></van-checkbox>
          <span>同意注册协议</span>
        </div>
        <div class="regBut">
          <button type="button" @click="abc()">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import SIdentify from "../reg/identify";
import formValidation from "../../public/formValidation";

export default {
  components: { "v-identify": SIdentify },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      checked2: false,
      Err: "",
      Erra: false,
      checkCode: "",
      picLyanzhengma: "",
      identifyCodes: "1234567890",
      identifyCode: "",
      a1: false,
      a2: false,
      a3: false,
      a4: false,
      a5: false,
      a6: false,
      yanzengma: "",
      dxyz: "",
      passwordtwo: "",
      sms: "",
      daojishi: "发送验证码",
      ToTime: 60,
      canClick: true,
      NUmber: "0"
    };
  },
  // mounted() {
  //   this.identifyCode = "";
  //   this.makeCode(this.identifyCodes, 4);
  // },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },

    djs() {
      if (!this.canClick) return;
      this.canClick = false;
      this.daojishi = this.ToTime + "s后重新发送";
      let clock = window.setInterval(() => {
        this.ToTime--;
        this.daojishi = this.ToTime + "s后重新发送";
        //手机验证码
        if (this.ToTime == 55) {
          var Num = Math.random() * 1000000;
          this.NUmber = parseInt(Num);
          var a = window.String(this.NUmber);
          if (a.length < 6) {
            this.NUmber += "0";
          }
          window.console.log(this.NUmber);
        }
        if (this.ToTime < 0) {
          window.clearInterval(clock);
          this.daojishi = "重新发送验证码";
          this.ToTime = 60;
          this.canClick = true;
        }
      }, 1000);
    },
    //验证手机号码
    changeCountUserName() {
      this.Err = "";
      if (
        !formValidation.checkuser(this.form.username) &&
        this.form.username != 0
      ) {
        this.Erra = true;
        this.Err = "手机号码格式不对";
        return (this.a1 = false);
      } else {
        this.Erra = false;
        this.Err = "";
        return (this.a1 = true);
      }
    },
    //验证码判断
    changeCountYzm() {
      this.Err = "";
      if (!(this.yanzengma == this.identifyCode)) {
        this.Erra = true;
        this.Err = "你输入的验证码错误请重新输入！";
        this.refreshCode();
        return (this.a2 = false);
      } else {
        this.Erra = false;
        this.Err = "";
        return (this.a2 = true);
      }
    },
    //短信验证码判断
    changeCountDxYzm() {
      this.Err = "";
      if (!(this.sms == this.NUmber)) {
        this.Erra = true;
        this.Err = "你输入的短信验证码错误请重新输入！";
        return (this.a3 = false);
      } else {
        this.Erra = false;
        this.Err = "";
        return (this.a3 = true);
      }
    },
    //密码判断
    changeCountpassword() {
      this.Err = "";
      if (!formValidation.checkpassword(this.form.password)) {
        this.Erra = true;
        this.Err = "密码请按格式输入";
        return (this.a4 = false);
      } else {
        this.Erra = false;
        this.Err = "";
        return (this.a4 = true);
      }
    },
    //重复密码判断
    changeCountpasswordtwo() {
      this.Err = "";
      if (!(this.form.password == this.passwordtwo)) {
        this.Erra = true;
        this.Err = "两次密码输入不一致，请重新输入";
        return (this.a5 = false);
      } else {
        this.Erra = false;
        this.Err = "";
        return (this.a5 = true);
      }
    },
    //是否勾选了阅读手册
    checked() {
      this.checked2 = !this.checked2;
      if (this.checked2) {
        // console.log(this.checked2 + "对");
        return (this.a6 = true);
      } else {
        // console.log(this.checked2 + "错");
        return (this.a6 = false);
      }
    },
    abctrue() {
      switch (!true) {
        case this.a1:
          this.$toast("请正确输入账号");
          break;
        case this.a2:
          this.$toast("请正确输入验证码");
          break;
        case this.a3:
          this.$toast("请正确输人短信验证码");
          break;
        case this.a4:
          this.$toast("请正确输入密码");
          break;
        case this.a5:
          this.$toast("请正确重复密码");
          break;
        case this.a6:
          this.$toast("请勾选阅读协议");
          break;
        default:
          return true;
      }
    },

    abc() {
      if( this.abctrue()==true){
          this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        onClose: () => {
          let _this = this;
          console.log(_this.form);
          _this.axios
            .post("http://localhost:3000/api/user/addUser", _this.form)
            .then(function(response) {
              if (response.data == -1) {
                _this.$toast("该用户已经存在");
              } else {
                console.log("注册成功");
                _this.$toast.success("注册成功");
                _this.$router.push("/regloading");

              }
            })
            .catch(function(error) {
              // console.log(error);
            });
        }
      });
      }
      else{

      }
  
      console.log( )
    
    }
  }
};
</script>
<style lang="scss" scoped>
.reg {
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
  .reg_form {
    border-top: 1px solid #c9c9c9;
    padding: 0 10px;

    form {
      margin-top: 0.2rem;
      font-size: 0.25rem;

      .username,
      .VerificationNum,
      .dxVerification,
      .password,
      .twopassword {
        border: 1px solid #e9e9e9;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-top: 0.2rem;

        position: relative;
        input {
          width: 94%;
          height: 0.76rem;
          font-size: 0.25rem;
          position: absolute;
          margin-left: 0.2;
          border: none;
          padding-left: 0.3rem;
        }
      }
      .VerificationNum {
        font-size: 0.24rem;
        position: relative;
        input {
          width: 50%;
        }
        .login-code {
          cursor: pointer;
          display: -webkit-inline-box;
          .s-canvas {
            position: absolute;
            line-height: 0;
            top: 0.13rem;
            right: 1.9rem;
            #s-canvas {
              width: 1.6rem;
            }
          }
        }
        a {
          text-decoration: none;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .dxVerification {
        .van-cell--center {
          // padding:10 6px;
          padding-left: 0.3rem;
        }
        .butt {
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          margin: 0;
          padding: 0;
          padding: 0 0.1rem;
          border: none;
          height: 0.6rem;
          background: #61e7fb;
          font-size: 0.26rem;
          line-height: 0.6rem;
          border-radius: 0.1rem;
          color: white;
        }
      }
      .Protocol_Button {
        display: flex;
        margin-top: 0.2rem;
        span {
          color: #c0c0c0c0;
          margin-left: 0.1rem;
        }
      }
      .regBut {
        margin: 0.5rem 0px;
        button {
          width: 100%;
          font-size: 0.32rem;
          color: #fff;
          text-align: center;
          font-size: 0.28rem;
          line-height: 0.8rem;
          height: 0.8rem;
          border: none;
          border-radius: 0.1rem;
          background-image: linear-gradient(#00bad6, #00bad6);
        }
      }
    }
  }
}
</style>