 <template>
    <div class="Characteristic_service">
    <banner :banner = "banner"/>

    <div class="service_content">
        <div class="top">
            <a href="javascript:"  v-for="item in lists" :key="item.id">
                <div class="one">
                    <div class="one_text">
                        <p>{{item.name}}</p>
                        <p>{{item.info}}</p>
                    </div>
                    <div class="one_img">
                        <img :src="item.img" alt="">  
                    </div>
                </div>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
import banner from "../../public/banner"

export default {
    name:'Characteristic_service',
    data(){
        return{
      banner:{
          name:"特色服务",
          img:'/static/assets/index/Characteristic_service/001.png'
      } ,

            lists:[
                {
                    name:`顺电APP`,
                    info:`欢迎下载体验`,
                    img:` /static/assets/index/Characteristic_service/01.png`
                }, {
                    name:`以旧换新`,
                    info:`限时增资服务`,
                    img:` /static/assets/index/Characteristic_service/02.png`
                }, {
                    name:`门店查询`,
                    info:`邂逅身边顺电`,
                    img:` /static/assets/index/Characteristic_service/03.png`
                }, {
                    name:`帮助中心`,
                    info:`答疑解惑`,
                    img:` /static/assets/index/Characteristic_service/04.png`
                },

            ]
        }
    },
     components:{
    banner
  }
    
}
</script>
<style lang="scss">
.Characteristic_service{
        background: #f4f4f4;
     .service_content{
        width: 7rem;
        height: 4.5rem;
         margin: 0.2rem auto;
        .top{
            display:flex;
            flex-wrap:wrap ;

            a{
             display:block;
             text-decoration: none;
             margin: 0.05rem 0.05rem;
             display: flex;
             .one{
                 width: 3.4rem;
                    height: 2.02rem;
                     display:flex;
                     background:white;

                 .one_text{
                     padding-top: 0.2rem;
                        margin-left: 0.2rem;

                     p{
                           width:1.8rem;
                         &:nth-child(1){
                            font-size:0.3rem;
                            color:black;
                            margin-bottom:0;
                         }
                          &:nth-child(2){
                             font-size:0.28rem;  
                                 color: #8864d6 ;
                                 margin-top: 0.15rem;                          
                         }
                     }

                 }
                 .one_img{
                    width: 1.37rem;
                    height: 2.02rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                 }

             }
         }
         }
        
    }

}

</style>