<template>
    <div>
        <h2>{{msg}}</h2>
        <button @click="getData()">请求数据</button>
        <hr>
        <br>
        <ul>
            <li v-for="item in newsList">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                msg: "我是一个新闻组件",
                newsList: []
            }
        },
        methods: {
            getData() {
                //vue-resource请求数据
                var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
                this.$http.get(api).then((response) => {
                    console.log(response)
                    this.newsList = response.body.result
                }), function (err) {
                    console.log(err)
                }
            }
        },
        mounted(){
            //生命周期函数
            this.getData()
        }
    }
</script>

<style scoped>

</style>