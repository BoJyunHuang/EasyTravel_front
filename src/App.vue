<script>
// import HeaderView from './components/Header.vue';
import LeftView from './components/Left.vue';

// import FooterView from './components/Footer.vue';

import { RouterView } from "vue-router"

export default {

  components: {
    // HeaderView,
    LeftView,
    // FooterView
  },
  data() {
    return {

    }
  }
}
</script>
<template>
  <div class="wrap">
    <!-- <HeaderView /> -->

    <div class="left">
      <LeftView />
    </div>

    <div class="nav">
      <RouterView />
    </div>
    
    <!-- <FooterView /> -->
  </div>
</template>

<style lang="scss" scoped>
.wrap{
  display: flex;
  
}
</style>