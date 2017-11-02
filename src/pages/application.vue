<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>评优申请</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            <div class="application-step-box">
                <h3>评优申请流程</h3>
                <el-card>
                    <el-steps :space="250" :active="1" style="padding-left: 40px">
                        <el-step title="下载申请表" description="在首页可下载评优申请表"></el-step>
                        <el-step title="如实填写申请表" description="根据自身实际情况填写评优申请"></el-step>
                        <el-step title="上传申请表" description="在此页将申请表上传到服务器"></el-step>
                        <el-step title="等待教务处通知" description="在接下来的几个月内，教务组会认真评估"></el-step>
                    </el-steps>
                </el-card>
            </div>

            <div class="application-upload-box">
                <h3>上传申请表</h3>
                <div class="upload-box">
                    <el-upload class="upload-demo" drag action="" multiple="">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传 .word 文件，且不超过10MB    </div>
                    </el-upload>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .application-step-box{
        padding: 10px 20px;
    }

    .application-upload-box{
        padding: 10px 20px;
    }

    .upload-box{
        margin-left: 350px;
    }
</style>