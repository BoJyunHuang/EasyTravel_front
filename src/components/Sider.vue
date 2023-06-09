<script>
import { RouterLink } from "vue-router";
export default {

}
</script>

<template>
    <!-- 各大項連結 -->
    <div class="list">
        <RouterLink class="link" to="">會員管理</RouterLink>
        <RouterLink class="link" to="">交通工具管理</RouterLink>
        <RouterLink class="link" to="">修理維護</RouterLink>
        <RouterLink class="link" to="/feeManager">費率管理</RouterLink>
        <RouterLink class="link" to="/finance">財務管理</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.list {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>