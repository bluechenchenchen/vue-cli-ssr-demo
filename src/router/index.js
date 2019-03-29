import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/HelloWorld'
// const index = r => require.ensure([], () => r(require('@/components/HelloWorld')))

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { 
        path: '/', 
        name: 'Index',
        component: Index,
        // component: () => import('@/components/HelloWorld')
      },
    ],
  })
}

