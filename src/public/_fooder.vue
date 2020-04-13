<template>
  <div class="Tabbar">
    <div class="btn">
      <van-tabbar v-model="active" bind:change="onChange" :route="true">
        <van-tabbar-item name="index" to="/index" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item  name="Category" to="/Category" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item   name="Recom" to="/Recom" icon="goods-collect">好价推荐</van-tabbar-item>
        <van-tabbar-item  name="Car" to="/Car" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item  name="user" to="/user" icon="user-circle-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: this.$route.path.split("/")[1]
    };
  },
  updated() {

   

  },
};
</script>

<style lang="scss" scoped>
.Tabbar{
  height:0.5rem;
}
.van-tabbar-item--active {
    color: #00bbd7
}

</style>