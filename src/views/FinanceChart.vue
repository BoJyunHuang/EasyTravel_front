<script>
import BarChart from '../components/BarChart.vue';
import Doughnut from '../components/Doughnut.vue';
export default {
    components: {
        BarChart,
        Doughnut
    }, data() {
        return {
            sliderValue: 1,
            financeDate: {},
            financeRatio: {},

            iTitle: ["vip_income", "rent_income_ratio"],
            iDetail: ["rent_income"],
            eTitle: ["vehicle_cost_ratio", "maintenance_cost_ratio"],
            eDetail: ["vehicle_cost", "maintenance_cost"]
        };
    },
    mounted() { // 預設執行方法，進入頁面後隨即執行，後端-顯示所有站點資料
        let body = {
            "month": 1
        }
        fetch("http://localhost:8080/monthly_report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => this.financeDate = data.financeMap)
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
};
</script>

<template>
    <div class="w-100 p-3">
        <h2>データ整理</h2>
        <input class="movebar" type="range" id="rangeInput" v-model="sliderValue" min="1" max="5" step="1">
        <span class="mx-3">{{ sliderValue }}</span>
        <label for="rangeInput">月</label>
        <BarChart />
        <Doughnut />
    </div>
</template>

<style lang="scss" scoped>
.movebar {
    width: 35%;
}
</style>
  