<script>
import { RouterView } from "vue-router";
import SiderView from "../components/Sider.vue";
export default {
    components: {
        SiderView
    }

}
</script>

<template>
    <h2>管理者頁面</h2>
    <div class="wrap">
        <div class="link">
            <!-- 各大項連結 -->
            <SiderView />
        </div>
        <div class="main-page">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .link {
        width: 20%;
    }

    .main-page {
        width: 80%;
        border: 1px solid black;
    }
}
</style>