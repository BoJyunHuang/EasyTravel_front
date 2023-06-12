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
      isSecondModalShow: false,
    }
  },
  methods: {
    navigateToTarget() {
      this.$router.push('/FinishCar');
    },
    switchModal() {
      this.isShow = !this.isShow;
    },
  }
}

</script>

<template>
  <div class="top">

    <div class="text">
      <h2>新規の修理する車両を追加</h2>
    </div>
    <div class="mid">
      <p>車牌を入力してください</p>
      <input type="text" v-model.lazy="text">


      <button type="button" class="btn btnadd" @click="switchModal">確認</button>
    </div>
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
      <button type="button" class="btn btn-primary" @click="navigateToTarget">フォームを完成</button>
    </Modal>

    <Modal v-if="isSecondModalShow">
      <!-- 第二個彈跳視窗的內容 -->
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
.top {

  margin-top: 50px;


}

.text {
  text-align: center;
}

.mid {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}

.finish {
  margin-top: 2.5rem;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 15px;
}



.btn {
  margin-top: 2rem;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 15px;



}

.btn:active {
  transform: scale(0.9);
}
</style>
