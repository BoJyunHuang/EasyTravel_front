<script>
export default {

}
</script>
<template>
     <div class="wrap-update">
          <div class="title-update">
               <h4>会員情報変更</h4>
          </div>

          <div class="update-area">
               <div>
                    <div class="name-update">
                         <h4>名前 :</h4>
                         <input type="text">
                    </div>
                    <div class="account-update">
                         <h4>アカウント :</h4>
                         
                         <input type="text">
                    </div>
                    <div class="pwd-update">
                         <h4>パスワード :</h4>
                        
                         <input type="text">
     
                    </div>
                    <div class="birth-update">
                         <h4>誕生日 :</h4>
                         <input type="text">
     
                    </div>
                    <div class="birth-update">
                         <h4>普通二輪免許 :</h4>
                         <input type="radio" name="scooter" id="ip1">
                         <label for="scooter">はい</label>
                         <input type="radio" name="scooter" id="ip2">
                         <label for="scooter">いいえ</label>
     
                    </div><div class="birth-update">
                         <h4>普通自動車免許 :</h4>
                         <input type="radio" name="car" id="ip3">
                         <label for="scooter">はい</label>
                         <input type="radio" name="car" id="ip4">
                         <label for="scooter">いいえ</label>
                    </div>

                    
                    <div class="btn-update">
                         <button>変更</button>
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
          
          text-align: center;
          font-size: 1.5rem;
     }

     .update-area {
          display: flex;
          
          justify-content: center;
          
          .btn-update{
               padding: 10% 25%;

               
          }
     }
}
</style>