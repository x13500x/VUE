import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    /*state 在vuex中用于存储数据*/
    state: {
        count: 1,
        list:[],
        loadingList:[],
        newPage:[]
    },
    /*mutations 里面放的是方法，方法主要用于改变state中的数据*/
    mutations: {
        incCount(state) {
            state.count++;
        },
        addList(state,data){
            state.list = data
        },
        listloading(state,data){
            state.loadingList = data
        },
        latestPage(state,page){
            state.newPage = page
        }
    },
    actions: {},
    /*有点类似计算属性，改变state中的count数据时会触发getters里面的方法，获取新的值*/
    getters: {
        computedCount:(state)=>{
            return state.count*2
        }
    }
})
