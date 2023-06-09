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
                <p>登入</p>
            </div>
        </div>
        <div class="link">
            <!-- 各大項連結 -->
            <RouterLink class="link" to="/">首頁</RouterLink>
            <RouterLink class="link" to="/search-map">探索</RouterLink>
            <RouterLink class="link" to="/calculate">試算</RouterLink>
        </div>
        <RouterLink class="link" to="/administrator">管理者</RouterLink>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 250px;
    padding: 1rem 4rem;
    background-color: red;

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