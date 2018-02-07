import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  // 这里的mutations是固定的写法，意思是改变的
  // 我们要改变state的数值的方法，必须写在mutations里。
  mutatiom: {
    add (state) {
      state.count += 1
    },
    reduce (state) {
      state.count -= 1
    }
  }
})
