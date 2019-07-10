<template>
    <div>
        <PostComts  @func="loadComments"/>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in list" :key="item.id">
                <span class="badge">{{item.content}}</span>
                <span class="someone">评论人：{{item.user}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import PostComts from "@/components/PostComts"

    export default {
        name: "ComtsList",
        data() {
            return {
                list: [
                    {id: 1, user: "李白", content: "天生我材必有用"},
                    {id: 2, user: "杜甫", content: "我就会喊666"},
                    {id: 3, user: "李太白", content: "我就是太白太白了"}
                ]
            }
        },
        components: {
            PostComts
        },
        methods: {
            //取存储在本地的数据并赋值给list数组，如果没有数据则返回空数组对象
            loadComments() {
                var list = JSON.parse(localStorage.getItem("cmts") || "[]")
                this.list = list
            }
        },
        created() {
            //在该周期开始就调数据函数
            this.loadComments()
        }
    }
</script>

<style scoped lang="scss">
    .list-group-item {
        display: flex;
        justify-content: space-between;
    }
</style>