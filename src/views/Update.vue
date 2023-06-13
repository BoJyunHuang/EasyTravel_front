<script>
export default {
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               name: null,
               account: null,
               pwd: null,
               birthday: null,
               scooter: false,
               car: false
          }
     },
     methods: {
          // 要分開方法:舊資料&連結API
          medata() {
               // 從session取出key值(暫存的會員資料)
               let userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
               console.log(userInfo);
               this.name = userInfo.name
               this.account = userInfo.account
               this.pwd = userInfo.password
               this.birthday = userInfo.birthday
               this.scooter = userInfo.motorcycleLicense
               this.car = userInfo.drivingLicense
               // 抓節點(機車/汽車駕照)
               let testBut = document.getElementById("ip1");
               let testBut2 = document.getElementById("ip2");
               let testBut3 = document.getElementById("ip3");
               let testBut4 = document.getElementById("ip4");

               console.log(this.scooter);
               // 判斷資料庫的值為true/false
               if (this.scooter == true) {
                    // .checked:若為true則打勾
                    testBut.checked = true
               } else {
                    testBut2.checked = true
               }
               if (this.car == true) {
                    testBut3.checked = true
               } else {
                    testBut4.checked = true
               }
          },
          meUpdate() {
               // 修改預設的汽機車駕照true/false
               let scoYes = document.getElementById("ip1");
               let scoNo = document.getElementById("ip2");
               let motoYes = document.getElementById("ip3");
               let motoNO = document.getElementById("ip4");
               let scoSet = false;
               let motoSet = false;
               if (scoYes.checked == true) {
                    scoSet = true
                    // console.log(scoSet)
               } else{
                    scoSet = false
               }
               if (motoYes.checked == true) {
                    motoSet = true
               } else {
                    motoSet = false
               }





               let userInfo = JSON.parse(sessionStorage.getItem("userInfo"))

               const body = {
                    // "REQ名稱"
                    account: userInfo.account,
                    password: userInfo.password,
                    birthday: this.birthday,
                    motorcycleLicense: scoSet,
                    drivingLicense: motoSet

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

          },
          // 刷新頁面做的事情
     },
     mounted() {
          this.medata()
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
                         <input type="text" v-model="name" disabled>
                    </div>
                    <div class="account-update">
                         <h4>アカウント :</h4>

                         <input type="text" v-model="account" disabled>
                    </div>
                    <div class="pwd-update">
                         <h4>パスワード :</h4>

                         <input type="password" v-model="pwd" disabled>

                    </div>
                    <div class="birth-update">
                         <h4>誕生日 :</h4>
                         <input type="date" v-model="birthday">

                    </div>
                    <div class="birth-update">
                         <h4>普通二輪免許 :</h4>
                         <input type="radio" name="scooter" id="ip1" v-model="scooter" value="true">
                         <label for="scooter">はい</label>
                         <input type="radio" name="scooter" id="ip2" v-model="scooter" value="false">
                         <label for="scooter">いいえ</label>

                    </div>
                    <div class="birth-update">
                         <h4>普通自動車免許 :</h4>
                         <input type="radio" name="car" id="ip3" v-model="car">
                         <label for="scooter">はい</label>
                         <input type="radio" name="car" id="ip4" v-model="car">
                         <label for="scooter">いいえ</label>
                    </div>


                    <div class="btn-update">
                         <button type="button" @click="meUpdate">変更</button>
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

          .btn-update {
               padding: 10% 25%;


          }
     }
}
</style>