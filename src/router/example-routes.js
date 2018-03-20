import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        // {
        //     path: '',
        //     redirect: {
        //         name: 'ExampleList'
        //     }

        // },
        {
            path: '/',
            name: 'ExampleList',
            alias: 'ExampleList',
            meta: {
                title: '作品列表'
            },
            component: resolve => require(['@/views/examples/ExampleList.vue'], resolve)//懒加载
        },
        {
            path: '/Clock',
            name: 'Clock',
            meta: {
                title: 'canvas时钟'
            },
            component: resolve => require(['@/views/examples/Clock.vue'], resolve)//懒加载
        },
        {
            path: '/Quan',
            name: 'Quan',
            meta: {
                title: '鼠标圈圈'
            },
            component: resolve => require(['@/views/examples/Quan.vue'], resolve)//懒加载
        }, {
            path: '/Piano',
            name: 'Piano',
            meta: {
                title: 'web钢琴'
            },
            component: resolve => require(['@/views/examples/Piano.vue'], resolve)//懒加载
        },
        {
            path: '/Maruko',
            name: 'Maruko',
            component: resolve => require(['@/views/examples/Maruko.vue'], resolve)//懒加载
        },
        {
            path: 'FullPage',
            name: 'FullPage',
            component: resolve => require(['@/views/examples/FullPage.vue'], resolve)//懒加载
        },
    ]
})

export default router

