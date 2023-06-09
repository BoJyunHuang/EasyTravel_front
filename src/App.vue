<script>
import { RouterView } from "vue-router";
import HeaderView from "./components/Header.vue";
export default {
  components: {
    HeaderView
  }
}
</script>

<template>
  <HeaderView />
  <div class="main-page">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>