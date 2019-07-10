<template>
    <div class="news">
        <h1>{{msg}}</h1>
        <br>
        <br>
        <hr>
        <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
            <li v-for="(item,key) in list">
                <router-link :to="'/newsdetails?aid=' + item.aid">{{key + 1}}、{{item.title}}</router-link>
            </li>
        </ul>
        <div>loading......</div>
    </div>
</template>

<script>
    export default {
        name: "NewsLoading",
        data() {
            return {
                msg: "This is NewsLoading page",
                list: [],
                page: 1,
                loading: false
            }
        },
        methods: {
            loadMore() {
                this.getData()
            },
            getData() {
                this.loading = true
                /*请求数据的开关*/
                var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" + this.page
                this.$http.get(api).then((response) => {
                    console.log(response)
                    this.list = this.list.concat(response.body.result)
                    ++this.page
                    /*每次请求完成page++*/
                    /*判断最后一页是否有数据 */
                    if (response.body.result.length < 20) {
                        this.loading = true
                        /*终止请求*/
                    } else {
                        this.loading = false
                        /*继续请求*/
                    }
                    this.$store.commit("listloading",this.list)
                    console.log(this.page)
                    this.$store.commit("latestPage",this.page)
                }), function (err) {
                    console.log(err)
                }

            }
        },
        mounted(){
            var listData = this.$store.state.loadingList
            var pageNew = this.$store.state.newPage
            console.log(pageNew)
            console.log(listData.length)
            if (listData.length>0){
                this.list = listData
                this.page = pageNew
            } else {
                this.getData()
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        list-style: none;
        text-align: left;
        margin: 10px;
    }
</style>