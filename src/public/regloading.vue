<template>
  <div class="regloading">
    <div class="header">
      <div class="search">
        <div class="black_img">
          
        </div>
        <div class="login">跳转中...</div>
        <div class="crear"></div>
      </div>
    </div>
    <div class="text">账号注册成功，{{time}}...秒后将跳转到登陆页面...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "3"
    };
  },
  methos:{
      abc(){
  
      }


  },
  create:function(){
      console.log(this.time)
      console.log(121212) 
  },
 mounted(){
    var timer= window.setInterval(()=>{
        this.time--
            if(this.time==0){
                this.$router.push('./login')
            }
    },1000)

 },
  destroyed() {
        this.timer;
  }
};
</script>

<style lang="scss">
.regloading {
        width: 7.5rem;
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
  .text{
      font-size: 0.3rem;
      padding: 1rem;
  }
}
</style>