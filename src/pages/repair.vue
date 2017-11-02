<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>网上报修</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="weclome">
            <div class="baseinfo">
                <h3 class="repair-baseinfo-title">基本信息</h3>
                <el-card class="box-class-info">
                    <el-row>
                        <el-col :span="8">学号：{{ studentId }}</el-col>
                        <el-col :span="8">姓名：{{ studentName }}</el-col>
                        <el-col :span="8">宿舍号：{{ dormitoryId }}</el-col>
                    </el-row>
                </el-card>

                <h3 class="repair-step-title">网上报修流程</h3>
                <div class="step-class">
                    <el-card>
                    <el-steps :space="200" :active="1">
                        <el-step title="填写保修单" description="填写预约维修内容、维修时间"></el-step>
                        <el-step title="提交等待处理" description="确认您的保修数据正确并提交处理"></el-step>
                        <el-step title="到 总务处 缴费" description="若维修费大于0，则需要到 总务处 缴纳对应的维修费"></el-step>
                        <el-step title="维修人员上门维修" description="维修人员上门维修"></el-step>
                        <el-step title="签名确认" description="在维修单上对维修结果 打勾 并签名"></el-step>
                    </el-steps>
                    </el-card>
                </div>
            </div>


            <h3 class="repair-form-title">填写报修单</h3>
            <div class="repair-form-container">

                <el-form ref="form" :model="form" label-width="80px" class="repair-form">

                    <el-form-item label="联系人">
                        <el-input v-model="form.name" style="width: 400px"></el-input>
                    </el-form-item>

                    <el-form-item label="联系电话">
                        <el-input v-model="form.phone" style="width: 400px"></el-input>
                    </el-form-item>

                    <el-form-item label="维修时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="1" >-</el-col>
                        <el-col :span="11">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="维修类别">
                        <el-radio-group v-model="form.type">
                            <el-radio label="木工"></el-radio>
                            <el-radio label="电工"></el-radio>
                            <el-radio label="水工"></el-radio>
                            <el-radio label="其他"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="常见问题">
                        <el-checkbox-group v-model="form.resource">
                            <el-checkbox label="水管漏水" name="resource"></el-checkbox>
                            <el-checkbox label="灯管坏了" name="resource"></el-checkbox>
                            <el-checkbox label="门锁坏了" name="resource"></el-checkbox>
                            <el-checkbox label="床螺丝松动" name="resource"></el-checkbox>
                            <el-checkbox label="厕所堵塞" name="resource"></el-checkbox>
                            <el-checkbox label="空调不制冷" name="resource"></el-checkbox>
                            <el-checkbox label="风扇不转" name="resource"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    
                    <el-form-item label="描述">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @onclick="onSubmit" style="width: 100px">提交</el-button>
                        <el-button type="primary" @onclick="onCancel" style="width: 100px">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                studentId: '111',
                studentName: "Kaka",
                dormitoryId: "G324",
                form: {
                    name: '',
                    phone: '',
                    time: '',
                    date: '',
                    delivery: false,
                    type: '',
                    resource: [],
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!')
            },

            onCancel() {
                console.log('cancel!')
            }
        }
    }
</script>

<style scoped>
    /* .repair-baseinfo-title{
        padding-left: 20px;
        padding-top: 0px;
        margin-top: 0px;
    } */

    .baseinfo{
        padding: 0px 20px;
    }

    .box-class-info{
        height: 60px;
    }

    .step-class{
        margin-top: 30px;
        margin-left: 10px;
        margin-bottom: 20px;
    }

    .repair-form-container{
        
        padding: 0px 20px;
        width: 800px;
    }
    .repair-form-title{
        padding-left: 20px;
    }
    
    .repair-form{
        margin-left: 300px;
    }
</style>
