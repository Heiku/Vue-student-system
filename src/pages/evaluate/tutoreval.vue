<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>教学评价</el-breadcrumb-item>
                <el-breadcrumb-item>导师评价</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            Student Tutor Evaluate Show !
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
