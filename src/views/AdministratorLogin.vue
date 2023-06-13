<script>
import { RouterLink } from "vue-router";
import Manager from "./Administrator.vue"
export default {
     components: {
          Manager
     },
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               account: "",
               pwd: "",
               bol: false,
          }
     },
     methods: {
          // 用if判斷,是否為管理者帳號,不用連接後端
          AminiLogin() {
               console.log(this.account);
               if (this.account == "M001" && this.pwd == "M0123456") {
                    let testBut = document.getElementById("testBut");
                    testBut.click();
               }
               else {
                    alert("失敗")
               }


          }
     }
}



</script>
<template>
     <div class="wrap-login d-flex  flex-column justify-content-center align-items-center">
          <div class="title-login">
               <h2 class="text-white">管理者ログイン</h2>
          </div>
          <!-- <p>{{ login }}</p> -->
          <div class="login-area border border-danger rounded mt-4" style="height: auto;width: 350px;">
               <div>

                    <div class="account-login">
                         <h4 class="mt-5 text-white">アカウント :</h4>
                         <input type="text" v-model="account" class="logInput ms-5">
                    </div>
                    <div class="pwd-login">
                         <h4 class="text-white">パスワード :</h4>

                         <input type="text" v-model="pwd" class="logInput ms-5">

                    </div>


                    <div class="btnlogin">
                         <button class="log-btn mt-5" type="button" @click="AminiLogin">ログイン</button>
                         <RouterLink class="link text-white" to="/administrator">
                              <button class="log-btn mt-5" type="button" id="testBut" style="display: none;">ログイン</button>
                         </RouterLink>

                    </div>
               </div>

          </div>

     </div>
</template>

<style lang="scss" scoped>
.wrap-login {
     .title-login {
          background-color: #C1395E;
          border-radius: 5px;
          height: 40px;
          width: 300px;
          display: flex;
          justify-content: center;
          // margin-left: 50%;


          // width: 100vw;
          // border: 0.3rem solid black;
          // text-align: center;
          // font-size: 1.5rem;
     }

     .login-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;
          background-color: #C1395E;

          // align-items: center;
          .logInput {
               border-radius: 5px;
               border: 1px solid white;

          }

          .btnlogin {
               padding: 10% 25%;

               .log-btn {
                    border-radius: 5px;
                    // background-color: #C1395E;
                    border: 1px solid white;
                    margin-left: 50%;
                    height: 35px;
                    width: 100px;
               }


          }
     }
}
</style>