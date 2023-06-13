<template>
  <div class="fee-manager">
    <h2>車両修理の検索</h2>
    <div class="d-flex justify-content-between">
      <select class="form-select w-50 mb-2" v-model="sortOption" @change="sortData">
        <option value="" disabled selected>近頃</option>
        <option value="timeAsc">時間: 遠い順</option>
        <option value="timeDesc">時間: 近い順</option>
        <option value="priceAsc">価格: 高い順</option>
        <option value="priceDesc">価格: 安い順</option>
      </select>
      
    </div>
    <p>※bikeAmountは自転車類の数、motorcycleAmountは二輪車の数、carAmountは四輪車の数を表しています。</p>
    <TableView :columns="tableColumns" :data="formattedData" :showEditButton="showEditButton"
      :showDeleteButton="showDeleteButton" />
   
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
      tableColumns: ['licensePlate', 'price', 'startTime', 'endTime', 'note'],
      maintenanceData: [],
      searchText: '',
      showEditButton: true,
      showDeleteButton: true,
      isShow: false,
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
            startTime: new Date(item.startTime).toLocaleString('ja-JP'),
            endTime: new Date(item.endTime).toLocaleString('ja-JP')
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
    switchModal() {
      this.isShow = !this.isShow;
    },
    sortData() {
      if (this.sortOption === 'timeAsc') {
        this.filteredData.sort((a, b) => new Date(a.startTime) - new Date(b.startTime)); // 按開始時間升序排序
      } else if (this.sortOption === 'timeDesc') {
        this.filteredData.sort((a, b) => new Date(b.startTime) - new Date(a.startTime)); // 按開始時間降序排序
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
</style>
