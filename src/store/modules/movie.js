import axios from 'axios'

const state = {
  hotMovie: [],
  topMovie: [], // 免费电影
  newMovie: [],
  allMovie: [], // 全部电影
  allMoviePage: 0
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
  },
  loadMoreMovie (state, payload) {
    state.allMoviePage += 10
    state.allMovie = state.allMovie.concat(payload.res)
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
  },
  loadMoreMovie ({commit, state}, payload) {
    let movieType = {
      nowintheater: 'in_theaters',
      watchonline: 'top250',
      latest: 'coming_soon'
    }
    return new Promise(function (resolve, reject) {
      axios
        .get(`/api/movie/${movieType[payload.tag]}?start=${state.allMoviePage}&count=10`)
        .then(function (res) {
          commit({
            type: 'loadMoreMovie',
            res: res.data.subjects
          })
          resolve(res)
        })
        .catch(function (err) {
          console.log(err)
          commit({
            type: 'loadMoreMovie',
            res: err.response
          })
          reject(err)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
