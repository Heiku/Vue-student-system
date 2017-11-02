// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Layout from './components/layout'
import IndexPages from './pages/index'
import StudentInfo from './pages/base/studentinfo'
import Schedule from './pages/base/schedule'
import Attendance from './pages/base/attendance'
import UsualGrade from './pages/base/usualgrade'

import ClassEvaluate from './pages/evaluate/classeval'
import TutorEvaluate from './pages/evaluate/tutoreval'
import CounselorEvaluate from './pages/evaluate/counseloreval'

import Prepaid from './pages/prepaid'
import Repair from './pages/repair'
import TestSign from './pages/testsign'
import AllClass from './pages/allclass'
import Application from './pages/application'

// repair components
import repairForm from './components/repairForm'
import repairStep from './components/repairStep'

import VueRouter from 'vue-router'
Vue.config.productionTip = false


Vue.use(Element)
Vue.use(VueRouter)



let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPages,
    },
    {
      path: '/repair',
      component: Repair,
    },
    {
      path: '/studentinfo',
      component: StudentInfo
    },
    {
      path: '/schedule',
      component: Schedule
    },
    {
      path: '/attendance',
      component: Attendance
    },
    {
      path: '/usualgrade',
      component: UsualGrade
    },
    {
      path: '/prepaid',
      component: Prepaid
    },
    {
      path: '/testsign',
      component: TestSign
    },
    {
      path: '/allclass',
      component: AllClass
    },
    {
      path: '/application',
      component: Application
    },
    {
      path: '/classeval',
      component: ClassEvaluate
    },
    {
      path: '/tutoreval',
      component: TutorEvaluate
    },
    {
      path: '/counseloreval',
      component: CounselorEvaluate
    }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
