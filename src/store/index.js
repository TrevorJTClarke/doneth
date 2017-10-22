import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
const debug = false

const state = {
  retried: false,
  metamask: false,
  account: null,
  connected: false,
  conversions: {},
  loading: false,
  notifications: [{
    id: 1,
    text: 'test hello',
    class: 'success'
  }, {
    id: 2,
    text: 'uhoh',
    class: 'error'
  }]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: false, // debug,
  plugins: debug ? [createLogger()] : []
})
