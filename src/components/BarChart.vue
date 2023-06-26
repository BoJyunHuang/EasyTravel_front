<template>
    <!-- 在chartData.labels有值时才显示图表 -->
    <Bar :data="chartData" :options="chartOptions" v-if="chartData.labels.length > 0" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
// 注册所需的Chart.js组件
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        ri_label: "", // 图表的标签
        ri_labels: [], // 图表的横坐标标签
        ri_data: {}, // 图表的数据
        vc_label: "",
        vc_labels: [],
        vc_data: {},
    },
    computed: { // 使用計算屬性才能即時更新
        chartData() {
            return {
                labels: {
                    ri: this.ri_labels,
                    vc: this.vc_labels,
                },
                datasets: [
                    {
                        label: this.ri_label,
                        backgroundColor: '#4FC3F7',
                        data: this.ri_data,
                    }, {
                        label: this.vc_label,
                        backgroundColor: '#F44336',
                        data: this.vc_data,
                    },
                ],
            };
        },
    },
    data() { // 不變的設定區域可丟到data這邊來
        return {
            chartOptions: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: (value) => `${value / 10000} 万円`,
                        },
                    },
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.parsed.y / 10000} 万円`,
                        },
                    },
                },
            }
        }
    },
    watch: { // 監視數據的變化
        // 监听第一个数据集labels的变化并更新chartData中的labels
        ri_labels(newLabels) {
            this.chartData.labels = newLabels;
        },
        // 监听第一个数据集data的变化并更新chartData中的数据
        ri_data(newData) {
            this.chartData.datasets[0].data = newData;
        },
        // 监听第二个数据集labels的变化并更新chartData中的labels
        vc_labels(newLabels) {
            this.chartData.labels = newLabels;
        },
        // 监听第二个数据集data的变化并更新chartData中的数据
        vc_data(newData) {
            this.chartData.datasets[1].data = newData;
        },
    },
}
</script>
