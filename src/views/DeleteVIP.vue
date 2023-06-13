<script>
export default {
     data() {
          return {
               // 自己宣告 ，用於雙向綁定
               
          }
     },
     methods: {
          // 方法(參數)
          quiet() {
               let userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
               // this.acc = 
               const body = {
                    account: userInfo.account,
               }
               fetch("http://localhost:8080/user_info_Quit_vip", {
                    method: "POST",
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
     <div class="wrap-delete">
          <div class="title-delete">
               <h4>取り消すVIP</h4>
          </div>

          <div class="delete-area">
               <div>
                    <div class="btn-delete">
                         <button type="button" @click="quiet">申し込み</button>
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

          .btn-delete {
               padding: 10% 25%;


          }
     }
}
</style>