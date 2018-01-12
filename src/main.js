// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'  //状态管理
import axios from 'axios'



import common from '@a/js/common.js'
import '@a/css/swiper.min.css'
import '@a/css/common.css'
import '@a/css/top.css'
Vue.config.productionTip = false

/* eslint-disable no-new */ 
// 引入自定义组件。index.js是组件的默认入口  
//import Top from '@c/common'  
//Vue.use(Top);  



//import 'vue-progress-path/dist/vue-progress-path.css'
//import VueProgress from 'vue-progress-path'
//Vue.use(VueProgress)



import Progress from 'vue-multiple-progress'
Vue.component('vm-progress', Progress) //可以指定组件名称



/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
