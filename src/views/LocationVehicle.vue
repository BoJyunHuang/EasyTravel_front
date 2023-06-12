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
            tableColumns: ['licensePlate', 'category', 'cc', 'available'], // 表格標題
            subLocations: [], // 該縣市站點陣列
            vehicleData: [], // 表格內容
            searchCity: '', // 搜尋關鍵字
            searchLocation: '', // 搜尋關鍵字
            showEditButton: false,  // 是否顯示修改按鈕
            showDeleteButton: false,  // 是否顯示刪除按鈕
            showControl: false, // 顯示操作行
            isShow: false, // 顯示跳出式視窗
        };
    },
    methods: { // 各種方法
        findLocations() { // 搜尋資料
            const body = {
                "city": this.searchCity
            }
            console.log(body)
            fetch("http://localhost:8080/find_city_stops", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(data => this.subLocations = data.stopList)
        },
        findvehicles() {
            const body = {
                "city": this.searchCity,
                "location": this.searchLocation
            }
            fetch("http://localhost:8080/find_stops_vehicles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.vehicleData = data.vehicleList
                })
        }
    }
}
</script>

<template>
    <div class="fee-manager">
        <h2>サイト車両</h2>
        <div class="d-flex justify-content-left">
            <select class="form-select w-25 mb-2" aria-label="Default select example" v-model="searchCity"
                @change="findLocations">
                <option value="" disabled selected>都道府県を選ぶ</option>
                <option value="東京都">東京都</option>
                <option value="千葉縣">千葉縣</option>
                <option value="神奈川縣">神奈川縣</option>
            </select>
            <select class="form-select w-25 mb-2" aria-label="Default select example" v-model="searchLocation">
                <option value="" disabled selected>サイト</option>
                <option v-if="subLocations.length > 0" v-for="items in subLocations" :value="items.location">{{
                    items.location
                }}</option>
            </select>
            <button type="button" class="btn btn-success mb-2 px-3" @click="findvehicles">探す</button>
        </div>
        <p>※</p>
        <TableView :columns="tableColumns" :data="vehicleData" :showEditButton="showEditButton"
            :showDeleteButton="showDeleteButton" :showControl="showControl" />
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