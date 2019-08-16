import Vue from 'vue'
import Router from 'vue-router'


//懒加载组件

const homepage = () => import('views/About/About');
const home = () => import('views/About/About');
//关注人员管理
const MyPeople = () => import('views/About/About');
const AddPeople = () => import('views/About/About');
const EditPeople = () => import('views/About/About');
const infoPeople = () => import('views/About/About');
const OrganPerson = () => import('views/About/About');
//布撤控管理
const MyControl = () => import('views/About/About');
const addControl = () => import('views/About/About');
const editControl =() => import('views/About/About');
const departControl = () => import('views/About/About');
const controlDetail =() => import('views/About/About');


//我的预警
const warningPerson = () => import('views/About/About');
const warningPersonOrgan = () => import('views/About/About');
const warningInfo = () => import('views/About/About');
//请销假
const MyLeave = () => import('views/About/About');
const OrganLeave = () => import('views/About/About');
const AddLeave = () => import('views/About/About');
const InfoLeave = () => import('views/About/About');
// 审批管理
const checkControl = () => import('views/About/About');
const retractControl = () => import('views/About/About');
const forwardControl = () => import('views/About/About');
// 我的统计
const statistics = () => import('views/About/About');
// 专题库
const special = () => import('views/About/About');
const focusCar = () => import('views/About/About');
const foreigners = () => import('views/About/About');
const perCar = () => import('views/About/About');
const flowMan = () => import('views/About/About');
const caseSpecial = () => import('views/About/About');
const deviceSpecial = () => import('views/About/About');
//权限管理
const authority = () => import('views/About/About');

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: homepage,
      children: [
        {
          path: '/home',
          component: home,
          meta: {
            name: '首页'  //顶部导航显示的文字，必须配置
          },
        },
        {
          path: '/statistics',
          component: statistics,
          meta: {
            name: '我的统计'  //顶部导航显示的文字，必须配置
          },
        },
        {
          path: '/MyPeople',
          component: MyPeople,
          meta: {
            name: '我的人员'  //顶部导航显示的文字，必须配置
          },
        },
        {
          path: '/AddPeople',
          component: AddPeople,
          meta: {
            name: '新增人员'
          },
        },
        {
          name: 'EditPeople',
          path: '/EditPeople',
          component: EditPeople,
          meta: {
            name: '编辑人员'
          },
        },
        {
          name: 'infoPeople',
          path: '/infoPeople',
          component: infoPeople,
          meta: {
            name: '人员详情'
          },
        },
        {
          path: '/OrganPerson',
          component: OrganPerson,
          meta: {
            name: '本机构人员'
          },
        },
        {
          path: '/MyControl',
          component: MyControl,
          meta: {
            name: '我的布控'
          },
        },
        {
          path: '/departControl',
          component: departControl,
          meta: {
            name: '本机构布控'
          },
        },
        {
          path: '/addControl',
          component: addControl,
          meta: {
            name: '新建布控'
          },
        },
        {
          path: '/editControl',
          component: editControl,
          meta: {
            name: '编辑布控'
          },
        },
        {
          path: '/continueEditControl',
          component: editControl,
          meta: {
            name: '续控编辑'
          },
        },
        {
          path: '/controlDetail',
          component: controlDetail,
          meta: {
            name: '布控详情'
          },
        },
        {
          path: '/warningPerson',
          component: warningPerson,
          meta: {
            name: '我的预警'
          },
        },        
        {
          path: '/warningPersonOrgan',
          component: warningPersonOrgan,
          meta: {
            name: '本机构预警'
          },
        },
        {
          path: '/warningInfo',
          component: warningInfo,
          meta: {
            name: '预警详情'
          },
        },
        {
          path: '/MyLeave',
          component: MyLeave,
          meta: {
            name: '我的请销假'
          },
        },
        {
          path: '/OrganLeave',
          component: OrganLeave,
          meta: {
            name: '本机构请销假'
          },
        },
        {
          path: '/AddLeave',
          component: AddLeave,
          meta: {
            name: '新增请销假'
          },
        },
        {
          path: '/InfoLeave',
          component: InfoLeave,
          meta: {
            name: '请销假详情'
          },
        },
        {
          path: '/checkControl',
          component: checkControl,
          meta: {
            name: '布控审批'
          },
        },
        {
          path: '/retractControl',
          component: retractControl,
          meta: {
            name: '撤控审批'
          },
        },
        {
          path: '/forwardControl',
          component: forwardControl,
          meta: {
            name: '转控审批'
          },
        },
        {
          path: '/focusCar',
          component: focusCar,
          meta: {
            name: '本地车辆专题库'
          },
        },
        {
          path: '/foreigners',
          component: foreigners,
          meta: {
            name: '外籍人员专题库'
          },
        },
        {
          path: '/special',
          component: special,
          meta: {
            name: '本地关注人员专题库'
          },
        },
        {
          path: '/perCar',
          component: perCar,
          meta: {
            name: '人车拟合专题库'
          },
        },
        {
          path: '/flowMan',
          component: flowMan,
          meta: {
            name: '流动人口专题库'
          },
        },
        {
          path: '/deviceSpecial',
          component: deviceSpecial,
          meta: {
            name: '设备专题库'
          },
        },
        {
          path: '/caseSpecial',
          component: caseSpecial,
          meta: {
            name: '案件专题库'
          },
        },
        {
          path: '/authority',
          component: authority,
          meta: {
            name: '权限管理'
          },
        }
      ]
    }
  ]
})


export default router;
