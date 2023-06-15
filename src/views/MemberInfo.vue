<script>
import { RouterView } from "vue-router";
import Left from "../components/Left.vue";
import MemberSearch from "./MemberSearch.vue";

export default {
     data() {
          return {
               
          }
     },
     components: {
          Left,
          MemberSearch
     },
     
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
               <!-- this.$route.path:  vue裡面router找路徑的方法 -->
               <MemberSearch v-if="this.$route.path == '/member-info'" />
              
               <RouterView v-else/>
          </div>
     </div>
</template>

<style lang="scss" scoped>
#MemberInfo-userInfo-Search {
     display: none;
}

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