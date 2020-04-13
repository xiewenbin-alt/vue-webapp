<template>
  <div class="index">
    <div class="header">
      <div class="search">
        <div class="black_img">
          <img src="/static/assets/category/go-hist.png" @click="$router.go(-1)" alt />
        </div>
        <div class="search_frame">
          <form>
            <div class="put">
              <input type="text" />
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="banner">
      <ul class="top_name">
        <li>综合</li>
        <li>销量</li>
        <li>
          价格
          <i class="iconfont icon-paixu"></i>
        </li>
        <li>
          筛选
          <i class="iconfont icon-shaixuan"></i>
        </li>
      </ul>
    </div>
    <div :class="bcd==false?'goods_list_conten_one':'goods_list_conten'">
      <ul class="list_info">
        <!-- <router-link :to="{name:'详情页'}"> -->
        <li v-for="item in infos" :key="item.id">
          <div class="goods">
            <div class="right_img">
              <img :src="item.img" alt />
            </div>
            <div class="left_goodsingfo">
              <div class="info_names">{{item.name}}</div>
              <div class="info_price">
                <div class="price">￥{{item.price}}</div>
                <div class="gift">送赠品</div>
              </div>
              <div class="bootom">
                <div class="bootom_left"></div>
                <div class="bootom_middle">{{item.text}}</div>
                <div class="bootom_right"></div>
              </div>
              <div class="bootom">
                <div class="bootom_left"></div>
                <div class="bootom_middle">{{item.text1}}</div>
                <div class="bootom_right"></div>
              </div>
            </div>
          </div>
        </li>
        <!-- </router-link> -->

      </ul>
    </div>
    <div class="bottom">
      <div>
      <v-zhiding/>
      </div>
      <div>
        <i class="iconfont icon-fenleigongnengleimu" @click="abc()" :class="{'icon-fenlei':bcd}"></i>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import zhiding from '../../public/Roof_Placement'
export default {
  
  data() {
    return {
      flag: true,
      bcd: false,
      list: [
        {
          img: `../../static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        },
        {
          img: `/static/assets/list/01.jpg`,
          name: `产地意大利 进口AEG 9系 10KG 热泵式洗烘一体机 LWX8C1612H（白色）`,
          price: `12345`,
          text: `蒸汽预熨斗`,
          text1: `多重智感系统`
        }
      ],
      infos:[]
    }
  },
  methods: {
    abc() {
      this.bcd = !this.bcd;
    }
  },
  components:{
      'v-zhiding':zhiding
  },
   created(){
     axios.get("/static/data3.json").then(response => {
     let arr=this.$route.query.arr
     window.console.log(arr)
    this.infos = response.data.data[arr]; 
    //  console.log(infos)
    });
    //  this.getRouterData()

  },
  // methods:{
  //   getRouterData(){
  //     this.$route.params.id;
  //     console.log( this.$route.params.id)
  //   }


  // }
  
};
</script>
<style lang="scss" scoped>
.index {
  width: 7.5rem;
  .header {
    height: 0.9rem;
    line-height: 0.9rem;
    width: 7.5rem;
    background: linear-gradient(#00ccee, #61e7fb);
    position: fixed;
    z-index: 99;
    .search {
      display: flex;
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
      .search_frame {
        width: 80%;
        margin: auto;
        height: 0.9rem;
        form {
          .put {
            margin: 8px 5% 8px 7%;
            height: 0.6rem;
            position: relative;
            input {
              &:nth-child(1) {
                border: none;
                width: 96%;
                height: 0.6rem;
                position: absolute;
                border-radius: 0.4rem;
                padding-left: 0.6rem;
                caret-color: #00ccee;
                font-size: 0.1px;
              }
              &:nth-child(2) {
                zoom: 1.5;
                font-size: 0;
                background: url(/static/assets/category/index-search.png)
                  no-repeat;
                border: none;
                background-size: 10px;
                position: absolute;
                left: 0.16rem;
                top: 0.14rem;
              }
            }
          }
        }
      }
    }
  }
  .banner {
    padding-top: 0.9rem;
    border-bottom: 1px solid #e9e9e9;
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-around;
      li {
        width: 1.2rem;
        // float: left;
        font-size: 0.28rem;
        line-height: 0.8rem;
        text-align: center;
      }
    }
  }
  .goods_list_conten_one {
    z-index: 9;
    padding: 0px 10px;
    .list_info {
      list-style: none;
      li {
        padding: 10px 0;
        .goods {
          .right_img {
            float: left;
            display: table-cell;
            overflow: hidden;
            width: 100px;
            height: 100px;
            background-color: #fff;
            vertical-align: middle;
            text-align: center;
            img {
              max-width: 100px;
              max-height: 100px;
              vertical-align: middle;
            }
          }
          .left_goodsingfo {
            overflow: hidden;
            border-bottom: 1px solid #f5f5f5;
            padding-bottom: 10px;
            margin-left: 112px;
            .info_names {
              font-size: 0.26rem;
              color: black;
            }
            .info_price {
              margin-top: 0.4rem;
              display: flex;
              justify-content: space-between;
              .price {
                color: red;
                font-size: 0.26rem;
              }
              .gift {
                font-size: 0.24rem;
                color: #0499b2;
                border: 1px solid #0499b2;
                font-weight: bold;
                border-radius: 0.05rem;
                padding: 0.05rem;
              }
            }
            .bootom {
              color: #313131;
              text-align: center;
              overflow: hidden;
              float: left;
              display: inline;
              margin: 10px 5px 0px 0px;
              height: 30px;
              .bootom_left {
                float: left;
                width: 15px;
                height: 30px;
                background: url(/static/assets/list/03.png) scroll center left
                  no-repeat;
                background-size: 160px;
              }
              .bootom_middle {
                max-width: 70px;
                width: auto;
                float: left;
                height: 30px;
                line-height: 30px;
                font-size: 11px;
                background: url(/static/assets/list/03.png) scroll center center
                  no-repeat;
                background-size: 160px;
              }
              .bootom_right {
                float: left;
                width: 10px;
                height: 30px;
                background: url(/static/assets/list/04.png) scroll center right
                  no-repeat;
                background-size: 160px;
              }
            }
          }
        }
      }
    }
  }
  .goods_list_conten {
    z-index: 9;
    color: black;
    .list_info {
      li {
        float: left;
        text-align: center;
        width: 50%;
        box-sizing: border-box;
        border-right: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
        padding: 0.2rem 0;
        .goods {
          position: relative;
          .right_img {
            width: 80%;
            margin: auto;

            img {
              max-width: 100%;
              max-height: 2rem;
            }
          }
          .left_goodsingfo {
            padding: 0 0.2rem;
            .info_names {
              font-size: 0.28rem;
              color: black;

              text-align: left;
              /* visibility: hidden; */
              overflow: hidden;
              height: 40px;
              line-height: 1.5em;
            }
            .info_price {
              margin-top: 0.4rem;
              display: flex;
              justify-content: space-between;
              .price {
                color: red;
                font-size: 0.26rem;
              }
              .gift {
                font-size: 0.24rem;
                color: #0499b2;
                border: 1px solid #0499b2;
                font-weight: bold;
                border-radius: 0.05rem;
                padding: 0.05rem;
                position: absolute;
                top: 0;
                // margin: 0 0.2rem;
              }
            }
            .bootom {
              color: #313131;
              text-align: center;
              overflow: hidden;
              // float: left;
              // display: inline;
              // margin: 10px 5px 0px 0px;
              height: 30px;
              .bootom_left {
                float: left;
                width: 15px;
                height: 30px;
                background: url(/static/assets/list/03.png) scroll center left
                  no-repeat;
                background-size: 160px;
              }
              .bootom_middle {
                max-width: 70px;
                width: auto;
                float: left;
                height: 30px;
                line-height: 30px;
                font-size: 11px;
                background: url(/static/assets/list/03.png) scroll center center
                  no-repeat;
                background-size: 160px;
              }
              .bootom_right {
                float: left;
                width: 10px;
                height: 30px;
                background: url(/static/assets/list/04.png) scroll center right
                  no-repeat;
                background-size: 160px;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    position: fixed;
    right: 0.1rem;
    bottom: 1rem;
    .iconfont {
      font-size: 0.7rem;
    }
    .icon-zhiding {
      font-size: 0.7rem;
    }
    .icon-fenleigongnengleimu {
      font-size: 0.7rem;
      margin-top: -0.5rem;
    }
  }
}
</style>