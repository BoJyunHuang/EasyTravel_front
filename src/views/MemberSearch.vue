<script>
export default {
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
                    <input type="text">
                </div>
                <div class="account-search">
                    <h4>アカウント :</h4>

                    <input type="text">
                </div>
                <div class="pwd-search">
                    <h4>パスワード :</h4>

                    <input type="text">

                </div>
                <div class="birth-search">
                    <h4>誕生日 :</h4>
                    <input type="text">

                </div>
                <div class="birth-search">
                    <h4>普通二輪免許 :</h4>
                    <input type="radio" name="scooter" id="ip1">
                    <label for="scooter">はい</label>
                    <input type="radio" name="scooter" id="ip2">
                    <label for="scooter">いいえ</label>

                </div>
                <div class="birth-search">
                    <h4>普通自動車免許 :</h4>
                    <input type="radio" name="car" id="ip3">
                    <label for="scooter">はい</label>
                    <input type="radio" name="car" id="ip4">
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