<template>
    <div class="all">
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            <div class="baseinfo">
                <h3 class="info-title">个人基础信息</h3>
                <el-card class="box-card-info">
                    <el-row :gutter="15">
                        <el-col :span="8">学号：{{ stuId }}</el-col>
                        <el-col :span="8">姓名：{{ stuName }}</el-col>
                        <el-col :span="8">年级：{{ stuGrade }}</el-col>
                    </el-row>

                    <el-row :gutter="15">
                        <el-col :span="8">专业：{{ stuPro }}</el-col>
                        <el-col :span="8">身份证：{{ stuBaseId }}</el-col>
                        <el-col :span="8">电子邮箱：{{ stuEmail }}</el-col>
                    </el-row>

                    <el-row :gutter="15">
                        <el-col :span="8">行政班：{{ stuClass }}</el-col>
                        <el-col :span="8">班主任：{{ stuTutor }}</el-col>
                        <el-col :span="8">辅导员：{{ stuCounselor }}</el-col>
                    </el-row>
                </el-card>
            </div>

            <div class="allclass">
                <h3 class="allclass-title">基础课程</h3>
                <el-card class="box-card-class">
                    <h4 class="compulsory">必修课程</h4>
                    <el-table :data="CompulsorytableData" style="width:100%" border>
                        <el-table-column prop="semester" label="开设学期" width="95"></el-table-column>
                        <el-table-column prop="classcode" label="课程代码" width="100"></el-table-column>
                        <el-table-column prop="classname" label="课程名称" width="160"></el-table-column>
                        <el-table-column prop="credit" label="学分" width="70"></el-table-column>
                        <el-table-column prop="mode" label="考核方式" width="95"></el-table-column>
                        <el-table-column prop="advance" label="先修课程" width="400"></el-table-column>
                        <el-table-column prop="date" label="修读学年学期" width="150"></el-table-column>
                        <el-table-column prop="grade" label="成绩" width="70"></el-table-column>
                        <el-table-column prop="hascredits" label="已得学分" width="70"></el-table-column>
                    </el-table>

                    <el-row :gutter="20" class="compulsory-sum">
                        <el-col :span="6" :offset="6"  class="compulsory-sum-1">必修课的总学分：{{ Sumcompulsory }}</el-col>
                        <el-col :span="6" :offset="6" class="compulsory-sum-2">必修课已获得学分：{{ Hascompulsory }}</el-col>
                    </el-row>

                    <h4 class="elective">选修课程</h4>
                    <el-table :data="ElectivetableData" style="width:100%" border>
                        <el-table-column prop="classcode" label="课程代码" width="100"></el-table-column>
                        <el-table-column prop="classname" label="课程名称" width="160"></el-table-column>
                        <el-table-column prop="credit" label="学分" width="70"></el-table-column>
                        <el-table-column prop="mode" label="考核方式" width="100"></el-table-column>
                        <el-table-column prop="advance" label="先修课程" width="400"></el-table-column>
                        <el-table-column prop="date" label="修读学年学期" width="180"></el-table-column>
                        <el-table-column prop="grade" label="成绩" width="100"></el-table-column>
                        <el-table-column prop="hascredits" label="已得学分" width="100"></el-table-column>
                    </el-table>

                    <el-row :gutter="20" class="elective-sum">
                        <el-col :span="6" :offset="6" class="elective-sum-1">选修课的总学分：{{ Sumelective }}</el-col>
                        <el-col :span="6" :offset="6" class="elective-sum-2">选修课已获得学分：{{ Haselective }}</el-col>
                    </el-row>
                </el-card>

                <h3 class="creditTotal-title">学分统计</h3>
                <el-card class="box-card-credit">
                    <el-row >
                        <el-col :span="8">累计已获得学分：{{ SumCredits }}</el-col>
                        <el-col :span="8">平均学分绩点：{{ AverGradePoint }}</el-col>
                        <el-col :span="8">本专业本年级毕业需修满学分：{{ SumRequire }}</el-col>
                    </el-row>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                stuId: '',
                stuName: '',
                stuGrade: '',
                stuPro: '',
                stuBaseId: '',
                stuEmail: '',
                stuClass: '',
                stuTutor: '',
                stuCounselor: '',
                Sumcompulsory: 0,
                Hascompulsory: 0,
                Sumelective: 0,
                Haselective: 0,
                SumCredits: 0,
                AverGradePoint: 0,
                SumRequire: 160,
                CompulsorytableData: [
                    {
                        semester: '第一学期',
                        classcode: 'GE0031',
                        classname: '概率论与数理统计',
                        credit: 4.0,
                        mode: '考试',
                        advance: '高等数学I(理)(GE1031)',
                        date: '2015年第一学期',
                        grade: 89,
                        hascredits: 4.0
                    }
                ],
                ElectivetableData: [
                    {
                        classcode: 'EE0027',
                        classname: '欧美歌曲文化赏析',
                        credit: 2.0,
                        mode: '考查',
                        advance: '',
                        date: '	2016年第二学期',
                        grade: '中',
                        hascredits: 2.0
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .all{
        font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

    .baseinfo{
        padding: 10px 20px;
    }

    .info-title{
        margin-top: 0px;
    }

    .box-card-info{
        height: 120px;
    }

    .el-row{
        margin-bottom: 10px;
    }

    .allclass{
        padding: 0px 20px 10px 20px;
    }

    .compulsory{
        text-align: center;
        margin-top: 5px;
    }

    .box-card-class{
        height: 600px;
    }

    .compulsory-sum{
        padding-top: 20px;
        padding-left: 10px;   
    }

    .compulsory-sum-1{
        text-align: right;
    }

    .compulsory-sum-2{
        text-align: right;
    }

    .elective{
        text-align: center;
    }

    .elective-sum{
        padding-top: 20px;
    }

    .elective-sum-1{
        text-align: right;
    }

    .elective-sum-2{
        text-align: right;
    }


</style>