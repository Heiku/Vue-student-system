<template>
    <div id="app">
        <el-row :span="24" class="app-head">
            <router-link :to=" { path: '/'} ">
                <el-col :span="4" class="logo">
                    {{ logo }}
                </el-col>
            </router-link>

            <el-col :span="16" class="head-item">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
                    <el-menu-item index="studentinfo">个人信息</el-menu-item>
                    <el-menu-item index="schedule">课程表</el-menu-item>
                    <el-menu-item index="attendance">考勤信息</el-menu-item>
                    <el-menu-item index="usualgrade">平时成绩</el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        {{ username }}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>


        <div class="app-content">
            <div class="index-left">
                <el-col>
                    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-edit"></i>教学评价</template>
                            <el-menu-item index="classeval">课程评价</el-menu-item>
                            <el-menu-item index="tutoreval">导师评价</el-menu-item>
                            <el-menu-item index="counseloreval">辅导员评价</el-menu-item>
                        </el-submenu>
                        
                        <el-menu-item index="prepaid"><i class="el-icon-menu"></i>预交费用</el-menu-item>
                        <el-menu-item index="repair"><i class="el-icon-setting"></i>网上报修</el-menu-item>
                        <el-menu-item index="testsign"><i class="el-icon-setting"></i>等级考试报名</el-menu-item>
                        <el-menu-item index="allclass"><i class="el-icon-setting"></i>开设课程</el-menu-item>
                        <el-menu-item index="application"><i class="el-icon-setting"></i>评优申请</el-menu-item>
                    </el-menu>
                </el-col>
            </div>

            <div class="index-content">
                <router-view></router-view>
            </div>
        </div>

    
    </div>
</template>


<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                logo: '学生系统',
                username: 'Heiku'
            }
        },
        methods: {
            handleSelect(key, keyPath){
                console.log(key, keyPath)
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },

            logout() {
                console.log('logout')
            }
        }
    }
</script>

<style>
    #app{
        min-width: 1200px;
        height: 100%;
        margin: 0;
        top: 0px;
        bottom: 0px;
    }
    .app-head{
        z-index: 1000;
        min-width: 1200px;
        transition: all 0.5s ease;
        border-top: solid 4px #3091F2;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04); 
        background: #eef1f6;
        }
    header.header-fixed{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        }

    .head-item{
        height: 60px;
    }

    .logo{
        color: #000000;
        height: 60px;
        font-size: 22px;
        font-family: "Hiragino Sans GB", Arial, Helvetica, sans-serif ;
        padding-left: 30px;
        padding-right: 20px;
        border-right-color: rgba(238, 241, 146, 0.3);
        border-right-style: soild;
        padding-top: 12px;
        text-align: center;
    }

    .logo:hover{
        background: #eef1f6, 0.5;
    }
    
    .userinfo{
        text-align: right;
        padding-right: 40px;
        padding-top: 15px;
        font-size: 19px;

    }

    .app-content{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        min-height: 665px;
        
    }

    .main-left{
        width:700px;
        height: 665px;
        float: left;
    }

    .index-left{
        width: 250px;
        height: 665px;
        background: #eef1f6;
    }

    .index-content{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }


    .bread{
        padding: 20px;
    }

    
</style>