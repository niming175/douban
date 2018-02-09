import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities
  }
})
