<template>
  <div class="heards" v-show="sel">
    <a href="javascript:">
      <div class="left_img"></div>
    </a>
    <div class="input">
      <input type="submit" class="iput_sub" />
      <input type="input" class="iput-inp" placeholder="搜索商品类型/型号/品牌" />
    </div>
    <div class="right_log" v-if="displaynone">登陆</div>
    <div class="right_uesr" v-else></div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    data(){
        return{
            sel:false,
            ScrollTop:0,
            displaynone:true,
        }
    },
    created(){
        window.addEventListener('scroll',this.ScrollToTop)
    },
    destroyed(){
        window.addEventListener('scroll',this.ScrollToTop)
    },
    computed: {
    ...mapGetters(["userName"]) 
  },
    methods:{
        ScrollToTop(){
            let This=this;
           var dom= document.documentElement.scrollTop||document.body.scrollTop
           if(dom>150){
               This.sel=true;
           }else{
               This.sel=false;
           }
        },
        
    },
    mounted(){
        if(this.userName!=null){
        this.displaynone=false;
    }
    }


};
</script>
<style lang="scss" scoped>
.heards {
    width: 7.5rem;
        height: 1.28rem;
    background: #00bbd7;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 99;
  a {
    text-decoration: none;
    margin: auto;
    .left_img {
      width: 0.55rem;
      height: 0.55rem;
      background: url("/static/assets/index/01.png") no-repeat;
      margin-left: 0.3rem;
      float: left;
      background-size: 100% 100%;
      margin-top: 0.06rem;
    }
  }
  .input {
       width: 5.3rem;
    height: 0.7rem;
    margin: 0.35rem auto;
    background: #fff;
    border-radius: 30px;
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
         width: 4.3rem;
    height: 0.6rem;
    border: none;
    color: #999;
    float: right;
    font-size: 0.28rem;
    border-radius:30px;
    padding: 0.05rem;

    }
  }
  .right_log {
    font-size: 0.28rem;
    margin: auto;
    color: white;
    // display: none;
  }
  .right_uesr{
    background: url(../../../public/static/assets/index/user.png)center no-repeat;
    width: 0.66rem;
    height: 0.66rem;
    margin: auto;
    background-size: 100% 100%;

  }
  
}
</style>