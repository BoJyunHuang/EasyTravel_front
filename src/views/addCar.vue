<template>
  <div class="fee-manager">
    <h2>車両修理の追加と変更</h2>
    <div class="d-flex justify-content-between">
      <select class="form-select w-50 mb-2" v-model="sortOption" @change="sortData">
        <option value="" disabled selected>近頃</option>
        <option value="timeAsc">時間: 遠い順</option>
        <option value="timeDesc">時間: 近い順</option>
      </select>
      <div class="twobtn">
        <button type="button" class="btn btn-success mb-2 px-3" @click="switchModal">フォーム追加</button>
        <button type="button" class="btn btn-success mb-2 px-3" @click="switchReasonCodeModal">車両修理の原因コード</button>
      </div>
    </div>
    <p>※bikeAmountは自転車類の数、motorcycleAmountは二輪車の数、carAmountは四輪車の数を表しています。</p>
    <TableView :columns="tableColumns" :data="formattedData" :showEditButton="showEditButton"
      :showDeleteButton="showDeleteButton" />
    <Modal v-if="isShow" @pushOutside="switchModal">
      <div class="con">
        <h2 class="m-2">以下の情報を入力してください。</h2>
        <table class="m-3 ">
          <tr>
            <th><label for="city" class="my-2">ナンバープレート</label></th>
            <td><input type="text" placeholder="ex:DB02" id="city"></td>
          </tr>
        </table>
        <div class="cont">
          <button type="button" class="btn btn-success btn-sm px-3">確認</button>
          <button type="button" class="btn btn-danger btn-sm px-3" @click="switchModal">キャンセル</button>
        </div>
      </div>
    </Modal>
  
    <Modal v-if="isReasonCodeModalShow" @pushOutside="switchReasonCodeModal">
      <div class="con">
        <h2 class="m-2">車両修理の原因コード</h2>
        <table class="m-3" style="border-collapse: collapse; border: 1px solid black;">
          <thead>
            <tr>
              <th style="border: 1px solid black;">代号</th>
              <th style="border: 1px solid black;">訊息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid black; color: #FF0000;">A01</td>
              <td style="border: 1px solid black;">エンジンがかからない</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #FF0000;">A02</td>
              <td style="border: 1px solid black;">車両に損傷があります!</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #FF0000;">A03</td>
              <td style="border: 1px solid black;">タイヤがパンクしています</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #EA7500;">B01</td>
              <td style="border: 1px solid black;">車両のライトが異常です</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #EA7500;">B02</td>
              <td style="border: 1px solid black;">車両の操作が異常です</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #EA7500;">B03</td>
              <td style="border: 1px solid black;">エンジンの異音がします</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #6FB7B7;">C01</td>
              <td style="border: 1px solid black;">ブレーキの摩耗があります。</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #6FB7B7;">C02</td>
              <td style="border: 1px solid black;">ライトの異常があります</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #6FB7B7;">C03</td>
              <td style="border: 1px solid black;">点検日が過ぎています</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #6FB7B7;">C04</td>
              <td style="border: 1px solid black;">タイヤの摩耗が進んでいます</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #6FB7B7;">C05</td>
              <td style="border: 1px solid black;">車体にキズがあります</td>
            </tr>
            <tr>
              <td style="border: 1px solid black; color: #0000FF;">E</td>
              <td style="border: 1px solid black;">処理中です</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  </div>
</template>

<script>
import TableView from "../components/Table.vue";
import Modal from "../components/Modal.vue";

export default {
  components: {
    TableView,
    Modal
  },
  data() {
    return {
      tableColumns: ['licensePlate', 'startTime', 'note'],
      maintenanceData: [],
      searchText: '',
      showEditButton: true,
      showDeleteButton: true,
      isShow: false,
      isReasonCodeModalShow: false,
      sortOption: 'timeDesc' // 預設以時間降序排序
    };
  },
  mounted() {
    this.fetchMaintenanceData();
  },
  methods: {
    fetchMaintenanceData() {
      fetch("http://localhost:8080/find_latest_ten_unfinished_abnormal")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.maintenanceData = data.maintenanceList.map(item => {
            return {
              ...item,
              startTime: new Date(item.startTime).toLocaleString('ja-JP'),
              endTime: new Date(item.endTime).toLocaleString('ja-JP')
            };
          });
        });
    },
    switchReasonCodeModal() {
      this.isReasonCodeModalShow = !this.isReasonCodeModalShow;
    },
    switchModal() { // 跳出式視窗顯示與否
      this.isShow = !this.isShow
    },
    updateFilteredData() {
      if (!this.searchText) {
        return this.maintenanceData;
      }
      const keyword = this.searchText.toLowerCase();
      return this.maintenanceData.filter(item => item.city.includes(keyword));
    },
    sortData() {
      if (this.sortOption === 'timeAsc') {
        this.filteredData.sort((a, b) => new Date(a.startTime) - new Date(b.startTime)); // 按開始時間升序排序
      } else if (this.sortOption === 'timeDesc') {
        this.filteredData.sort((a, b) => new Date(b.startTime) - new Date(a.startTime)); // 按開始時間降序排序
      }
    }
  },
  watch: {
    searchText() {
      this.updateFilteredData();
    }
  },
  computed: {
    filteredData() {
      if (!this.searchText) {
        return this.maintenanceData;
      }
      const keyword = this.searchText.toLowerCase();
      return this.maintenanceData.filter(item => item.city.includes(keyword));
    },
    formattedData() {
      return this.filteredData.map(item => {
        return {
          ...item,
          startTime: new Date(item.startTime).toLocaleString('ja-JP'),
          endTime: new Date(item.endTime).toLocaleString('ja-JP')
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.fee-manager {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.con {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}

.twobtn {
  display: flex;
  justify-content: space-around;
}

.cont {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 40px;
  margin-top: 2rem;
}

table {
  border-collapse: collapse;
  border: 1px solid black;
  font-size: 14px;
  width: 100%;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
