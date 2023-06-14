<script>
import { RouterLink } from "vue-router";

export default {

}
</script>
<template>
     <footer>
          <div class="bg">

               <div class="upper">
                    <img src="../../public/logo2.png" alt="" class="icon">
               </div>
               <div class="info" style="width: 600px;">
               <RouterLink class="link text-white" to="/">| 企業情報 </RouterLink>
               </div>
               <div style="width: 700px;">
               <RouterLink class="link text-white" to="/">| サイトポリシー </RouterLink>
               </div>
               <div style="width: 700px;">
                    <RouterLink class="link text-white" to="/administrator-login">| 管理者ログイン</RouterLink>
               </div>
          </div>
          <div class="copy">
               <p class="text-white text-center pt-1 pb-1">Copyright © 2023 EasyTravel Corporation All Rights Reserved.</p>
          </div>

     </footer>
</template>

<style lang="scss" scoped>
footer {

.bg{
     width: 100%;
     height: 120px;
     padding: 2rem;
     background: rgb(23, 15, 147);
     background: linear-gradient(90deg, rgba(23, 15, 147, 0.9164915966386554) 0%, rgba(23, 92, 151, 1) 35%, rgba(15, 164, 211, 1) 100%);
     font-size: 1.5rem;
     display: flex;
     // flex-direction: column;
     justify-content: center;
     // align-items: center;

     .upper {
          
          .line{
               background-color: white;
               border-radius: 20%;
               font-size: 2.5rem;
               cursor: pointer;
          }
          .icon {
               width: 15%;
               
          }
     }
     }

     .link {
          // 取消下底線
          text-decoration: none;
          color: white;
          cursor: pointer;
          transition: 0.4s;
          // scale: 01.5rem;
          margin: 3rem 0rem;
          // margin-left: 10%;

          &:hover {

               color: rgb(201, 201, 103);
          }
     }

     .copy {
          background-color: black;
         
     }

}
</style>