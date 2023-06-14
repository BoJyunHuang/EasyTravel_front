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
               <!-- 這是 -->
               <RouterView />
          </div>
     </div>
</template>

<style lang="scss" scoped>
.wrap {
     // width: 100vw;
     display: flex;
     justify-content: space-between;

     .link {
          width: 15%;
     }

     .main-page {
          width: 85%;
          // border: 1px solid black;
     }
}
</style>