<script>
import { RouterView } from "vue-router";
import Left from "../components/Left.vue";
export default {
     components: {
          Left
     }

}
</script>

<template>
     <br>
     <div class="wrap">
          <div class="link">
               <!-- 各大項連結 -->
               <Left />
          </div>
          <div class="main-page">
               <RouterView />
          </div>
     </div>
</template>

<style lang="scss" scoped>
.wrap {
     width: 100vw;
     display: flex;
     justify-content: space-between;

     .link {
          width: 20%;
     }

     .main-page {
          width: 80%;
          border: 1px solid black;
     }
}
</style>