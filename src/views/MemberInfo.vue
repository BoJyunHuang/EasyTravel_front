<script>
import { RouterView } from "vue-router";
import Left from "../components/Left.vue";
import MemberSearch from "./MemberSearch.vue";

export default {
     data() {
          return {
               showOrClose: true
          }
     },
     components: {
          Left,
          MemberSearch
     },
     mounted() {
          // let MemberInfoButton = document.querySelector(".linkUser");
          // console.log(MemberInfoButton);
          // this.showOrClose = true
          // MemberInfoButton.onclick = (e) => {
          //      this.showOrClose = false
          // }

     }, methods: {
          ccc() {
               console.log("?!!!");
          },

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
               <MemberSearch v-if="this.$route.path == '/member-info'" />

               <!-- <RouterLink class="linkUser fs-6" to="/member-search" id="MemberInfo-userInfo-Search">會員資訊查詢</RouterLink> -->

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