import axios from 'axios'

const state = {
  hotMovie: []
}

const mutations = {
  getMovie (state, payload) {
    switch (payload.tag) {
      case 'hotMovie':
        state.hotMovie = payload.res
        break
    }
  }
}

const actions = {
  // 获取电影资源
  getMovie ({commit}) {
    axios
      .get(`/api/movie/in_theaters?count=8`)
      .then(function (res) {
        console.log(res)
        commit({
          type: 'getMovie',
          tag: 'hotMovie',
          res: res.data
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}
