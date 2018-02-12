// 搜索接口
import axios from 'axios'
const state = {
  res_movie: [], // 电影
  res_book: [], // 书籍
  res_music: [] // 音乐
}

const mutations = {
  search (state, payload) {
    switch (payload.tag) {
      case 'movie':
        console.log(payload.res)
        state.res_movie = payload.res
        break
      default:
        console.log('have error')
    }
  }
}

const actions = {
  search ({ commit }, payload) {
    axios
      .get(`/api/movie/search?q=${payload.word}&count=3`)
      .then(function (res) {
        console.log(res)
        commit({
          type: 'search', // 类型
          tag: 'movie', // 标签
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
