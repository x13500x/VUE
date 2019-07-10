import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueResourse from "vue-resource"
Vue.use(VueResourse)

import { Header, Button, Swipe, SwipeItem } from "mint-ui"
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// import mintui from "mint-ui"
// import "mint-ui/lib/style.css"
// Vue.use(mintui)

import "./lib/css/mui.css"
import "./lib/css/icons-extra.css"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
