<script>
export default {
     data() {
          return {
               login:LoginRes
          }
     },
}


const body = {
     // "REQ名稱"
     "account":"12345678",
     "password":"123456789",
     
}

fetch("http://localhost:8080/userLogin", {

     method: "POST",//預設是get
     headers: {
          'Content-Type': 
          'application/json',
     },
     body: JSON.stringify(body)

})
     .then(function (response) {
          return response.json()
     })
     .then(function (LoginRes) {
          console.log(LoginRes)
     })
</script>
<template>
     <div class="wrap-login">
          <div class="title-login">
               <h4>ログイン</h4>
          </div>
<p>{{ login }}</p>
          <div class="login-area">
               <div>
                    
                    <div class="account-login">
                         <h4>アカウント :</h4>
                         
                         <input type="text">
                    </div>
                    <div class="pwd-login">
                         <h4>パスワード :</h4>
                        
                         <input type="text">
     
                    </div>
                    
                    
                    <div class="btn-login">
                         <button>ログイン</button>
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
          .btn-login{
               padding: 10% 25%;

               
          }
     }
}
</style>