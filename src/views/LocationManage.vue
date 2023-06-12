<script>
import TableView from "../components/Table.vue"
import Modal from "../components/Modal.vue"
export default {
    components: {
        TableView, // 帶入表格元件
        Modal // 帶入跳出式視窗元件
    },
    data() {
        return {
            tableColumns: ['city', 'location', 'bikeAmount', 'motorcycleAmount', 'carAmount'], // 表格標題
            locationsData: [], // 表格內容
            searchText: '', // 搜尋關鍵字
            showEditButton: true,  // 是否顯示修改按鈕
            showDeleteButton: true,  // 是否顯示刪除按鈕
            isShow: false // 顯示跳出式視窗
        };
    },
    mounted() { // 預設執行方法，進入頁面後隨即執行，後端-顯示所有站點資料
        fetch("http://localhost:8080/show_all_stops")
            .then(res => res.json())
            .then(data => this.locationsData = data.stopList)
    },
    methods: { // 各種方法
        updateFilteredData() { // 更新數據內容的方法
            if (!this.searchText) { // 對應到"搜尋內容"，若無則不改變內容
                return this.locationsData;
            }
            const keyword = this.searchText.toLowerCase(); // 關鍵字"搜尋內容"
            return this.locationsData.filter(item => // 將資料進行過濾，回傳含關鍵字資料
                item.city.includes(keyword)
            )
        }, switchModal() { // 跳出式視窗顯示與否
            this.isShow = !this.isShow
        }
    },
    watch: { // 事件監聽
        searchText: function (newText, oldText) { // 當"搜尋內容"發生改變時
            // 在 searchText 變化時執行相應的操作
            this.updateFilteredData();
        }
    },
    computed: { // 改變顯示內容，對應到內容因應關鍵字變化的方法
        filteredData() {
            if (!this.searchText) {
                return this.locationsData;
            }
            const keyword = this.searchText.toLowerCase();
            return this.locationsData.filter(item => {
                // 根據需要調整下面的條件
                return (
                    item.city.includes(keyword)
                );
            });
        }
    }
}
</script>

<template>
    <div class="fee-manager">
        <h2>サイト</h2>
        <div class="d-flex justify-content-between">
            <select class="form-select w-50 mb-2" aria-label="Default select example" v-model="searchText">
                <option value="" disabled selected>都道府県を選ぶ</option>
                <option value="">全ての都道府県から選ぶ</option>
                <option value="東京都">東京都</option>
                <option value="千葉縣">千葉縣</option>
                <option value="神奈川縣">神奈川縣</option>
            </select>
            <button type="button" class="btn btn-success mb-2 px-3" @click="switchModal">サイト追加</button>
        </div>
        <p>※bikeAmountは自転車類の数、motorcycleAmountは二輪車の数、carAmountは四輪車の数を表しています。</p>
        <TableView :columns="tableColumns" :data="filteredData" :showEditButton="showEditButton"
            :showDeleteButton="showDeleteButton" />
        <Modal v-if="isShow" @pushOutside="switchModal">
            <H2 class="m-2">サイト追加</H2>
            <table class="m-3 ">
                <tr>
                    <th><label for="city" class="my-2">都道府県</label></th>
                    <td><input type="text" placeholder="ex:東京都" id="city"></td>
                </tr>
                <tr>
                    <th><label for="location" class="my-2">ロケーション</label></th>
                    <td><input type="text" min="0" title="会社の拠点" id="location"></td>
                </tr>
                <tr>
                    <th><label for="bike_amount" class="my-2">自転車類の数</label></th>
                    <td><input type="number" min="0" title="0以上を含む" id="bike_amount"></td>
                </tr>
                <tr>
                    <th><label for="motorcycle_amount" class="my-2">二輪車の数</label></th>
                    <td><input type="number" min="0" title="0以上を含む" id="motorcycle_amount"></td>
                </tr>
                <tr>
                    <th><label for="car_amount" class="my-2">四輪車の数</label></th>
                    <td><input type="number" min="0" title="0以上を含む" id="car_amount"></td>
                </tr>
            </table>
            <div class="w-25 d-flex justify-content-between">
                <button type="button" class="btn btn-success btn-sm px-3">決定</button>
                <button type=" button" class="btn btn-danger btn-sm px-3" @click="switchModal">キャンセル</button>
            </div>
        </Modal>
    </div>
</template>

<style lang="scss" scoped>
.fee-manager {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: left;

}
</style>