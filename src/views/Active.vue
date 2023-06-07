<script>
export default {
     
}
</script>
<template>
      <div class="wrap-active">
          <div class="title-active">
               <h4>激活會員</h4>
          </div>

          <div class="active-area">
               <div>
                    
                    <div class="account-active">
                         <h4>會員帳號 :</h4>
                         <p>帳號長度 3~8 碼，不能有任何空白</p>
                         <input type="text">
                    </div>
                    <div class="pwd-active">
                         <h4>會員密碼 :</h4>
                         <p>密碼為8-12碼
                         </p>
                         <input type="text">
     
                    </div>
                    
                    
                    <div class="btn-active">
                         <button>激活</button>
                    </div>
               </div>

          </div>
          
     </div>
</template>

<style lang="scss" scoped>
     .wrap-active {
     .title-active {
          background-color: #b30e0e;

          width: 100vw;
          // border: 0.3rem solid black;
          text-align: center;
          font-size: 1.5rem;
     }

     .active-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;
          // align-items: center;
          .btn-active{
               padding: 10% 25%;

               
          }
     }
}
</style>