<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>课程表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            <el-form :inline="true" :model="selectSchedule" class="select-date">
                <el-form-item label="学 年：">
                    <el-select v-model="selectSchedule.valueYear" placeholder="学 年">
                        <el-option v-for="item in year"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="学 期：">
                    <el-select v-model="selectSchedule.valueSemester" placeholder="学 期">
                        <el-option v-for="item in semester"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="周 数：">
                    <el-select v-model="selectSchedule.valueWeek" placeholder="周 数">
                        <el-option v-for="item in week"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button icon="search" @click="onSubmit" type="primary">查询</el-button>
                </el-form-item>
            </el-form>

            <el-card class="box-class-schedule">
                <h3>{{ selectSchedule.valueYear }}-{{ selectSchedule.valueYear+1 }} {{ getSemester(selectSchedule.valueSemester) }} 上课时间表</h3>

                <!-- <el-table :data="scheduleData" border="true">
                    <el-table-column prop="time" label="上课时间" width="180"></el-table-column>
                    <el-table-column prop="Monday" label="星期一" width="180"></el-table-column>
                    <el-table-column prop="Tuesday" label="星期二" width="180"></el-table-column>
                    <el-table-column prop="Wednesday" label="星期三" width="180"></el-table-column>
                    <el-table-column prop="Thursday" label="星期四" width="180"></el-table-column>
                    <el-table-column prop="Friday" label="星期五" width="180"></el-table-column>
                    <el-table-column prop="Saturday" label="星期六" width="180"></el-table-column>
                </el-table> -->

                <el-row class="card-head" :gutter="0">
                    <el-col :span="4"><el-card class="card-head-label-first">上课时间</el-card></el-col>
                    <el-col :span="3"><el-card class="card-head-label">星期一</el-card></el-col>
                    <el-col :span="3"><el-card class="card-head-label">星期二</el-card></el-col>
                    <el-col :span="3"><el-card class="card-head-label">星期三</el-card></el-col>
                    <el-col :span="3"><el-card class="card-head-label">星期四</el-card></el-col>
                    <el-col :span="3"><el-card class="card-head-label">星期五</el-card></el-col>
                    <el-col :span="3"><el-card class="card-head-label">星期六</el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">1 - 2 节</el-col>
                            <el-col class="card-class-first-time">9:00 - 10:20</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">3 - 4 节</el-col>
                            <el-col class="card-class-first-time">10:40 - 12:00</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">5 - 6 节</el-col>
                            <el-col class="card-class-first-time">12:30 - 13:50</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">7 - 8 节</el-col>
                            <el-col class="card-class-first-time">14:00 - 15:20</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">9 - 10 节</el-col>
                            <el-col class="card-class-first-time">15:30 - 16:50</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">11 - 12 节</el-col>
                            <el-col class="card-class-first-time">17:00 - 18:20</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">13 - 14 节</el-col>
                            <el-col class="card-class-first-time">19:00 - 20:20</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>
                <el-row class="card-class" :gutter="0">
                    <el-col :span="4"><el-card class="card-class-first">
                        <el-row>
                            <el-col class="card-class-first-time">15 - 16 节</el-col>
                            <el-col class="card-class-first-time">20:30 - 21:50</el-col>
                        </el-row>
                        </el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                    <el-col :span="3"><el-card class="card-class-show"></el-card></el-col>
                </el-row>

                
            </el-card>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                selectSchedule: {
                    valueYear: 2017,
                    valueSemester: 1,
                    valueWeek: 1
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
                week: [
                    {
                        value: 1,
                        label: '第一周'
                    },
                    {
                        value: 2,
                        label: '第二周'
                    },
                    {
                        value: 3,
                        label: '第三周'
                    },
                    {
                        value: 4,
                        label: '第四周'
                    },
                    {
                        value: 5,
                        label: '第五周'
                    },
                    {
                        value: 6,
                        label: '第六周'
                    },
                    {
                        value: 7,
                        label: '第七周'
                    },
                    {
                        value: 8,
                        label: '第八周'
                    },
                    {
                        value: 9,
                        label: '第九周'
                    }
                ],
            }
        },
        methods: {
            getSemester(valueSemester){
                if(valueSemester == 1){
                    return '第一学期'
                }else{
                    return '第二学期'
                }
            },
            onSubmit(){
                console.log(this.selectSchedule)
            }
        },
        mounted() {
            //this.createWeekarray()
            //console.log(week)
        }
    }
</script>

<style scoped>
    .select-date{
        padding-top: 10px;
        padding-left: 20px;
    }

    .box-class-schedule{
        margin: 10px 20px 0px 20px;
    }

    h3{
        text-align: center;
    }

    el-table{
        text-align: center;
    }

    
    .card-head-label{
        width: 150px;
        height: 60px;
        background: #A6D0E4;
        color: #ffffff;
    }
    .card-head-label-first{
        width: 200px;
        height: 60px;
        background: #A6D0E4;
        color: #ffffff;
    }

    .card-class-first{
        width: 200px;
        height: 100px;
    }
    .card-class-first-time{
        text-align: center;
        padding: 5px;
    }
    

    .card-class-show{
        width: 150px;
        height: 100px;
    }

    .card-head{
        padding-left: 50px;
        text-align: center;
    }

    .card-class{
        padding-left: 50px;
    }
    
</style>
