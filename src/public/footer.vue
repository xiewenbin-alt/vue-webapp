<template>
  <div class="botton">
    <div class="footer">
      <div class="footer_info">
        <div class="reg_log" v-if="wsad">
          <div class="login">
            <router-link :to="{name:'登录页'}" color="red">登陆</router-link>
          </div>
          <div class="Create">
            <router-link :to="{name:'注册页'}" color="red">注册</router-link>
          </div>
        </div>
        <div class="reg_log_user" v-else>
          您好,
          <span class="user">{{userName}}</span>|
          <span @click="abc()">退出</span>
        </div>
        <div class="Feedback">反馈</div>
        <div class="Restores">回到顶部</div>
      </div>
      <p>Copyright© 深圳市顺电连锁股份有限公司粤13052236号-1</p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      wsad: true
    };
  },
  computed: {
    ...mapState(["path"]),
    ...mapGetters(["userName"])
  },
  mounted() {
    if (this.userName != null) {
      this.wsad = false;
    }
  },
  methods: {
    ...mapMutations(["tcuser"]),
    abc() {
      this.tcuser();
      this.$router.push(this.$store.state.reginfo.path)
      this.$router.go(0)
    }
  },

  updated() {
    // console.log()
  },
  
};
</script>

<style lang="scss">
a {
  color: #696969;
}
.botton {
  margin-bottom: 1.5rem;
  .footer {
    border-top: 1px solid #e9e9e9;
    .footer_info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      .login,
      .Create,
      .Feedback,
      .Restores {
        color: #696969;
        line-height: 30px;
      }
      .reg_log {
        display: flex;
        .Create {
          margin-left: 1.2rem;
        }
      }
      .reg_log_user {
        color: #999;
        line-height: 0.6rem;
        .user {
          margin-right: 0.1rem;
        }
      }
    }
  }
  p {
    margin-top: 20px;
    text-align: center;
    color: #696969;
    font-size: 12px;
  }
}
</style>
