<script>
import { RouterView } from "vue-router"
import HeaderView from "./components/Header.vue";
export default {
  components: {
    HeaderView
  },
  data() {
    return {
      isShow:true
    }
  },
}
</script>

    
<template>
  <HeaderView v-if="isShow"/>
  <div class="wrap">
    <RouterView />
  </div>
</template>
<style>
.wrap {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  
</style>