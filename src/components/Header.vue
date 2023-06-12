<script>
import { RouterLink } from "vue-router";
import { mapState, mapActions } from "pinia";
export default {

}
</script>

<template>
    <header>
        <div class="upper">
            <div class="icon"></div>
            <div class="login-area">
                <RouterLink class="link" to="/login">ログイン</RouterLink>
                <RouterLink class="link" to="/register">新規会員登録</RouterLink>
                <RouterLink class="link" to="/administrator">管理者</RouterLink>
            </div>
        </div>
        <br>
        <div class="link">
            <!-- 各大項連結 -->
            <RouterLink class="link" to="/">イージートラベル</RouterLink>
            <RouterLink class="link" to="/search-map">店舗を探す</RouterLink>
            <RouterLink class="link" to="/fee-map">車種と料金</RouterLink>
            <RouterLink class="link" to="/calculate">予約する</RouterLink>
            <RouterLink class="link" to="/member-info">会員情報管理</RouterLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 150px;
    padding: 2rem;
    background-color: #C1395E;
    font-size: 1.5rem;

    .upper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            width: 20px;
            height: 20px;
            background-color: black;
        }

        .login-area {
            display: flex;
        }
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
</style>