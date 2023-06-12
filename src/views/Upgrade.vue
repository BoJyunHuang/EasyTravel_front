<script>
export default {
     data() {
          return {

               // 自己宣告 ，用於雙向綁定
               account: null,
               pwd: null,
          }
     },
     mounted() {
          // console.log(userInfo)
     },
     methods: {
          upgrade: () => {
               let userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
               const body = {
                    // "REQ名稱"
                    account: userInfo.account,
               }
               console.log(body)
               fetch("http://localhost:8080/user_info_upgrade_vip", {

                    method: "POST",//預設是get
                    headers: {
                         'Content-Type':
                              'application/json',
                    },
                    body: JSON.stringify(body),
                  


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
     <div class="wrap-upgrade">
          <div class="title-upgrade">
               <h4>有料会員</h4>
          </div>

          <div class="upgrade-area">
               <div>
                    <div class="upgrade-fee">
                         <p>VIP料金はNT200元</p>
                    </div>


                    <div class="btn-upgrade">
                         <button @click="upgrade()">申し込み</button>
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
          .btn-upgrade-fee {
               padding: 10% 25%;
          }

          .btn-upgrade {
               padding: 10% 25%;


          }
     }
}
</style>