<script>
export default {
    props: [
        "data", // 全部資料
        "title",
    ],
    data() {
        return {
            chart: null,
            timeout: null,
            options: {
                title: {
                    text: "財務"
                },
                axisY: {
                    title: "金額　（百万）",
                    suffix: "￥",
                    minimum: 0,
                    stripLines: [{ // 設定基準線
                        value: '', // 線名稱
                        labelAlign: "near",
                        label: "", // 顯示標籤
                        showOnTop: true,
                        color: "#335E28",
                        labelFontColor: "#335E28"
                    }]
                },
                data: [{
                    type: "column",
                    yValueFormatString: "#,##0",
                    indexLabel: "{y}",
                    dataPoints: [
                        { label: "Furnace 1", y: 1390 },
                        { label: "Furnace 2", y: 1300 },
                        { label: "Furnace 3", y: 1560 },
                        { label: "Furnace 4", y: 1206 },
                        { label: "Furnace 5", y: 1400 },
                        { label: "Furnace 6", y: 1050 }
                    ]
                }]
            },
            styleOptions: {
                width: "100%",
                height: "360px"
            }
        }
    },
    methods: {
        updateData() {
            let boilerColor, deltaY, yVal;
            let dps = this.chart.options.data[0].dataPoints;
            for (let i = 0; i < dps.length; i++) {  // 更新資料部分
                deltaY = Math.round(20 + Math.random() * (-20 - 20));
                yVal = Math.max(deltaY + dps[i].y, 700);
                boilerColor = yVal > 1500 ? "#FF7043" : yVal >= 1100 ? "#81C784" : "#42A5F5";
                dps[i] = { label: "Furnace " + (i + 1), y: yVal, color: boilerColor };
            }
            this.options.data[0].dataPoints = dps;
            this.chart.render(); // 重新生成圖表

            this.timeout = setTimeout(this.updateData, 1000); // 設定更新時間
        },
        chartInstance(chart) {
            this.chart = chart;
            this.updateData();
        }
    },
    unmounted() {
        clearTimeout(this.timeout); // 清除時間
    }
}
</script>
  
<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance" />
</template>    