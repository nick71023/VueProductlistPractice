<template>
  <table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>分類</td>
      <td>標題</td>
      <td class="text-right">
        200
      </td>
      <td class="text-right">
        100
      </td>
      <td>
        <span class="text-success">啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm">編輯</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      console.log(api)
      this.$http.post(api).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
