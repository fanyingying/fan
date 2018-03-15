export default [
    // {
    //     path: '',
    //     redirect: {
    //         name: 'ExampleList'
    //     }

    // },
    {
        path: '',
        name: 'ExampleList',
        alias: 'ExampleList',
        component: resolve => require(['@/views/examples/ExampleList.vue'], resolve)//懒加载
    },
    {
        path: 'FullPage',
        name: 'FullPage',
        component: resolve => require(['@/views/examples/FullPage.vue'], resolve)//懒加载
    },
]