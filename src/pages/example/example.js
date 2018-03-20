// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//Moonlightg
import Vue from 'vue'
import axios from 'axios'


import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// import {Tabs, Container, Row, Col, TabPane} from 'element-ui'
// Vue.use(Tabs)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(TabPane)

// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
// // or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })


import App from './App'
import router from '@/router/example-routes.js'
import '@/assets/scss/example-base.scss'


Vue.config.productionTip = false

Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  //store,// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  components: { App },
  template: '<App/>'
})



