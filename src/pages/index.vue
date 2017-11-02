<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            Weclome to Student Manage System!
        </div>
    </div>
</template>


<script>
    export default{
        data() {
            return {
                
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>


<style scoped>


    .bread{
        padding: 20px;
    }

    .weclome{
        height: 600px;
        width: inherit;
        text-align: center;
        font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 40px;
        padding-top: 200px;


    }
</style>