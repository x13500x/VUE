<template>
    <div class="goodsinfo">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <lunbotu :lunbotuList="lunbotuList" :isfull="false"/>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量：
                        <numbox/>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="">商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsinfo.add_time| dateFormat}}</p>

                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    //导入轮播图组件
    import lunbotu from "../subcomponents/lunbotu"
    //导入购物数量加减框
    import numbox from "../subcomponents/NumberBox"


    export default {
        name: "GoodsInfo",
        data() {
            return {
                lunbotuList: [],
                goodsinfo: {},
                id: this.$route.params.id
            }
        },
        created() {
            this.getLunbotuList()
            this.getGoodsInfo()
        },
        methods: {
            getLunbotuList() {
                this.$http.get("api/getthumimages/" + this.id).then(res => {
                    if (res.body.status === 0) {
                        res.body.message.forEach(item => {
                            item.img = item.src
                        })
                        this.lunbotuList = res.body.message
                    }
                })
            },
            getGoodsInfo() {
                this.$http.get("api/goods/getinfo/" + this.id).then(res => {
                    if (res.body.status === 0) {
                        this.goodsinfo = res.body.message[0]
                    }
                })
            },
        },
        components: {
            lunbotu,
            numbox
        }
    }
</script>

<style scoped lang="scss">
    .mui-card-footer {
        display: block;
        button {
            margin: 15px 0;
        }
    }
</style>