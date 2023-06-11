<script>
import { RouterLink } from "vue-router";
export default {

}
</script>

<template>
    <!-- 各大項連結 -->
    <div class="list">
        <h4>交通工具管理</h4>
        <RouterLink class="link" to="/vehicle-add-car">新增車輛</RouterLink>
        <RouterLink class="link" to="/vehicle-find-car-and-update">修改車輛</RouterLink>
        <RouterLink class="link" to="/vehicle-scrap-car">報廢車輛</RouterLink>
        <h4>修理する車両</h4>
        <RouterLink class="link" to="/AddCar">追加</RouterLink>
        <RouterLink class="link" to="/ResearchCar">検索</RouterLink>
        <RouterLink class="link" to="/DeleteCar">削除</RouterLink>
        <RouterLink class="link" to="/FinishCar">結單</RouterLink>
        <br>
        <RouterLink class="link" to="/feeManager">料金</RouterLink>
        <RouterLink class="link" to="/location-manage">レンタカーステーション</RouterLink>
        <RouterLink class="link" to="/finance">レポート</RouterLink>

    </div>
</template>

<style lang="scss" scoped>
.list {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>