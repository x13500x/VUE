<template>
    <div class="about">
        <h1>{{msg}}</h1>
        <button @click="toNews1()">使用字符串跳转</button>
        <br>
        <button @click="toNews2()">使用地址对象跳转</button>
        <br>
        <button @click="toNews3()">使用命名的路由跳转</button>
        <br>
        <button @click="toBack()">后退一步</button>
        <hr>
        <br>
        <br>
        <h1>Element UI</h1>
        <br>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
        <br>
        <br>
        <hr>
        <i style="font-size: 40px" class="el-icon-delete"></i>
        <br>
        <br>
        <hr>
        <el-rate v-model="value1"></el-rate>
        <br>
        <br>
        <hr>
        <div>
            <h1>VUEX</h1>
            <p>我是state数据--{{this.$store.state.count}}--{{this.$store.getters.computedCount}}</p>
            <button  @click="incCount()">计数增加</button>
        </div>
    </div>
</template>
<script>
    import store from "../store"
    export default {
        store,
        name: "About",
        data() {
            return {
                msg: "This is an about page",
                value1: null,
            }
        },
        methods:{
            toNews1(){
                this.$router.push("news")
            },
            toNews2(){
                this.$router.push({path:"news"})
            },
            toNews3(){
                this.$router.push({name:"news"})
            },
            toBack(){
                this.$router.go(-1)
            },
            incCount(){
                this.$store.commit("incCount")
            }
        }
    }
</script>

<style scoped lang="scss">

</style>