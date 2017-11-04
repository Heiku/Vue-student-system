<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>平时成绩</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            <el-form :inline="true" :model="selectGrade" class="select-date">
                <el-form-item label="学 年：">
                    <el-select v-model="selectGrade.valueYear" placeholder="学 年">
                        <el-option v-for="item in year"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="学 期：" style="padding-left:20px;">
                    <el-select v-model="selectGrade.valueSemester" placeholder="学 期">
                        <el-option v-for="item in semester"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button icon="search" type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>

            <el-card class="box-class-usualgrade">
                <usual-grade :grade="grade"></usual-grade>
            </el-card>
        </div>
    </div>
</template>

<script>
import usualGrade from '@/components/mycollapse'

    export default{
        components: {
            usualGrade
        },
        data () {
            return {
                selectGrade: {
                    valueYear: '2017',
                    valueSemester: '1'
                },
                year: [
                    {
                        value: 2015,
                        label: '2015'
                    },
                    {
                        value: 2016,
                        label: '2016'
                    },
                    {
                        value: 2017,
                        label: '2017'
                    }
                ],

                semester: [
                    {
                        value: 1,
                        label: '第一学期'
                    },
                    {
                        value: 2,
                        label: '第二学期'
                    }
                ],        
                grade:[
                    {
                        className: '对象关系映射',
                        teacherName: '张志威',
                        theoryClass: 'IF',
                        testClass: 'IF01',
                        data: [
                            {
                                sort: '实验1',
                                percentage: '20%',
                                max: '20',
                                grade: '20'
                            },
                            {
                                sort: '实验2',
                                percentage: '20%',
                                max: '20',
                                grade: '20'
                            },
                            {
                                sort: '考勤',
                                percentage: '10%',
                                max: '10',
                                grade: '10'
                            },
                            {
                                sort: '总成绩',
                                percentage: '50%',
                                max: '50',
                                grade: '50'
                            }
                        ]
                    },
                    {
                        className: '对象关系映射',
                        teacherName: '张志威',
                        theoryClass: 'IF',
                        testClass: 'IF01',
                        data: [
                            {
                                sort: '实验1',
                                percentage: '20%',
                                max: '20',
                                grade: '20'
                            },
                            {
                                sort: '实验2',
                                percentage: '20%',
                                max: '20',
                                grade: '20'
                            },
                            {
                                sort: '考勤',
                                percentage: '10%',
                                max: '10',
                                grade: '10'
                            },
                            {
                                sort: '总成绩',
                                percentage: '50%',
                                max: '50',
                                grade: '50'
                            }
                        ]
                    },
                    {
                        className: '对象关系映射',
                        teacherName: '张志威',
                        theoryClass: 'IF',
                        testClass: 'IF01',
                        data: [
                            {
                                sort: '实验1',
                                percentage: '20%',
                                max: '20',
                                grade: '20'
                            },
                            {
                                sort: '实验2',
                                percentage: '20%',
                                max: '20',
                                grade: '20'
                            },
                            {
                                sort: '考勤',
                                percentage: '10%',
                                max: '10',
                                grade: '10'
                            },
                            {
                                sort: '总成绩',
                                percentage: '50%',
                                max: '50',
                                grade: '50'
                            }
                        ]
                    }   

                ]
            }
        },
        methods: {
            onSubmit(){
                console.log(this.selectGrade)
            }
        }
    }
</script>

<style scoped>

    .select-date{
        padding-top: 10px;
        padding-left: 20px;
    }

    .box-class-usualgrade{
        margin: 10px 20px 0px 20px;
    }
</style>
