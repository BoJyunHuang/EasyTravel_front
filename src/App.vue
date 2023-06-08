<script>
import { RouterView } from "vue-router";
import VehicleNavView from "./components/VehicleNavView.vue"
export default {
  components: {
    VehicleNavView
  }
}
</script>

<template>
  <div class="vehicle">
    <VehicleNavView />
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
  
</style>