import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'  //router的实例
import fastclick from 'fastclick'
import './common/stylus/index.styl'

fastclick.attach(document.body)  //取消移动端点击300ms

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
