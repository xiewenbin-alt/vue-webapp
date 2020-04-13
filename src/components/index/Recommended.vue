<template>
  <div class="Recommended">
    <!-- <div class="title_name">
      <div class="time_img"></div>
      <div class="title_text">为你推荐</div>
    </div> -->
    <banner :banner= "banner"/>

    <div class="loadings">
      <div class="loading_info" v-for="item in LoaDing" :key="item.id">
          <div class="loading">
            <div class="loading_img">
              <img :src="item.img" alt />
            </div>
            <div class="loading_text">
              <p class="info_name">{{item.name}}</p>
              <p class="info_price">￥{{item.price}}</p>
            </div>
          </div>
      </div>
    </div>
    <div class="bottom_line">
      <div class="line"></div>
      <div class="line_text">人家也是有底线的</div>
    </div>
  </div>
</template>
<script>
import banner from "../../public/banner"

export default {
  name: "Recommended",
  data() {
    return {
      LoaDing: [
          {
              img:`/static/assets/index/Recommended/01.jpg`,
              name:`松下（Panasonic）空气消毒机 雾霾空气净化器`,
              price:`3999.00`
          }, {
              img:`/static/assets/index/Recommended/02.jpg`,
              name:`产地美国 进口维他密斯（Vitamix）2升原装进`,
              price:`8888.00`
          }, {
              img:`/static/assets/index/Recommended/03.jpg`,
              name:`飞利浦（Philips）声波震动牙刷`,
              price:`1599.00`
          }, {
              img:`/static/assets/index/Recommended/04.jpg`,
              name:`产地德国 进口博朗（BRAUN）电动剃须刀`,
              price:`3499.00`
          }, {
              img:`/static/assets/index/Recommended/05.jpg`,
              name:`产地马来西亚 进口索尼（SONY）头戴式无线`,
              price:`1899.00`
          }, {
              img:`/static/assets/index/Recommended/06.jpg`,
              name:`马歇尔（Marshall）Kilburn II 摇滚重低音无线蓝牙音箱`,
              price:`2799.00`
          }, {
              img:`/static/assets/index/Recommended/07.jpg`,
              name:`科沃斯（ECOVACS）智能扫地机器人DD56-`,
              price:`2315.00`
          }, {
              img:`/static/assets/index/Recommended/08.jpg`,
              name:`荣耀（Honor）V20 8+128G全网4G娱乐`,
              price:`2399.00`
          }
      ],
      banner:{
        name:"潮流数码",
        img:"/static/assets/index/Recommended/01.png"
      }
    };
  }
  ,
     components:{
    banner
  }
    
};
</script>
<style lang="scss" scoped>
.Recommended {
  background: #f4f4f4;
  .loadings {
    width: 7rem;
    height: auto;
    margin-bottom: 1rem;
    margin: 0.1rem auto;
    display: flex;
    flex-wrap: wrap;
    .loading_info {
      width: 3.4rem;
      height: 5.6rem;
      margin: 0.1rem 0.05rem;
     
        .loading {
          background: #fff;
          display: block;
          height: 5.6rem;
          width: 3.4rem;
          margin: 0.1rem 0.05rem;
          .loading_img {
            width: 3.4rem;
            height: 3.72rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .loading_text {
            p {
              margin: auto;
              text-align: left;
              &:nth-child(1) {
                width: 3rem;
                height: 0.8rem;
                color: #333;
                overflow: hidden;
                font-size: 0.28rem;
              }
              &:nth-child(2) {
                width: 3rem;
                height: 0.4rem;
                color: #de0000;
                font-size: 0.3rem;
                font-weight: bold;
              }
            }
          }
        }
      
    }
  }
  .bottom_line{
        height: 74px;
    .line{
        width:100%;
        border-bottom:1px solid #999;
        height:2px;
            margin-top: 0.7rem;
    }
    .line_text{
      font-size:0.3rem;
      width:2.5rem;
      text-align:center;
      height:0.35rem;
      background:#f4f4f4;
      color:#999;
      position: absolute;
    margin-top: -12px;
    left: 2.5rem;

    }
  }
}
</style>