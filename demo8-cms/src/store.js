import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//每次刚进入网站，把之前存储的数据先读取出来赋值给state中car
var car = JSON.parse(localStorage.getItem("car") || "[]")

export default new Vuex.Store({
    state: {//this.$store.state.***
        car: car//购物车数据用数组存储，商品对象，设计成：{id:商品id，count：商品数量，price：商品价格，selected：true}
    },
    mutations: {//this.$store.commit.("方法名"，"唯一参数")
        addToCar(state, goodsinfo) {
            //点击加入购物车，把商品信息加入到vuex中的car中
            //分析：
            //1、如有之前有这个对应的商品，只更新数量
            //2、如果没有，则把商品信息push到car中

            //假设在购物车中没有找到对应的商品
            var flag = false

            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            //如果最终循环完毕，得到的flag还是false，则把商品信息直接push到car中
            if (!flag) {
                state.car.push(goodsinfo)
            }

            //当更新car之后，把car信息存储到本地的localstorage
            localStorage.setItem("car", JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            //修改购物车商品的数量值
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            //当更新car之后，把car信息存储到本地的localstorage
            localStorage.setItem("car", JSON.stringify(state.car))
        },
        removeFromCar(state, id) {
            //根据传递的id，从store中删除相应商品
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            //当更新car之后，把car信息存储到本地的localstorage
            localStorage.setItem("car", JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            //修改购物车商品的数量值
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                    return true
                }
            })
            //当更新car之后，把car信息存储到本地的localstorage
            localStorage.setItem("car", JSON.stringify(state.car))
        },
    },
    actions: {},
    getters: {//this.$store.getters.***
        //相当于计算属性，也相当于filter
        //获取所有商品数量，购物车徽标
        getAllCount(state) {
            var c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountandAmount(state) {
            var o = {
                count:0,
                amount:0
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.count * item.price
                }
            })
            return o
        }
    }
})
