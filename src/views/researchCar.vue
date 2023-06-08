<script>
export default {
  data() {
    return {
      text: null,
      showTable: false,
      selectedOption: "",
    };
  },
  methods: {
    showTableOnClick() {
      this.showTable = true;
    },
    
  }
};
</script>

<template>
  <div class="top">
  <h2>修理車両の検索</h2>
</div>

  <div v-if="!showTable" class="mider">
      <p>未完成の車牌検索を入力してください</p>
      <input type="text" v-model="text">
      <button type="button" class="btn" @click="showTableOnClick">確認</button>
    </div>

</template>

<style lang="scss" scoped>

.top{
  margin-top: 50px;
}
.mider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}
  
</style>
