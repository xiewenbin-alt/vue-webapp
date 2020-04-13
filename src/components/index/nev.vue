<template>
  <div calss="nev">
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="(item,index) in ImgList" :key="item.id">
        <van-image height="50" width="50" :src="item.img"/>
        <div class="text" :class="index== 1 ? 'style=color:red;':' '">{{item.text}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      ImgList: []
    };
  },
  created() {
    axios.get("/static/data.json").then(response => {
      console.log(response.data);
      this.ImgList = response.data.data.ImgList;
      console.log(this.ImgList)
    });
  }
};
</script>
<style lang="scss">
.nev {
  width: 6.9rem;
  margin-left: 0.3rem;
}
.van-grid {
  width: 6.9rem;
  margin-left: 0.3rem;
}

.van-grid-item__content {
  font-size: 0.24rem;
}
</style>