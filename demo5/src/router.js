import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入组件
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    //挂载组件
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/todolist',
            name: 'todolist',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "todolist" */ './views/Todolist.vue')
        },
    ]
})
