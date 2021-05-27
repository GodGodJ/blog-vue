<template>
    <div>
        <nav-bar></nav-bar>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<style></style>

<script>
import NavBar from '../../components/nav'
import MyFooter from '../../components/footer'
    export default {
        components:{
            NavBar,
            MyFooter
        }
    }
</script>