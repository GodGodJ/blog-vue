<template>

    <el-row>
        <el-col :offset="8" :span="8" class="matop-verybig">

            <el-card>
                <div slot="header" class="clearfix">
                    <span>技术</span>
                    <div style="float: right; padding: 0 0">
                        <span  type="text">50</span>
                        <span>篇</span>
                    </div>


                </div>
                <div>
                    <el-card class="box-card width-all ">
                        <div slot="header" class="clearfix ">
                            <span>卡片名称</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                    <el-card class="box-card width-all matop-larger">
                        <div slot="header" class="clearfix ">
                            <span>卡片名称</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                    <el-card class="box-card width-all matop-larger">
                        <div slot="header" class="clearfix ">
                            <span>卡片名称</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                    <el-card class="box-card width-all matop-larger">
                        <div slot="header" class="clearfix ">
                            <span>卡片名称</span>
                            <el-button style="float: right; padding: 3px 0" ype="text">操作按钮</el-button>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </div>
            </el-card>


            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000" class="matop-verybig">
            </el-pagination>
        </el-col>



    </el-row>



</template>
<style>
    @import "../../assets/css/me.css";
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>

<script>

</script>