import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities.js'
import search from './modules/search' // 搜索接口
import subject from './modules/subject' // 搜索后查看详情接口
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities,
    search,
    subject
  }
})
