<template>
    <div class="home">
        <Ahome/>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld'
    import Ahome from "../components/Ahome"

    export default {
        name: 'home',
        components: {
            HelloWorld,
            Ahome
        }
    }
</script>
