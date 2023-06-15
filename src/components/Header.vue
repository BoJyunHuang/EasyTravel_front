<script>
import { RouterLink } from "vue-router";
import { mapState, mapActions } from "pinia";
export default {

}
</script>

<template>
    <header class="d-flex">
        <div class="upper">
            <img src="../../public/logo2.png" alt="" class="icon">
            <div class="button-area">
                <div class="login-area">
                    <RouterLink class="link" to="/login">ログイン</RouterLink>
                    <RouterLink class="link" to="/register">新規会員登録</RouterLink>
                    <RouterLink class="link" to="/administrator">管理者</RouterLink>
                </div>
                <img src=".." alt="">
                <div class="link-area">
                    <!-- 各大項連結 -->
                    <RouterLink class="link" to="/">イージートラベル</RouterLink>
                    <RouterLink class="link" to="/search-map">店舗を探す</RouterLink>
                    <RouterLink class="link" to="/fee-map">車種と料金</RouterLink>
                    <RouterLink class="link" to="/rent">予約する</RouterLink>
                    <RouterLink class="link" to="/member-search">会員情報管理</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100vw;
    height: 150px;
    padding: 2rem;
    // background-color: #5b39c1;
    background: rgb(30, 26, 98);
    background: linear-gradient(90deg, rgba(30, 26, 98, 0.9164915966386554) 0%, rgba(9, 70, 121, 1) 35%, rgba(18, 162, 231, 1) 100%);
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    .upper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            width: 15%;
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
            }


            .link-area {
                display: flex;
                justify-content: start;
                margin-left: 4.5%;

            }

            .link {
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
        }
    }

}
</style>