<script>


import { RouterLink } from "vue-router";

export default {

}
</script>
<template>
     <div class="out">
         
          <div class="p-4">
               <RouterLink class="link fs-6" to="/active">アクティブ化</RouterLink>
          </div>
          <div class="p-4">
               <RouterLink class="link fs-6" to="/member-search">お問い合わせ</RouterLink>
          </div>
          <div class="p-4">
               <!-- 改訂会員情報 -->
               <RouterLink class="link fs-6" to="/update">会員情報変更</RouterLink>
          </div>
          <div class="p-4">
               <RouterLink class="link fs-6" to="/upgrade">有料会員</RouterLink>

          </div>
          <div class="p-4">
               <RouterLink class="link fs-6" to="/deleteVIP">取り消すVIP</RouterLink>
          </div>


     </div>
</template>

<style lang="scss" scoped>


.out {
     // display: flex;

     width: 20vw;

     padding-bottom: 0.5rem;
     background-color: #C1395E;
     font-size: 1.5rem;
     // 

     .link {
          // 取消下底線
          text-decoration: none;
          color: white;
          cursor: pointer;
          transition: 0.4s;
          // scale: 01.5rem;
          margin: 3rem 0rem;

          &:hover {

               color: rgb(201, 201, 103);
          }
     }



}
</style>