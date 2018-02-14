// 图书接口
import axios from 'axios'

const state = {
  novel: []

}
const mutations = {
  getBook (state, payload) {
    switch (payload.tag) {
      case 'novel':
        state.novel = payload.res
        break
    }
  }
}
const actions = {
  getBook ({ commit }) {
    // 虚构类
    axios
      .get('/api/book/search?q=虚构类&count=8')
      .then(function (res) {
        console.log(res)
        commit({
          type: 'getBook',
          tag: 'novel',
          res: res.data
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
