<script>
import { RouterView } from "vue-router";
import VehicleNavView from "./components/VehicleNavView.vue"
import HeaderView from "./components/Header.vue";
export default {
  components: {
    VehicleNavView,
    HeaderView
  },
  data() {
    return {
      isShow:true
    }
  }
}
</script>

<template>
  <div class="vehicle">
    <VehicleNavView />
    <HeaderView v-if="isShow"/>
    <div class="work-area">
      <RouterView />
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.vehicle {
    width: 100vw;
    height: 100vh;
    display: flex;

}
  
.wrap {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  
</style>