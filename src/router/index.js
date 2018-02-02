import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mycom from '@/components/mycom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,  
    {
      path: '/mycom',
      name: 'mycom',
      component: mycom
    }
  ]
})
