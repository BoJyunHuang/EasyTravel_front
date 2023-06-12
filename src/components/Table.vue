<script>
export default {
    props: { // 來自父層
        columns: { // 為表個欄位名稱
            type: Array,
            required: true
        }, data: { // 為表格內容，必需為陣列形式
            type: Array,
            required: true
        }, itemsPerPage: { // 分頁，預設一頁為15筆資料 
            type: Number,
            default: 15
        }, showEditButton: true,  // 是否顯示修改按鈕
        showDeleteButton: true,  // 是否顯示刪除按鈕
        showControl: true // 顯示操作行
    },
    data() {
        return {
            currentPage: 1, // 分頁預設第1頁
            control: false, // 可否操作
        };
    }, computed: {
        totalPages() { // 計算總頁數的方法
            return Math.ceil(this.data.length / this.itemsPerPage);
        }, paginatedData() { // 顯示目前頁數資料總筆數的方法
            const sortedData = this.data.slice().reverse(); // 最新資料顯示在最上面
            const startIndex = (this.currentPage - 1) * this.itemsPerPage; // 起始筆數
            const endIndex = startIndex + this.itemsPerPage; // 終止筆數
            return sortedData.slice(startIndex, endIndex); // 回傳該頁筆數的序號
        }
    }, methods: {
        previousPage() { // 前一頁方法
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }, nextPage() { // 後一頁方法
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }, goToPage(page) { // 跳至該分頁
            this.currentPage = page;
        }, editItem(item) {
            // 執行修改操作
            // 可以將 item 傳遞到後端方法進行處理
            console.log('修改', item);
        }, deleteItem(item) {
            // 執行刪除操作
            // 可以將 item 傳遞到後端方法進行處理
            console.log('刪除', item);
        }
    }
};
</script>

<template>
    <div class="position-relative w-95%">
        <table class="table mb-5 table-striped table-fixed table-hover">
            <thead> <!-- 標題名稱 -->
                <tr class="table-dark"> <!-- 使用迴圈印出"標題名稱" -->
                    <th v-for="column in columns" :key="column">{{ column }}</th>
                    <th v-if="showControl"> <!-- 新增 "操作" 欄位 -->
                        <div>
                            <input type="checkbox" id='control' value="false" v-model="control">
                            <label for="control">操作</label>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody> <!-- 表個內容 -->
                <tr v-for="(item, index) in paginatedData" :key="item.id"> <!-- 印出該分頁筆數(列) -->
                    <td v-for="column in columns" :key="column">{{ item[column] }}</td> <!-- 印出該分頁對應標題的內容(欄) -->
                    <td v-if="showControl"> <!-- 進行編輯修改操作的按鈕 -->
                        <button class="btn btn-primary py-0" v-if="control && showEditButton"
                            @click="editItem(item)">変更</button>
                        <button class="btn btn-danger py-0" v-if="control && showDeleteButton"
                            @click="deleteItem(item)">削除</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav aria-label="Page navigation example" class="position-absolute top-100 start-50 translate-middle">
            <!-- 分頁切換按鈕 -->
            <ul class="pagination">
                <li class="page-item"> <!-- 前頁 -->
                    <a class="page-link" aria-label="Previous" @click="previousPage" :disabled="currentPage === 1">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li> <!-- 至該分頁 -->
                <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                    <a class="page-link" @click="goToPage(page)">{{ page }}</a>
                </li>
                <li class="page-item"> <!-- 後頁 -->
                    <a class="page-link" aria-label="Next" @click="nextPage" :disabled="currentPage === totalPages">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.table-fixed {
    table-layout: fixed;
    width: 100%;
}
</style>