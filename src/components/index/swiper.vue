TabbarItem<template>
<div class="index_seiper">
     <div class="swiper">
      <van-swipe  :autoplay="2000"  :loop="true" >
        <van-swipe-item v-for="(image, index) in SwiperImg" :key="index" >
          <img :src="image">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>

export default {
  name: 'swiper',
  data () {
    return {
    SwiperImg: [
        "/static/assets/index/swiper/lp6.jpg",
        "/static/assets/index/swiper/lp1.jpg",
        "/static/assets/index/swiper/lp2.jpg",
        "/static/assets/index/swiper/lp3.jpg",
        "/static/assets/index/swiper/lp4.jpg",
        "/static/assets/index/swiper/lp5.jpg"
      ]
    }
  }
}
</script>
<style lang="scss">
.index_seiper{
  .swiper{
     width:6.9rem;
     height: 3.4rem;
     margin-left: 0.3rem;
     box-shadow: 2px -1px 16px -3px gray;
    .van-swipe{
      width: 100%;height: 100%;
      .van-swipe__indicators{
    
 .van-swipe__indicator{
          border-radius:0;
          width: 0.6rem;
          height: 0.05rem;
          background-color:#00bbd5;
        }
       
      }
      
        
    }
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
    }
    
  }

}
  
</style>
