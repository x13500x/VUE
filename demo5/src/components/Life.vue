<template>
    <div id="life">
        <h2>{{msg}}</h2>
        <hr>
        <br>
        <br>
        <hr>
        <button @click="emitLife()">广播life子组件的数据</button>
        <br>
        <hr>
        <button @click="setData()">执行方法改变msg</button>
        <br>
        <button @click="getParentData()">获取父组件的数据</button>
        <br>
        <button @click="getParentFunc()">获取父组件的方法</button>
        <br>

    </div>
</template>

<script>
    import VueEvent from "../model/VueEvent"
    export default {
        name: "Life",
        data() {
            return {
                msg: "我是一个生命周期函数--life子组件",
                msgNew:"我是子组件life的数据"
            }
        },
        methods: {
            setData() {
                this.msg = "我是改变后的数据！"
            },
            run(){
                alert("我是子组件的方法")
            },
            getParentData(){
                alert(this.$parent.msg)
            },
            getParentFunc(){
                this.$parent.run()
            },
            emitLife(){
                VueEvent.$emit("toAhome",this.msg)
            }
        },
        mounted(){
            VueEvent.$on("tolife",function (data) {
                console.log(data)
            })
        }
    }
</script>

<style scoped lang="scss">
    h2 {
        background: #42b983;
    }
</style>