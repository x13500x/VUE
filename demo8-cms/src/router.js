import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/home"
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
        },
        {
            path: '/home/newslist',
            name: 'newslist',
            // route level code-splitting
            // this generates a separate chunk (newslist.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "newslist" */ './components/news/NewsList.vue')
        },
        {
            path: '/home/newsinfo/:id',
            name: 'newsinfo',
            // route level code-splitting
            // this generates a separate chunk (newsinfo.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "newsinfo" */ './components/news/NewsInfo.vue')
        },
        {
            path: '/home/photolist',
            name: 'photolist',
            // route level code-splitting
            // this generates a separate chunk (photolist.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "photolist" */ './components/photo/PhotoList.vue')
        },
        {
            path: '/home/photoinfo/:id',
            name: 'photoinfo',
            // route level code-splitting
            // this generates a separate chunk (photoinfo.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "photoinfo" */ './components/photo/PhotoInfo.vue')
        },
        {
            path: '/home/goodslist',
            name: 'goodslist',
            // route level code-splitting
            // this generates a separate chunk (goodslist.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "goodslist" */ './components/goods/GoodsList.vue')
        },
        {
            path: '/home/goodsinfo/:id',
            name: 'goodsinfo',
            // route level code-splitting
            // this generates a separate chunk (goodsinfo.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "goodsinfo" */ './components/goods/GoodsInfo.vue')
        },
        {
            path: '/home/goodsdesc/:id',
            name: 'goodsdesc',
            // route level code-splitting
            // this generates a separate chunk (goodsdesc.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "goodsdesc" */ './components/goods/GoodsDesc.vue')
        },
        {
            path: '/home/goodscomment/:id',
            name: 'goodscomment',
            // route level code-splitting
            // this generates a separate chunk (goodscomment.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "goodscomment" */ './components/goods/GoodsComment.vue')
        }
    ],
    linkActiveClass: "mui-active"
})
