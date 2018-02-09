// import request from 'superagent'
// import jsonp from 'superagent-jsonp'
import axios from 'axios'

const state = {
  events: [],
  skip: 0,
  eventItem: {} // 单篇文章的详情
}
const actions = {
  loadMore ({ commit, state }) {
    console.log('test')
    axios
      .get(`/api/event/list?loc=108288&start=${state.skip}&count=3`)
      .then(function (res) {
        commit({
          type: 'loadMore',
          res: res.data
        })
      })
      .catch(function (err) {
        commit({
          type: 'loadMore',
          res: err.response
        })
      })
  },
  /*
   * 获取单篇文章详情
   * 传参 id
   */
  getSingleEvent ({ commit, state }, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/event/${payload.id}`)
        .then(function (res) {
          commit({
            type: 'getSingleEvent',
            res: res.data
          })
        })
        .catch(function (err) {
          console.log(err)
        })
    })
  }
}
const mutations = {
  loadMore (state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res.events)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

export default {
  state,
  actions,
  mutations
}
