<template>
  <div id="app">
    <div>{{result}}</div>
    <h2>----------------------------------------------------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        result: ''
      }
    },
    components: {
      HelloWorld
    },
    created() {
      axios({
        url: 'http://localhost:8001/category'
      }).then(res => {
        // console.log(res);
        this.result = res
      })
    }
  }
</script>

<style>
</style>
