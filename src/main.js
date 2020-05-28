// import Vue from 'vue'
// import App from './App.vue'

// import router from './router'
// import store from './store'
// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from "./store";

Vue.config.productionTip = false
 
export function createApp () {
  const router = createRouter()//创建router实例
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)//vue2.0的写法，render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
  })
  return { app, store, router}
} 