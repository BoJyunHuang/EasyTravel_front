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
     <nav>
          <div class="wrap">

               <div class="wrap-login d-flex  flex-column justify-content-center align-items-center">
                    <div class="title-login">
                         <h2 class="border-bottom rounded border-4 text-center mb-3">管理者</h2>
                         <h2 class="border-bottom rounded border-4 text-center mb-3">ログイン</h2>
                    </div>
                    
                    <div class="login-area mt-4" style="height: auto;width: 350px;">
                         <div>

                              <div class="account-login">
                                   <h4 class="mt-5">アカウント :</h4>
                                   <input type="text" v-model="account" class="logInput ms-5">
                              </div>
                              <div class="pwd-login mt-5">
                                   <h4 class="">パスワード :</h4>

                                   <input type="text" v-model="pwd" class="logInput ms-5">

                              </div>


                              <div class="btnlogin">
                                   <button class="log-btn mt-5" type="button"
                                        @click="login(this.account, this.pwd)">ログイン</button>
                              </div>
                         </div>

                    </div>

               </div>

               <h3 class="text-center">Welcome back！</h3>

          </div>
     </nav>
     
</template>

<style lang="scss" scoped>

.wrap-login {
     h2 {
          margin: auto auto;
          height: 30px;
     }

     .title-login {
          
          height: 50px;
          width: 150px;
          display: flex;
          justify-content: center;
          
     }

     .login-area {
          display: flex;
          
          justify-content: center;
          
          .logInput {
               border-radius: 5px;
               border: 1px solid black;

          }

          .btnlogin {
               padding: 10% 25%;

               .log-btn {
                    border-radius: 5px;
                    // background-color: #C1395E;
                    border: 1px solid white;
                    margin-left: 65%;
                    height: 35px;
                    width: 100px;
               }


          }
     }
}
     h3{
          margin-top: 25%;
     }
</style>