/* eslint-disable */
<template>
    <div class="news">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">添加品牌</h3>
            </div>
            <div class="panel-body form-inline">
                <label for="">
                    Name:
                    <input type="text" v-model="name" @keydown.13="add">
                </label>
                <input type="button" value="添加" @click="add" class="btn btn-primary">
            </div>
        </div>
        <table class="table table-bordered table-hover table-striped">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Ctime</th>
                <th>operation</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in list" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.ctime | timeFormat}}</td>
                <td><a href="" @click.prevent="del(item.id)">删除</a></td>
            </tr>
            </tbody>
        </table>
        <hr>
        <br>
        <hr>
    </div>
</template>

<script>
    import Vue from "vue";
    Vue.http.options.root = "http://www.liulongbin.top:3005/"
    Vue.http.options.emulateJSON = true
    export default {
        name: "news",
        data() {
            return {
                name:"",
                list:[]
            }
        },
        methods: {
            getInfo() {
                this.$http.get('api/getprodlist').then(response => {
                    console.log(response)
                    if (response.body.status === 0) {
                        this.list = response.body.message
                    }else {
                        alert("获取数据失败")
                    }

                }, function (err) {
                    console.log(err)
                })
            },
            add(){
                this.$http.post('api/addproduct', {name: this.name}).then(response => {
                    console.log(response)
                    if (response.body.status === 0){
                        this.getInfo()
                        this.name = ""
                    }else {
                        alert("添加失败")
                    }
                }, function (err) {
                    console.log(err)
                })
            },
            del(id){
                this.$http.get('api/delproduct/ ' + id).then(response =>{
                    console.log(response)
                    if (response.body.status === 0) {
                        this.getInfo()
                    }else {
                        alert("删除失败!")
                    }
                })
            }
        },
        created(){
            this.getInfo()
        }
    }
</script>

<style scoped lang="scss">
.panel-title{
    background-color: yellow;
}
</style>