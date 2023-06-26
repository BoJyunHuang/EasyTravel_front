<script>
import BarChart from '../components/BarChart.vue';
import Doughnut from '../components/Doughnut.vue';
export default {
    components: {
        BarChart,
        Doughnut
    }, data() {
        return {
            selectedMonth: 1,
            months: [
                { value: 1, label: '一月' },
                { value: 2, label: '二月' },
                { value: 3, label: '三月' },
                { value: 4, label: '四月' },
                { value: 5, label: '五月' },
                { value: 6, label: '六月' },
            ],
            financeRatio: {},

            riKeys: [],
            riValues: [],
        };
    },
    mounted() { // 預設執行方法，進入頁面後隨即執行，後端-顯示所有站點資料
        this.updateData(); // 初始获取数据
        // fetch("http://localhost:8080/monthly_ratio", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(body)
        // }).then(res => res.json())
        //     .then(data => {
        //         this.financeRatio = data.financeMap
        //     })
    },
    methods: { // 各種方法
        updateData() { // 更新數據內容的方法
            const body = {
                month: this.selectedMonth
            }
            fetch("http://localhost:8080/monthly_report", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(data => {
                    this.riKeys = Object.keys(data.financeMap.rent_income);
                    this.riValues = Object.values(data.financeMap.rent_income);
                })
            // fetch("http://localhost:8080/monthly_ratio", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(body)
            // }).then(res => res.json())
            //     .then(data => this.financeRatio = data.financeMap)
        }
    },
};
</script>
<template>
    <div class="w-100 p-3">
        <h2>データ整理</h2>
        <div>
            <select v-model="selectedMonth" @change="updateData">
                <option v-for="month in months" :key="month.value" :value="month.value">{{ month.label }}</option>
            </select>
        </div>
        <BarChart :label="'rent_income'" :labels="riKeys" :data="riValues" />
        <Doughnut />
    </div>
</template>

<style lang="scss" scoped>
.movebar {
    width: 35%;
}
</style>
  