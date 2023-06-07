<script>
export default {
     
}
</script>
<template>
     <div class="wrap-delete">
          <div class="title-delete">
               <h4>退出VIP</h4>
          </div>

          <div class="delete-area">
               <div>
                    
                    <div class="account-delete">
                         <h4>會員帳號 :</h4>
                         <p>帳號長度 3~8 碼，不能有任何空白</p>
                         <input type="text">
                    </div>
                    <div class="pwd-delete">
                         <h4>會員密碼 :</h4>
                         <p>密碼為8-12碼
                         </p>
                         <input type="text">
     
                    </div>
                    
                    
                    
                    <div class="btn-delete">
                         <button>升級VIP</button>
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