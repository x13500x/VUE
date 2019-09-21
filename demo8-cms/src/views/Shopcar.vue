<template>
    <div class="shopcar">
        <div class="goodscar">
            <!--商品列表区域-->
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch
                                v-model="$store.getters.getGoodsSelected[item.id]"
                                @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!--从购物车中获取商品数量-->
                                <!--1、创建一个空对象，遍历car中数据，得到属性为id，属性值为count的对象{88:4,89:3}-->
                                <a href="" @click.prevent="removeGoods(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountandAmount.count}}</span>件，总价<span class="red">￥{{$store.getters.getGoodsCountandAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
        <p>{{$store.getters.getGoodsSelected}}</p>
    </div>
</template>

<script>
    import numbox from "../components/subcomponents/shopcarNumbox"

    export default {
        name: "shopcar",
        data() {
            return {
                goodslist: []
            }
        },
        components: {
            numbox
        },
        methods: {
            getGoodsList() {
                //1、获取购物车的商品所有id，用,拼接
                var idArr = []
                this.$store.state.car.forEach(item => idArr.push(item.id))
                //如果购物车没有商品，则直接return出去
                if (idArr.length <= 0) {
                    return
                }
                //获取购物车商品列表
                this.$http.get("api/goods/getshopcarlist/" + idArr.join(",")).then(res => {
                    if (res.body.status === 0) {
                        this.goodslist = res.body.message
                    }
                })
            },
            removeGoods(id, index) {
                //点击删除，根据传递的id删除store中对应的商品，同时根据index删除goodsilist中的商品
                this.goodslist.splice(index, 1)
                //调用store中mutations中的方法,删除store中car的相应商品
                this.$store.commit("removeFromCar", id)
            },
            selectedChanged(id, val) {
                this.$store.commit("updateGoodsSelected", {id, selected: val})
            }
        },
        created() {
            this.getGoodsList()
        }
    }
</script>

<style scoped lang="scss">
    .shopcar {
        background-color: #eee;
        overflow: hidden;
        .goodscar {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
                img {
                    height: 60px;
                    width: 60px;
                }
                h1 {
                    font-size: 13px;
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .price {
                        color: red;
                        font-weight: bold;
                    }
                }
            }
        }
        .jiesuan {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red {
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
</style>