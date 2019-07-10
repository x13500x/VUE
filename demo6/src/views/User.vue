<template>
    <div id="user">
        <div class="user">
            <div class="left">
                <ul>
                    <li><router-link to="useradd">增加用户</router-link></li>
                    <li><router-link to="userlist">用户列表</router-link></li>
                </ul>
            </div>
            <div class="right">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped lang="scss">
    .user{
        display: flex;
        .left{
            width: 10rem;
            min-height: 20rem;
            border-right: 1px solid #eee;
        }
        .right{
            flex: 1;
        }
        li{
            line-height: 2;
        }
    }
</style>