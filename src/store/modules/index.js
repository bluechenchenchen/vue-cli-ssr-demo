
const state = {
  count: 0,
  bar: ''
}

const fetchBar = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar 组件返回 ajax 数据')
    }, 5000)
  })
}

const mutations = {
  increment (state) {
    state.count++
  },
  'SET_BAR'(state, data) {
    state.bar = data;
  }
}

const actions = {
  increment (context) {
    context.commit('increment')
  },
  fetchBar({ commit }) {
    return fetchBar().then((data) => {
      commit('SET_BAR', data);
    }).catch((err) => {
      console.error(err);
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
