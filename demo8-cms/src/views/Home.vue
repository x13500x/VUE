<template>
    <div class="home">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {Toast} from "mint-ui"

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                lunbotuList: []
            }
        },
        created() {
            this.getLunbotu()
        },
        methods: {
            getLunbotu() {
                this.$http.get("api/getlunbo").then(res => {
                    // console.log(res.body)
                    if (res.body.status === 0) {
                        this.lunbotuList = res.body.message
                        // Toast("加载轮播图OK")
                    } else {
                        Toast("加载轮播图失败")
                    }
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    .mint-swipe {
        height: 150px;
        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }
            &:nth-child(2) {
                background-color: blue;
            }
            &:nth-child(3) {
                background-color: green;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
        img {
            width: 60px;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }
</style>