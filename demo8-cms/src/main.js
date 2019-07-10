import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Header, Button } from "mint-ui"
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
// import mintui from "mint-ui"
// import "mint-ui/lib/style.css"
// Vue.use(mintui)

import "./lib/css/mui.css"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
