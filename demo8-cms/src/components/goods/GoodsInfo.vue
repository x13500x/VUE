<template>
    <div class="goodsinfo">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <lunbotu :lunbotuList="lunbotuList"/>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
    import lunbotu from "../subcomponents/lunbotu"

    export default {
        name: "GoodsInfo",
        data() {
            return {
                lunbotuList: [],
                id: this.$route.params.id
            }
        },
        created() {
            this.getLunbotuList()
        },
        methods: {
            getLunbotuList() {
                this.$http.get("api/getthumimages/" + this.id).then(res => {
                    if (res.body.status === 0){
                        res.body.message.forEach(item=>{
                            item.img = item.src
                        })
                        this.lunbotuList = res.body.message
                    }
                })
            }
        },
        components: {
            lunbotu
        }
    }
</script>

<style scoped lang="scss">

</style>