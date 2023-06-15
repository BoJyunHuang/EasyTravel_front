<script>
import GoogleMap from '../components/GoogleMap.vue';
export default {
    components: {
        GoogleMap
    }

}
</script>

<template>
    <div class="top">
        <h2 class="text-center">サイトマップ</h2>
    </div>
    <div class="icon">
    <div class="green">
        <img src="../../public/checked.png.g.png" alt="">
        <p class="pp">レンタル可</p>
    </div>
    <div class="bk">
        <img src="../../public/checked (1).png.bk.png" alt="">
        <p class="pp">車両不在</p>
    </div>
    
</div>
<div class="note">
<p>※ 地図上で利用可能な車両のレンタルを検索してください</p>
</div>
    <div class="map">
        <GoogleMap :address="station" />
    </div>
</template>

<style lang="scss" scoped>
.top {
    width: 1100px;
    height: 40px;
    background-color: #6FB7B7;
    color: black;
    margin-left: 6rem;
    margin-top: 1rem;
    border-radius: 3rem;
}
.icon{
    display: flex;
    margin-left: 16rem;
}
.note{
    margin-left: 6rem;
    margin-top: 2rem;
}
.pp{
    margin:0;
    padding-left: 1rem;
}

.map {

    width: 80vw;
    height: 70vh;
    margin-top: 0.5rem;
    margin-left: 6rem;
}

img {
    width: 50px;
    height: 50px;
}
.green{
    margin-left: 10rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
}
.bk{
    margin-left: 10rem;
    margin-top: 2rem;
    display: flex;
    align-items: center; 
}
</style>