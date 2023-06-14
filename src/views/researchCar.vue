<template>
  <div class="fee-manager">
    <h2>車両修理の検索</h2>
    <div class="d-flex justify-content-between">
      <select class="form-select w-50 mb-2" v-model="sortOption" @change="sortData">
        <option value="" disabled selected>ソートして検索する</option>
        <option value="timeAsc">時間: 遠い順</option>
        <option value="timeDesc">時間: 近い順</option>
        <option value="priceAsc">価格: 高い順</option>
        <option value="priceDesc">価格: 安い順</option>
      </select>

    </div>
    <p>※bikeAmountは自転車類の数、motorcycleAmountは二輪車の数、carAmountは四輪車の数を表しています。</p>
    <TableView :columns="tableColumns" :data="formattedData" :showEditButton="showEditButton" :showControl="showControl"
      :showDeleteButton="showDeleteButton" @delete="deleteItem" />
    <Modal v-if="isShow && modalType == 'delete'" @pushOutside="closeModal">
      <H2 class="m-2">修理フォームの削除</H2>
      <table class="m-3 border">
        <tr>
          <th><label class="my-2">車牌</label></th>
          <td>{{ item.licensePlate }}</td>
        </tr>
        <tr>
          <th><label class="my-2">開始維修時間</label></th>
          <td>{{ item.startTime.replace('T', ' ') }}</td>
        </tr>
        <tr>
          <th><label class="my-2">註記</label></th>
          <td>{{ item.note }}</td>
        </tr>

      </table>
      <div class="w-25 d-flex justify-content-between">
        <button type="button" class="btn btn-success btn-sm px-3" @click="finaldelete">決定</button>
        <button type="button" class="btn btn-danger btn-sm px-3" @click="switchModal">キャンセル</button>
      </div>
    </Modal>
    <MessageModal v-if="isMessage" @getReady="Reload">
      <p>{{ message }}</p>
    </MessageModal>

  </div>
</template>

<script>
import TableView from "../components/Table.vue";
import Modal from "../components/Modal.vue";
import MessageModal from "../components/messageModal.vue"

export default {
  components: {
    TableView,
    Modal,
    MessageModal
  },
  data() {
    return {
      tableColumns: ['licensePlate', 'price', 'startTime', 'endTime', 'note'],
      maintenanceData: [],
      searchText: '',
      showEditButton: false,
      showDeleteButton: true,
      isMessage: false,
      isShow: false,
      message: '',
      showControl: true,
      sortOption: 'timeDesc' // 預設以時間降序排序
    };
  },
  mounted() {
    fetch("http://localhost:8080/find_all_finished_abnormal")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.maintenanceData = data.maintenanceList.map(item => {
          return {
            ...item,
            startTime: item.startTime ? item.startTime.replace('T', ' ') : '',
            endTime: item.endTime ? item.endTime.replace('T', ' ') : ''

          };
        });
      });
  },
  methods: {
    updateFilteredData() {
      if (!this.searchText) {
        return this.maintenanceData;
      }
      const keyword = this.searchText.toLowerCase();
      return this.maintenanceData.filter(item =>
        item.city.includes(keyword)
      );
    },
    deleteItem(item) {

      this.isShow = !this.isShow
      this.modalType = 'delete'
      this.item = item
    },
    finaldelete() {
      const body = {
        "licensePlate": this.item.licensePlate,
        "startTime": this.item.startTime
      };
      console.log(body);
      fetch("http://localhost:8080/delete_abnormal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(data => {
          this.message = data.message;
        });
      this.isMessage = true;
    }
    , Reload() {
      this.isShow = false
      this.isMessage = false
      window.location.reload()
    },
    closeModal() {
      this.isShow = false
      item = null
      // 執行刪除操作
      // 可以將 item 傳遞到後端方法進行處理
    },
    switchModal() {
      this.isShow = !this.isShow;
    },
    sortData() {
  if (this.sortOption === 'timeAsc') {
    this.filteredData.sort((a, b) => new Date(b.startTime) - new Date(a.startTime)); // 按開始時間遠到近排序
  } else if (this.sortOption === 'timeDesc') {
    this.filteredData.sort((a, b) => new Date(a.startTime) - new Date(b.startTime)); // 按開始時間近到遠排序
  } else if (this.sortOption === 'priceAsc') {
    this.filteredData.sort((a, b) => a.price - b.price); // 按價格升序排序
  } else if (this.sortOption === 'priceDesc') {
    this.filteredData.sort((a, b) => b.price - a.price); // 按價格降序排序
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
      return this.maintenanceData.filter(item =>
        item.city.includes(keyword)
      );
    },
    formattedData() {
      return this.filteredData.map(item => {
        return {
          ...item,
          startTime: item.startTime.replace('T', ' '),
          endTime: item.endTime

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
