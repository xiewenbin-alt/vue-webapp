<template>
  <div class="Detail_head">
    <div class="header">
      <div class="search">
        <div class="black_img" >
          <!-- <router-link :to="{name:'首页'}" color="red"> -->
            <img src="/static/assets/category/go-hist.png" @click="$router.go(-1)" alt />
          <!-- </router-link> -->
        </div>
        <div class="lis">
          <ul>
            <li
              v-for="(item,index) in items"
              :key="item.id"
              @click="toggle(index)"
              :class="flag==index?'active':''"
              :v-model="item.nane"
            >{{item.text}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="lis_ul">
      <ul>
        <li class="commodity" :class="flag==0?'activetwo':''">
          <div class="commodity_conten">
            <div class="swiper_box">

            <div class="swiper">
              <van-swipe  indicator-color="white">
                <van-swipe-item  v-for="(items,index) in list_img" :key="index"> 
                  <img :src="items" alt />
                </van-swipe-item>
              </van-swipe>
            </div>

            </div>
            <div class="zezao"></div>
            
            <div>
              <div class="info_introduction">
              <h1>
                <p class="introduction_name">{{name}}</p>
              </h1>
              <div class="info_technology">
                <p>
                   <span v-for="item in list" :key="item.id">
                     ●{{item}}
                    <br>
                    </span>
                </p>
              </div>
              <div class="info_price">￥{{price}}</div>
            </div>
            <div class="info_services">
              <div class="Id">
                <label for class="Goods_id">编号</label>
                <div class="id_num">{{Goods_id}}</div>
              </div>
              <div class="quantity">
                <label for class="Goods_id">数量</label>
                <div class="Plus_minus">
                  <span class="Subtracts" @click="del_add(-1)">-</span>
                  <div class="Square_box">
                    <input type="text" value="1" v-model="num"/>
                  </div>
                  <span class="Plus" @click="del_add(+1)">+</span>
                </div>
                <span class="Status">有货</span>
              </div>
              <div class="address">
                <label for class="Goods_id">送至</label>
                <div class="address_options">
                  <select name id>
                    <option value>广东</option>
                    <option value>广西</option>
                    <option value>北京</option>
                    <option value>重庆</option>
                    <option value>福建</option>
                  </select>
                  <select name id>
                    <option value>广州</option>
                    <option value>柳州</option>
                    <option value>欧洲</option>
                    <option value>亚洲</option>
                    <option value>北美洲</option>
                  </select>
                  <select name id>
                    <option value>美国</option>
                    <option value>英国</option>
                    <option value>俄罗斯</option>
                    <option value>南韩</option>
                    <option value>北韩</option>
                  </select>
                </div>
              </div>
              <div class="services">
                <label for class="Goods_id">服务</label>
                <a href="javascript:">
                  <p class="myfuwu">顺电支持30天退换货(查看详情)</p>
                </a>
              </div>
              <div class="services">
                <label for class="Goods_id">支持</label>
                <a href="javascript:">
                  <p class="myfuwu">花呗分期, 三期免息</p>
                </a>
              </div>
            </div>
            </div>
          </div>
        </li>
        <li class="details" :class="flag==1?'activetwo':''">
          <div class="details_conten">
            <ul class="trigger-list">
              <li class="trigger act">产品介绍</li>
              <li class="trigger" data-url="true">规格参数</li>
              <li class="trigger">售后服务</li>
            </ul>
            <a href="javascript:">
              <div>
                <img src="/static/assets/Detail/03.jpg" alt />
              </div>
            </a>
            <div class="conten_list">
              <img src="/static/assets/Detail/04.jpg" alt />
              <img src="/static/assets/Detail/05.jpg" alt />
              <img src="/static/assets/Detail/06.jpg" alt />
              <img src="/static/assets/Detail/07.jpg" alt />
              <img src="/static/assets/Detail/08.jpg" alt />
              <img src="/static/assets/Detail/09.jpg" alt />
              <img src="/static/assets/Detail/10.jpg" alt />
              <img src="/static/assets/Detail/11.jpg" alt />
            </div>
          </div>
        </li>
        <li class="comment" :class="flag==2?'activetwo':''">
          <div class="comment_conten">
            <div class="pingjia">
              <div class="pingjia_left">
                <em>商品评价</em>
                <abbr>0%</abbr>
                <p>好评</p>
              </div>
              <div class="pingjia_right">
                <a href="javascript:">0人评价</a>
              </div>
            </div>
            <div class="pingjia_bottom">
              <div class="img_Appraisals">
                <img src="/static/assets/Detail/12.png" alt />
                有图评价
                <abbr>0</abbr>
              </div>
              <div class="Consulting">
                <img src="/static/assets/Detail/13.png" alt />
                咨询
                <abbr>0</abbr>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
    <v-footer />
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" :info="cartDataList.length" text="购物车" @click="onClickIcon" :to="{name:'购物车页'}" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton(items)" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import footer from "../../public/footer";
  import {mapGetters,mapActions} from 'vuex'

export default {
  components: {
    "v-footer": footer
  },
  data() {
    return {
      active: 2,
      flag: 0,
      name:'',
      price:'',
      Goods_id:'',
      // index:0,
      num:'1',
      items: [
        {
          text: `商品`
        },
        {
          text: `详情`
        },
        {
          text: `评论`
        }
      ],
      list:[],
      list_img:[]
    };
  },
  created: function(index) {
    var newsID = this.$route.params.info;
    this.name=newsID.info_name
    this.price=newsID.price 
    this.Goods_id=newsID.id  
    this.list=newsID.Text
    this.list_img=newsID.Img
  },
  methods: {
 ...mapActions(['addToCart']),

    toggle: function(index) {
      this.flag = index;
      console.log(index);
    },
    onClickIcon() {
      // Toast("点击图标");
    },
    onClickButton(items) {
      // console.log(items)
      this.curProduct = items;
      this.$dialog
      .alert({
         message:'商品已经添加到购物车'
        })
        .then(() => {
          console.log(typeof this.$route.params.info)
         
          let obj = {
            //将对象结构
            ...this.$route.params.info,
            num: this.num
          }
           this.addToCart(obj);

        })
        .catch(err => {
          console.log(err);
        });

    },
  del_add(b) {
      if (b > 0) {

        this.num++;
        console.log(this.num)
      } else {
        
       this.num--;
        if (this.num < 1) {
          this.num = 1;
        }
        console.log(this.num)
        
       
      }
    }
  },
   computed:{    
      ...mapGetters(['cartDataList']),//cartDataList:购物车列表；
    }
};
</script>
<style lang="scss" scope>
.Detail_head {
  width: 7.5rem;
  height: 100%;
  .header {
    height: 0.9rem;
    line-height: 0.9rem;
    width: 7.5rem;
    background: linear-gradient(#00ccee, #61e7fb);
    position: fixed;
    z-index: 99;
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
      .lis {
        margin: auto;
        width: 60%;
        ul {
          display: flex;
          justify-content: space-around;
          li {
            font-size: 0.25rem;
          }
        }
      }
    }
  }
  .active {
    background: url(/static/assets/Detail/01.png) no-repeat scroll center 90%;
    background-size: 7px;
  }
  .clear {
    clear: both;
    width: 100%;
  }
  .lis_ul {
    padding-top: 0.9rem;
    ul {
      .commodity {
        display: none;
        transform-origin: 0px 0px;
        transform: scale(1, 1);
        opacity: 0;
        .commodity_conten {
          overflow: hidden;
          margin: 0 auto;
          padding: 0 0px;
          width: 100%;
          position: relative;
          .swiper_box{

             .swiper {
            width: 7.5rem;
            // padding-top: 6px;
            height: 5rem;
            overflow: hidden;
            border-bottom: 1px solid #c8c7cb;
            .van-swipe {
              width: 100%;
              height: 100%;
              .van-swipe__track{
                .van-swipe-item{
                  text-align: center;
                }
              }
              .van-swipe__indicators {
                .van-swipe__indicator {
                  border-radius: 0;
                  width: 0.6rem;
                  height: 0.05rem;
                  background-color: #00bbd5;
                }
              }
            }
            img {
              width:100%;
              height: 100%;
              pointer-events: none;
              display: block;
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
         
          .info_introduction {
            h1 {
              color: #313131;
              font-size: 0.32rem;
              font-weight: 400;
              width: 90%;
              margin: 0.4rem auto;
              p {
                display: inline-block;
                width: 95%;
                float: left;
                font-size: 0.28rem;
                margin-bottom: 0.1rem;
              }
            }
            .info_technology {
              width: 90%;
              color: red;
              font-size: 0.24rem;
              margin: auto;
              clear: both;
              p{
                    // display: table-column;
                    // position: absolute;
              }
            }
            .info_price {
              font-size: 0.35rem;
              color: #00ccee;
              position: relative;
              border-bottom: 1px solid #e9e9e9;
              line-height: 40px;
              padding: 0 5%;
              overflow: hidden;
              margin-top: -0.3rem;
            }
          }
          .info_services {
            padding: 0 5%;
            margin: 5% 0;
            .Id {
              display: flex;
              .id_num {
                font-size: 0.26rem;
              }
            }
            .quantity {
              position: relative;
              margin-top: 0.4rem;
              display: flex;

              .Plus_minus {
                border: 1px solid #313131;
                height: 0.44rem;
                border-radius: 3px;
                overflow: hidden;
                border-right: none;
                border-left: none;
                margin-left: 5px;
                margin-top: 1px;
                width: max-content;
                .Subtracts {
                  display: inline-block;
                  width: 0.56rem;
                  height: 0.44rem;
                  border: 1px solid #313131;
                  border-bottom: none;
                  border-top: none;

                  text-align: center;
                  line-height: 22px;
                  background: #fff;
                  color: #333;
                  border-radius: 3px 2px 2px 3px;
                  float: left;
                  font-size: 0.28rem;
                }
                .Square_box {
                  float: left;
                  padding: 0px;
                  line-height: 5px;
                  input {
                    padding: 0 2px;
                    width: 0.72rem;
                    color: #313131;
                    background-color: #fff;
                    text-align: center;
                    font-size: 14px;
                    vertical-align: text-top;
                    border: none;
                    padding-top: 0.05rem;
                  }
                }
                .Plus {
                  float: left;
                  border-radius: 2px 3px 3px 2px;
                  display: inline-block;
                  width: 0.56rem;
                  height: 0.44rem;
                  border: 1px solid #313131;
                  border-bottom: none;
                  border-top: none;

                  text-align: center;
                  line-height: 22px;
                  font-size: 0.24rem;
                }
              }
              .Status {
                font-size: 0.24rem;
                // position: relative;
                position: absolute;
                top: 0;
                left: 3.5rem;
                line-height: 0.5rem;
              }
            }
            .address {
              margin-top: 0.4rem;
              display: flex;

              .address_options {
                display: flex;
                select {
                  width: 1.2rem;
                  border: none;
                }
              }
            }
            .services {
              margin-top: 0.4rem;
              display: flex;

              a {
                color: #333;
                text-decoration: none;
                .myfuwu {
                  color: #313131;
                  font-size: 12px;
                  margin-right: 10px;
                  margin: 0;
                }
              }
            }
          }
        }
      }
      .details {
        display: none;
        transform-origin: 0px 0px;
        transform: scale(1, 1);
        opacity: 0;

        .details_conten {
          .trigger-list {
            display: box;
            display: -webkit-box;
            display: -moz-box;
            width: 100%;
            border-bottom: 1px solid #e9e9e9;
            li {
              width: 60px;
              line-height: 40px;
              height: 40px;
              color: #000;

              border-top: 2px solid #fff;
              text-align: center;

              font-size: 14px;

              box-flex: 1;
              -webkit-box-flex: 1;
              -moz-box-flex: 1;
            }
          }
          a {
            color: #333;
            text-decoration: none;
            div {
              padding: 0.2rem;
              img {
                margin-bottom: -4px;
                max-width: 100%;
              }
            }
          }
          .conten_list {
            padding: 0.2rem;
            img {
              max-width: 100%;
              display: block;
            }
          }
        }
      }
      .comment {
        display: none;
        transform-origin: 0px 0px;
        transform: scale(1, 1);
        opacity: 0;
        .comment_conten {
          .pingjia {
            font-size: 0.24rem;
            padding: 0px;
            display: flex;
            .pingjia_left {
              padding: 10px 110px 0px 10px;
              background-color: #fff;
              border: none;
              font-size: 0.24rem;
              width: 100%;
              em {
                color: #999999;
              }
              abbr {
                color: red;
                margin: 0px 10px;
              }
              p {
                color: black;
                display: inline;
              }
            }
            .pingjia_right {
              display: inline;
              float: right;
              padding: 0 8% 0 0;
              color: #999999;
              font-size: 0.24rem;
              width: 2rem;
              line-height: 0.8rem;
              a {
                color: #000;
              }
            }
          }
          .pingjia_bottom {
            // margin-top: 0.2rem;
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            margin-bottom: 1rem;
            // padding-bottom: 30px;
            font-size: 0.28rem;
            display: flex;
            justify-content: space-around;

            .img_Appraisals {
              padding: 0.3rem;
              color: red;
              border-right: 1px solid #e9e9e9;
              padding-right: 1.2rem;
              img {
                width: 0.32rem;
              }
              abbr {
                // color: red;
              }
            }
            .Consulting {
              padding: 0.3rem;
              img {
                width: 0.32rem;
              }
              abbr {
                // color: red;
              }
            }
          }
        }
      }
    }
  }
  .Goods_id {
    color: #999999;
    width: 1.1rem;
    display: inline-block;
    margin-right: 0.1rem;
    font-size: 0.26rem;
  }
  .activetwo {
    display: block !important;
    opacity: 1 !important;
  }
  .zezao{
    clear: both;
    width: 100%;
  }
}
</style>


