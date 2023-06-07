<script>
export default {
     
}
</script>
<template>
     <div class="wrap-upgrade">
          <div class="title-upgrade">
               <h4>升級為VIP</h4>
          </div>

          <div class="upgrade-area">
               <div>
                    
                    <div class="account-upgrade">
                         <h4>會員帳號 :</h4>
                         <p>帳號長度 3~8 碼，不能有任何空白</p>
                         <input type="text">
                    </div>
                    <div class="pwd-upgrade">
                         <h4>會員密碼 :</h4>
                         <p>密碼為8-12碼
                         </p>
                         <input type="text">
     
                    </div>
                    
                    
                    <div class="btn-upgrade-fee">
                         <button>繳交$200</button>
                    </div>
                    <div class="btn-upgrade">
                         <button>升級VIP</button>
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