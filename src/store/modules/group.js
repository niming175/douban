import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  group: []
}
const mutations = {
  getGroup (state, payload) {
    state.group = payload.res
  }
}
const actions = {
  getGroup ({ commit }) {
    request
      .get(`https://m.douban.com/j/group/rec_groups?start=0&count=30&ck=PzYB&for_mobile=1`)
      .use(jsonp)
      .then(res => {
        console.log(res)
        if (res) {
          console.log(res)
          commit({
            type: 'getGroup',
            res: res
          })
        } else {
          commit({
            type: 'getGroup',
            res: 'error'
          })
        }
      })
  }
}
export default {
  state,
  mutations,
  actions
}
