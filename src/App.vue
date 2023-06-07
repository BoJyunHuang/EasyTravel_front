<script>
import HeaderView from './components/Header.vue';

import FooterView from './components/Footer.vue';

import {RouterView } from "vue-router"

export default {

  components:{
    
    HeaderView,
    FooterView
  },
  data() {
    return {
      
    }
  }
}
</script>
<template>
  
  <div class="wrap">
    <HeaderView />
    <RouterView />
    <FooterView />
  </div>
</template>

<style lang="scss" scoped>
  
</style>