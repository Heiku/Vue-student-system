<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>考试报名</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            <div class="has-sign-box">
                <h3>已报名的考试</h3>
                <el-table ref="singleTable" :data="hasData" style="width: 100%">
                    <el-table-column type="index" width="150"></el-table-column>
                    <el-table-column property="date" label="学年学期" width="200"></el-table-column>
                    <el-table-column property="code" label="考试代码" width="200"></el-table-column>
                    <el-table-column property="name" label="考试名称" width="200"></el-table-column>
                    <el-table-column property="price" label="费用" width="180"></el-table-column>
                    <el-table-column property="stopdate" label="报名截止时间" width="200"></el-table-column>
                </el-table>
            </div>

            <div class="sign-box">
                <div class="sign-box-title">
                    <h3>已报名的考试</h3>
                    <el-button>报名</el-button>
                </div>
                <el-table ref="multipleTable" :data="signData" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="150"></el-table-column>
                    <el-table-column prop="date" label="学年学期" width="200"></el-table-column>
                    <el-table-column prop="code" label="考试代码" width="200"></el-table-column>
                    <el-table-column prop="name" label="考试名称" width="200"></el-table-column>
                    <el-table-column prop="price" label="费用" width="180"></el-table-column>
                    <el-table-column prop="stopdate" label="报名截止时间" width="200"></el-table-column>
                </el-table>


            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                hasData: [],
                signData: []
            }
        },

        methods: {
            toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>

    h3{
        width: 200px;
    }
    .has-sign-box{
        padding: 10px 20px;
    }

    .sign-box{
        padding: 10px 20px;
    }

    .sign-box-title{
        float: right;
    }
</style>
