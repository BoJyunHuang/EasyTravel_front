<script>
export default {
    data() {
        return {
            // 自己宣告 ，用於雙向綁定
            name: null,
            account: null,
            pwd: null,
            birthday: null,
            scooter: false,
            car: false
        }
    },
    mounted() {
        fetch("http://localhost:8080/user_info_search", {
            method: "POST",//預設是get
            headers: {
                'Content-Type':
                'application/json',
            },
            body: JSON.stringify(),
            // credentials:"include",
            
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                this.name=data.userInfo.name
            })
    }

}
</script>
<template>
    <div class="wrap-search">
        <div class="title-search">
            <h4>會員資訊</h4>
        </div>

        <div class="search-area">
            <div>
                <div class="name-search">
                    <h4>名前 :</h4>
                    <input type="text" v-model="name">
                </div>
                <div class="account-search">
                    <h4>アカウント :</h4>

                    <input type="text" v-model="account">
                </div>
                <div class="pwd-search">
                    <h4>パスワード :</h4>

                    <input type="text" v-model="pwd">

                </div>
                <div class="birth-search">
                    <h4>誕生日 :</h4>
                    <input type="text" v-model="birth">

                </div>
                <div class="birth-search">
                    <h4>普通二輪免許 :</h4>
                    <input type="radio" name="scooter" id="ip1" v-model="scooter">
                    <label for="scooter">はい</label>
                    <input type="radio" name="scooter" id="ip2" v-model="scooter">
                    <label for="scooter">いいえ</label>

                </div>
                <div class="birth-search">
                    <h4>普通自動車免許 :</h4>
                    <input type="radio" name="car" id="ip3" v-model="car">
                    <label for="scooter">はい</label>
                    <input type="radio" name="car" id="ip4" v-model="car">
                    <label for="scooter">いいえ</label>
                </div>

            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.wrap-search {
    .title-search {
        background-color: #b30e0e;

        width: 100vw;
        // border: 0.3rem solid black;
        text-align: center;
        font-size: 1.5rem;
    }

    .search-area {
        display: flex;
        // flex-direction: column;
        justify-content: center;

        // align-items: center;
        .btn-search {
            padding: 10% 25%;


        }
    }
}
</style>