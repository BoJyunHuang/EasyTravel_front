<script>
export default {

}
</script>
<template>
     <div class="wrap-update">
          <div class="title-update">
               <h4>修改會員資訊</h4>
          </div>

          <div class="update-area">
               <div>
                    <div class="name-update">
                         <h4>會員名字 :</h4>
                         <input type="text">
                    </div>
                    <div class="account-update">
                         <h4>會員帳號 :</h4>
                         <p>帳號長度 3~8 碼，不能有任何空白</p>
                         <input type="text">
                    </div>
                    <div class="pwd-update">
                         <h4>會員密碼 :</h4>
                         <p>密碼為8-12碼
                         </p>
                         <input type="text">
     
                    </div>
                    <div class="birth-update">
                         <h4>會員生日 :</h4>
                         <input type="text">
     
                    </div>
                    <div class="birth-update">
                         <h4>機車駕照 :</h4>
                         <input type="radio" name="scooter" id="ip1">
                         <label for="scooter">是</label>
                         <input type="radio" name="scooter" id="ip2">
                         <label for="scooter">否</label>
     
                    </div><div class="birth-update">
                         <h4>汽車駕照 :</h4>
                         <input type="radio" name="car" id="ip3">
                         <label for="scooter">是</label>
                         <input type="radio" name="car" id="ip4">
                         <label for="scooter">否</label>
                    </div>

                    
                    <div class="btn-update">
                         <button>修改</button>
                    </div>
               </div>

          </div>
          
     </div>
</template>

<style lang="scss" scoped>
.wrap-update {
     .title-update {
          background-color: #b30e0e;

          width: 100vw;
          // border: 0.3rem solid black;
          text-align: center;
          font-size: 1.5rem;
     }

     .update-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;
          // align-items: center;
          .btn-update{
               padding: 10% 25%;

               
          }
     }
}
</style>