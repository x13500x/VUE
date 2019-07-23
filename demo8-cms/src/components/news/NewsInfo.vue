<template>
    <div class="newsinfo">
        <h1 class="title">{{newsinfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content">
        </div>
        <comment :id="this.id"/>
    </div>
</template>

<script>
    import comment from "../subcomponents/comment"
    export default {
        name: "NewsInfo",
        data() {
            return {
                id: this.$route.params.id,
                newsinfo: {}
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo() {
                this.$http.get("api/getnew/" + this.id).then(res => {
                    if (res.body.status === 0) {
                        this.newsinfo = res.body.message[0]
                    } else {

                    }
                })
            }
        },
        components:{
            comment
        }
    }
</script>

<style scoped lang="scss">
    .newsinfo {
        padding: 0 4px;
        .title {
            font-size: 16px;
            color: red;
            text-align: center;
            margin: 10px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            color: #222aff;
        }
        .content {

        }
    }
</style>