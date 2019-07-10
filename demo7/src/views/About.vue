/* eslint-disable */
<template>
    <div class="about">
        <h1>This is an about page</h1>
        <hr>
        <h2>组件切换</h2>
        <a href="" @click.prevent="comName='WordRun'">WordRun</a> |
        <a href="" @click.prevent="comName='Trans'">Trans</a> |
        <a href="" @click.prevent="comName='TransGroup'">TransGroup</a>
        <hr>
        <transition mode="out-in">
            <component :is="comName"></component>
        </transition>
    </div>
</template>
<script>
    import Trans from "@/components/Trans.vue";
    import TransGroup from "@/components/TransGroup.vue";
    import WordRun from "@/components/WordRun.vue";

    export default {
        name: "About",
        components: {
            Trans,
            TransGroup,
            WordRun
        },
        data(){
            return{
                comName:"WordRun"
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
</style>
