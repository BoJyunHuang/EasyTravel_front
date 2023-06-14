<script>
import PlanBtnView from "../components/PlanButton.vue"
export default {
    components: {
        PlanBtnView
    },
    data() {
        return {
            columns: ['project', 'cc', 'rate', 'threshold'], // 表格標題
            feesData: [], // 表格內容
            bike: `Bike`,
            scooter: `Scooter`,
            motorcycle: `Motorcycle`,
            heavyMotorcycle: `Heavy Motorcycle`,
            sedan: `Sedan`,
            ven: `Ven`,
            suv: `Suv`,
            bikeImg: '../../public/bike.png',
            scooterImg: '../../public/scooter.png',
            motorcycleImg: '../../public/motorcycle.png',
            heavyMotorcycleImg: '../../public/heavyMotorcycle.png',
            sedanImg: '../../public/sedan.png',
            venImg: '../../public/ven.png',
            suvImg: '../../public/suv.png',

        };
    }, methods: {
        fetchBicycleData() {
            console.log("123")
            const body = {
                "project": 'bike',
                "cc": 0,
            }
            fetch("http://localhost:8080/find_projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(data => this.feesData = data.feeList)
        }, fetchMotorData() {
            const body = {
                "project": 'scooter',
                "cc": 150,
            }
            fetch("http://localhost:8080/find_projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(data => this.feesData = data.feeList)
        }
    }
}
</script>

<template>
    <div class="background">
        <h2>車種・料金</h2>
        <!-- <p>プラン (ぷらん) - 方案、計劃
                タリフ (たりふ) - 費率、價格表
                オプション (おぷしょん) - 附加選項、額外費用
                キャンペーン (きゃんぺーん) - 優惠活動、促銷活動
                ディスカウント (でぃすかうんと) - 折扣、優惠
                シーズン料金 (しーずんりょうきん) - 季節價格、旺季價格
                特別料金 (とくべつりょうきん) - 特別價格、優惠價格
                固定料金 (こていりょうきん) - 固定價格、包車價格
                時間帯料金 (じかんたいりょうきん) - 時段價格、時段費用
                レンタルプラン (れんたるぷらん) - 租車方案、租車計劃</p> -->
        <div class="plan">
            <div class="planBtn" @click="fetchBicycleData">
                <PlanBtnView :propImg="bikeImg" :propTitle="bike" />
            </div>
            <div class="planBtn" @click="fetchBicycleData">
                <PlanBtnView :propImg="scooterImg" :propTitle="scooter" />
            </div>
            <div class="planBtn" @click="fetchBicycleData">
                <PlanBtnView :propImg="motorcycleImg" :propTitle="motorcycle" />
            </div>
            <div class="planBtn" @click="fetchBicycleData">
                <PlanBtnView :propImg="heavyMotorcycleImg" :propTitle="heavyMotorcycle" />
            </div>
            <div class="planBtn" @click="fetchBicycleData">
                <PlanBtnView :propImg="sedanImg" :propTitle="sedan" />
            </div>
            <div class="planBtn" @click="fetchBicycleData">
                <PlanBtnView :propImg="venImg" :propTitle="ven" />
            </div>
            <div class="planBtn" @click="fetchBicycleData">
                <PlanBtnView :propImg="suvImg" :propTitle="suv" />
            </div>
        </div>

    </div>

    <table>
        <thead> <!-- 標題名稱 -->
            <tr class="table-dark"> <!-- 使用迴圈印出"標題名稱" -->
                <th v-for="column in columns" :key="column">{{ column }}</th>
            </tr>
        </thead>
        <tbody> <!-- 表個內容 -->
            <tr v-for="(item, index) in feesData" :key="item.id"> <!-- 印出該分頁筆數(列) -->
                <td v-for="column in columns" :key="column">{{ item[column] }}</td> <!-- 印出該分頁對應標題的內容(欄) -->
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
.background {
    // width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: cadetblue;

    .plan {
        width: 95%;
        background-color: gray;
        display: flex;
        justify-content: space-between;

        .planBtn {
            width: 14.2%;
            cursor: pointer;
            transition: 0.3s;
        
            &:hover {
                scale: 1.05;
            }
        
            &:active {
                scale: 0.95;
            }
        
        
        }

    }
}

</style>