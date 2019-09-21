<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
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
            console.log(this.max)
        },
        methods: {
            countChanged() {
                //每当文本框数据改变时，传递数据
                // console.log(this.$refs.numbox.value)
                this.$emit("getconut", parseInt(this.$refs.numbox.value))
            }
        },
        props: ["max"],
        watch: {
            "max": function (newVal, oldVal) {
                mui(".mui-numbox").numbox().setOption("max", newVal)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>