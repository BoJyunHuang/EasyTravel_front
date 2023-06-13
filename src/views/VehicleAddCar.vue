<script>
import Modal from "../components/Modal.vue"
import TableView from "../components/Table.vue"
export default {
  components: {
    Modal,
    TableView
  },
  data() {
    return {
      vehicleColumn: [`licensePlate`, `category`, `cc`, `startServingDate`, `latestCheckDate`, `available`, `city`, `location`, `odo`, `price`],
      vehicleData: [],
      // table button 編輯按鈕
      showEditButton: true,
      showDeleteButton: true,
      // modal
      isAddCarShow: false,
      isScrapCarShow: false,
      isUpdateCarShow: false,
      modalTitle: null,
      ccRange: "bike : 0\nscooter : 1~250\nmotorcycle : 251~550\nheavy motorcycle : >550\nsedan/ven/suv : 自定義(1200~6600)",
      // fetch / find by category
      carInfo: document.getElementById("carInfo"),
      categoryInput: document.getElementById("categoryInput"),
      // fetch / add car
      plateNumInput

    }
  },
  methods: {
    switchAddCar() {
      this.isAddCarShow = !this.isAddCarShow
    },
    switchScrapCar() {
      this.isScrapCarShow = !this.isScrapCarShow
    },
    switchUpdateCar(){
      this.isUpdateCarShow = !this.isUpdateCarShow
    },
    // find by category
    findCar() {
      let body = {
        "category" : categoryInput.value
      }
      // console.log("click")
      fetch ("http://localhost:8080/find_car_by_category", {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.message == "Success!"){
          this.vehicleData = data.vehicleList
        }
      })
    }



  },
  mounted() {
    // 找所有車輛 ( 網頁一進去自動顯示 )
    fetch("http://localhost:8080/find_all_car")
    .then(res => res.json())
    .then(data => {
      console.log(data.vehicleList)
      this.vehicleData = data.vehicleList
    })
    
  }
}
</script>

<template>
  <div class="input-area d-flex flex-column p-4 h-100">

    <div class="btn-area align-items-center justify-content-md-between mb-3">
      <!-- find by category -->
      <div class="find-by-category">
      <span class="my-2 mx-3 align-items-center">車種</span>
      <select name="車種" id="categoryInput" class="mb-2 me-3">
        <option>--------</option>
        <option value="bike">bike</option>
        <option value="scooter">scooter</option>
        <option value="motorcycle">motorcycle</option>
        <option value="heavy motorcycle">heavy motorcycle</option>
        <option value="sedan">sedan</option>
        <option value="ven">ven</option>
        <option value="suv">suv</option>
      </select>

      <button class="workBtn btn btn-success" @click="findCar">検索</button>
      </div>

      <!-- button -->
      <button type="button" class="functionBtn btn btn-success w-25" @click="switchAddCar">新規登錄</button>
      <button type="button" class="functionBtn btn btn-success w-25" @click="switchScrapCar">車の廃棄</button>
    </div>

    <!-- table -->
    <div class="carInfoTable">
      <TableView :columns="vehicleColumn" :data="vehicleData" :showEditButton="showEditButton"
            :showDeleteButton="showDeleteButton" />
    </div>

    <!-- Modal -->
    <!-- Add Car -->
    <Modal v-if="isAddCarShow" @pushOutside="switchAddCar">
      <h2 class="mt-4 text-vehicle fw-bold">新規登錄</h2>
      <table class="h-50">
        <tr class="my-2">
          <th>車両番号</th>
          <td><input type="text" id="plateNumInput"></td>
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
          <td><input type="number" id="tankInput" :title="ccRange"></td>
        </tr>
        <tr class="my-2">
          <th>値段</th>
          <td><input type="number" id="priceInput"></td>
        </tr>
      </table>

      <button class="workBtn btn btn-success mt-2 ">追加</button>

    </Modal>

    <!-- Scrap Car -->
    <Modal v-if="isScrapCarShow" @pushOutside="switchScrapCar">
      <h2 class="mt-4 text-vehicle fw-bold">車の廃棄</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">車両番号</th>
            <th scope="col">車種</th>
            <th scope="col">追加日</th>
            <th scope="col">最新検査日</th>
            <th scope="col">ステータス</th>
            <th scope="col">走行距離</th>
            <!-- <th scope="col">値段</th> -->
            <th scope="col">廃棄</th>
          </tr>
        </thead>
        
        <tbody id="scrapCarInfo">
        </tbody>
      </table>
    </Modal>

    <!-- Update Car -->
    <Modal v-if="isUpdateCarShow" @pushOutside="switchUpdateCar">
      <h2 class="mt-4 text-vehicle fw-bold">車の情報変更</h2>
    </Modal>

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