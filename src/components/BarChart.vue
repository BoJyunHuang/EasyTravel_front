<template>
    <Bar :data="chartData" :options="chartOptions" v-if="chartData.labels.length > 0" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        label: "",
        labels: [],
        data: {},
    },
    computed: {
        chartData() {
            return {
                labels: this.labels,
                datasets: [
                    {
                        label: this.label,
                        backgroundColor: '#4FC3F7',
                        data: this.data,
                    },
                ],
            };
        },
    },
    data() {
        return {
            chartOptions: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
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
    watch: {
        labels(newLabels) {
            this.chartData.labels = newLabels;
        },
        data(newData) {
            this.chartData.datasets[0].data = newData;
        },
    },
}
</script>
