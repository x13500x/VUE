import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from "vue-resource"
import mintUI from "mint-ui"
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/basic.scss"

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(mintUI)
Vue.use(ElementUI)

new Vue({
    router,
    store,
    VueResource,
    render: h => h(App)
}).$mount('#app')
