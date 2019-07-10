import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect:"/home"
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/member',
            name: 'member',
            // route level code-splitting
            // this generates a separate chunk (member.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "member" */ './views/Member.vue')
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            // route level code-splitting
            // this generates a separate chunk (shopcar.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "shopcar" */ './views/Shopcar.vue')
        },
        {
            path: '/search',
            name: 'search',
            // route level code-splitting
            // this generates a separate chunk (search.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
        }
    ],
    linkActiveClass: "mui-active"
})
