
<script>
import { Chart } from '../../node_modules/chart.js/auto'

export default {
    props: {
        chartData: {
            type: Object,
            required: true,
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
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const updatedata = this.chartData;

            const outerData = this.outerLabel.map((label) => this.chartData[label]);
            const innerData = this.innerLabel.map((label) => this.chartData[label]);
            console.log(this.chartData)
            const data = {
                labels: this.outerLabel.concat(this.innerLabel),
                datasets: [
                    {
                        data: [...outerData, ...innerData],
                        backgroundColor: ['pink', 'lightblue', 'red', 'lightgreen', 'green', 'blue'],
                    },
                ],
            };
            const options = {
                cutout: '60%', // 控制内环的大小，百分比值
            };
            const ctx = this.$refs.doughnutChart.getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: options,
            });


        },
    },
};
</script>

<template>
    <div>
        <canvas ref="doughnutChart"></canvas>
    </div>
</template>
  