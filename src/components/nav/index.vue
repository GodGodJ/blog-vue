<template>


    <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="technology">技术</el-menu-item>
        <el-menu-item index="life">生活</el-menu-item>
        <el-menu-item index="aboutme">关于我</el-menu-item>
        <el-input v-model="input" placeholder="请输入内容" class="width matop-larger"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-dropdown class="width-small right matop-larger">
            <el-avatar src="../../assets/img/head.jpg"></el-avatar>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>注销</el-dropdown-item>

            </el-dropdown-menu>
        </el-dropdown>

    </el-menu>
</template>
<style>
    @import "../../assets/css/me.css";
</style>
<script>
    export default {
        data() {
            return {
                activeIndex2: '1',
                input: ''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>