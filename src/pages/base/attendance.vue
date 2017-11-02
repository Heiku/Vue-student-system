<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>考勤信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            Student Attendance Show !
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

</style>
