
<template>
  <div id="heard">
    <div id="box">
      <div class="clear-4"></div>
      <a href="javascripr:">
        <div class="title-img"></div>
      </a>
      <div class="reg_log" v-if="abc">
        <div class="reg">注册</div>
        <div class="log">登陆</div>
      </div>
      <div class="reg_user" v-else></div>
      <div class="clear"></div>
      <div class="iput">
        <input type="submit" class="iput_sub" />
        <input type="input" class="iput-inp"  placeholder="搜索商品类型/型号/品牌"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  // name: "#heard"
  data(){
    return{
      abc:true,

    }
  },
    computed: {
    ...mapGetters(["userName"]) 
  },
    mounted(){
    // console.log('3231212')
    console.log(typeof this.userName)
    if(this.userName!=null){
        this.abc=false;
    }
  }

};
</script>
<style lang="scss" scoped>
#box {
  width: 7.5rem;
  height: 2.16rem;
  background: #00bbd7;
  position: relative;
  .clear-4 {
    clear: both;
    height: 0.3rem;
    width: 100%;
  }
  .title-img {
    width: 2.39rem;
    height: 0.38rem;
    background: url("/static/assets/index/logo01.png") no-repeat;
    margin-left: 2.52rem;
    float: left;
    background-size: 100% 100%;
  }
  .reg_log{
    position: absolute;
    right: 0.3rem;
    font-size: 0.28rem;
    color: #fff;
    display: flex;
    // display: none;
     .reg{

    }
    .log{
      margin-left: 0.2rem;
    }
  }
  .reg_user{
    background: url(../../../public/static/assets/index/user.png)center no-repeat;
    width: 0.44rem;
    height: 0.44rem;
    background-size: 100% 100%;
        margin-left: 6.8rem;
  }
  .clear {
    width: 100%;
    clear: both;
  }
  .iput {
    width: 6.9rem;
    height: 0.75rem;
    margin: 0.35rem auto;
    background: #fff;
    border-radius:30px;
    .iput_sub {
      width: 0.4rem;
      height: 0.4rem;
      border: none;
      background: url(../../assets/index/search.png) center no-repeat;
      color: #999;
      float: left;
      background-size: 100% 100%;
      margin: 0.16rem 0 0 0.3rem;
      font-size: 0;
    }
    .iput-inp {
      width: 6rem;
      height: 0.7rem;
      border: none;
      color: #999;
      float: right;
      font-size: 0.28rem;
    border-radius:30px;

    }
  }
}
</style>
