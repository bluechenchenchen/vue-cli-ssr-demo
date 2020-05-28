import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/HelloWorld'
// const Index  = () => import('../components/HelloWorld')
import About from '@/components/About'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { 
        path: '/', 
        name: 'Index',
        component: Index,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "index" */ '@/components/HelloWorld')
        // component: () => import('@/components/HelloWorld')
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ],
  })
}

