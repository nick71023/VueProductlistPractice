<template>
  <Navbar></Navbar>
  <div>
    dashboard
  </div>
  <router-view/>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
  components: {
    Navbar
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    const api = process.env.VUE_APP_API + 'api/user/check'
    // console.log(api)
    this.$http.defaults.headers.common.Authorization = token
    this.$http.post(api).then((res) => {
      // console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
