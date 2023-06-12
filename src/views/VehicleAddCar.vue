<script>
import Modal from "../components/Modal.vue"
export default {
  components: {
    Modal
  },
  data() {
    return {
      isAddCarShow: false,
      isScrapCarShow: false,
      ccRange: "bike : 0\nscooter : 1~250\nmotorcycle : 251~550\nheavy motorcycle : >550\nsedan/ven/suv : 自定義(1200~6600)",
      title: null
    }
  },
  methods: {
    switchAddCar() {
      this.isAddCarShow = !this.isAddCarShow
    },
    switchScrapCar() {
      this.isScrapCarShow = !this.isScrapCarShow
    }
  }
}
</script>

<template>
  <div class="input-area d-flex flex-column p-4 h-100">

    <div class="btn-area align-items-center justify-content-md-between mb-3">
      <div class="find-by-category">
      <span class="my-2 mx-3 align-items-center">車種</span>
      <select name="車種" id="categoryInput" class="mb-2 me-3">
        <option value="bike">bike</option>
        <option value="scooter">scooter</option>
        <option value="motorcycle">motorcycle</option>
        <option value="heavy motorcycle">heavy motorcycle</option>
        <option value="sedan">sedan</option>
        <option value="ven">ven</option>
        <option value="suv">suv</option>
      </select>

      <button class="workBtn btn btn-success">検索</button>
      </div>

      <button type="button" class="functionBtn btn btn-success w-25" @click="switchAddCar">新規登錄</button>
      <button type="button" class="functionBtn btn btn-success w-25" @click="switchScrapCar">報廢</button>
      <!-- <button type="button" class="functionBtn btn btn-success w-25" @click="switchFindCar">車種で検索</button> -->
    </div>

    <!-- Add Car -->
    <Modal v-if="isAddCarShow" @pushOutside="switchAddCar">
      <h2 class="mt-4 text-vehicle fw-bold">新規登錄</h2>
      <table class="h-50">
        <tr class="my-2">
          <th>車両番号</th>
          <td><input type="text"></td>
        </tr>
        <tr class="my-2">
          <th>車種</th>
          <td>
            <select name="車種" id="categoryInput">
              <option value="bike">bike</option>
              <option value="scooter">scooter</option>
              <option value="motorcycle">motorcycle</option>
              <option value="heavy motorcycle">heavy motorcycle</option>
              <option value="sedan">sedan</option>
              <option value="ven">ven</option>
              <option value="suv">suv</option>
            </select>
          </td>
        </tr>
        <tr class="my-2">
          <th :title="ccRange">タンク容量</th>
          <td><input type="text" id="tank" :title="ccRange"></td>
        </tr>
        <tr class="my-2">
          <th>値段</th>
          <td><input type="text" id="price"></td>
        </tr>
      </table>

      <button class="workBtn btn btn-success mt-2 ">追加</button>

    </Modal>

    <!-- Scrap Car -->
    <Modal v-if="isScrapCarShow" @pushOutside="switchScrapCar">
      <h2 class="mt-4 text-vehicle fw-bold">車の廃棄</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">車両番号</th>
            <th scope="col">車種</th>
            <th scope="col">追加日</th>
            <th scope="col">最新検査日</th>
            <th scope="col">レンタル状態</th>
            <th scope="col">走行距離</th>
            <!-- <th scope="col">値段</th> -->
            <th scope="col">廃棄</th>
          </tr>
        </thead>
        
        <tbody id="scrapCarInfo">
        </tbody>
      </table>
    </Modal>

      <!-- table -->

    <div class="carInfoTable">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">車牌號碼</th>
            <th scope="col">車種</th>
            <th scope="col">新增日期</th>
            <th scope="col">最新檢查日</th>
            <th scope="col">可租借狀態</th>
            <th scope="col">總里程數</th>
            <th scope="col">價格</th>
            <th scope="col">修改</th>
          </tr>
        </thead>
        
        <tbody id="carInfo">
        </tbody>
        
      </table>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.input-area {
  display: flex;
  flex-direction: column;
  padding: 5%;

  .btn-area {
    display: flex;
    justify-content: space-around;

  }

  Modal {
    padding-top: 2rem;
    // color: #0782ee;

    h2 {
      color: #8cfbd6;
      color: #5fcaa7;
    }

    tr {
      height: 2.5rem;

      th {
        width: 7rem;
      }

      td {

        input {
          border-radius: 5px;
          padding-left: 3px;
        }

        .carType {
          border-radius: 5px;
        }

      }
    }

    .workBtn {
      width: 7rem;
      height: 2.5rem;
      margin-top: 0.5rem;
      margin-left: 3rem;
    }

  }


}
</style>