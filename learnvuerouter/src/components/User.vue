<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户的相关信息：eeeeeeeeee</p>
      <h2>{{userid}}</h2>
      <h2>{{$route.params.id}}</h2>
      <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
      name: "User",
      computed: {
        userid(){
          return this.$route.params.id;
        }
      },
      methods: {
        btnClick(){
          console.log(this.$router);
          console.log(this.$route);
          this.test();
          console.log(this.name);
        }
      }
    }
</script>

<style scoped>

</style>
