import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
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
            path: '/news',
            name: 'news',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "news" */ './views/News.vue')
        },
        {
            path: '/newsloading',
            name: 'newsloading',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "newsloading" */ './views/NewsLoading.vue')
        },
        {
            // 动态路径参数 以冒号开头
            path: '/content/:aid',
            name: 'content',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "content" */ './views/Content.vue')
        },
        {
            path: '/pcontent',
            name: 'pcontent',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "pcontent" */ './views/Pcontent.vue')
        },
        {
            path: '/newsdetails',
            name: 'newsdetails',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "newsdetails" */ './views/Newsdetails.vue')
        },
        {
            path: '/user',
            name: 'user',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
            children: [
                {
                    path: 'useradd',
                    name: 'useradd',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "useradd" */ './components/UserAdd')
                },
                {
                    path: 'userlist',
                    name: 'userlist',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "userlist" */ './components/UserList.vue')
                }
            ]
        }
    ]
})
