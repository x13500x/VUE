<template>
    <div class="goodscomment">
        <cmtbox :id="id"/>
    </div>
</template>

<script>
    import cmtbox from "../subcomponents/comment"
    export default {
        name: "GoodsComment",
        data(){
            return{
                id:this.$route.params.id
            }
        },
        components:{
            cmtbox
        }
    }
</script>

<style scoped lang="scss">

</style>