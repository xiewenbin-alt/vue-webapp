<template>
    <div class="Recommended">
        <v-header/>
        <v-footer/>
    </div>
</template>

<script>
import heard from '../components/Recom/header'
import footer from '../public/footer'
export default{
    components:{
        'v-header':heard,
        'v-footer':footer,
    }


}

</script>
<style lang="scss" scoped>


</style>