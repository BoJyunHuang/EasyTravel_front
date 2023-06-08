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
    navigateToTarget() {
      if (this.selectedOption) {
        this.$router.push('/AddCar');
      }
    }
  }
};
</script>

<template>
  <div class="select">
    <select v-model="selectedOption" @change="navigateToTarget">
      <option value="option" selected>フォームの追加</option>
      <option value="option1">フォームの完成</option>
    </select>
  </div>
  <div class="top">
    <h2>修理完成車両情報の追加</h2>
    <div v-if="!showTable" class="mider">
      <p>未完成の車牌検索を入力してください</p>
      <input type="text" v-model="text">
      <button type="button" class="btn" @click="showTableOnClick">確認</button>
    </div>
    <div v-if=showTable class="bot">
    <table>
      <thead>
        <tr>
          <th>番号</th>
          <th>車牌</th>
          <th>価格</th>
          <th>修理車両の開始時間</th>
          <th>修理車両の終了時間</th>
          <th>車両の修理原因</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <!-- 添加更多的 <tr> 标签以添加更多的行 -->
      </tbody>
    </table>
  </div>
  </div>
</template>

<style lang="scss" scoped>

.bot{
  margin-top: 4rem
}
.select {
  position: fixed;
  left: 40px;
  top: 60px;
}

.top {
  margin-top: 50px;
}

.mider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}

.btn {
  margin-top: 1rem;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 15px;
}

.btn:active {
  transform: scale(0.9);
}

table {
  display: none;
  /* 初始状态隐藏表格 */
}


.bot table {
  display: table;
  border-collapse: collapse;
  width: 100%;
  
  /* 显示表格 */
}
th, td {
  border: 1px solid black;
  padding: 8px;
  
}
</style>
