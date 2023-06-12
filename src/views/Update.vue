<script>
export default {
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               name:null,
               account: null,
               pwd: null,
               birthday:null,
               scooter:false,
               car:false
          }
     },
     methods: {
          menberSearch: (name,acc, pwd,birth,sco,car) => {
               const body = {
                    // "REQ名稱"
                    name:name,
                    account: acc,
                    password: pwd,
                    birthday:birth,
                    motorcycleLicense:sco,
                    drivingLicense:car

               }
               console.log(body)
               fetch("http://localhost:8080/user_info_update", {

                    method: "POST",//預設是get
                    headers: {
                         'Content-Type':
                              'application/json',
                    },
                    body: JSON.stringify(body)

               })
                    .then(function (response) {
                         return response.json()
                    })
                    .then(function (data) {
                         console.log(data)
                    })
          }
     }
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
                         <input type="text"  v-model="name">
                    </div>
                    <div class="account-update">
                         <h4>アカウント :</h4>
                         
                         <input type="text" v-model="account">
                    </div>
                    <div class="pwd-update">
                         <h4>パスワード :</h4>
                        
                         <input type="text" v-model="pwd">
     
                    </div>
                    <div class="birth-update">
                         <h4>誕生日 :</h4>
                         <input type="text" v-model="birth">
     
                    </div>
                    <div class="birth-update">
                         <h4>普通二輪免許 :</h4>
                         <input type="radio" name="scooter" id="ip1" v-model="scooter">
                         <label for="scooter">はい</label>
                         <input type="radio" name="scooter" id="ip2" v-model="scooter">
                         <label for="scooter">いいえ</label>
     
                    </div><div class="birth-update">
                         <h4>普通自動車免許 :</h4>
                         <input type="radio" name="car" id="ip3" v-model="car">
                         <label for="scooter">はい</label>
                         <input type="radio" name="car" id="ip4" v-model="car">
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