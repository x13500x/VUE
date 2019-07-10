<template>
    <div class="useradd">
        <h1>mint UI</h1>
        <mt-button type="default" size="large">default</mt-button>
        <br>
        <mt-button type="primary" size="large">primary</mt-button>
        <br>
        <mt-button type="danger" size="large">danger</mt-button>
        <br>
        <mt-button @click.native="handleClick" size="large">注册用户</mt-button>
        <br>
        <ActionSheet/>
        <mt-button @click.native="flag = true" size="large">选择用户头像</mt-button>
        <mt-actionsheet :actions="actions" v-model="flag"></mt-actionsheet>
    </div>
</template>

<script>
    import ActionSheet from "./ActionSheet"
    export default {
        name: "UserAdd",
        components:{
            ActionSheet
        },
        data(){
            return{
                flag:false,
                actions:[]
            }
        },
        methods:{
            takePhoto(){
                alert("打开相机")
            },
            openAlbum(){
                alert("打开相册")
            }
        },
        mounted(){
            this.actions = [{
                name: '拍照',
                method: this.takePhoto
            }, {
                name: '从相册中选择',
                method: this.openAlbum
            }];
        }
    }
</script>

<style scoped lang="scss">

</style>