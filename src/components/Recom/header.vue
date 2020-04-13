<template>
  <div class="box">
    <header>
      <div class="conten">
        <span>
          <!-- <van-icon name="arrow-left" style="font-size:'35px'" /> -->
        </span>
        <div class="text">好价推荐</div>
      </div>
    </header>
    <div class="swiper">
      <van-swipe :autoplay="2000" :loop="true">
        <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="clar"></div>
    <div class="ulinfo">
      <ul>
        <li v-for="(item,index) in items" :key="item.id" @click="abc(index)">
          <div class="ulinfo_img">
            <img :src="item.img" alt />
          </div>
          <p>{{item.info_name}}</p>
          <div class="lis_botton">
            <div class="price">￥{{item.price}}</div>
            <div class="butt">立即购买</div>
          </div>
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SwiperImg: [
        "/static/assets/Recom/swiper1.jpg",
        "/static/assets/Recom/swiper1.jpg",
        "/static/assets/Recom/swiper1.jpg"
      ],
      items: [
        {
          img: `/static/assets/Recom/01.jpg`,
          info_name: `美国网件（NETGEAR）6000M高速抗干扰路由器 RAX80（黑色）`,
          price: `2499`,
          id: `01`,
          Text: [
            "WIFi6网络技术标准",
            "BSS技术消除外部信号干扰",
            "四核处理器，强大的处理能力",
            "容量大，可接入更多的设备"
          ],
          Img: [
            "/static/assets/Detail/01.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/12.jpg",
          ]
        },
        {
          img: `/static/assets/Recom/02.jpg`,
          info_name: `马歇尔（Marshall）Kilburn II 摇滚重低音无线蓝牙音箱（黑色）`,
          price: `2799`,
          id: `02`,
          Text: [
            "IPX2级防水设计，轻度防溅",
            "坚固耐用的便携设计",
            "蓝牙5.0aptX编码技术，可无限播放音乐",
            "单次充电可无限续航20小时",
            "复古旋钮，高低自由调节"
          ],
          Img: [
            "/static/assets/Detail/20.jpg",
            "/static/assets/Detail/21.jpg",
            "/static/assets/Detail/22.jpg",
          ]
        },
        {
          img: `/static/assets/Recom/03.jpg`,
          info_name: `产地马来西亚 进口索尼（SONY）真无线蓝牙降噪耳机 WF-1000XM3（铂金银）`,
          price: `1499`,
          id: `03`,
          Text: [
            "触控面板，多样功能一指掌控",
            "蓝牙5.0技术，稳定无线连接",
            "不仅降噪，音质也同样出色",
            "合适贴耳朵，佩戴稳固"
          ],
          Img: [
            "/static/assets/Detail/30.jpg",
            "/static/assets/Detail/31.jpg",
            "/static/assets/Detail/32.jpg",
          ]
        },
        {
          img: `/static/assets/Recom/04.jpg`,
          info_name: `创维(Skyworth) 55英寸OLED平面电视 55S8A`,
          price: `7999`,
          id: `15`,
          Text: [
            "3级能效",
            "酷开5.8系统",
            "刷新频率150HZ",
            "四面无边一体化设计",
            "屏幕分辨率3840*2160"
          ],
          Img: [
            "/static/assets/Detail/40.jpg",
            "/static/assets/Detail/41.jpg",
            "/static/assets/Detail/43.jpg",
          ]
        },
        {
          img: `/static/assets/Recom/05.jpg`,
          info_name: `美的（Midea）5L压力锅HT5088PG(银黑色)【晒单送好礼】`,
          price: `1999`,
          id: `04`,
          Text: [
            "1600W大火力，烹饪更入味",
            "1.7mm金刚厚鑫，锅厚更浓香",
            "盖板易拆，可彻底清洗",
            "人性化设计，使用方便"
          ],
          Img: [
            "/static/assets/Detail/50.jpg",
            "/static/assets/Detail/51.jpg",
            "/static/assets/Detail/52.jpg",
          ]
        },
        {
          img: `/static/assets/Recom/06.jpg`,
          info_name: `多田（Taada）11升 平衡式 顶排式 天然气热水器 JSG22YS1100FM 【特价商品，非质量问题不退不换，售完即止】【清仓折扣】`,
          price: `3750`,
          id: `05`,
          Text: [
            "3级能效",
            "酷开5.8系统",
            "刷新频率150HZ",
            "四面无边一体化设计"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        },
        {
          img: `/static/assets/Recom/07.jpg`,
          info_name: `产地波兰 进口西门子（SIEMENS）9公斤 热泵式干衣机 WT47W5681W（银色）`,
          price: `1299`,
          id: `06`,
          Text: [
            "3级能效",
            "酷开5.8系统",
            "刷新频率150HZ",
            "四面无边一体化设计",
            "屏幕分辨率3840*2160"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        },
        {
          img: `/static/assets/Recom/08.png`,
          info_name: `荣耀（Honor）20S 8GB+128GB 3200万人像超级夜景 4800万超广角AI三摄 麒麟810旗舰级芯片 全网通版商务手机`,
          price: `3388`,
          id: `07`,
          Text: [
            "蓝牙5.0技术，稳定无线连接",
            "不仅降噪，音质也同样出色",
            "合适贴耳朵，佩戴稳固"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        },
        {
          img: `/static/assets/Recom/09.jpg`,
          info_name: `华为（HUAWEI）WATCH GT 时尚款 智能运动手表（钢色）FTN-B19`,
          price: `2198`,
          id: `08`,
          Text: [
            "3级能效",
            "酷开5.8系统",
            "刷新频率150HZ",
            "四面无边一体化设计"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        },
        {
          img: `/static/assets/Recom/10.jpg`,
          info_name: `夏普(SHARP) 50英寸4K液晶平面电视 LCD-50SU671A`,
          price: `999`,
          id: `09`,
          Text: [
            "3级能效",
            "酷开5.8系统",
            "刷新频率150HZ",
            "四面无边一体化设计",
            "屏幕分辨率3840*2160"
          ]
        },
        {
          img: `/static/assets/Recom/11.jpg`,
          info_name: `vivo S1 Pro 3200万AI高清自拍 零界全面屏 6G+256G全网通4G 双卡双待 娱乐手机V1832A`,
          price: `2399`,
          id: `10`,
          Text: [
            "蓝牙5.0技术，稳定无线连接",
            "不仅降噪，音质也同样出色",
            "合适贴耳朵，佩戴稳固"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        },
        {
          img: `/static/assets/Recom/12.jpg`,
          info_name: `TOKIT IH智能电饭煲TDFBD01ACM(黑白经典)`,
          price: `1399`,
          id: `11`,
          Text: [
            "1600W大火力，烹饪更入味",
            "1.7mm金刚厚鑫，锅厚更浓香",
            "盖板易拆，可彻底清洗",
            "人性化设计，使用方便"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        },
        {
          img: `/static/assets/Recom/13.jpg`,
          info_name: `北鼎（Buydeem）1.5L多功能养生壶K185（曜石黑）`,
          price: `899`,
          id: `12`,
          Text: [
            "蓝牙5.0技术，稳定无线连接",
            "不仅降噪，音质也同样出色",
            "合适贴耳朵，佩戴稳固"
          ]
        },
        {
          img: `/static/assets/Recom/14.jpg`,
          info_name: `三星（SAMSUNG）75英寸 4K 光质量子点平面电视 QA75Q60RAJXXZ（黑色）`,
          price: `2499`,
          id: `13`,
          Text: [
            "1600W大火力，烹饪更入味",
            "1.7mm金刚厚鑫，锅厚更浓香",
            "盖板易拆，可彻底清洗",
            "人性化设计，使用方便"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        },
        {
          img: `/static/assets/Recom/15.jpg`,
          info_name: `松下（Panasonic）纳米水离子电吹风 EH-NA98CP405`,
          price: `2499`,
          id: `14`,
          Text: [
            "不仅降噪，音质也同样出色",
            "合适贴耳朵，佩戴稳固",
            "1.7mm金刚厚鑫，锅厚更浓香",
            "盖板易拆，可彻底清洗"
          ],
          Img: [
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg",
            "/static/assets/Detail/02.jpg"
          ]
        }
      ]
    };
  },
  methods: {
    abc(index) {
      this.$router.push({
        name: "详情页",
        params: {
          name: "param",
          info: this.items[index]
        }
      });
    }
  }
};
</script>
<style lang="scss">
.box {
  width: 7.5rem;
  header {
    // width:7.5rem;
    height: 40px;
    // background: #00bbd7;
    .conten {
      height: 45px;
      line-height: 45px;
      width: 100%;
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      background: linear-gradient(#00ccee, #61e7fb);
      z-index: 10;
      .text {
        color: white;
        text-align: center;
        font-size: 0.4rem;
        position: absolute;
        left: 50%;
        margin-left: -1rem;
      }
      span {
        .van-icon {
          font-size: 30px;
          color: white;
        }
      }
    }
  }
  .swiper {
    width: 7.5rem;
    height: 3.4rem;
    margin-left: 0rem;
    //  box-shadow: 2px -1px 16px -3px gray;
    .van-swipe {
      width: 100%;
      height: 100%;
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
  .clar {
    clear: both;
    width: 100%;
    height: 10px;
    border-bottom: 1px solid #e9e9e9;
  }
  .ulinfo {
    width: 7.5rem;
    ul {
      width: 100%;
      overflow: hidden;
      list-style: none;
      background: #fff;
      li {
        width: 49.65%;
        position: relative;
        float: left;
        border-right: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
        .ulinfo_img {
          width: 100%;
          text-align: center;
          line-height: 162px;
          height: 162px;
          overflow: hidden;
          img {
            max-height: 162px;
            overflow: hidden;
            vertical-align: middle;
          }
        }
        p {
          color: #313131;
          font-family: "微软雅黑";
          font-size: 12px;
          display: block;
          width: 90%;
          margin: auto;
          height: 40px;
          overflow: hidden;
          line-height: 20px;
        }
        .lis_botton {
          width: 90%;
          margin: 0 auto;
          font-size: 16px;
          .price {
            margin-top: 15px;
            margin-bottom: 15px;
            color: #00bbd7;
            width: 60px;
            height: 25px;
            float: left;
          }
          .butt {
            float: right;
            margin-top: 10px;
            margin-bottom: 15px;
            width: 80px;
            height: 25px;
            text-align: center;
            color: #fff;
            background: #00bbd7;
            line-height: 25px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>