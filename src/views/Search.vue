<script>
export default {

}
</script>
<template>
     <div class="wrap-search">
          <div class="title-search">
               <h4>會員資訊</h4>
          </div>

          <div class="search-area">
               <div>
                    <div class="name-search">
                         <h4>會員名字 :</h4>
                         <input type="text">
                    </div>
                    <div class="account-search">
                         <h4>會員帳號 :</h4>
                         <p>帳號長度 3~8 碼，不能有任何空白</p>
                         <input type="text">
                    </div>
                    <div class="pwd-search">
                         <h4>會員密碼 :</h4>
                         <p>密碼為8-12碼
                         </p>
                         <input type="text">
     
                    </div>
                    <div class="birth-search">
                         <h4>會員生日 :</h4>
                         <input type="text">
     
                    </div>
                    <div class="birth-search">
                         <h4>機車駕照 :</h4>
                         <input type="radio" name="scooter" id="ip1">
                         <label for="scooter">是</label>
                         <input type="radio" name="scooter" id="ip2">
                         <label for="scooter">否</label>
     
                    </div><div class="birth-search">
                         <h4>汽車駕照 :</h4>
                         <input type="radio" name="car" id="ip3">
                         <label for="scooter">是</label>
                         <input type="radio" name="car" id="ip4">
                         <label for="scooter">否</label>
                    </div>

               </div>

          </div>
          
     </div>
</template>

<style lang="scss" scoped>
.wrap-search {
     .title-search {
          background-color: #b30e0e;

          width: 100vw;
          // border: 0.3rem solid black;
          text-align: center;
          font-size: 1.5rem;
     }

     .search-area {
          display: flex;
          // flex-direction: column;
          justify-content: center;
          // align-items: center;
          .btn-search{
               padding: 10% 25%;

               
          }
     }
}
</style>