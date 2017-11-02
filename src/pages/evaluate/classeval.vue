<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>教学评价</el-breadcrumb-item>
                <el-breadcrumb-item>课程评价</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            Student Class Evaluate Show !
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
