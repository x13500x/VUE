<template>
    <div class="about">
        <h1>This is an about page</h1>
        <br>
        <hr>
        <v-header :title="title" :msg="msg" :run="run" :home="this"></v-header>
        <hr>
        <br>
        <h2>{{msg}}</h2>
        <input type="text" v-model="msg">
        <button @click="getMsg()">获取表单的数据get</button>
        <button @click="setMsg()">设置表单的数据</button>
        <hr>
        <br>
        <div ref="box">我是一个box</div>
        <br>
        <input type="text" ref="userinfo">
        <button @click="getInputValue()">获取第二个表单的数据</button>
        <br>
        <br>
        <hr>
        <br>
        <button @click="run1()">执行方法1</button>
        <button @click="run2()">执行方法2</button>
        <br>
        <button @click="getMsg1()">获取data数据</button>
        <br>
        <button @click="requestData()">请求数据</button>
        <br>
        <ul>
            <li v-for="(item,key) in list" :key="index">
                {{key}}---{{item}}
            </li>
        </ul>
        <br>
        <br>
        <br>
        <button @click="deleteData('1111')">执行方法传值1111</button>
        <br>
        <br>
        <br>
        <button @click="deleteData('2222')">执行方法传值2222</button>
        <br>
        <br>
        <br>
        <button data-aid="123" @click="eventFn($event)">事件对象</button>

    </div>
</template>
<script>
    import Header from "../components/Header"
    export default {
        data() {
            return {
                msg: "你好VUE！",
                title:"我是父组件（about）数据",
                list:[]
            }
        },
        components:{
            "v-header":Header
        },
        methods:{
            getMsg(){
                alert(this.msg)
            },
            setMsg(){
                this.msg = "我是改变后的数据"
            },
            getInputValue(){
                //获取ref定义的dom节点
                console.log(this.$refs.userinfo)
                this.$refs.box.style.background = "red"
                alert(this.$refs.userinfo.value)
            },
            run1(){
                alert("这是方法1")
            },
            run2(){
                alert("这是方法2")
            },
            getMsg1(){
                alert(this.msg)
            },
            requestData(){
                for (let i=0; i<10; i++) {
                    const j = i + 1;
                    this.list.push("我是第" + j + "条数据")
                }
            },
            deleteData(val){
                alert(val)
            },
            eventFn(e){
                console.log(e)
                //e.srcElement 表示dom节点
                e.srcElement.style.background = "red"
                console.log(e.srcElement.dataset.aid)/*获取自定义属性的值*/
            },
            run(data){
                alert("我是父组件的run方法" + data)
            }
        }
    }
</script>
<style>

</style>
