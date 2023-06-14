<script>
import Chart from '../../node_modules/chart.js/auto';

export default {
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const data = {
                labels: ['标签1', '标签2', '标签3'],
                datasets: [
                    {
                        label: '数据集1',
                        data: [10, 20, 30],
                        backgroundColor: 'blue',
                    },
                    {
                        label: '数据集2',
                        data: [15, 25, 35],
                        backgroundColor: 'red',
                    },
                ],
            };

            const options = {
                // 可以在这里设置一些图表的选项，例如标题、动画效果等
            };

            const ctx = this.$refs.barChart.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options,
            });
        },
    },
};
</script>

<template>
    <div>
        <canvas ref="barChart"></canvas>
    </div>
</template>
  