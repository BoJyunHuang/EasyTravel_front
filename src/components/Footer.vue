<script>
import { RouterLink } from "vue-router";

export default {

}
</script>
<template>
     <footer>
          <div>
               <img src="" alt="logo">
               <RouterLink class="link text-white" to="/administrator-login">| 管理者ログイン |</RouterLink>
          </div>
          <div>
               <p>Copyright © 2023 EasyTravel Corporation All Rights Reserved.</p>
          </div>

     </footer>
</template>

<style lang="scss" scoped>
footer {
     width: 100vw;
     height: 150px;
     padding: 2rem;
     background: rgb(2, 0, 36);
     background: linear-gradient(90deg, rgb(39, 74, 133) 0%, rgba(9, 70, 121, 1) 35%, rgba(0, 172, 255, 1) 100%);
     font-size: 1.5rem;
}

.link {
     // 取消下底線
     text-decoration: none;
     color: white;
     cursor: pointer;
     transition: 0.4s;
     // scale: 01.5rem;
     margin: 3rem 0rem;
     margin-left: 50%;

     &:hover {

          color: rgb(201, 201, 103);
     }
}

p {
     margin-top: 2%;
     margin-left: 20%;

}
</style>