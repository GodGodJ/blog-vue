<template>
    <div>
        <nav-bar></nav-bar>
        <router-view></router-view>

    </div>
</template>

<style></style>

<script>
    import NavBar from '../../components/adminnav'
    export default {
        components:{
            NavBar
        }
    }
</script>