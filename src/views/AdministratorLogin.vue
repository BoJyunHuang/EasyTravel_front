<script>
import { RouterLink } from "vue-router";
import Manager from "./Administrator.vue"
import { mapState, mapActions } from "pinia";
import indexStore from "../stores/counter";
import Modal from '../components/Modal.vue';
import messageModal from "../components/messageModal.vue";
export default {
     components: {
          Manager,
          // 宣告跳出視窗元件
          Modal,
          messageModal
     },
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               account: "",
               pwd: "",
               bol: false,
               // 宣告跳出視窗的內容
               message: "",
               // 宣告跳出視窗頁面的v-if布林值
               isShow: false
          }
     },
     methods: {
          // [方法名稱]
          ...mapActions(indexStore, ["managerPage"]),

          // 開啟&關閉 插入的視窗方法
          change() {
               this.isShow = !this.isShow;
               this.$router.push('/administrator')

          },
          // 用if判斷,是否為管理者帳號,不用連接後端
          AminiLogin() {
               console.log(this.account);
               if (this.account == "M001" && this.pwd == "M0123456") {

                    this.message = "Successful!";
                    // 做change:開啟或關閉的方法
                    this.change();


                    // 呼叫pinia方法
                    this.managerPage();
               }
               else {
                    this.message = "Login failed!";
                    // 做change:開啟或關閉的方法
                    this.change();
               }


          }
     }
}



</script>
<template>
     <nav>
          <div class="wrap">

               <div class="wrap-login d-flex  flex-column justify-content-center align-items-center">
                    <!-- <div class="title-login"> -->
                    <h2 class="border-bottom rounded border-4 text-center mb-3">管理者ログイン</h2>
                    <!-- <h2 class="border-bottom rounded border-4 text-center mb-3">ログイン</h2> -->
                    <!-- </div> -->

                    <div class="login-area mt-4" style="height: auto;width: 350px;">
                         <div>

                              <div class="account-login mt-5">
                                   <h4 class="ms-5">アカウント :</h4>
                                   <input type="text" v-model="account" class="logInput ms-5" placeholder="アカウントを入力してください"
                                        style="width: 280px; height: 35px;">

                              </div>
                              <div class="pwd-login mt-5">
                                   <h4 class="ms-5">パスワード :</h4>
                                   <input type="text" v-model="pwd" class="logInput ms-5" placeholder="パスワードを入力してください"
                                        style="width: 280px; height: 35px;">



                              </div>


                              <div class="btnlogin">
                                   <button class="log-btn mt-5" type="button" id="testBut" @click="AminiLogin">ログイン</button>
                                   <messageModal v-if="isShow" @getReady="change">
                                        <h2>{{ message }}</h2>
                                   </messageModal>
                              </div>
                         </div>

                    </div>

               </div>

               <h3 class="text-center">Welcome back！</h3>

          </div>
     </nav>
</template>

<style lang="scss" scoped>
h2 {
     margin: auto auto;
     height: 45px;
     width: 250px;

}

.wrap-login {

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
               // padding: 10% ;

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

h3 {
     margin-top: 25%;
}
</style>