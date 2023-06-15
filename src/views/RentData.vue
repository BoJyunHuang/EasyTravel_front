<script>
import Modal from "../components/Modal.vue"
import TableView from "../components/Table.vue"
import MessageModal from "../components/messageModal.vue"
export default {
  components: {
    Modal,
    TableView,
    MessageModal
  },
  data() {
    return {
      vehicleColumn: [
        { key: `licensePlate`, column: "車両番号" }, { key: `city`, column: "都市" },
        { key: `location`, column: "場所" }, { key: `rentTime`, column: "貸出時間" },
        { key: `price`, column: "価格" }],
      vehicleData: [],
      deleteData: [],    // 刪除車資料
      // table button 編輯按鈕
      showEditButton: true,   // 顯示變更按鈕
      showDeleteButton: true, // 顯示刪除按鈕
      showCompleteButton: false,
      showControl: true,      // 顯示操作行
      item: {},               // 直接編輯資料
      // modal
      isAddCarShow: false,    // 顯示新增視窗
      isScrapCarShow: false,  // 顯示報廢視窗
      isUpdateCarShow: false, // 顯示變更視窗
      isMessage: false,       // 顯示回覆視窗
      message: ``,            // 後端回傳訊息

      ccRange: "bike : 0\nscooter : 1~250\nmotorcycle : 251~550\nheavy motorcycle : >550\nsedan/ven/suv : 自定義(1200~6600)",
      // fetch / find by category
      categoryInput: document.getElementById("categoryInput"),
      // fetch / add car
      plateNumInput: '',
      categoryInput: '',
      tankInput: '',
      priceInput: '',
      // fetch / update car
      available: true,
      reqOdo: 0

    }
  },

  mounted() {
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"))

    const body = {
      // "REQ名稱"
      account: userInfo.account,
   

    }
    // 找所有車輛 ( 網頁一進去自動顯示 )
    fetch("http://localhost:8080/show_details", {
      method: "POST",//預設是get
      headers: {
        'Content-Type':
          'application/json',
      },
      body: JSON.stringify(body),

    })
      .then(function (response) {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        // console.log(data);
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
      <TableView :columns="vehicleColumn" :data="vehicleData" :showControl="showControl" :showEditButton="showEditButton"
        @edit="updateCar" />
    </div>

    <!-- Modal -->
    <!-- Add Car -->
    <Modal v-if="isAddCarShow" @pushOutside="switchAddCar">
      <h2 class="mt-4 text-vehicle fw-bold">新規登錄</h2>
      <table class="h-50">
        <tr class="my-2">
          <th>車両番号</th>
          <td><input type="text" v-model="plateNumInput"></td>
        </tr>
        <tr class="my-2">
          <th>車種</th>
          <td>
            <select name="車種" v-model="categoryInput">
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
          <th :title="ccRange">排気量(cc)</th>
          <td><input type="number" v-model="tankInput" :title="ccRange"></td>
        </tr>
        <tr class="my-2">
          <th>値段</th>
          <td><input type="number" v-model="priceInput"></td>
        </tr>
      </table>

      <button type="button" class="workBtn btn btn-success mt-2" @click="addCar">追加</button>

    </Modal>

    <!-- Scrap Car -->
    <Modal v-if="isScrapCarShow" @pushOutside="switchScrapCar">
      <h2 class="mt-4 text-vehicle fw-bold">車の廃棄</h2>
      <TableView :columns="vehicleColumn" :data="deleteData" :showControl="showControl"
        :showDeleteButton="showDeleteButton" @delete="scrapCar">

      </TableView>
    </Modal>

    <!-- Update Car -->
    <Modal v-if="isUpdateCarShow" @pushOutside="switchUpdateCar">
      <h2 class="mt-4 text-vehicle fw-bold">車の情報変更</h2>
      <table class="h-50">
        <tr class="my-2">
          <th>車両番号</th>
          <td>{{ item.licensePlate }}</td>
        </tr>
        <tr class="my-2">
          <th>車種</th>
          <td>{{ item.category }}</td>
        </tr>
        <tr class="my-2">
          <th>排気量</th>
          <td>{{ item.cc }}<span>cc</span></td>
        </tr>
        <tr class="my-2">
          <th>追加日</th>
          <td>{{ item.startServingDate }}</td>
        </tr>
        <tr class="my-2">
          <th>最新検査日</th>
          <td>{{ item.latestCheckDate }}</td>
        </tr>
        <tr class="my-2">
          <th>ステータス</th>
          <td><select name="available" id="available" v-model="available">
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </td>
        </tr>
        <tr class="my-2">
          <th>エリア</th>
          <td>{{ item.city }}</td>
        </tr>
        <tr class="my-2">
          <th>ポート</th>
          <td>{{ item.location }}</td>
        </tr>
        <tr class="my-2">
          <th>走行距離</th>
          <td>{{ item.odo }}
            <span> + </span>
            <input type="number" v-model="reqOdo">
            <span>キロ</span>
          </td>
        </tr>
        <tr class="my-2">
          <th>値段</th>
          <td>{{ item.price }}</td>
        </tr>
      </table>

      <button type="button" class="workBtn btn btn-success my-2" @click="finalUpdateCar">変更</button>

    </Modal>


    <MessageModal v-if="isMessage" @getReady="Reload">
      <p>{{ message }}</p>
    </MessageModal>

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