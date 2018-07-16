import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  }
]


export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
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
    children: [{ path: 'index', component: _import('mdviews/dangerManage/index'), name: 'dangerManage', meta: { title: '风险点管理', icon: 'my-guanli' } }]
  },
  {
    path: '/process',
    component: Layout,
    redirect: 'noredirect',
    children: [{ path: 'index', component: _import('mdviews/process/index'), name: 'process', meta: { title: '风险处理', icon: 'my-chuli' } }]
  },
  {
    path: '/inspect',
    component: Layout,
    redirect: 'noredirect',
    children: [{ path: 'index', component: _import('mdviews/inspect/index'), name: 'inspect', meta: { title: '风险核查', icon: 'my-hecha' } }]
  },
  {
    path: '/report',
    component: Layout,
    redirect: 'noredirect',
    children: [{ path: 'index', component: _import('mdviews/report/index'), name: 'report', meta: { title: '风险报告', icon: 'my-baogao' } }]
  },

  { path: '*', redirect: '/404', hidden: true }
]
