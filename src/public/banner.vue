<template>
  <div class="title_name">
    <div class="left">
      <div  class="one_time_img">
          <img :src="banner.img" alt="">
      </div>
      <div class="title_text">{{banner.name}}</div>
    </div>
    <div class="right">
      <p v-show="disMore">更多</p>
      <div class="right_png"></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
        disMore:true,
      
        }
    }
    ,
    props:{
        banner:{
            type:Object,
            default:function(){
                return[]
            }
        }
    }
    ,
    mounted(){
        
    }
};
</script>
<style lang="scss" scoped>
.title_name {
  background: white;
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  .left {
    height: 0.5rem;
    display: flex;
    margin: auto 0;
    .one_time_img {
      width: 0.32rem;
      height: 0.32rem;
      background-size: 100%;
      margin: 0 0.1rem 0.11rem 0.28rem;
      img{
          display: block;
          width: 23px;
      }
    }
    .title_text {
      font-size: 0.28rem;
      margin-left: 0.1rem;
      margin-top: 0.05rem;
      font-weight: bold;
    }
  }
  .right {
    display: flex;
    p {
      font-size: 0.28rem;
      color: #666;
    }
    .right_png {
      background: url(/static/assets/index/Limited/more.png) no-repeat;
      width: 0.27rem;
      height: 0.27rem;
      background-size: 100%;
      margin-top: 0.35rem;
      margin-right: 0.3rem;
    }
  }
}
</style>