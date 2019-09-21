<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox"
               readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from "../../lib/mui/js/mui.min"

    export default {
        name: "NumberBox",
        mounted() {
            //初始化数字选择框组件
            mui(".mui-numbox").numbox()
        },
        methods: {
            countChanged() {
                //每当数值改变后，则立即把最新的数量同步到购物车的store中去，覆盖原来的数据
                this.$store.commit("updateGoodsInfo", {
                    id: this.goodsid,
                    count: this.$refs.numbox.value
                })
            }
        },
        props: ["initcount", "goodsid"]
    }
</script>

<style scoped lang="scss">

</style>