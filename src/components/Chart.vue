
<script>
import { Chart } from '../../node_modules/chart.js/auto'

export default {
    props: {
        chartData: {
            type: Object,
            required: true
        },
        outerLabel: { // 為標籤名稱
            type: Array,
            required: true
        },
        innerLabel: { // 為標籤名稱
            type: Array,
            required: true
        }
    },
    data() {
        return {
            // 把chart.js 用的 ctx 變數，存在方法外面，以供重複使用
            ctx: null,
            // 同上， new Chart 過之後這邊就會有 chart.js 的圖表跟方法
            chart: null
        }
    },
    mounted() {
        this.renderChart();
    },
    // 資料更新之後觸發 beforeUpdate 或在 updated 也可以
    beforeUpdate() {
        console.log("update Data")
        console.log(this.chartData)
        // 把存成 vue data 的 chart 拿出來用，然後執行chart.js 內建的 new Chart後，裡面有的更新方法
        this.chart.update();
    },
    methods: {
        renderChart() {
            const outerData = this.outerLabel.map((label) => this.chartData[label]);
            const innerData_1 = this.chartData[this.innerLabel[0]]
            const keys1 = Object.keys(innerData_1);
            const innerData1 = keys1.map((label) => innerData_1[label] || 0);

            let innerData2 = ''
            if (this.innerLabel.length == 2) {
                const innerData_2 = this.chartData[this.innerLabel[1]]
                const keys2 = Object.keys(innerData_2);
                innerData2 = keys2.map((label) => innerData_2[label] || 0);
            }

            const data = {
                labels: this.outerLabel.concat(this.innerLabel),
                datasets: [
                    {
                        label: "主要項目",
                        data: [...outerData],
                        backgroundColor: ['pink', 'lightblue'],
                    }, {
                        label: "次要項目",
                        data: [...innerData1, ...innerData2],
                        backgroundColor: ['red', 'lightgreen', 'green', 'blue', 'pink', 'lightblue'],
                    }
                ],
            };
            const options = {
                cutout: '30%', // 控制内环的大小，百分比值
            };
            // const ctx = this.$refs.doughnutChart.getContext('2d');
            if (this.ctx === null) {
                // 把 ctx 變數存到 vue data 裡面重複使用， 這邊就用更新的方式去寫
                this.ctx = this.$refs.doughnutChart.getContext('2d');
                // 同上把 chrat 變數存到 vue data 裡面重複使用， 這邊就用更新的方式去寫
                this.chart = new Chart(this.ctx, {
                    type: 'doughnut',
                    data: data,
                    options: options,
                });

            }
            // else {
            //     this.chart.update();
            // }
        },
    }
};
</script>

<template>
    <div>
        <canvas ref="doughnutChart"></canvas>
    </div>
</template>
  