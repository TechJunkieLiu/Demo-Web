<template>
    <div class="size-icon">

        <!-- button按钮 -->
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button plain>纯色按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button circle>圆形按钮-文字</el-button>
            <el-button type="primary" circle>主要按钮</el-button>
            <el-button type="success" circle>成功按钮</el-button>
            <el-button type="info" circle>信息按钮</el-button>
            <el-button type="warning" circle>警告按钮</el-button>
            <el-button type="danger" circle>危险按钮</el-button>
            <el-button type="warning" circle class="el-icon-search"></el-button>
            <el-button type="danger" circle class="el-icon-user"></el-button>
        </el-row>
        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>
        <el-row>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="primary" plain disabled>主要按钮</el-button>
            <el-button type="primary" circle disabled>主要按钮</el-button>
            <el-button type="primary" icon="el-icon-delete" disabled></el-button>
            <el-button type="primary" icon="el-icon-search" disabled>搜索</el-button>
        </el-row>
        <el-row>
            <el-button type="text" >主要按钮1</el-button>
            <el-button type="text" plain >主要按钮2</el-button>
            <el-button type="text" circle >主要按钮3</el-button>
            <el-button type="text" icon="el-icon-delete" disabled></el-button>
            <el-button type="text" icon="el-icon-search" disabled>搜索</el-button>
        </el-row>
        <el-row>
            <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
        </el-row>
        <el-row>
            <el-button type="primary" :loading="true">加载中</el-button>
        </el-row>

        <!-- link文字链接 -->
        <div>
            <el-link href="https://www.baidu.com" target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
        </div>
        <div>
            <el-link href="https://www.baidu.com" target="_blank" disabled>默认链接</el-link>
            <el-link type="primary" disabled>主要链接</el-link>
            <el-link type="success" disabled>成功链接</el-link>
            <el-link type="warning" disabled>警告链接</el-link>
            <el-link type="danger" disabled>危险链接</el-link>
            <el-link type="info" disabled>信息链接</el-link>
        </div>
        <div>
            <el-link href="https://www.baidu.com" target="_blank" :underline="false">默认链接</el-link>
            <el-link type="primary" :underline="false">主要链接</el-link>
            <el-link type="success" :underline="false">成功链接</el-link>
            <el-link type="warning" :underline="false">警告链接</el-link>
            <el-link type="danger" :underline="false">危险链接</el-link>
            <el-link type="info" :underline="false">信息链接</el-link>
        </div>
        <div>
            <el-link icon="el-icon-edit">编辑</el-link>
            <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
    .size-icon{
        height: 50px;
        width: 1100px;
    }
</style>
