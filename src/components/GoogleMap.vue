<script>
export default {
    mounted() {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA78WkzDQqacrp6Jh7r7eJGdNKWJsytXT0&callback=initMap&v=weekly`;
        script.defer = true;
        script.onload = this.initMap;
        document.head.appendChild(script);
    },
    methods: {
        initMap() {
            // 初始化地图
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 35.6814, lng: 139.7653 }, // 預設東京
                zoom: 10,
            });

            // 标记多个位置
            const locations = [
                { lat: 35.6858, lng: 139.7727 }, // '日本橋'
                { lat: 35.7141, lng: 139.7782 }, // '上野'
                { lat: 35.7320, lng: 139.7673 },//'西日暮里'
                { lat: 35.7295, lng: 139.7108 },// '池袋'
                { lat: 35.6896, lng: 139.7000 },//'新宿'
                { lat: 35.6341, lng: 139.7154 },//  '目黑'
                { lat: 35.7028, lng: 139.9863 },//  '船橋車站'
                { lat: 35.6133, lng: 140.1111 },//  '新千葉'
                { lat: 35.7777, lng: 140.3223 }, // '京成成田'
                { lat: 35.5314, lng: 139.6962 },// '京急川崎'
                { lat: 35.4433, lng: 139.6483 },// '横浜中華街'
                { lat: 35.2850, lng: 139.6587 }, // '橫須賀市'
                { lat: 35.2854, lng: 139.1598 } //  '小田原市'
            ];

            // 在地图上添加标记点
            locations.forEach((location) => {
                this.addMarkerToMap(map, location);
            });
        },
        addMarkerToMap(map, location) {
            new google.maps.Marker({
                position: location,
                icon: '../../public/mini-checked.png',
                animation: google.maps.Animation.DROP,
                map: map,
            });
        }
    }
}
</script>

<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<style lang="scss" scoped>
#map {
    height: 800px;
}
</style>