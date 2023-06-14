<script>
import PieChart from '../components/Chart.vue';
import BarChart from '../components/BarChart.vue';
export default {
    components: {
        PieChart,
        BarChart
    }, data() {
        return {
            sliderValue: 1,
            financeDate: {},
            financeRatio: {},


            cTotal: ["total_income", "total_expense"],
            cRatio: ["vip_income", "rent_income_ratio", "maintenance_cost_ratio", "vehicle_cost_ratio"]
        };
    },
    mounted() { // 預設執行方法，進入頁面後隨即執行，後端-顯示所有站點資料
        let body = {
            "month": 1
        }

        // fetch("http://localhost:8080/monthly_report", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(body)
        // }).then(res => res.json())
        //     .then(data => this.financeDate = data.financeMap)
        fetch("http://localhost:8080/monthly_ratio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => {
                this.financeRatio = data.financeMap
            })
    },
    // methods: { // 各種方法
    //     updateData() { // 更新數據內容的方法
    //         const body = {
    //             month: this.sliderValue
    //         }
    //         fetch("http://localhost:8080/monthly_report", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(body)
    //         }).then(res => res.json())
    //             .then(data => this.financeDate = data.financeMap)
    //         fetch("http://localhost:8080/monthly_ratio", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(body)
    //         }).then(res => res.json())
    //             .then(data => this.financeRatio = data.financeMap)
    //     }
    // },
    // watch: { // 事件監聽
    //     sliderValue: function (newText, oldText) { // 當"搜尋內容"發生改變時
    //         // 在 sliderValue 變化時執行相應的操作
    //         this.updateData();
    //     }
    // }
};
</script>

<template>
    <div class="w-100">
        <h2>データ整理</h2>
        <input class="movebar" type="range" id="rangeInput" v-model="sliderValue" min="1" max="5" step="1">
        <span class="mx-3">{{ sliderValue }}</span>
        <label for="rangeInput">月</label>
        <PieChart class="w-50 p-5" :chartData="financeRatio" :outerLabel="cTotal" :innerLabel="cRatio"></PieChart>
        <BarChart class="w-50" :data="financeDate"></BarChart>
    </div>
</template>

<style lang="scss" scoped>
.movebar {
    width: 35%;
}
</style>
  