<template>
  <div class="user">
    <v-header/>
    <v-userinfo/>
    <v-myorder/>
    <v-bottomconten/>
  </div>
</template>
<script>
 import header from '../components/user/header'
 import userinfo from '../components/user/userinfo'
 import myorder from '../components/user/my_order'
 import bottomconten from '../components/user/bottom_conten'
export default{
  components:{
'v-header':header,
'v-userinfo':userinfo,
'v-myorder':myorder,
'v-bottomconten':bottomconten,
  }
}
</script>
<style lang="scss" scoped>

</style>