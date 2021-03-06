import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/get",
            name: "get",
            // route level code-splitting
            // this generates a separate chunk (get.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "get" */ "./views/Get.vue")
        },
        {
            path: "/news",
            name: "news",
            // route level code-splitting
            // this generates a separate chunk (news.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "news" */ "./views/News.vue")
        },
        {
            path: "/comtslist",
            name: "comtslist",
            // route level code-splitting
            // this generates a separate chunk (comtslist.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "comtslist" */ "./views/ComtsList.vue")
        },
    ]
});
