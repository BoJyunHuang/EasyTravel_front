// 狀態資料庫
import { defineStore } from 'pinia'

// (,{三個大項物件})
export default defineStore("indexStore", {
     // data=>pinia格式
     // state: () => {
     //      return{

     //      }
     // },
     // 下面為省略寫法:
     state: () => ({
          // 預設寫法
          login: false,
          manager: false,
     }),



     // computed
     getters: {
          // 箭頭函式 帶入上方的state 跟vue寫法不同地方
          //  getLocation: (state) => `現在的位置是:...${state.location}`
     },

     // methods
     // 唯一可以用 this的區域(上面兩種不可以)
     actions: {
          // 傳統函式
          // 使用者登入
          loginPage() {
               this.login = true;
               console.log(this.login);
          },
          // 使用者登出
          signOut() {
               this.login = false;
               console.log(this.login);
          },
          // 管理者登入
          managerPage() {
               this.manager = true;
               console.log(this.manager+"~~");
               // window.location.href = "/administrator"


          },
          // 管理者登出
          manaSignOut() {
               this.manager = false;
               console.log(this.manager);

          }
     }
})