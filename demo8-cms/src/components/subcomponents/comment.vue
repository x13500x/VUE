<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请发表评论，最多120字" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">第{{i +1}}楼&nbsp;&nbsp;用户：{{item.user_name}} 发表时间：{{item.add_time|dateFormat}}
                </div>
                <div class="cmt-body">{{item.content ==="undefined" ?"此用户很懒，什么也没留下" :item.content }}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
    import {Toast} from "mint-ui"

    export default {
        name: "comment",
        data() {
            return {
                pageindex: 1,
                comments: [],
                msg: ""
            }
        },
        created() {
            this.getComments()
        },
        methods: {
            getComments() {
                this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex).then(res => {
                    if (res.body.status === 0) {
                        this.comments = this.comments.concat(res.body.message)
                    } else {
                        Toast("获取评论失败")
                    }
                })
            },
            getMore() {
                this.pageindex++
                this.getComments()
            },
            postComment() {
                //校验评论不能为空
                if (this.msg.trim() === "") {
                    return Toast("评论不能为空！")
                }
                this.$http.post("api/postcomment/" + this.id, {content: this.msg.trim()}).then(res => {
                    if (res.body.status === 0) {
                        var cmt = {
                            user_name: "匿名用户",
                            add_time: Date.now(),
                            content: this.msg.trim()
                        }
                        this.comments.unshift(cmt)
                        this.msg = ""
                    }
                })
            }
        },
        props: ["id"]
    }
</script>

<style scoped lang="scss">
    .comment {
        h3 {
            font-size: 18px;
        }
        textarea {
            margin: 0;
            font-size: 14px;
            height: 85px;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    background-color: #ccc;
                    line-height: 35px;
                }
                .cmt-body {
                    text-indent: 2em;
                    line-height: 35px;
                }
            }
        }
    }
</style>