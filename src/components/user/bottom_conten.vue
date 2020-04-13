<template>
  <div class="bottom_conten">
    <div class="conten_temp">
      <div class="Activities">
        <div class="Activities_title"></div>
        <div class="Activities_conten">
          <div class="swiper-wrapper">
            <a href="javascript:">
              <img src="/static/assets/user/16.jpg" alt />
            </a>
          </div>
        </div>
      </div>
      <div class="Recommended">
        <div class="Recommended_title"></div>
        <div class="Recommended_conten">
          <div class="conten_info" v-for="item in items" :key="item.id">
            <div class="img">
              <img :src="item.img" alt />
            </div>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
            <div class="ljgm">立即购买</div>
          </div>
        </div>
      </div>
      <div class="l-c-clearfix"></div>
      <div class="Discount">
        <div class="Discount_title"></div>
        <div class="Discount_conten">
          <div class="conten_info" v-for="item in itemss" :key="item.id">
            <div class="img">
              <img :src="item.img" alt />
            </div>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
            <div class="ljgm">立即购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          img: `/static/assets/user/17.jpg`,
          name: `美的32声蒸汽微波炉蒸烤`,
          info: `高温250度石窖烧烤`
        },
        {
          img: `/static/assets/user/18.jpg`,
          name: `富士日本原装进口按摩椅`,
          info: `21种按摩程序`
        },
        {
          img: `/static/assets/user/19.jpg`,
          name: `布鲁雅尔智能空气净化器`,
          info: `自动调节净化挡位`
        },
        {
          img: `/static/assets/user/20.jpg`,
          name: `ipad 10.2寸2019年型新款`,
          info: `800万后置摄像头`
        }
      ],
      itemss: [
        {
          img: `/static/assets/user/22.jpg`,
          name: `Apple ipad 2018年款9.7`,
          info: `兼容Apple Pencil 第一代`
        },
        {
          img: `/static/assets/user/23.jpg`,
          name: `松下口腔清洗器`,
          info: `标准喷射水流模式`
        },
        {
          img: `/static/assets/user/24.jpg`,
          name: `松下纳米水离子空气净化器`,
          info: `搭载nanoe水离子`
        },
        {
          img: `/static/assets/user/25.jpg`,
          name: `美的加热破壁器BL011A`,
          info: `冷热双杯不串味`
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.bottom_conten {
  width: 7.5rem;
  margin-bottom: 0.5rem;
  .conten_temp {
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    // padding-bottom: 0.2rem;
    .Activities {
      .Activities_title {
        background: url(/static/assets/user/15.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        width: 95%;
        height: 0.6rem;
      }
      .Activities_conten {
        margin: 0.1rem auto;
        width: 95%;
        height: 3rem;
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          a {
            color: #333;
            text-decoration: none;
            img {
              margin: 0 auto;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .Recommended {
      .Recommended_title {
        background: url(/static/assets/user/22.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        width: 95%;
        height: 0.6rem;
      }
      .Recommended_conten {
        width: 95%;
        margin: auto;
        .conten_info {
          width: 3.46rem;
          height: 3.7rem;
          background: #fff;
          margin: 0.1rem 0.05rem;
          text-align: center;
          float: left;
          .img {
            margin: 0.1rem auto;
            width: 2rem;
            height: 2rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .name {
            font-size: 0.28rem;
            color: #000;
            margin-top: 0.1rem;
            overflow: hidden;
            height: 0.4rem;
          }
          .info {
            font-size: 0.2rem;
            color: #626262;
            margin-top: 0.05rem;
            height: 0.3rem;
            overflow: hidden;
          }
          .ljgm {
            width: 1.5rem;
            height: 0.4rem;
            background: url(/static/assets/user/c-button.png) no-repeat;
            background-size: 100% 100%;
            font-size: 0.2rem;
            color: #fff;
            line-height: 0.4rem;
            margin: 0.2rem auto 0 auto;
          }
        }
      }
    }
    .Discount {
      .Discount_title {
        background: url(/static/assets/user/21.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        width: 94%;
        height: 0.6rem;
      }
      .Discount_conten {
        width: 95%;
        margin: auto;
        overflow: hidden;
        .conten_info {
          width: 3.46rem;
          height: 3.7rem;
          background: #fff;
          margin: 0.1rem 0.05rem;
          text-align: center;
          float: left;
          .img {
            margin: 0.1rem auto;
            width: 2rem;
            height: 2rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .name {
            font-size: 0.28rem;
            color: #000;
            margin-top: 0.1rem;
            overflow: hidden;
            height: 0.4rem;
          }
          .info {
            font-size: 0.2rem;
            color: #626262;
            margin-top: 0.05rem;
            height: 0.3rem;
            overflow: hidden;
          }
          .ljgm {
            width: 1.5rem;
            height: 0.4rem;
            background: url(/static/assets/user/c-button.png) no-repeat;
            background-size: 100% 100%;
            font-size: 0.2rem;
            color: #fff;
            line-height: 0.4rem;
            margin: 0.2rem auto 0 auto;
          }
        }
      }
    }
  }
  .l-c-clearfix {
    width: 100%;
    clear: both;
  }
}
</style>