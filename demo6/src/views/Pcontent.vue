<template>
    <div class="pcontent">
        <h1>This is 商品 page!</h1>
    </div>
</template>

<script>
    export default {
        name: "Pcontent",
        mounted() {
            //get传值
            console.log(this.$route.query)
        }
    }
</script>

<style scoped lang="scss">

</style>