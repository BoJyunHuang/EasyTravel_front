<script>


import { RouterLink } from "vue-router";

export default {
     
}
</script>
<template>
     <header>
          <RouterLink class="link" to ="/register">註冊會員</RouterLink>
          <RouterLink class="link" to ="/active">激活會員</RouterLink>
          <RouterLink class="link" to ="/login">登入會員</RouterLink>
          <RouterLink class="link" to ="/search">查詢會員資訊</RouterLink>
          <RouterLink class="link" to ="/update">修改會員資訊</RouterLink>
          <RouterLink class="link" to ="/upgrade">升級VIP會員</RouterLink>
          <RouterLink class="link" to ="/deleteVIP">退出VIP會員</RouterLink>
          



     </header>
    
</template>

<style lang="scss" scoped>
     header{
          // margin: 0 auto;
          width: 100vw;
          height: 200px;
          padding-bottom: 0.5rem;
          background-color: #C1395E;
           font-size: 1.5rem;
           .link{
               // 取消下底線
               text-decoration: none;
               color: white;
               cursor: pointer;
               transition: 0.3s;
               margin: 0 1rem;

               &:hover{
                   
                    color: rgb(201, 201, 103);
               }
         

          }
     }
</style>