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
                <RouterLink class="link" to="/login">登入</RouterLink>
                <RouterLink class="link" to="/register">註冊</RouterLink>
                <RouterLink class="link" to="/administrator">管理者</RouterLink>
            </div>
        </div>
        <br>
        <div class="link">
            <!-- 各大項連結 -->
            <RouterLink class="link" to="/">首頁</RouterLink>
            <RouterLink class="link" to="/search-map">探索</RouterLink>
            <RouterLink class="link" to="/fee-map">收費標準</RouterLink>
            <RouterLink class="link" to="/calculate">試算</RouterLink>
            <RouterLink class="link" to="/member-info">會員資訊</RouterLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100vw;
    height: 150px;
    padding: 2rem;
    background-color: #C1395E;
    font-size: 1.5rem;

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

}
</style>