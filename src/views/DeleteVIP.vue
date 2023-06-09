<script>
export default {
     
}
</script>
<template>
     <div class="wrap-delete">
          <div class="title-delete">
               <h4>取り消すVIP</h4>
          </div>

          <div class="delete-area">
               <div>
                    
                    <div class="account-delete">
                         <h4>アカウント :</h4>
                        
                         <input type="text">
                    </div>
                    <div class="pwd-delete">
                         <h4>パスワード :</h4>
                         
                         <input type="text">
     
                    </div>
                    
                    
                    
                    <div class="btn-delete">
                         <button>申し込み</button>
                    </div>
               </div>

          </div>
          
     </div>
</template>

<style lang="scss" scoped>
     .wrap-delete {
     .title-delete {
          background-color: #b30e0e;

          width: 100vw;
          // border: 0.3rem solid black;
          text-align: center;
          font-size: 1.5rem;
     }

     .delete-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;
          // align-items: center;

          .btn-delete{
               padding: 10% 25%;

               
          }
     }
}
</style>