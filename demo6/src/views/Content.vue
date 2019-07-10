<template>
    <div class="content">
        <h1>This is content page!</h1>
    </div>
</template>

<script>
    export default {
        name: "Content",
        mounted() {
            console.log(this.$route.params)
            /*获取动态路由传值*/
        }
    }
</script>

<style scoped lang="scss">

</style>