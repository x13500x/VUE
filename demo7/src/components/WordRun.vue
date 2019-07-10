<template>
    <div class="wordrun">
        <hr/>
        <h1>跑马灯</h1>
        <button @click="lang">浪起来</button>
        <button @click="stop">低调</button>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: "WordRun",
        data() {
            return {
                msg: "猥琐发育，别浪！！！",
                setIntervalId: null
            }
        },
        methods: {
            lang() {
                if (this.setIntervalId != null) return
                this.setIntervalId = setInterval(() => {
                    var start = this.msg.substring(0, 1)
                    var end = this.msg.substring(1)
                    this.msg = end + start
                }, 500)

            },
            stop() {
                clearInterval(this.setIntervalId)
                this.setIntervalId = null
            }
        }
    }
</script>

<style scoped lang="scss">

</style>