<script>
export default {

}
</script>

<template>
    <div>
        <h2>Search Map</h2>
        <div class="d-flex justify-content-between">
            <select class="form-select w-50 mb-2" aria-label="Default select example" v-model="searchText">
                <option value="" disabled selected>都道府県を選ぶ</option>
                <option value="">全ての都道府県から選ぶ</option>
                <option value="東京都">東京都</option>
                <option value="千葉縣">千葉縣</option>
                <option value="神奈川縣">神奈川縣</option>
            </select>
            <button type="button" class="btn btn-success mb-2 px-3" @click="switchModal">サイト追加</button>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>