<template>
    <div class="photolist">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id === 0 ? 'mui-active' : '']" v-for="item in cates"
                       :key="item.id" @tap="getPhotolistById(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
        <div>
            <ul class="photo-list">
                <router-link :to="'/home/photoinfo/' + item.id" tag="li" v-for="item in photolist" :key="item.id">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h3 class="info-title">{{item.title}}</h3>
                        <div class="info-body">{{item.zhaiyao}}</div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    //1.导入mui组件
    import mui from "../../lib/mui/js/mui.min.js"

    export default {
        name: "PhotoList",
        data() {
            return {
                cates: [],//图片列表空数组
                photolist: []
            }
        },
        created() {
            this.getAllcategory()
            //页面创建时加载全部
            this.getPhotolistById(0)
        },
        mounted() {
            // 当组件中的 DOM 结构被渲染好，并放到页面中后，会执行这个钩子函数
            //如果要操作元素，最早要在 mounted 中，因为这时候 DOM 元素是最新的

            // 2.初始化滑动控件(放的位置会重要，不能直接放到导入mui.js后面)
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            })
        },
        methods: {
            getAllcategory() {
                this.$http.get("api/getimgcategory").then(res => {
                    if (res.body.status === 0) {
                        res.body.message.unshift({title: "全部", id: 0})
                        this.cates = res.body.message
                    }
                })
            },
            getPhotolistById(cateId) {
                this.$http.get("api/getimages/" + cateId).then(res => {
                    if (res.body.status === 0) {
                        this.photolist = res.body.message
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        touch-action: pan-x;
    }

    .photolist {
    }

    .photo-list {
        margin: 0;
        padding: 10px;
        list-style: none;

        li {
            background-color: #ccc;
            margin-bottom: 10px;
            text-align: center;
            box-shadow: 0 0 9px #999;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info {
                color: white;
                position: absolute;
                bottom: 0;
                max-height: 84px;
                text-align: left;
                background-color: rgba(0, 0, 0, 0.4);
                .info-title {
                    font-size: 14px;
                }
                .info-body {
                    font-size: 12px;
                }
            }
        }
    }

</style>