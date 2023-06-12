<script>
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      text: null,
      
      selectedOption: "",
      isShow: false,
    };
  },
  methods: {
  switchModal() {
      this.isShow = !this.isShow;
    },
  }
};
</script>

<template>
  
  <div class="top">
    
    <div class="text">
      <h2>修理完成車両情報の追加</h2>
    </div>
  
    <div v-if="!showTable" class="mider">
      
      <p>未完成のナンバープレートフォームは、「完了」ボタンを押してください</p>
      
      <button type="button" class="btn" @click="switchModal">完了</button>
      <Modal v-if="isShow" @pushOutside="switchModal">

<h2>追加成功</h2>
<table class="table">
  <thead>
    <tr>
      <th class="serial-number">連番番号</th>
      <th class="license-plate">ナンバープレート</th>
      <th class="repair-time">車両修理開始時間</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="serial-number">1</td>
      <td class="license-plate">ABC123</td>
      <td class="repair-time">2023-06-11 09:00 AM</td>
    </tr>
    <tr>
      <td class="serial-number">2</td>
      <td class="license-plate">XYZ789</td>
      <td class="repair-time">2023-06-11 10:30 AM</td>
    </tr>
    <!-- 添加更多的表格行 -->
  </tbody>
</table>

</Modal>
    </div>
   
</div>
</template>

<style lang="scss" scoped>

.bot{
  margin-top: 4rem
}
.finish{
  text-align: center;
}

.text{
  text-align: center;
  
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
