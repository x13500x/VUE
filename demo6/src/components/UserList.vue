<template>
    <div class="userlist">
        <div>用户明细</div>
        <h1>mint UI</h1>
        <mt-index-list>
            <mt-index-section index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="C">
                <mt-cell title="Caldwin"></mt-cell>
                <mt-cell title="Craden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
    export default {
        name: "UserList"
    }
</script>

<style scoped lang="scss">

</style>