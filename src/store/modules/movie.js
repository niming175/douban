import axios from 'axios'

const state = {
  hotMovie: [],
  topMovie: [], // 免费电影
  newMovie: []
}

const mutations = {
  getMovie (state, payload) {
    switch (payload.tag) {
      case 'hotMovie':
        state.hotMovie = payload.res
        break
      case 'topMovie':
        state.topMovie = payload.res
        break
      case 'newMovie':
        state.newMovie = payload.res
        break
    }
  }
}

const actions = {
  // 获取电影资源
  getMovie ({commit}) {
    let arr = [{
      api: '/api/movie/top250?count=8',
      tag: 'topMovie'
    }, {
      api: '/api/movie/in_theaters?count=8',
      tag: 'hotMovie'
    }, {
      api: '/api/movie/coming_soon?count=8',
      tag: 'newMovie'
    }]
    arr.forEach(function (item) {
      axios
        .get(item.api)
        .then(function (res) {
          console.log(res)
          commit({
            type: 'getMovie',
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
