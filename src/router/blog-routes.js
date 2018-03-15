export default [
  // {
  //   path: '',
  //   redirect: {
  //     name: 'BlogList'
  //   }
  // },
  {
    path: '',
    name: 'BlogList',
    alias:'BlogList',
    component: resolve => require(['@/views/BlogList.vue'], resolve)
  },
  {
    path: 'BlogDetail/:number',
    name: 'BlogDetail',
    component: resolve => require(['@/views/BlogDetail.vue'], resolve)
  }
]
