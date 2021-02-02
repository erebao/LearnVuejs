// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是组件message'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>'*/
  // 普通用法
  /*render: function (createElement) {
    return createElement('h2', {class: 'box'}, ['Hello World！', createElement('button', ['按钮'])])
  },*/
  // 传入一个组件对象
  render: function (createElement){
    return createElement(App);
  }
})
