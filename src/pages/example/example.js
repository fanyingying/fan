// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//Moonlightg
import Vue from 'vue'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)


import moment from 'moment'
moment.locale('zh-cn')
Vue.prototype.$moment = moment
import 'github-markdown-css/github-markdown.css'




import App from './App'
import router from '@/router'
import '@/assets/scss/app-base.scss'

import { gitHubApi, isGetUserInfo, queryParse, queryStringify } from '@/utils'


Vue.config.productionTip = false



Vue.prototype.$http = axios
Vue.prototype.$gitHubApi = gitHubApi
Vue.prototype.$isGetUserInfo = isGetUserInfo
Vue.prototype.$queryParse = queryParse
Vue.prototype.$queryStringify = queryStringify





/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  //store,// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  components: { App },
  template: '<App/>'
})



