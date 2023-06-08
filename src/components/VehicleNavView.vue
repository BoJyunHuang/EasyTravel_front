<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <nav class="vehicle-nav">
      <h3>交通工具管理</h3>
      <RouterLink class="link btn btn-success text-white" to="/vehicle-add-car">新增</RouterLink>
      <RouterLink class="link btn btn-success text-white" to="/vehicle-find-car-and-update">查看/修改</RouterLink>
      <RouterLink class="link btn btn-success text-white" to="/vehicle-scrap-car">報廢</RouterLink>
    </nav>

  </div>
</template>

<style lang="scss" scoped>
div {
  width: 25%;
  height: 100vh;
  padding: 2% 2%;
  background-color: #77d2b4;

  .vehicle-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      color: white;
      margin-bottom: 1rem;
    }

    .btn {
      width: 100%;
      font-size: 20px;
      margin-bottom: 1rem;
    }

  }
}
</style>