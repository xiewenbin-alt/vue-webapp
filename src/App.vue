<template>
  <div id="app">
    <router-view/>
    <tabbar v-show="$route.meta.keepAlive"/>
  </div>
</template>


<script>
import tabbar from ".././src/public/_fooder";
export default {
  name: "app",
  components: {
    tabbar
  },
};
</script>


<style>

</style>
