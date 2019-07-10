<template>
    <div>

        <h2>{{msg}}</h2>
        <hr>
        <button @click="emitAhome()">广播Ahome组件的数据</button>
        <br>
        <br>
        <br>
        <hr>
        <button @click="getData()">请求数据</button>
        <br>
        <ul>
            <li v-for="item in list">{{item.title}}</li>
        </ul>
        <br>
        <hr>

    </div>
</template>

<script>
    import VueEvent from "../model/VueEvent"
    /*
请求数据的模板
    axios  的使用
    1、安装  cnpm  install  axios --save
    2、哪里用哪里引入axios
*/
    import Axios from "axios"
    export default {
        name: "Ahome",
        data() {
            return {
                msg: "我是一个头部(Ahome)子组件",
                list: []
            }
        },
        methods: {
            getData() {
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
                Axios.get(api).then((response)=>{
                    console.log(response)
                    this.list = response.data.result
                }).catch((err)=>{
                    console.log(err)
                })
            },
            emitAhome(){
                VueEvent.$emit("tolife",this.msg)
            }
        },
        mounted(){
            this.getData()
            VueEvent.$on("toAhome",function (data) {
                console.log(data)
            })
        }
    }
</script>

<style scoped lang="scss">
    h2 {
        color: red;
    }
</style>