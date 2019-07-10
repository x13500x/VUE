<template>
    <div>
        <div class="form-group">
            <label>评论人：</label>
            <input type="text" class="form-control" v-model="user">
        </div>
        <div class="form-group">
            <label>评论内容：</label>
            <textarea class="form-control" v-model="content"></textarea>
        </div>
        <div class="form-group  btn-right">
            <input type="button" value="发表评论" class="btn btn-primary" @click="postcomts">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostComts",
        data() {
            return {
                user: "",
                content: ""
            }
        },
        methods: {
            postcomts() {
                //定义新输入的评论对象
                var comment = {id: Date.now(), user: this.user, content: this.content}
                //获取原本地存储的数据，字符串转转换为数组对象，如没有数据则返回空数组
                var list = JSON.parse(localStorage.getItem("cmts") || "[]")
                //将新的评论对象添加到数组中
                list.unshift(comment)
                //将最新的list数组重新存储在本地
                localStorage.setItem("cmts", JSON.stringify(list))
                //使用父组件传过来的函数方法，获取本地数据转化为数组对象
                this.$emit("func")
                this.user = this.content = ""
            }
        }
    }
</script>

<style scoped lang="scss">
    div {
        text-align: left;
    }

    .btn-right {
        text-align: right;
    }
</style>