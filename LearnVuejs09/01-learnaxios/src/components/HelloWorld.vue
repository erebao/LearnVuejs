<template>
  <h2>{{categories}}</h2>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "HelloWorld",
    data() {
      return {
        categories: ''
      }
    },
    created() {
      axios({
        url: 'http://localhost:8001/category'
      }).then(res => {
        this.categories = res
      })
    }
  }
</script>

<style scoped>

</style>
