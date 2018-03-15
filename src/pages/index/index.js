// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//Moonlightg
import Vue from 'vue'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)


// import BgaBackTop from 'bga-back-top-vue'
// Vue.use(BgaBackTop)
import marked from 'marked'
import moment from 'moment'
moment.locale('zh-cn')
Vue.prototype.$moment = moment
// import highlight from 'highlight.js'
//import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'




import App from './App'
import store from '@/store'
import router from '@/router'
import '@/assets/scss/app-base.scss'

import { gitHubApi, isGetUserInfo, queryParse, queryStringify } from '@/utils'


Vue.config.productionTip = false



Vue.prototype.$http = axios
//Vue.prototype.$highlight = highlight
Vue.prototype.$gitHubApi = gitHubApi
Vue.prototype.$isGetUserInfo = isGetUserInfo
Vue.prototype.$queryParse = queryParse
Vue.prototype.$queryStringify = queryStringify


// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false,
//   highlight: function (code) {
//     return Vue.prototype.$highlight.highlightAuto(code).value
//   }
// })
Vue.prototype.$marked = marked

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  components: { App },
  template: '<App/>'
})


let loadingInstance

// request拦截器
axios.interceptors.request.use((config) => {
  let isGetUserInfo = vm.$isGetUserInfo(vm, config)
  if (!isGetUserInfo) {
    loadingInstance = ElementUI.Loading.service({
      text: '拼命加载中...'
    })
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// response拦截器
axios.interceptors.response.use((response) => {
  let isGetUserInfo = vm.$isGetUserInfo(vm, response.config)
  if (isGetUserInfo) {
    return response
  } else {
    setTimeout(() => {
      loadingInstance.close()
    }, 500)
    return response
  }
}, (error) => {
  let isGetUserInfo = vm.$isGetUserInfo(vm, error.config)
  if (!isGetUserInfo) {
    loadingInstance.close()

    if (error.response) {
      if (error.response.status === 401) {
        vm.$warningMessage('登录信息已过期，请重新登录!')
      } else if (error.response.status === 403) {
        vm.$warningMessage('您操作的太频繁，请稍后再试!')
      } else if (error.response.statusText) {
        vm.$errorMessage(error.response.status + ' ' + error.response.statusText)
      }
    }
  }

  return Promise.reject(error)
})
