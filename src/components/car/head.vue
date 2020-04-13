<template>
  <div class="index">
    <div class="header">
      <div class="search">
        <div class="black_img">
          <img src="/static/assets/category/go-hist.png" alt @click="$router.push('/')">
        </div>
        <div class="login">购物车</div>
      </div>
    </div>
    <div v-if="cartDataList.length">
      <div class="cars">
        <ul>
          <li v-for="(items,index) in cartDataList" :key="items.id">
            <div class="goods">
              <input
                type="checkbox"
                id="checks"
                @click="CheckItem(items)"
                v-model="items.judge"
                :class="items.judge==true?'active':''"
              >
              <label class="lables" for="checks"></label>
              <div class="good_img">
                <img :src="items.img" alt>
              </div>
              <div class="good_info">
                <div class="info_name">{{items.name}}</div>
                <div class="info_occupy"></div>
                <div class="price_num">
                  <div class="price">￥{{items.price}}</div>
                  <div class="num">
                    <div class="Plus_minus">
                      <span class="Subtracts" @click="del_add(items,-1)">-</span>
                      <div class="Square_box">
                        <input type="text" value="1" disabled v-model="items.num">
                      </div>
                      <span class="Plus" @click="del_add(items,+1)">+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="del_add">
                <div class="delete" @click="onClick(items)">删除</div>
                <div class="add">收藏</div>
              </div>
              <div class="good_bottom">
                <p>
                  小计：￥
                  <span>{{items.Subtotal}}</span>&nbsp;&nbsp;优惠：-￥
                  <span>0.00{{items.totalMoney}}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="toastTxt">
      <img src="/static/assets/car/03.png" alt>
      <h1>购物车还是空的，去挑选几件中意的商品吧！！</h1>
      <button type="button"  @click="$router.push('/')">去逛逛</button>
      <!-- <van-button type="primary" >去逛逛</van-button> -->
    </div>
    <div class="bottom">
      <van-submit-bar :price="totalMoney*100" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked" @click="allcheck()">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      item: [],
      checked: false,
      judge: false,
      onSubmit: [],
      temp: [],
      price: 0,
      Subtotal: 0,
      totalMoney: 0,
      show: false,
      curProduct: " ",
      num: "1",
    };
  },

  methods: {
    //单选按钮
    CheckItem(items) {
      //当括号没有勾选时进入
      items.judge = !items.judge;
      if (items.judge) {
        console.log(items.judge);
        this.temp.push(items.name);
      } else {
        this.index = this.temp.indexOf(items.name);
        this.temp.splice(this.index, 1);
      }
      if (this.temp.length === this.cartDataList.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
      //选中时修改总价格
      this.calcTotalPrice();
    },
    //全选按钮
    allcheck() {
      // window.console.log("点击了全选按钮")
      if (this.temp.length === this.cartDataList.length) {
        this.cartDataList.forEach((items, index) => {
          this.cartDataList[index].judge = false;
          this.temp = [];
        });
      } else {
        this.temp = [];
        this.cartDataList.forEach((items, index) => {
          this.cartDataList[index].judge = true;
          this.temp.push(this.cartDataList[index].name);
        });
      }
      //选中时修改总价格
      this.calcTotalPrice();
    },

    //商品数量的增加与减少
    del_add(a, b) {
      if (b > 0) {
        let priceadd = 0;
        a.num++;
        priceadd = a.num * a.price;
        // console.log(priceadd)
        a.Subtotal = priceadd;
      } else {
        let priceadd = 0;
        a.num--;
        if (a.num < 1) {
          a.num = 1;
        }
        priceadd = a.num * a.price;
        if (priceadd >= a.price) {
          a.Subtotal = priceadd;
        }
      }
      //选中时修改总价格
      this.calcTotalPrice();
    },
    calcTotalPrice: function() {
      this.totalMoney = 0; //每次遍历商品之前对总金额进行清零
      this.cartDataList.forEach(items => {
        //遍历商品，如果选中就进行加个计算，然后累加
        if (items.judge === true) {
          console.log(items.judge);
          this.totalMoney += items.price * items.num; //累加的
        }
      });
    },
    onClick(items) {
      this.curProduct = items;
      console.log(items)
      this.$dialog
        .alert({
          //加上标题
          message: "确定删除此商品吗？", //改变弹出框的内容
          showCancelButton: true //展示取水按钮
        })
        .then(() => {
          console.log("点击了确定按钮噢");
          console.log(this.curProduct);
          let index = this.cartDataList.indexOf(this.curProduct); //从当前商品列表找到要删除的商品元素

          console.log(index);

          this.cartDataList.splice(index, 1);
          if (this.cartDataList.length == 0) {
            this.checked = false;
            this.totalMoney = 0;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapGetters(["cartDataList"]) //cartDataList:购物车列表；
  }
};
</script>
<style lang="scss">
.index {
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
  .cars {
    ul {
      padding: 0px;
      li {
        padding: 10px 10px 0px 10px;
        border-bottom: 1px solid #e9e9e9;
        position: relative;
        .goods {
          display: inline-block;
          #checks {
            position: absolute;
            top: 0;
          }
          .lables {
            background-color: #fff;
            width: 0.46rem;
            height: 0.46rem;
            z-index: 99;
            margin-right: 5px;
            background-size: 16px;
            float: left;
          }
          .good_img {
            float: left;
            display: table-cell;
            overflow: hidden;
            width: 2rem;
            height: 2rem;
            background-color: #fff;
            vertical-align: middle;
            text-align: center;
            line-height: 79px;
            img {
              max-width: 2rem;
              max-height: 2rem;
              vertical-align: middle;
            }
          }
          .good_info {
            margin-left: 121px;
            .info_name {
              overflow: hidden;
              height: 40px;
              line-height: 1.5em;
              color: #000000;
              text-align: left;
              font-size: 0.26rem;
            }
            .info_occupy {
              color: #444;
              line-height: 20px;
              height: 40px;
              overflow: hidden;
            }
            .price_num {
              height: 20px;
              line-height: 20px;
              text-align: left;
              //   margin-top: 20px;
              display: flex;
              justify-content: space-around;
              line-height: 25px;
              .price {
                display: inline-block;
                font-size: 12px;
                width: 6em;
                float: left;
                color: red;
              }
              .num {
                .Plus_minus {
                  border: 1px solid #c3c3c3;
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
                    border: 1px solid #c3c3c3;
                    border-bottom: none;
                    border-top: none;
                    text-align: center;
                    line-height: 22px;
                    background: #fff;
                    color: #333;
                    // border-radius: 3px 2px 2px 3px;
                    float: left;
                    font-size: 0.28rem;
                  }
                  .Square_box {
                    float: left;
                    padding: 0px;
                    line-height: 5px;
                    input {
                      padding: 2px 2px;
                      width: 0.72rem;
                      color: #313131;
                      background-color: #fff;
                      text-align: center;
                      font-size: 14px;
                      vertical-align: text-top;
                      border: none;
                    }
                  }
                  .Plus {
                    float: left;
                    // border-radius: 2px 3px 3px 2px;
                    display: inline-block;
                    width: 0.56rem;
                    height: 0.44rem;
                    border: 1px solid #c3c3c3;
                    border-bottom: none;
                    border-top: none;
                    text-align: center;
                    line-height: 22px;
                    font-size: 0.24rem;
                  }
                }
              }
            }
          }
          .del_add {
            font-size: 0.24rem;
            display: flex;
            justify-content: flex-end;
            margin-right: 0.4rem;
            margin-top: 0.1rem;
            // margin-right: 20px;
            .delete {
              margin-right: 0.4rem;
            }
            .add {
            }
          }
          .good_bottom {
            display: flex;
            justify-content: space-evenly;
            p {
              font-size: 0.24rem;
              border-top: 1px dashed #f0f0f0;
            }
          }
        }
      }
    }
  }
  .bottom {
    .van-submit-bar {
      border-top: 1px solid #c3c3c3;
      .van-submit-bar__bar {
        .van-checkbox {
          margin-left: 0.4rem;
        }
      }
    }
  }
  .active {
    background: url(/static/assets/car/02.png) scroll center center no-repeat;
    background-size: 16px;
  }
  .toastTxt {
    margin: 0 auto;
    text-align: center;
    h1 {
      font-size: 0.28rem;
    }
    button{
          text-align: center;
          font-size: 0.32rem;
          width: 3.2rem;
          height: 0.8rem;
          line-height: 0.8rem;
          background: #00bad6;
          color: white;
          border: none;
          border-radius: 0.1rem;

    }
  }
}
</style>
