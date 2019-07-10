/* eslint-disable */
<template>
    <div class="get">
        <h1>这是一个get-test页面</h1>
        <hr>
        <input type="button" value="get请求" @click="getInfo">
        <input type="button" value="post请求" @click="postInfo">
        <input type="button" value="jsonP请求" @click="jsonpInfo">
        <br>
        <hr>
        <div class="content-wrap">
            <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left"
                    title="Tooltip on left">Tooltip on left
            </button>
            <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top"
                    title="Tooltip on top">Tooltip on top
            </button>
            <button type="button" class="btn btn-warning" data-toggle="tooltip" data-placement="bottom"
                    title="Tooltip on bottom">Tooltip on bottom
            </button>
            <button type="button" class="btn btn-danger" data-toggle="tooltip" data-placement="right"
                    title="Tooltip on right">Tooltip on right
            </button>
        </div>
        <hr>
        <br>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    /* eslint-disable */
    export default {
        name: "Get",
        data() {
            return {
                toastInstance: null
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getInfo() {
                this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(response => {

                    // get body data
                    console.log(response)

                }, function (err) {
                    console.log(err)
                })
            },
            postInfo() {
                this.$http.post('http://www.liulongbin.top:3005/api/post', {}, {emulateJSON: true}).then(response => {
                    console.log(response.body)
                }, function (err) {
                    console.log(err)
                })
            },
            jsonpInfo() {
                this.$http.jsonp('http://www.liulongbin.top:3005/api/jsonp').then(response => {
                    console.log(response.body)
                }, function (err) {
                    console.log(err)
                })
            },
            show() {
                this.toastInstance = Toast({
                    message: '提示信息',
                    position: 'top',
                    duration: -1
                })
            },
            getList() {
                this.show()
                setTimeout(() => {
                    this.toastInstance.close()
                }, 3000)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>