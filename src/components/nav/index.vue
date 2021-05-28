
<template>

    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#409EFF"
            text-color="#fff"
            active-text-color="#ffd04b">

            
            <el-menu-item index="1"><a href="#" class="text-dec-none">首页</a></el-menu-item>
            <el-menu-item index="2"><a href="#" class="text-dec-none">标签</a></el-menu-item>
            <el-menu-item index="3"><a href="#" class="text-dec-none">分类</a></el-menu-item>
            <el-menu-item index="4"><a href="#" class="text-dec-none">关于我</a></el-menu-item>
            <el-menu-item class="">
                <div>

                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>

                </div>
            </el-menu-item>
    </el-menu>

</template>

<style lang="less" scoped>
    .right{
        float: right;
    }


    .text-dec-none{
        text-decoration: none;
    }
</style>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                input:''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>