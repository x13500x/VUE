<template>
    <div class="photoinfo">
        <!--标题区域-->
        <h3>{{imageinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{imageinfo.add_time|dateFormat}}</span>
            <span>点击：{{imageinfo.click}}次</span>
        </p>
        <hr>
        <!--缩略图区域-->
        <div class="thumbs">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        <!--文字说明区域-->
        <div class="content" v-html="imageinfo.content">

        </div>
        <!--评论区域-->
        <comment :id="id"/>
    </div>
</template>

<script>
    import comment from "../subcomponents/comment"

    export default {
        name: "PhotoInfo",
        data() {
            return {
                id: this.$route.params.id,
                imageinfo: {},
                slide1: []
            }
        },
        components: {
            comment
        },
        created() {
            this.getImageInfo()
            this.getThumbs()
        },
        methods: {
            getImageInfo() {
                this.$http.get("api/getimageInfo/" + this.id).then(res => {
                    if (res.body.status === 0) {
                        console.log(res.body)
                        this.imageinfo = res.body.message[0]
                    }
                })
            },
            getThumbs() {
                this.$http.get("api/getthumimages/" + this.id).then(res => {
                    if (res.body.status === 0) {
                        console.log(res.body)
                        //map方式
                        // this.slide1 = res.body.message.map((item, index) => {
                        //     return {
                        //         src: item.src,
                        //         msrc: item.src,
                        //         alt: 'picture ${index}',
                        //         title: 'Image Caption ${index}',
                        //         w: 600,
                        //         h: 400
                        //     }
                        // })
                        //循环每个数据，补全图片信息
                        res.body.message.forEach(item => {
                            item.msrc = item.src;
                            item.w = 600;
                            item.h = 400;
                        })
                        //把数据赋值到数组中
                        this.slide1 = res.body.message
                    }
                })
            },
            handleClose() {
                console.log('close event')
            }
        }
    }
</script>

<style lang="scss">
    .photoinfo {
        padding: 3px;
        h3 {
            font-size: 16px;
            text-align: center;
            color: #007aff;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content {
            font-size: 14px;
            line-height: 30px;
        }
        .thumbs {
            /deep/ .my-gallery {
                display: flex;
                flex-flow: wrap;
                figure {
                    width: 30%;
                    margin: 5px;
                    img {
                        width: 100%;
                    }
                }
            }

        }
    }
</style>