<script>
import Modal from '../components/Modal.vue';
export default {
     components: {
          Modal
     },
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               account: null,
               pwd: null,
               birthday: null,
               name: null,
               isShow: false,
               message: ""
          }
     },
     methods: {
          // 關閉插入的視窗方法
          change() {
               // false改成true?
               this.isShow = !this.isShow;
          },
          // 方法(參數)
          creat() {

               // this.isShow = !this.isShow;
               const body = {
                    // 後端req屬性名稱:參數
                    account: this.account,
                    birthday: this.birthday,
                    password: this.pwd,
                    name: this.name
               }
               console.log(body)
               fetch("http://localhost:8080/user_registration", {
                    method: "POST",
                    headers: {
                         'Content-Type':
                              'application/json',
                    },
                    body: JSON.stringify(body)

               })
                    .then(function (response) {
                         return response.json()
                    })
                    .then((data) => {
                         // 有箭頭跟沒有的差別?
                         console.log(data)
                         // data是後端傳入的所有個人資訊
                         // .message是後端return的訊息
                         // this.message是前端自訂的空字串
                         this.message = data.message
                         // 帶入另一個方法,放這的原因是....
                         this.change();
                    })

          }
     }
}
</script>
<template>
     <div class="big-wrap ">

          <h2 class="title-h4 text-center mb-5 text-white">新規会員登録</h2>
          <div class="wrap-reg ps-5">
               <!-- <div class="title-reg"> -->

               <!-- </div> -->

               <div class="register-area">
                    <div>
                         <div class="name-reg">
                              <h4 class="mt-5 text-white">名前 :</h4>
                              <input type="text" v-model="name" class="regInput ms-5">
                         </div>
                         <div class="account-reg">
                              <div class="mark-wrap d-flex">
                                   <h4 class="mt-3 text-white" style="width: 135px">アカウント :</h4>
                                   <p class="mark-p mt-4 text-white" style="width: 300px">3~8 ヤードで、空白はできません。</p>
                              </div>
                              <input type="text" v-model="account" class="regInput ms-5">
                         </div>
                         <div class="pwd-reg">
                              <div class="mark-wrap d-flex">

                                   <h4 class="mt-3 text-white" style="width: 135px">パスワード :</h4>
                                   <p class="mark-p2 mt-4 text-white" style="width: 300px">8~12ヤード</p>

                              </div>
                              <input type="text" v-model="pwd" class="regInput ms-5 ">

                         </div>
                         <div class="birth-reg">
                              <h4 class="mt-1 text-white ">誕生日 :</h4>
                              <input type="date" v-model="birthday" class="regInput  p-1 ps-4 pe-4 ms-5">
                         </div>
                         <div class="btn-regist">
                              <!-- 觸發事件，參數帶入 -->
                              <button class="reg-btn mt-5" @click="creat">登録</button>
                              <Modal v-if="isShow" @pushOutside="change">

                                   <h2>{{ message }}</h2>
                              </Modal>
                         </div>
                    </div>
               </div>

          </div>
     </div>
</template>

<style lang="scss" scoped>
.big-wrap {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     .title-h4 {
          height: 35px;
          width: 300px;
          border-radius: 5px;
          background-color: #C1395E;
     }
     .wrap-reg {
          height: 450px;
          width: 500px;
          background-color: #C1395E;
          // border: 1px solid blue;
          border-radius: 5px;
          .regInput {
               border-radius: 5px;
               border: 1px solid white;
          }
          .mark-p1 {
               margin: 1%;
          }
          .register-area {
               display: flex;
               justify-content: center;
               .btn-reg {
                    padding: 10% 25%;
               }
          }
          .reg-btn {
               border-radius: 5px;
               border: 1px solid white;
               margin-left: 50%;
          }
     }
     h2{
          margin: auto auto;
     }
}
</style>