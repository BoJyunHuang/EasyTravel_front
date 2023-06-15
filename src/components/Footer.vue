<script>
import { RouterLink } from "vue-router";
import { mapState, mapActions } from "pinia";
import indexStore from "../stores/counter";
export default {
     
    computed: {
        //       可以取到在pinia裡面的狀態資料
        ...mapState(indexStore, ["manager"]),
    },
     methods: {
        // 帶入pinia的方法
        ...mapActions(indexStore, ["manaSignOut"]),
        out() {
        //    呼叫pinia的登出方法
            this.manaSignOut();
        }
    }

}
</script>
<template>
     <footer>
          <div class="bg">

               <div class="upper">
                    <img src="../../public/logo2.png" alt="" class="icon">
               </div>
               <div class="info" style="width: 600px;">
               <RouterLink class="link text-white" to="/">|企業情報</RouterLink>
               </div>
               <!-- <div style="width: 700px;"> -->
               <!-- <RouterLink class="link text-white" to="/">| サイトポリシー </RouterLink> -->
               <!-- </div> -->
               <div style="width: 700px;">
                    <RouterLink v-if="!manager" class="link text-white" to="/administrator-login">|管理者ログイン</RouterLink>
                    <button class="sign-out" v-if="manager" @click="out">|ログアウト</button>
               </div>
          </div>
          <div class="copy">
               <p class="text-white text-center pt-1 pb-1">Copyright © 2023 EasyTravel Corporation All Rights Reserved.</p>
          </div>

     </footer>
</template>

<style lang="scss" scoped>
footer {
     width: 100vw;

.bg{
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
     .sign-out {
                border: none;
                background-color: transparent;
                text-decoration: none;
                color: black;
                cursor: pointer;
                transition: 0.3s;
                margin: 0 1rem;
                color: white;

                &:hover {
                    color: #79dfb1;
                }
            }

     .copy {
          background-color: black;
         height: 40px;
         width: 100vw;
     }

}
</style>