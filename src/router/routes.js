import blogRoutes from './blog-routes'
// import exampleRoutes from './example-routes'

/**
 * 路由表配置
 */
export default [
  // {
  //   path: '/example',
  //   component: resolve => require.ensure([], () => resolve(require('@/views/examples/ExampleList.vue')), 'ExampleList'),
  //   children: exampleRoutes
  // },
  {
    name: 'AboutMe',
    path: '/AboutMe',
    component: resolve => require.ensure([], () => resolve(require('@/views/AboutMe.vue')), 'AboutMe')
  },
  {
    name: 'WebNav',
    path: '/WebNav',
    component: resolve => require.ensure([], () => resolve(require('@/views/WebNav.vue')), 'WebNav')
  },
  {
    path: '/',
    component: resolve => require.ensure([], () => resolve(require('@/views/Blog.vue')), 'Blog'),
    children: blogRoutes,
    alias:'/Blog'
  },
  // {
  //   path: '/',
  //   redirect: '/Blog'
  // }
]
