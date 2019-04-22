<template>
  <div>
    <div @click="toAdd()">添加</div>
    <div>users</div>
  </div>
</template>

<script>
  export default {
    name: "User",
    methods: {
      toAdd() {
        this.$router.push("/add")
      }
    }
  }
</script>

<style scoped>

</style>
