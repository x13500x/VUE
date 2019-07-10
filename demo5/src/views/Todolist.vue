<template>
    <div class="todolist">
        <Life ref="life"/>
        <hr>
        <br>
        <br>
        <h3>{{msg}}</h3>
        <button @click="getChileData()">获取子组件的数据</button>
        <br>
        <button @click="getChileFunc()">获取子组件的方法</button>
        <hr>
        <br>
        <br>
        <Ahome/>
        <hr>
        <news/>
        <hr>
        <h2>This is an todolist page</h2>
        <input type="text" v-model="todo" @keydown="doAddkey($event)">
        <button @click="doAdd()">增加</button>
        <hr>
        <br>
        <br>
        <h2>进行中</h2>
        <ul>
            <li v-for="(item,key) in list" v-if="!item.checked">
                <input type="checkbox" v-model="item.checked" @change="saveList()">{{item.title}}----
                <button @click="removeData(key)">删除</button>
            </li>
        </ul>
        <br>
        <h2>已完成</h2>
        <ul>
            <li v-for="(item,key) in list" v-if="item.checked">
                <input type="checkbox" v-model="item.checked" @change="saveList()">{{item.title}}----
                <button @click="removeData(key)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import storage from "../model/storage"

    console.log(storage)
    //引入组件
    import Ahome from "../components/Ahome"
    import News from "../components/News"
    import Life from "../components/Life"

    export default {
        name: "Todolist",
        //挂载组件
        components: {
            Ahome,
            News,
            Life
        },
        data() {
            return {
                todo: "",
                list: [],
                msg: "我是父组件（home）的数据"
            }
        },
        methods: {
            doAdd() {
                //1、获取文本输入框的值  2、把文本框的值push到list中
                if (this.todo !== "") {
                    this.list.push({
                        title: this.todo,
                        checked: false
                    })
                    this.todo = ""
                }
                storage.set("list", this.list)
            },
            doAddkey(e) {
                console.log(e)
                console.log(e.keyCode)
                if (e.keyCode === 13 && this.todo !== "") {
                    this.list.push({
                        title: this.todo,
                        checked: false
                    })
                    this.todo = ""
                }
                storage.set("list", this.list)
            },
            removeData(key) {
                //splice js中数组的操作方法
                this.list.splice(key, 1)
                storage.set("list", this.list)
            },
            saveList() {
                storage.set("list", this.list)
            },
            getChileData() {
                alert(this.$refs.life.msgNew)
            },
            getChileFunc() {
                this.$refs.life.run()
            },
            run() {
                alert("我是父组件的方法")
            }
        },
        mounted() {//生命周期函数，VUE页面刷新就会触发，组件挂载及组件更新、销毁的时候触发的一系列的方法，这些方法称为生命周期函数
            console.log("我是一个生命周期函数")
            const list = storage.get("list");
            if (list) {//注意判断
                this.list = list
            }
        }
    }
</script>

<style scoped lang="scss">
    ul, h2, input {
        text-align: left;
    }
</style>