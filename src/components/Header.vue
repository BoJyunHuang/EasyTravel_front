<script>
import { RouterLink } from "vue-router";
import { mapState, mapActions } from "pinia";
import indexStore from "../stores/counter";
// import Modal from "../components/Modal.vue"
// import MessageModal from "../components/messageModal.vue"
export default {
    // components: {
    //     Modal,
    //     MessageModal
    // },
    data() {
        return {
            // login :false,
            // ...mapState(indexStore,["login"]),
            isShow: false, // 顯示跳出式視窗
            isMessage: false, // 顯示回覆式視窗
            message: '', // 執行後端方法的回覆
            userInfo: {},
            city: '',
            location: '',
            odo: 0,
        }
    },
    computed: {
        //  mapState =>pinia:state,getters
        //       可以取到在pinia裡面的狀態資料
        ...mapState(indexStore, ["login", "manager", "isRent", "getUser"]),
    },
    methods: {
        // 帶入pinia的方法
        ...mapActions(indexStore, ["signOut", "updateLoginInfo", "manaSignOut", "getback", "refresh"]),
        out() {
            //    呼叫pinia的登出方法
            this.signOut();
            this.refresh();
        },
        dropOff() {
            // this.userInfo = sessionStorage.getItem("userInfo")
            this.userInfo = this.getLoginInfo
            if (!this.userInfo || !this.userInfo.account) {
                this.$router.push('/login');
            }
            this.isShow = true
        }, closeModal() {
            this.isShow = false
        }, finalDropOff() {
            const body = {
                "account": this.userInfo.account,
                "licensePlate": item.licensePlate,
            }
            fetch("http://localhost:8080/rent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(data => this.message = data.message)
            this.isMessage = true
        }, Reload() {
            this.isShow = false
            this.isMessage = false
            this.getback()
            window.location.reload()
        }

    },
    mounted() {
        // 刷新頁面(進入頁面)時做一次此方法
        // console.log(this.manager);
    }
}
</script>

<template>
    <header class="">
        <div class="upper">
            <RouterLink class="home-link ms-3" to="/"> <img src="../../public/Frame_8_big.png" class="icon"></RouterLink>


            <div class="button-area">
                <div class="login-area">

                <!-- <RouterLink class="link" to="/login" v-if="!login && !manager">ログイン</RouterLink> -->
                <!-- ------- -->

                <RouterLink class="link" to="/login" v-if="!login && !manager">
                    <i class="fa-solid fa-user"></i>
                    <!-- <button class="login-button">ログイン</button> -->
                    ログイン
                </RouterLink>
                <!-- ------- -->


                <!-- @click="方法名稱" -->
                <p v-if="login">{{ getUser }}</p>
                <!-- <img src=".." alt=""> -->
                <button class="sign-out" v-if="login" @click="out">ログアウト</button>
                <RouterLink class="link" to="/register" v-if="!login && !manager">新規登録</RouterLink>
                <RouterLink class="link" v-if="manager" to="/administrator">管理者</RouterLink>
                <div class="d-flex justify-center item-center" v-if="isRent">
                    <h5 class="rentText">レンタカー利用中</h5>
                    <button class="sign-out" @click="dropOff">返す</button>
                </div>
            </div>
                <div class="link-area">
                    <!-- 各大項連結 -->

                    <!-- <RouterLink class="link" to="/">イージートラベル</RouterLink> -->
                    <RouterLink class="link" to="/search-map">
                        <i class="fa-solid fa-circle-info"></i>
                        サイト情報
                    </RouterLink>
                    <RouterLink class="link" to="/fee-map">
                        <i class="fa-solid fa-yen-sign"></i>
                        車種と料金
                    </RouterLink>
                    <RouterLink class="link" to="/rent">
                        <i class="fa-solid fa-location-dot"></i>
                        レンタル
                    </RouterLink>
                    <!-- <p>{{ login }}</p> -->
                    <RouterLink class="link" v-if="login" to="/member-info">会員情報管理</RouterLink>

                </div>
            </div>
        </div>

      <div class="bgs">
        <img src="../../public/bikeshareservice.png" alt="" class="bg">
      </div>
        <!-- <Modal v-if="isShow" @pushOutside="closeModal">
                                                                <H2 class="m-2">返却場所登録</H2>
                                                                <table class="m-3 ">
                                                                    <tr>
                                                                        <th><label for="city" class="my-2">都道府県</label></th>
                                                                        <td><input type="text" placeholder="ex:東京都" id="city" v-model="city"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><label for="location" class="my-2">サイト</label></th>
                                                                        <td><input type="text" min="0" title="会社の拠点" id="location" v-model="location"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th><label for="odo" class="my-2">走行マイル数</label></th>
                                                                        <td><input type="number" min="0" title="0以上" id="odo" v-model="odo"></td>
                                                                    </tr>
                                                                </table>
                                                                <div class="w-25 d-flex justify-content-between">
                                                                    <button type="button" class="btn btn-success btn-sm px-3" @click="finalDropOff">決定</button>
                                                                    <button type=" button" class="btn btn-danger btn-sm px-3" @click="closeModal">キャンセル</button>
                                                                </div>
                                                            </Modal>
                                                            <MessageModal v-if="isMessage" @getReady="Reload">
                                                                <p>{{ message }}</p>
                                                            </MessageModal> -->
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100vw;
    // height: 900px;
    // padding-left: 1rem;
    background-color: #E3F3FC;

    // background-image: url("../../public/bikeshareservice.png");
    // background-repeat: no-repeat;
    // background-size: cover;
    // background: #FFFFB9;

    // background: linear-gradient(90deg, rgba(30, 26, 98, 0.9164915966386554) 0%, rgba(9, 70, 121, 1) 35%, rgba(18, 162, 231, 1) 100%);
    // background: rgb(68, 163, 221);
    // background: linear-gradient(90deg, rgba(68, 163, 221, 0.8354978354978355) 0%, rgba(74, 136, 234, 1) 16%, rgba(143, 153, 235, 1) 83%);

    font-size: 1.5rem;
    display: flex;
    flex-direction: column;

    .upper {
        width: 100%;
        // height: 400px;
        display: flex;
        // justify-content: space-between;
        align-items: center;

        .home-link {
            width: 200px;

            .icon {
                width: 100%;

            }

        }



        .button-area {
            height: 6rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .login-area {
                display: flex;
                justify-content: end;

                .rentText {
                    color: white;
                }

                // ------------------------
                // .login-button{
                //     // border-radius: 2px;
                //     // background-color: #C1395E;
                //     border: 1px solid none;
                //     background-color: none;
                //     height: 35px;
                //     margin-left: auto;
                // }
                // -----------------------
            }


            .link-area {
                display: flex;
                justify-content: start;
                margin-left: 4.5%;

            }

            .sign-out {
                border: 0px;
                background-color: transparent;
                text-decoration: none;
                color: black;
                cursor: pointer;
                transition: 0.3s;
                margin: 0 1rem;
                color: white;

                &:hover {
                    color: #79dfb1;
                }
            }

            .link {
                text-decoration: none;
                color: rgb(47, 27, 27);
                cursor: pointer;
                transition: 0.3s;
                margin: 0 1rem;
                // color: white;

                &:hover {
                    color: #79dfb1;
                }
            }
        }
    }

    .bgs{
        .bg{
            // height: 200px;
            width:100%;
        }
    

    }

}</style>