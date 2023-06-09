<script>
export default {
     
}
</script>
<template>
     <div class="wrap-upgrade">
          <div class="title-upgrade">
               <h4>有料会員</h4>
          </div>

          <div class="upgrade-area">
               <div>
                    <div class="upgrade-fee">
                         <p>VIP料金はNT200元</p>
                    </div>

                    <div class="account-upgrade">
                         <h4>アカウント :</h4>
                         
                         <input type="text">
                    </div>
                    <div class="pwd-upgrade">
                         <h4>パスワード :</h4>
                         
                         <input type="text">
     
                    </div>
                    
                    
                   
                    <div class="btn-upgrade">
                         <button>申し込み</button>
                    </div>
               </div>

          </div>
          
     </div>
</template>

<style lang="scss" scoped>
     .wrap-upgrade {
     .title-upgrade {
          background-color: #b30e0e;

          width: 100vw;
          // border: 0.3rem solid black;
          text-align: center;
          font-size: 1.5rem;
     }

     .upgrade-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;
          // align-items: center;
.btn-upgrade-fee{
     padding: 10% 25%;
}
          .btn-upgrade{
               padding: 10% 25%;

               
          }
     }
}
</style>