<script>
export default {

}
</script>
<template>
     <div class="wrap-reg">
          <div class="title-reg">
               <h4>註冊會員</h4>
          </div>

          <div class="register-area">
               <div>
                    <div class="name-reg">
                         <h4>會員名字 :</h4>
                         <input type="text">
                    </div>
                    <div class="account-reg">
                         <h4>會員帳號 :</h4>
                         <p>帳號長度 3~8 碼，不能有任何空白</p>
                         <input type="text">
                    </div>
                    <div class="pwd-reg">
                         <h4>會員密碼 :</h4>
                         <p>密碼為8-12碼
                         </p>
                         <input type="text">
     
                    </div>
                    <div class="birth-reg">
                         <h4>會員生日 :</h4>
                         <input type="text">
     
                    </div>
                    
                    <div class="btn-reg">
                         <button>註冊</button>
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