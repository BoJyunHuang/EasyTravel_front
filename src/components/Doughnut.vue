<script>
export default {
    data() {
        return {
            options: {
                theme: "light2",
                animationEnabled: true,
                title: {
                    text: "rent_income_ratio"
                },
                subtitles: [{
                    text: "%"
                }],
                data: [{
                    type: "doughnut",
                    startAngle: 90,
                    indexLabel: "{label} {y}(#percent%)",
                    yValueFormatString: "#,##0K",
                    toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span>, {y} $",
                    dataPoints: [
                        { label: "bike", y: 17.8, color: "#DE2910" },
                        { label: "heavy motorcycle", y: 21.4, color: "#0039A6" },
                        { label: "motorcycle", y: 6.3, color: "#F79432" },
                        { label: "scooter", y: 31.4, color: "#37366B" },
                        { label: "suv", y: 12.7, color: "#F5D900" },
                        { label: "ven", y: 10.5, color: "#F7C600" },
                    ]
                }]
            },
            styleOptions: {
                width: "100%",
                height: "360px"
            }
        }
    }
}
</script>
<template>
    <CanvasJSChart :options="options" :styles="styleOptions" />
</template>                          