// 图书接口
import axios from 'axios'

const state = {
  novel: [],
  reality: []

}
const mutations = {
  getBook (state, payload) {
    switch (payload.tag) {
      case 'novel':
        state.novel = payload.res
        break
      case 'reality':
        state.reality = payload.res
        break
    }
  }
}
const actions = {
  getBook ({ commit }) {
    let arr = [{
      api: '/api/book/search?q=虚构类&count=8',
      tag: 'novel'
    }, {
      api: '/api/book/search?q=非虚构类&count=8',
      tag: 'reality'
    }]
    arr.forEach(function (item) {
      axios
        .get(item.api)
        .then(function (res) {
          console.log(res)
          commit({
            type: 'getBook',
            tag: item.tag,
            res: res.data
          })
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
