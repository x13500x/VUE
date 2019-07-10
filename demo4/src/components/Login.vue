<template>
  <div>
    <h3>欢迎登陆</h3>
    <form v-if="!isReg">
      <span>用户名：</span>
      <input type="text" v-model="name">
      <br>
      <span>密码：</span>
      <input type="password" v-model="password">
      <div class="login">
        <button type="button" @click="login()" class="login1">登录</button>
        <button type="button" @click="reg()" class="login1">注册</button>
      </div>
    </form>
    <form v-else>
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div> 密码：</div>
      <input type="password" v-model="password">
      <div>再次输入密码：</div>
      <input type="password" v-model="repeat">
      <div>
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        isReg: false,
        name: "",
        password: "",
        repeat: ""
      }
    },
    methods: {
      login() {
        if(localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password){
          this.$router.push('/home/list')
        }else {
          alert("用户名密码输入不正确！！")
        }

      },
      reg() {
        this.isReg = true
      },
      addUser() {
        if (this.password === this.repeat) {
          localStorage.setItem("name", this.name)
          localStorage.setItem("password", this.password)
          this.name = ""
          this.password = ""
          this.isReg = false
        } else {
          alert("两次密码输入不一致")
        }
      },
      cancel() {
        this.isReg = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .login{
    text-align: center;
    margin: 20px auto;
    width: 70%;
    display: flex;
    justify-content: space-around;

    .login1{
      border:1px solid gray;
      width: 45%;
      border-radius: 4px;
      background: #fff;
      height: 30px;
      line-height: 30px;
      color: #42b983;
    }
  }
</style>
