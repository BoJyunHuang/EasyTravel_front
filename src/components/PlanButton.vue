<script>
export default {
  props:["propImg", "propTitle"],
  data() {
    return {
      img: null,
      // title: ``
    }
  }
}
</script>

<template>
  <div>
    <img :src="propImg" alt="img">
    <p>{{ propTitle }}</p>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
  }
}
</style>