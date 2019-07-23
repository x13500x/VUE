import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueResourse from "vue-resource"
Vue.use(VueResourse)
//设置根API接口
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//设置上传数据的组织形式
Vue.http.options.emulateJSON = true;

//导入格式化时间的插件
import moment from "moment"
//定义全局的时间过滤器
Vue.filter("dateFormat",function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern)
})

// import { Header, Button, Swipe, SwipeItem ,Lazyload} from "mint-ui"
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.use(Lazyload)
import mintui from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(mintui)

//引入缩略图插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
