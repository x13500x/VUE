import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
Vue.use(VueResource);

import animated from 'animate.css';
Vue.use(animated);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import 'open-iconic/font/css/open-iconic-bootstrap.css'

import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)

import * as filters from '../filters/index'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
