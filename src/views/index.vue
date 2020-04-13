<template>
  <div id="index">
    <v-header/> 
    <v-headers/>
    <div class="lxw-clearfix-2"></div>
    <v-swiper/>
    <div class="lxw-clearfix-1"></div>
    <v-nev/>
    <div class="lxw-clearfix-2"></div>
    <v-assembly/>
    <div class="lxw-clearfix-2"></div>
    <v-Limited/>
    <div class="lxw-clearfix-1"></div>
    <v-QueSec/>
    <div class="lxw-clearfix-1"></div>
    <v-Tidal/>
    <div class="lxw-clearfix-1"></div>
    <v-BrandStreet/>
    <div class="lxw-clearfix"></div>
    <v-service/>
    <v-Recommended/>
      <v-zhiding/>
  </div>
</template>
<script>
import heard from '../components/index/heard'
import heards from '../components/index/heards'
import swiper from '../components/index/swiper'
import nev from '../components/index/nev'
import assembly from '../components/index/assembly_one'
import Limited from '../components/index/Limited'
import QueSec from '../components/index/QueSec'
import Tidal from '../components/index/Tidal_digital'
import Brand_Street from '../components/index/Brand_Street'
import service from '../components/index/Characteristic_service'
import Recommended from '../components/index/Recommended'
import zhiding from '../public/Roof_Placement'


export default{
  components:{
    'v-header':heard,
    'v-headers':heards,
    'v-swiper':swiper,
    'v-nev':nev,
    'v-assembly':assembly,
    'v-Limited':Limited,
    'v-QueSec':QueSec,
    'v-Tidal':Tidal,
    'v-BrandStreet':Brand_Street,
    'v-service':service,
    'v-Recommended':Recommended,
      'v-zhiding':zhiding,
  }
}

</script>
<style lang="scss" scoped>
.lxw-clearfix-1{
    clear: both;
    height: 0.1rem;
    width: 100%;
}
.lxw-clearfix-2{
    clear: both;
    height: 0.2rem;
    width: 100%;
}
.lxw-clearfix{
      width: 100%;
      clear: both;
}

</style>