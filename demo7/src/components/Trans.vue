<template>
    <div class="trans">
        <div>
            <h1>动画</h1>
            <input type="button" value="toggle" @click="flag=!flag">
            <br>
            <transition>
                <h3 v-if="flag">这是个动画块h3</h3>
            </transition>
            <transition enter-active-class="bounceIn" leave-active-class="bounceOut"
                        :duration="{enter: 200 ,leave: 500 }">
                <h2 v-if="flag" class="animated">这是个动画块h2</h2>
            </transition>

            <br>
            <hr>
            <input type="button" value="toggle2" @click="flag2=!flag2">
            <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                <div class="ball" v-show="flag2"></div>
            </transition>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Trans",
        data() {
            return {
                flag: false,
                flag2: false,
            }
        },
        methods: {
            beforeEnter(el) {
                el.style.transform = "translate(0,0)"
            },
            enter(el) {
                el.offsetWidth
                el.style.transform = "translate(100px,150px)"
                el.style.transition = "all 1s ease"
            },
            afterEnter(el) {
                console.log("OK")
                this.flag2 = !this.flag2
            },
            add() {
                this.list.push({id: this.id, name: this.name})
                this.id = this.name = ""
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-enter, .v-leave-to {
        opacity: 0;
        transform: translateX(100px);
    }

    .v-enter-active, .v-leave-active {
        transition: all 0.8s ease;
    }

    .ball {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: red;
    }

</style>