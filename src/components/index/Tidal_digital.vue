<template>
<div class="QueSec"> 
        <banner :banner = "banner"/>

    <div class="infos">
        <div class="big_Commodities" >
            <div class="top_Commodities">
                <div class="top_leftCom">
                    <div class="left_text">
                        <p class="texe_one">潮流</p>
                        <p class="texe_two">Man</p>
                        <p class="texe_three">魅力男人</p>
                    </div>
                    <div class="right_img">
                        <img src="/static/assets/index/Tidal_digital/01.png" alt="">
                    </div>
                </div>
                <div class="top_rightCom">
                    <div class="right_text">
                        <p class="texe_one">时尚</p>
                        <p class="texe_two">耳机</p>
                        <p class="texe_three">享音乐之类</p>
                    </div>
                    <div class="right_img">
                        <img src="/static/assets/index/Tidal_digital/02.png" alt="">
                    </div>
                </div>
            </div>
            <div class="botton_Commodities">
                <div class="top_leftCom" style="background:#f8f8f8">
                    <div class="left_text">
                        <p class="texe_one" style="background:#f8f8f8"></p>
                        <p class="texe_two">无人机馆</p>
                        <p class="texe_three">换个角度看世界</p>
                    </div>
                    <div class="right_img">
                        <img src="/static/assets/index/Tidal_digital/03.png" alt="">
                    </div>
                </div>
                <div class="top_rightCom" style="background: #eeeeee">
                    <div class="right_text">
                        <p class="texe_one" style="background: #eeeeee"></p>
                        <p class="texe_two">手机</p>
                        <p class="texe_three">iPhone 11 系列</p>
                    </div>
                    <div class="right_img">
                        <img src="/static/assets/index/Tidal_digital/04.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="both"></div>
        <div class="smll_Commodities">
            <div class="Kitchen_appliances" v-for="item in Kitchens" :key="item.id">
                <div class="top_img">
                    <img :src="item.img" alt="">
                </div>
                <div class="botton_text">
                    <p>{{item.text1}}</p>
                    <p>{{item.text2}}</p>
                </div>
            </div>
        </div>
        <!-- <div class="both_3"></div> -->
        <div class="swipers">
             <van-swipe :autoplay="2000" indicator-color="white" :show-indicators="false" >
                <van-swipe-item  v-for="item in SwiperImg" :key="item.id">
                    <img :src="item.img" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</div>  
</template>
<script>
import banner from "../../public/banner"

export default {
name:"QueSec",
data(){
    return{
      banner:{
          name:'潮流数码',
          img:'/static/assets/index/Tidal_digital/camera.png'
      },

       Kitchens:[
          {
               img:`/static/assets/index/Tidal_digital/05.png`,
               text1:`厨卫大电`,
               text2:`丰富你的生活`,
           },
           {
               img:`/static/assets/index/Tidal_digital/06.png`,
               text1:`美的生活馆`,
               text2:`格调生活`,
           }, {
               img:`/static/assets/index/Tidal_digital/07.png`,
               text1:`洗碗机`,
               text2:`解放双手`,
           }, {
               img:`/static/assets/index/Tidal_digital/08.png`,
               text1:`进口冰箱`,
               text2:`精挑细选`,
           }
       ],
       SwiperImg:[
           
              {img:'/static/assets/index/Tidal_digital/09.jpg'}, 
              {img:'/static/assets/index/Tidal_digital/09.jpg'}
           
       ]

    }
},
components:{
    banner
  }
    
}
</script>
<style lang="scss" scoped>
.QueSec{

    .infos{
        // width: 6.9rem;
        .big_Commodities{
           width: 7.5rem;
            .top_Commodities,
            .botton_Commodities{
            .top_leftCom{
                display: flex;
                background: #eeeeee;
                float: left;
                width: 3.75rem;
                .left_text{
                        margin: 0rem 0 0.4rem 0.3rem;
                    p{
                        &:nth-child(1){ 
                            font-size: 0.28rem;
                            margin: 0;
                            width:35px;
                            height: 20px;
                            color: white;
                            background: #00bcd7;
                            text-align: center;
                        }
                        &:nth-child(2){
                            font-size: 0.3rem;
                        }
                        &:nth-child(3){
                            font-size: 0.26rem;
                                color: #00bcd7;
                        }
                    }

                }
                .right_img{
                    width: 1.92rem;
                    height: 2.28rem;
                    position: absolute;
                    margin-left: 1.6rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    }

                }
            } 
            .top_rightCom{
                display: flex;
                background: #f8f8f8;
                float: right;
                width:3.75rem;
                .right_text{
                        margin: 0rem 0 0.4rem 0.3rem;
                    p{
                        &:nth-child(1){ 
                            font-size: 0.28rem;
                            margin: 0;
                            width:35px;
                            height: 20px;
                            color: white;
                            background:chocolate;
                            text-align: center;
                        }
                        &:nth-child(2){
                            font-size: 0.3rem;
                        }
                        &:nth-child(3){
                            font-size: 0.26rem;
                                color: #00bcd7;
                        }
                    }

                }
                .right_img{
                    width: 1.92rem;
                    height: 2.28rem;
                    position: absolute;
                    margin-left: 1.6rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    }

                }
            }

        }
        .smll_Commodities{
            width: 7.5rem;
            display: flex;
            .Kitchen_appliances{
                width: 25%;
                .top_img{
                    width: 1.875rem;
                    height: 1.34rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }

                }
                .botton_text{
                    p{
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: center;
                        &:nth-child(1){
                            font-size: 14.5px;
                        }
                        &:nth-child(2){
                            font-size: 12.5px;
                            color: #00bcd7;
                        }
                    }

                }

            }

        }
        .swipers{
            width: 7.5rem;
            background: #f4f4f4;
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;
            .van-swipe{
                width: 6.9rem;
                height: 1.6rem;
                margin: auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    .both{
        clear: both;
        width: 100%;
    }
    .both_3{
            clear: both;
            height: 0.3rem;
             width: 100%;
    }
}

</style>