<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <RouterLink class="link" to="/AddCar">修理する車両を追加</RouterLink>
        <RouterLink class="link" to="/ResearchCar">修理する車両を検索</RouterLink>
        <RouterLink class="link" to="/DeleteCar">修理する車両を削除</RouterLink>

    </header>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    color: black;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 1rem;

    &:hover {
        color: #79dfb1;
    }
}
</style>