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
        <h4>費率管理</h4>
        <RouterLink class="link" to="/feeManager">費率管理</RouterLink>
        <RouterLink class="link" to="/fee-add">新增</RouterLink>
        <RouterLink class="link" to="/fee-revise">修改</RouterLink>
        <RouterLink class="link" to="/fee-drop">撤銷</RouterLink>
        <h4>財務管理</h4>
        <RouterLink class="link" to="/finance">報表</RouterLink>

    </div>
</template>

<style lang="scss" scoped>
.list {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>