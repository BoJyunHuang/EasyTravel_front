<script>
export default {
  data() {
    return {
      text: null,
      selectedOption: "",
    }
  },
  methods: {
    navigateToTarget() {
      if (this.selectedOption) {
        this.$router.push('/FinishCar');
      }
    }
  },
}

</script>

<template>
  <div class="select">
    <select v-model="selectedOption" @change="navigateToTarget">
      <option value="option">フォームの追加</option>
      <option value="option1">フォームの完成</option>
      
    </select>
  </div>
  <div class="top">
    

    <h2>新規の修理する車両を追加</h2>
    <div class="mid">
    <p>車牌を入力してください</p>
    <input type="text" v-model.lazy="text">

    
      <button type="button" class="btn">確認</button>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.top {
 
  margin-top: 50px;


}

.mid{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}

.select {
  position: fixed;
  left: 40px;
  top: 60px;
}
.btn{
  margin-top: 1rem;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 15px;

  
}
.btn:active {
  transform: scale(0.9);
}
</style>
