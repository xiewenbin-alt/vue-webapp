<template>
<div class="LimTed">
    <banner :banner = "banner"/>
    <div class="lists">
        <div class="sh_info" v-for="item in list" :key="item.id">
            <div class="top_img">
                <img :src="item.img" alt="">
            </div>
            <div class="botton_text">
                <p class="name">{{item.name}}</p>
                <p class="name_class">{{item.name_class}}</p>
                <p class="sm_price">￥{{item.sm_price}}</p>
                <p class="bg_price">￥{{item.bg_price}}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import banner from "../../public/banner"

export default{
    name:'LimTed',
    data(){
        return{
     banner:{
         img:'/static/assets/index/Limited/time.png',
         name:'限时特惠',

     },
    list:[
              {
                  img:`/static/assets/index/Limited/01.jpg`,
                  name:`Apple`,
                  name_class: `AirPods`,
                  sm_price:`999`,
                  bg_price:'1399',
              },
              {
                  img:`/static/assets/index/Limited/02.jpg`,
                  name:`进口戴森吹风机`,
                  name_class: `风机`,
                  sm_price:`2990`,
                  bg_price:'2990',
              },
               {
                  img:`/static/assets/index/Limited/03.jpg`,
                  name:`马歇尔无线`,
                  name_class: `蓝牙音箱`,
                  sm_price:`2799`,
                  bg_price:'2899',
              },
               {
                  img:`/static/assets/index/Limited/041.jpg`,
                  name:`华为Mate`,
                  name_class: `30 5G`,
                  sm_price:`5499`,
                  bg_price:'5499',
              },

          ]  
        }
    },
   components:{
       banner
   }

}
</script>
<style lang="scss" scoped>
.LimTed{
        padding-top: 0.2rem;
        background: #f4f4f4;
        padding-bottom: 0.3rem;
    .lists{
        display: flex;
    .sh_info{
        width: 2rem;
        background: white;
        margin-top: 0.1rem;
        .top_img{
            width: 1.48rem;
            height: 1.48rem;
            margin: auto;
            padding-top: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .botton_text{
            text-align: center;
            
            p{
                margin-bottom: -0.2rem;
                &:nth-child(1){
                    font-size: 0.25rem;
                        color: #333;
                }
                 &:nth-child(2){
                    font-size: 0.25rem;
                        color: #333;
                }
                 &:nth-child(3){
                    font-size: 0.3rem;
                    color: red;
                }
                 &:nth-child(4){
                    font-size: 0.26rem;
                    color: #989898;
                    text-decoration: line-through;
                margin-bottom: 0;

                }
            }
        }
    }
}
}

</style>