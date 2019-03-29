import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/components/HelloWorld')))

Vue.use(Router)

const routes = [
  { path: '/', name: 'index', component: index },
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router