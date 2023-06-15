<script>
import GoogleMap from '../components/GoogleMap.vue';
export default {
    components: {
        GoogleMap
    }

}
</script>

<template>
    <div>
        <h2>Search Map</h2>
        <GoogleMap :address="station" />
    </div>
</template>

<style lang="scss" scoped></style>