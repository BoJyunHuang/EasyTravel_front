<script>
import { RouterView } from "vue-router";
import HeaderView from "./components/Header.vue";
import FooterView from './components/Footer.vue'

export default {
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<template>
  <HeaderView v-if="isShow" />
  <div class="vehicle">
    <div class="work-area">
      <RouterView />
    </div>
  </div>
  <FooterView />
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