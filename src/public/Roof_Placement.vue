<template>
<div class="zhiding" v-if="disBlock">
     <i class="iconfont icon-zhiding" @click="backTop"></i>
</div>
</template>
<script>
export default {
    name:'zhiding',
    data() {
        return {
        ScrollTop:0,
        disBlock:false,
        }
    },

    //初始化
    mounted() {
        window.addEventListener('scroll',this.ScrollToTop)
    //    window.console.log(  window.addEventListener('scroll',this.ScrollToTop,true))
    },
    //销毁
    destroyed() {
        window.addEventListener('scroll',this.ScrollToTop)
    },
    methods: {
        // 当回到顶部时候有一个缓存时间,,,位移函数
        backTop()
        {
            let This=this;
            let timer=setInterval(()=>{
                This.scrollTop = document.documentElement.scrollTop || document.body.scrollTop 
                let speed=Math.floor(-This.scrollTop/5)
                // console.log(speed)
                This.scrollTop += speed
                document.documentElement.scrollTop = document.body.scrollTop = This.scrollTop
            // document.documentElement.scrollTop=document.body.scrollTop = This.scrollTop+speed;
            //    console.log(This.scrollTop)
                if(This.scrollTop===0){
                    clearInterval(timer)
                }
            },50)
        }
        ,
        //计算置顶图标出现与隐藏时的位置
        ScrollToTop(){
            let This=this;
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            // let dom=document.getElementsByClassName('index')[0].scrollTop;
            // This.ScrollTop=dom.scrollTop;
            if(currentScroll>200){
                This.disBlock=true
            }else{
                This.disBlock=false
            }
        }
    },
    
}
</script>
<style lang="scss" >
.zhiding{
    position: fixed;
    right: 0.1rem;
    bottom: 1.8rem;
     .icon-zhiding {
      font-size: 0.7rem;
    }
}

</style>
