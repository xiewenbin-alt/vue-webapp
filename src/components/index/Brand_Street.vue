<template>
  <div class="Brand_Street">
   
    <banner :banner = "banner"/>
    <div class="Brand_info_s">
      <div class="Brand_info">
      <div class="Brand"  v-for="item in lists" :key="item.id">
        <div class="top_img">
          <img :src="item.img" alt />
        </div>
        <div class="botton_text">
            <p>{{item.name1}}</p>
            <p>{{item.name2}}</p>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>
<script>
import banner from "../../public/banner"
export default {
  name:"Brand_Street",
  data(){
    return{

      lists:[
        {
            img:`/static/assets/index/Brand_Street/04.png`,
            name1:`Apple`,
            name2:`iphone`},
         { 
           img:`/static/assets/index/Brand_Street/05.png`,
            name1:`华为`,
            name2:`华为 mate30`}, 
        { 
            img:`/static/assets/index/Brand_Street/06.png`,
            name1:`西门子`,
            name2:`冰洗厨电`},
         { 
           img:`/static/assets/index/Brand_Street/07.png`,
            name1:`微软`,
            name2:`Surface`},
         { 
            img:`/static/assets/index/Brand_Street/08.png`,
            name1:`三星`,
            name2:`Galaxy Note 10`
            },{
            img:`/static/assets/index/Brand_Street/09.png`,
            name1:`松下`,
            name2:` `},
         { 
           img:`/static/assets/index/Brand_Street/10.png`,
            name1:`索尼`,
            name2:` `}, 
        { 
            img:`/static/assets/index/Brand_Street/11.png`,
            name1:`小米`,
            name2:`小米9`},
         { 
           img:`/static/assets/index/Brand_Street/12.png`,
            name1:`LG`,
            name2:` `},
         { 
            img:`/static/assets/index/Brand_Street/13.png`,
            name1:`凯驰`,
            name2:` `
            },
       { 
            img:`/static/assets/index/Brand_Street/14.png`,
            name1:`佳能`,
            name2:` `},
         { 
           img:`/static/assets/index/Brand_Street/15.png`,
            name1:`外星人`,
            name2:`全直流变频`},
         { 
            img:`/static/assets/index/Brand_Street/16.png`,
            name1:`美的`,
            name2:`全直流变频`
            }, { 
            img:`/static/assets/index/Brand_Street/17.png`,
            name1:`格力`,
            name2:`变频空调`
            }, { 
            img:`/static/assets/index/Brand_Street/18.png`,
            name1:`卡莎蒂`,
            name2:``
            },
       
      ],
      banner:{
        name:"品牌街",
        img:'/static/assets/index/Brand_Street/01.png'
      }
    }
 

  },
  components:{
    banner
  }
  



};
</script>
<style lang="scss" scoped>
.Brand_Street {
        background: #f4f4f4;
  .title_name {
    //  padding-top: 0.2rem;
    background: white;
    display: flex;
    justify-content: space-between;
    width: 7.5rem;
    .left {
      height: 0.5rem;
      display: flex;
      padding: 0.2rem 0 0.2rem 0;
      .time_img {
        background: url(/static/assets/index/Brand_Street/01.png) no-repeat;
        width: 0.32rem;
        height: 0.32rem;
        background-size: 100%;
        margin: 0.1rem 0 0.11rem 0.28rem;
      }
      .title_text {
        font-size: 0.28rem;
        margin-left: 0.1rem;
        margin-top: 0.1rem;
        font-weight: bold;
      }
    }
    .right {
      display: flex;
      p {
        font-size: 0.28rem;
        color: #666;
      }
      .right_png {
        background: url(/static/assets/index/Limited/more.png) no-repeat;
        width: 0.27rem;
        height: 0.27rem;
        background-size: 100%;
        margin-top: 0.35rem;
        margin-right: 0.3rem;
      }
    }
  }
  .Brand_info_s{
    width: 7.5rem;
    overflow: hidden;
     .Brand_info{
        // display:flex;
        display: -webkit-box;
            overflow-x: scroll;
            // -webkit-overflow-scrolling:touch;
         
            &::-webkit-scrollbar { //去除滚动条，设置滚动条的背景颜色为透明
                background-color: transparent;
            }
      .Brand{
            width:2rem;
            background:white;
            margin-right:0.2rem;
            margin-top: 0.2rem;
          .top_img{
            margin-top: 0.1rem;
            width: 1.98rem;
            height: 1.27rem;
            img{
                width: 100%;
                height: 100%;
            }

          }
          .botton_text{
              p{
                width: 1.98rem;
                text-align:center;
                margin:0;      
                &:nth-child(1){
                  font-size:0.34rem;
                }
                &:nth-child(2){
                  font-size:0.26rem;
                  color:red;
                }
              }
          }
      }
      
  }
  }
 
}
</style>