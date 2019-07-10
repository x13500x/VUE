<template>
    <div class="news">

        <div>
            <h1>VUEX</h1>
            <p>我是state数据--{{this.$store.state.count}}</p>
            <button  @click="incCount()">计数增加</button>
        </div>
        <hr>
        <h1>{{msg}}</h1>
        <br>
        <br>
        <hr>
        <ul>

            <li v-for="(item,key) in newslist" >
                <router-link :to="'/newsdetails?aid=' + item.aid">{{key + 1}}、{{item.title}}</router-link>

            </li>
        </ul>
        <hr>
        <h2>动态路由传值</h2>
        <ul>
            <li v-for="(item,key) in Dlist">
                <router-link :to="'/content/' + key">{{key}}---{{item}}</router-link>
            </li>
        </ul>
        <br>
        <br>
        <hr>
        <h2>get传值</h2>
        <ul>
            <li v-for="(item,key) in Plist">
                <router-link :to="'/pcontent?id=' + key">{{key}}---{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from "../store"
    export default {
        store,
        name: "News",
        data() {
            return {
                msg: "This is News page",
                Dlist: ["11111", "22222", "33333"],
                Plist: ["商品11111", "商品22222", "商品33333"],
                newslist:[]
            }
        },
        methods:{
            getData(){
                var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
                this.$http.get(api).then((response)=>{
                    console.log(response)
                    this.newslist = response.body.result
                    //数据放在store里面（方法，传入的参数）
                    this.$store.commit("addList",response.body.result)
                }),function (err) {
                    console.log(err)
                }
            },
            incCount(){
                this.$store.commit("incCount")
            },

        },
        mounted(){
            //判断store里面有没有数据
            var listData = this.$store.state.list
            console.log(listData.length)
            if (listData.length>0) {
                this.newslist = listData
            }else {
                this.getData()
            }

        }
    }
</script>

<style scoped lang="scss">
    li{
        list-style: none;
        text-align: left;
        margin: 10px;
    }
</style>