import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/sy',
      name: 'sy',
      component: () => import('./views/sy.vue'),
      children: [{
        path: "syindex",
        component: () => import("@/views/syindex.vue"),

      }, {
        path: "lbtgl",
        component: () => import("@/views/lbtgl.vue")
      }, {
        path: "kcgl",
        component: () => import("@/views/kcgl.vue")
      }, {
        path: "jytt",
        component: () => import("@/views/jytt.vue")
      }, {
        path: "hdlb",
        component: () => import("@/views/hdlb.vue")
      }, {
        path: "mxjs",
        component: () => import("@/views/mxjs.vue")
      }, {
        path: "ddgl",
        component: () => import("@/views/ddgl.vue")
      }, {
        path: "yhgl",
        component: () => import("@/views/yhgl.vue")
      }, {
        path: "cwgl",
        component: () => import("@/views/cwgl.vue")
      }, ]
    }

  ]



})