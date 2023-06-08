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
  <div>
    <VehicleNavView />
    <div class="work-area">
      <RouterView />
    </div>
    
  </div>
</template>

<style lang="scss">
  div {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>