<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>开设课程</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            <el-row class="select-class">
                <el-col :span="5">
                    <el-form :inline="true" :model="selectCode">
                        <el-form-item label="课程代码：">
                            <el-input class="input-code" v-model="selectCode.valueCode" placeholder="课程代码" icon="search" :on-icon-click="handleIconClick"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>

                <el-col :span="17" :offset="2">
                    <el-form :inline="true" :model="selectInfo">
                        <el-form-item label="承担教学系：">
                            <el-select class="select-faculty" v-model="selectInfo.valueFaculty" placeholder="教 学 系">
                                <el-option v-for="item in faculty"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="学分：">
                            <el-input class="input-credit" v-model="selectInfo.valueCredit" placeholder="学 分"></el-input>
                        </el-form-item>

                        <el-form-item label="考核方式：">
                            <el-select class="select-style" v-model="selectInfo.valueStyle" placeholder="考核方式">
                                <el-option v-for="item in style"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-button @click="onSummit" icon="search" type="primary">查询</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>    
            </el-row>
            
            <el-table :data="classData">
                <el-table-column
                    prop="code"
                    label="课程代码"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="课程名称"
                    width="365">
                </el-table-column>
                <el-table-column
                    prop="faculty"
                    label="教学承担系"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="credit"
                    label="学分"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="style"
                    label="考核方式"
                    width="200">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                selectCode: {
                    valueCode: ''
                },
                selectInfo: {
                    valueFaculty: '',
                    valueStyle: '',
                    valueCredit: ''
                    },
                faculty:[
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'software',
                        label: '软件工程系'
                    },
                    {
                        value: 'foreign',
                        label: '外语系'
                    },
                    {
                        value: 'manage',
                        label: '管理系'
                    },
                    {
                        value: 'digital',
                        label: '数码媒体系'
                    },
                    {
                        value: 'network',
                        label: '网络技术系'
                    },
                    {
                        value: 'game',
                        label: '游戏系'
                    },
                    {
                        value: 'economic',
                        label: '国际经贸系'
                    },
                    {
                        value: 'electronic',
                        label: '电子系'
                    },
                    {
                        value: 'computer',
                        label: '计算机系'
                    },
                    {
                        value: 'finance',
                        label: '财会系'
                    },
                    {
                        value: 'moral',
                        label: '思想政治理论课教学部'
                    },
                    {
                        value: 'base',
                        label: '基础部'
                    }
                ],
                style: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'test',
                        label: '考查'
                    },
                    {
                        value: 'exam',
                        label: '考试'
                    }
                ],
                classData: []
            }
        },
        methods: {
            handleIconClick(){
                console.log(this.selectCode);
            },
            onSummit(){
                console.log(this.selectInfo)
            }
        }
    }
</script>

<style scoped>
    .select-class{
        margin-left: 20px;
    }

    .input-code{
        width: 120px;
    }

    .input-credit{
        width: 100px;
    }

    .select-faculty{
        width: 190px;
    }

    .select-style{
        width: 120px;
    }

    .el-table{
        width: inherit;
        margin: 10px 20px;
    }

    .el-table-column{
        text-align: center; 
    }
    
</style>
