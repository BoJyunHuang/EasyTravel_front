<script>
export default {
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               account: null,
               pwd: null,
               birthday: null,
               name: null
          }
     },
     methods: {
          // 方法(參數)
          creat: (a, b, p, n) => {
               const body = {
                    // 後端req屬性名稱:參數
                    account: a,
                    birthday: b,
                    password: p,
                    name: n
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
                    .then(function (data) {
                         console.log(data)

                    })
          }
     }
}
</script>
<template>
     <div class="big-wrap">

          <h4 class="title-h4 ">登録</h4>
          <div class="wrap-reg ps-5">
               <!-- <div class="title-reg"> -->

               <!-- </div> -->

               <div class="register-area">
                    <div>
                         <div class="name-reg">
                              <h4 class="mt-5">名前 :</h4>
                              <input type="text" v-model="name" class="regInput ms-5">
                         </div>
                         <div class="account-reg">
                              <div class="mark-wrap d-flex">
                                   <h4 class="mt-3" style="width: 135px">アカウント :</h4>
                                   <p class="mark-p mt-4" style="width: 300px">3~8 ヤードで、空白はできません。</p>
                              </div>
                                   <input type="text" v-model="account" class="regInput ms-5">
                         </div>
                         <div class="pwd-reg">
                              <div class="mark-wrap d-flex">

                                   <h4 class="mt-3" style="width: 135px">パスワード :</h4>
                                   <p class="mark-p mt-4"  style="width: 300px">8~12ヤード</p>
                                   
                              </div>
                              <input type="text" v-model="pwd"  class="regInput ms-5">

                         </div>
                         <div class="birth-reg">
                              <h4 class="mt-1 ">誕生日 :</h4>
                              <input type="date" v-model="birthday"  class="regInput  p-1 ps-4 pe-4 ms-5">
                         </div>
                         <div class="btn-regist">
                              <!-- 觸發事件，參數帶入 -->
                              <button class="reg-btn" @click="creat(this.account, this.birthday, this.pwd, this.name)">登録</button>
                         </div>
                    </div>
               </div>

          </div>
     </div>
</template>

<style lang="scss" scoped>
.big-wrap {
     width: 100vw;
     height: 100vh;
     padding: 4rem 6rem;
     justify-content: center;
     align-items: center;
     background-color: #a5c5f5;

     .title-h4 {
          height: 30px;
          width: 100px;
          // padding-bottom: 10%;
          text-align: center;
          border-radius: 5px;
          background-color: #7ca9ed;
          // border: 1px solid black;
     }

     .wrap-reg {
          height: 450px;
          width: 500px;
          background-color: #a3c3f3;
          // border: 1px solid blue;
          border-radius: 5px;

          .regInput {
               border-radius: 5px;
               border: 1px solid white;

          }
          .mark-p{
               margin: 1%;
          }
          // margin: 10px;
          // padding: 10px;

          // h4 {
          //      text-align: center;
          // font-size: 3rem;
          // }

          background-color: #5994eb;

          // width: 100vw;
          // border: 0.3rem solid black;



          .register-area {
               display: flex;
               // flex-direction: column;
               justify-content: center;

               // align-items: center;
              
               .btn-reg {
                    padding: 10% 25%;


               }

          }

          .reg-btn{}
     }
}
</style>