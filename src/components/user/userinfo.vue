<template>
  <div class="user_nameinfo">
    <div class="info_bg">
      <div class="title_img">
        <img src="/static/assets/user/02.png" alt>
      </div>
      <div class="right_info">
        <div class="name">{{userName}}</div>
        <div class="vip">VIP5</div>
        <div class="integral">有效积分：0分 待转积分：0分</div>
      </div>
      <div class="address">
        <a href="javascript:">
          收货管理地址
          <div class="right_img">
            <img src="/static/assets/user/03.png" alt>
          </div>
        </a>
      </div>
      <div class="bottom_block">
        <div class="my_Collection">
            <p>1</p>
            <p>我的收藏</p>
        </div> 
         <div class="my_Collection">
            <p>1</p>
            <p>我的购物车</p>
        </div>  
        <div class="my_Collection">
            <p>1</p>
            <p>我的积分</p>
        </div>
          <div class="my_Collection">
            <p>1</p>
            <p>我的优惠卷</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data(){
    return{
        
    }
  },
  mounted() {
    // console.log(this.userName)
  },
  computed: {
    ...mapGetters(["userName"]) //cartDataList:购物车列表；
  },
  
};
</script>
<style lang="scss">
.user_nameinfo {
  width: 7.5rem;
  .info_bg {
    position: relative;
    padding: 0px 4%;
    background: url(/static/assets/user/01.jpg) scroll top center;
    height: 142px;

    .title_img {
      width: 1.4rem;
      height: 1.4rem;
      overflow: hidden;
      border: 2px solid white;
      border-radius: 50%;
      position: absolute;
      text-align: center;
      top: 5px;
      // padding-top: 5px;
      img {
        width: 1.36rem;
        height: 1.36rem;
        margin-top: 1px;
      }
    }
    .right_info {
      position: absolute;
      margin-left: 1.6rem;
      margin-top: 0.2rem;
      color: white;
      .name {
        font-size: 0.4rem;
      }
      .vip {
        font-size: 0.28rem;
      }
      .integral {
        font-size: 0.24rem;
      }
    }
    .address {
      position: absolute;
      right: 4%;
      top: 65px;
      font-size: 12px;
      line-height: 20px;
      a {
        text-decoration: none;
        color: white;
        font-size: 0.24rem;
        .right_img {
          position: absolute;
          /* left: 63px; */
          top: 0.03rem;
          right: -0.2rem;
          img {
            width: 0.45em;
          }
        }
      }
    }
    .bottom_block{
        // width: 100%;
        display: flex;
        position: absolute;
        bottom: -0.05rem;
        margin-left: -0.15rem;
        .my_Collection{
            background: url(/static/assets/user/04.png);
            width: 1.74rem;
            height: 1.2rem;
            margin-left: 0.05rem;
            p{
                text-align: center;
                color: white;
                &:nth-child(1){
                    // font-weight: bold;
                    font-size: 0.32rem;
                    margin-bottom: -0.1rem;
                    margin-top: 0.1rem;
                }
                &:nth-child(2){
                    font-size: 0.24rem;
                }
            }
        }
    }
  }
}
</style>
