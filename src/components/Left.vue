<script>


import { RouterLink } from "vue-router";

export default {

}
</script>
<template>
     <div class="out">
          <div class="p-4 aa">
               <RouterLink class="link" to="/register">登録</RouterLink>
          </div>
          <div class="p-4">
               <RouterLink class="link" to="/active">アクティブ化</RouterLink>
          </div>
          <div class="p-4">
               <RouterLink class="link" to="/login">ログイン</RouterLink>
          </div>
          <div class="p-4">
               <RouterLink class="link" to="/member-search">お問い合わせ</RouterLink>
          </div>
          <div class="p-4">
               <!-- 改訂会員情報 -->
               <RouterLink class="link" to="/update">会員情報変更</RouterLink>
          </div>
          <div class="p-4">
               <RouterLink class="link" to="/upgrade">有料会員</RouterLink>

          </div>
          <div class="p-4">
               <RouterLink class="link" to="/deleteVIP">取り消すVIP</RouterLink>
          </div>


     </div>
</template>

<style lang="scss" scoped>
.aa {}

.out {
     // display: flex;

     width: 23vw;

     padding-bottom: 0.5rem;
     background-color: #C1395E;
     font-size: 1.5rem;
     // 

     .link {
          // 取消下底線
          text-decoration: none;
          color: white;
          cursor: pointer;
          transition: 0.3s;

          margin: 5rem 1rem;

          &:hover {

               color: rgb(201, 201, 103);
          }
     }



}
</style>