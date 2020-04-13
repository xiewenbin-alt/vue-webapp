    <template>
        <div class="swptext">
            <div class="content">
                <van-row type="flex">
                <van-col span="3">
                    <van-image height="0.6rem" width="0.86rem"  src="/static/assets/index/assembly_one/headline.png" />
                </van-col>
                <van-col span="1">
                </van-col>
                <van-col span="14">
                    <van-swipe style="height:30px;padding-top:0.1rem"  :autoplay="2000" :show-indicators="false" :loop="true" witdh="3.6rem" vertical >
                        <van-swipe-item style="width:'3.6rem';heigt:'1rem'" v-for="item in list" :key="item.id">{{item}}</van-swipe-item>
                    </van-swipe>
                </van-col>
            </van-row> 
            <div class="Img-two">
                    <van-image height="100%" width="100%" src="/static/assets/index/assembly_one/01.jpg"  />
            </div>  
            <div class="button_goods">
                    <div class='Imgone' v-for="(goods,index) in goodsinfo" :key="goods.id">
                        <div class="text_list">
                            <p>{{goods.goods_name}}</P>
                            <p class="name_class">{{goods.goods_type}}</P>
                            <van-tag type="warning" :class="index == 1 ? 'clickNow':' '">{{goods.goods_info}}</van-tag>
                        </div>
                        <div class="left_img">
                            <van-image height="100%" width="100%" :src="goods.goods_img"/>
                        </div>
                    </div>
            </div>
            </div>
            

         </div>
    </template>
    <script>
    export default {
        name:"swptext",
        data() {
            return {
                list:[
                   "顺电网上商城防骗公告",
                   "顺电网上商城购买流程",
                   '顺电网上商城平台协议'
                ],
                goodsinfo:[
                    {
                        goods_name:"华为",
                        goods_type:"Mate30 5G",
                        goods_info:"新品预定",
                        goods_img:"/static/assets/index/assembly_one/02.jpg"
                    },
                    {
                        goods_name:"Apple",
                        goods_type:"AirPods Pro",
                        goods_info:"火爆预售",
                        goods_img:"/static/assets/index/assembly_one/03.jpg"
                    }
                ]
            }
        },
        
    }
    </script>
   <style lang="scss" scoped>
    .swptext{
            // background: gray;
    }
    .content{
        width: 6.9rem;
            margin: 0.1rem 0 0 0.3rem;
                box-shadow: 1px 0px 18px -10px grey;
    }
    .van-swipe-item {
            font-size:0.33rem;
            // width: 3.6rem;
            // padding-top: 0.2rem
    }
    .lxw-news{
        margin: 0.12rem 0.2rem;
    } 
   
    .van-col{
        font-size:0.25rem;
            padding: 0.1rem 0 0.1rem 0.2rem;
    }
    .van-col--1{
    border-left:1px black;
    }
    .van-col--6 {
        width: 10%;
        // margin-left: 0.5rem;
    }
    .Img-two{
        // width:6.9rem;
        height: 2.18rem;
    }
    .button_goods{
        // width: 6.9rem;
        height: 2.28rem;
        display: flex;
        justify-content: space-between;
            background: #f4f4f4;
    .Imgone{
            width: 3.35rem;
            height: 2.28rem;
            display: flex;
            background: white;
        .text_list{
            p{
                font-family:"微软雅黑";
                position: relative;
                &:nth-child(1){
                    font-size: 0.28rem;
                    margin: 0.8rem 0 0 0.2rem;
                }
                &:nth-child(2){
                    font-size: 0.24rem;
                    margin-left: 0.2rem;
                    position: absolute;
                    margin-top: 0rem;
                    color: #666666;
                }
             }
            .van-tag--warning {
                background-color:#fc7b2a;
                position: absolute;
                margin-top: 0.5rem;
                margin-left: 0.2rem;
                font-size: 0.24rem;
             }
        }
        .left_img{
            position: relative;
            width:1.11rem;
            height:1.11rem;
            top: 0.5rem;
            right: -1.2rem;
            }
        }  
        .clickNow{
            background: red !important;
        }
  
   
   }
    </style>