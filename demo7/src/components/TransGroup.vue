<template>
    <div class="trangroup">
        <div>
            <label>
                Id:
                <input type="text" v-model="id">
            </label>
            <label>
                Name:
                <input type="text" v-model="name">
            </label>
            <input type="button" value="添加" @click="add">
        </div>

        <transition-group name="my" appear tag="ul">
            <li v-for="(item,i) in list" :key="item.id" @click="del(i)">{{item.id}}---{{item.name}}</li>
        </transition-group>

    </div>
</template>

<script>
    export default {
        name: "TransGroup",
        data() {
            return {
                id: "",
                name: "",
                list: [
                    {id: 1, name: "赵高"},
                    {id: 2, name: "秦桧"},
                    {id: 3, name: "严嵩"},
                    {id: 4, name: "魏忠贤"},
                ]
            }
        },
        methods: {
            add() {
                if (this.id !== "" && this.name !== "") {
                    this.list.push({id: this.id, name: this.name})
                    this.id = this.name = ""
                } else {
                    alert("输入错误！")
                }

            },
            del(i) {
                this.list.splice(i, 1)
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        list-style: none;
        border: 1px dashed yellowgreen;
        margin: 5px;
        padding: 5px;
        text-align: left;
        width: 100%;
        &:hover {
            background-color: hotpink;
            transition: all 0.8s ease;
        }
    }

    .my-enter, .my-leave-to {
        opacity: 0;
        transform: translateY(100px);
    }

    .my-enter-active, .my-leave-active {
        transition: all 1s ease;
        position: absolute;
    }

    .my-move {
        transition: all 1s ease;
    }
</style>