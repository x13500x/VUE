<template>
    <div class="goodsinfo">
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>

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
                        <numbox @getconut="getSelectedCount" :max="goodsinfo.stock_quantity"/>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
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
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
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
                id: this.$route.params.id,
                ballflag: false,
                selectedCount:1
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
            goDesc(id) {
                this.$router.push({name: "goodsdesc", params: {id}})
            },
            goComment(id) {
                this.$router.push({name: "goodscomment", params: {id}})
            },
            addToShopCar() {
                this.ballflag = !this.ballflag
            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)"
            },
            enter(el, done) {
                // 可以认为 el.offsetWidth 会强制动画刷新 el.offsetWidth
                el.offsetWidth

                const ballposition = this.$refs.ball.getBoundingClientRect()
                const badgeposition = document.getElementById("badge").getBoundingClientRect()

                const Xdist = badgeposition.left - ballposition.left
                const Ydist = badgeposition.top - ballposition.top
                //enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的，结束状态el.style.transform = "translate(150px, 450px)" el.style.transition = 'all 1s ease'
                el.style.transform = `translate(${Xdist}px,${Ydist}px)`
                el.style.transition = "all 0.5s cubic-bezier(.19,.85,.87,.28)"
                // 这里的 done， 起始就是 afterEnter 这个函数，也就是说：done 是 afterEnter 函数的引用 done()
                //延迟1s过度时间然后执行done
                setTimeout(() =>{
                    done()
                },500)

            },
            afterEnter(el) {
                this.ballflag = !this.ballflag
            },
            getSelectedCount(count){
                this.selectedCount = count
                console.log("父组件拿到的数据：" + this.selectedCount)
            }
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

    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 341px;
        left: 152px;
        z-index: 99;
    }
</style>