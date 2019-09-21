<template>
    <div class="goodsdesc">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content">
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsDesc",
        data() {
            return {
                info: [],
                id: this.$route.params.id
            }
        },
        created() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.$http.get("api/goods/getdesc/" + this.id).then(res => {
                    if (res.body.status === 0) {
                        this.info = res.body.message[0]
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .goodsdesc {
        padding: 4px;
        h3 {
            font-size: 18px;
            color: #226fff;
            text-align: center;
            margin: 15px 0;
        }
        img {
            width: 100%;
        }
    }
</style>