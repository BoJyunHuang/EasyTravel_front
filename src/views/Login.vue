<script>
export default {
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               account: null,
               pwd: null,
          }
     },
     methods: {
          login: (acc, pwd) => {
               const body = {
                    // "REQ名稱"
                    account: acc,
                    password: pwd,

               }
               console.log(body)
               fetch("http://localhost:8080/user_login", {

                    method: "POST",//預設是get
                    headers: {
                         'Content-Type':
                              'application/json',
                    },
                    body: JSON.stringify(body),
                    // credentials: "include",


               })
                    .then(function (response) {
                         return response.json()
                    })
                    .then(function (data) {
                         console.log(data)
                         // --
                         sessionStorage.setItem("userInfo", JSON.stringify(data.userInfo));
                       

                         // --

                         // sessionStorage.setItem("userInfo", data)
                         //           let userInfo = sessionStorage.getItem("userInfo", data);
                         // console.log(userInfo.userInfo.name)
                    })


          }
     }
}



</script>
<template>
     <div class="wrap-login">
          <div class="title-login">
               <h4>ログイン</h4>
          </div>
          <!-- <p>{{ login }}</p> -->
          <div class="login-area">
               <div>

                    <div class="account-login">
                         <h4>アカウント :</h4>

                         <input type="text" v-model="account">
                    </div>
                    <div class="pwd-login">
                         <h4>パスワード :</h4>

                         <input type="text" v-model="pwd">

                    </div>


                    <div class="btn-login">
                         <button type="button" @click="login(this.account, this.pwd)">ログイン</button>
                    </div>
               </div>

          </div>

     </div>
</template>

<style lang="scss" scoped>
.wrap-login {
     .title-login {
          background-color: #b30e0e;

          width: 100vw;
          // border: 0.3rem solid black;
          text-align: center;
          font-size: 1.5rem;
     }

     .login-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;

          // align-items: center;
          .btn-login {
               padding: 10% 25%;


          }
     }
}
</style>