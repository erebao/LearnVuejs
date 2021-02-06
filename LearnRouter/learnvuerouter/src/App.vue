<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!--<router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <!--<button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--<router-link :to="'/user/'+userid">用户</router-link>-->
    <!--<router-link to="/profile">档案</router-link>-->
    <!--<router-link :to="{path: '/profile', query: {name: 'wht', age: '18', height: '1.88'}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!--include 匹配的会被缓存-->
    <!--exclude 匹配的不会被缓存-->
    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'lisi',
    }
  },
  methods: {
    homeClick(){
      // 通过代码的方式修改路径
      //this.$router.push('/home')  // 有返回
      this.$router.replace('/home') // 无返回
      console.log("homeClick");
    },
    aboutClick(){
      //this.$router.push('/about') // 有返回
      this.$router.replace('/about')  // 无返回
      console.log("aboutClick");
    },
    userClick(){
      this.$router.push('/user/' + this.userid)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 18,
          height: 1.87
        }
      })
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
  .active {
    color: #f00;
  }
</style>
