// import request from 'superagent'
// import jsonp from 'superagent-jsonp'
import axios from 'axios'

const state = {
  events: [],
  skip: 0
}
const actions = {
  loadMore ({commit, state}) {
    console.log('test')
    axios
      .get(`/api/event/list?loc=108288&start=${state.skip}&count=3`)
      .then(function (res) {
        commit({
          type: 'loadMore',
          res: res.data
        })
      })
      .catch(function (err) { console.log(err) })
  }
}
const mutations = {
  loadMore (state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res.events)
  }
}

export default {
  state,
  actions,
  mutations
}
