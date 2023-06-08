<script>
export default {
  data() {
    return {
      ccRange: "bike : 0\nscooter : 1~250\nmotorcycle : 251~550\nheavy motorcycle : >550\nsedan/ven/suv : 自定義(1200~6600)"
    }
  }
}
</script>

<template>
  <div class="input-area">
    <h2 class="mb-3">新增車輛</h2>
    <div class="license-plate mb-3">
      <span>車牌號碼</span>
      <input type="text" id="licensePlateInput" class="license-plate-input ms-3">
    </div>

    <div class="category mb-3">
      <span class="me-4">車種</span>
      <select name="車種" id="categoryInput" class="ms-4">
        <option value="bike">bike</option>
        <option value="scooter">scooter</option>
        <option value="motorcycle">motorcycle</option>
        <option value="heavy motorcycle">heavy motorcycle</option>
        <option value="sedan">sedan</option>
        <option value="ven">ven</option>
        <option value="suv">suv</option>
      </select>
    </div>

    <div class="cc-input mb-3">
      <span>油箱容量</span>
      <input type="number" id="ccInput" class="mx-3" :title="ccRange">
      <span>cc</span>
    </div>

    <div class="price-input mb-3">
      <span class="me-4">價格</span>
      <input type="number" id="priceInput" class="ms-4">
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
  .input-area {
    display: flex;
    flex-direction: column;
    padding: 5%;

    h2 {
      color: #77d2b4;
    }

    input {
      border-radius: 5px;
      padding-left: 3px;
    }

  }
</style>