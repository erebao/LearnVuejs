import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})



// 1.基本使用
/*axios({
  url: 'http://localhost:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://localhost:8000/home/multidata',
  method: 'get',
  // 专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})*/



// 2.axios发送并发请求
/*axios.all([
  axios({
    url: 'http://localhost:8000/home/multidata',
  }),
  axios({
    url: 'http://localhost:8000/home/data',
    params: {
      type: 'sell',
      page: 5
    }
  })
])
// .then(results => {
//   console.log(results);
//   console.log(results[0]);
//   console.log(results[1]);
// })
  .then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
  }));*/



// 额外知识点：数组的解构
/*const names = ['why', 'kobe', 'james']
const [name1, name2, name3] = names*/



// 3.设置axios全局配置
/*axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.timeout = 5000
axios.all([
  axios({
    url: '/home/multidata',
  }),
  axios({
    url: '/home/data',
    params: {
      type: 'sell',
      page: 5
    }
  })
]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))*/



// 4.创建对应的axios实例
/*const instance1 = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000
})
instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})
instance1({
  url: '/home/data'
}).then(res => {
  console.log(res);
})

const instance2 = axios.create({
  baseURL: 'http://localhost:8001',
  timeout: 10000,
  // headers: {}
})*/



// 5.封装request模块
import {request} from "./network/request";
// 方式一：对应request.js的方式一
/*request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})*/

// 方式二：对应request.js的方式二
/*request({
  baseConfig: {
  },
  success: function(res) {
  },
  failure: function(err) {
  }
})*/

// 方式三：对应request.js的方式三
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
