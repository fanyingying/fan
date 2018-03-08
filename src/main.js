// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
import store from './store'
import router from './router'
import './assets/scss/app-base.scss'

import { gitHubApi, isGetUserInfo, queryParse, queryStringify } from './utils'


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
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
