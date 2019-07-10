<template>
    <div id="newsdetails">
        <div class="head">
            <div class="abc"><h1>This is newsdetails page!</h1></div>
            <br>
            <button @click="toBack()">返回</button>
        </div>
        <hr>
        <h2>{{list.title}}</h2>
        <div v-html="list.content"></div>
    </div>
</template>

<script>
    export default {
        name: "Newsdetails",
        data() {
            return {
                list: []
            }
        },
        methods: {
            requestData(aid) {
                var api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid
                this.$http.get(api).then((response) => {
                    console.log(response)
                    this.list = response.body.result[0]
                }), (err) => {
                    console.log(err)
                }
            },
            toBack(){
                this.$router.go(-1)
            }
        },
        mounted() {
            //get传值
            console.log(this.$route.query)
            const aid = this.$route.query.aid;
            console.log(aid)
            this.requestData(aid)
        },
    }
</script>

<style scoped lang="scss">
    .head{
        h1{
            color: #42b983;
        }
    }
    #newsdetails {
        padding: 1rem;
        line-height: 2;
        img {
            max-width: 100%;
        }
        p {
            text-align: left;
        }
    }
</style>