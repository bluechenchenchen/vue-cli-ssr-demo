import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// export default new Vuex.Store({
//   modules: {
//     index,
//   },
//   strict: debug,
// })
export function createStore() {
  return new Vuex.Store({
    modules: {
      index,
    },
    strict: debug,
  });
}