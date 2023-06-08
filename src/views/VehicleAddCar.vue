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
  <div class="input-area d-flex flex-column">
    <h2>新規登錄</h2>

    <table>
      <tr>
        <th>車両番号</th>
        <td><input type="text"></td>
      </tr>
      <tr>
        <th>タイプ</th>
        <td>
          <select name="タイプ" id="categoryInput">
            <option value="bike">bike</option>
            <option value="scooter">scooter</option>
            <option value="motorcycle">motorcycle</option>
            <option value="heavy motorcycle">heavy motorcycle</option>
            <option value="sedan">sedan</option>
            <option value="ven">ven</option>
            <option value="suv">suv</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>タンク容量</th>
        <td><input type="text" id="tank"></td>
      </tr>
      <tr>
        <th>値段</th>
        <td><input type="text" id="price"></td>
      </tr>
    </table>

    <button class="addBtn btn btn-success">追加</button>

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

  tr {
    height: 2.5rem;

    th {
      width: 7rem;
    }

    td {

      input {
        border-radius: 5px;
        padding-left: 3px;
      }

      .carType {
        border-radius: 5px;
      }

    }
  }



  .addBtn {
    width: 7rem;
    height: 2.5rem;
    margin-top: 0.5rem;
    margin-left: 3rem;
  }

}
</style>