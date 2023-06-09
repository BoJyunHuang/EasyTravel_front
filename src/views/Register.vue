<script>
export default {

}
</script>
<template>
     <div class="wrap-reg">
          <div class="title-reg">
               <h4>登録</h4>
          </div>

          <div class="register-area">
               <div>
                    <div class="name-reg">
                         <h4>名前 :</h4>
                         <input type="text">
                    </div>
                    <div class="account-reg">
                         <h4>アカウント :</h4>
                         <p>3~8 ヤードで、空白はできません。</p>
                         <input type="text">
                    </div>
                    <div class="pwd-reg">
                         <h4>パスワード :</h4>
                         <p>8~12ヤード
                         </p>
                         <input type="text">
     
                    </div>
                    <div class="birth-reg">
                         <h4>誕生日 :</h4>
                         <input type="text">
                         <input type="text">
                         <input type="text">
     
                    </div>
                    
                    <div class="btn-reg">
                         <button>登録</button>
                    </div>
               </div>

          </div>
          
     </div>
</template>

<style lang="scss" scoped>
.wrap-reg {
     .title-reg {
          background-color: #b30e0e;

          width: 100vw;
          // border: 0.3rem solid black;
          text-align: center;
          font-size: 1.5rem;
     }

     .register-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;
          // align-items: center;
          .btn-reg{
               padding: 10% 25%;

               
          }
     }
}
</style>