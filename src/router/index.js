import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [{
    path: '/login',
    component: _import('login/index'),
    hidden: true
  },
  {
    path: '/authredirect',
    component: _import('login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: _import('errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: _import('errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: {
        title: '首页',
        icon: 'dashboard',
        noCache: true
      }
    }]
  }
]


export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  // {
  //   path: '/dangerchart',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [{ path: 'index', component: _import('mdviews/danger/danger'), name: 'danger', meta: { title: '风险点分布', icon: 'my-fenbu' } }]
  // },
  {
    path: '/manage',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('mdviews/dangerManage/index'),
      name: 'dangerManage',
      meta: {
        title: '风险信息库管理',
        icon: 'my-guanli'
      }
    }]
  },
  {
    path: '/process',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('mdviews/process/index'),
      name: 'process',
      meta: {
        title: '风险告警处理',
        icon: 'my-chuli'
      }
    }]
  },
  {
    path: '/inspect',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('mdviews/inspect/index'),
      name: 'inspect',
      meta: {
        title: '风险跟踪管理',
        icon: 'my-hecha'
      }
    }]
  },
  {
    path: '/shenpi',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds1',
      meta: {
        title: '审批备案存档',
        icon: 'cundang',
        noCache: true
      }
    }]
  },
  {
    path: '/searchs',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds2',
      meta: {
        title: '综合统计查询',
        icon: 'chaxun',
        noCache: true
      }
    }]
  },
  {
    path: '/callstat',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds3',
      meta: {
        title: '风险告警统计',
        icon: 'gaojing',
        noCache: true
      }
    }]
  },
  {
    path: '/follow',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds4',
      meta: {
        title: '风险跟踪处理统计',
        icon: 'genzong',
        noCache: true
      }
    }]
  },
  {
    path: '/stat',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('mdviews/report/edit'),
      name: 'report1',
      meta: {
        title: '统计报告',
        icon: 'my-baogao'
      }
    }]
  },
  {
    path: '/report',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('mdviews/report/index'),
      name: 'report5',
      meta: {
        title: '风险智能评估报告',
        icon: 'baogao'
      }
    }]
  },
  {
    path: '/model',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds6',
      meta: {
        title: '报告模板管理',
        icon: 'moban',
        noCache: true
      }
    }]
  },
  {
    path: '/qx',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds7',
      meta: {
        title: '权限管理',
        icon: 'quanxian',
        noCache: true
      }
    }]
  },
  {
    path: '/logs',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds8',
      meta: {
        title: '日志管理',
        icon: 'rizhi',
        noCache: true
      }
    }]
  },
  {
    path: '/database',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds9',
      meta: {
        title: '数据管理',
        icon: 'shuju',
        noCache: true
      }
    }]
  },
  {
    path: '/settings',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('dashboard/index'),
      name: 'asds00',
      meta: {
        title: '字典项参数配置',
        icon: 'zidianxiang',
        noCache: true
      }
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
