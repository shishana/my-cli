import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
}

const getters = {
}
const mutations = {
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations
})
