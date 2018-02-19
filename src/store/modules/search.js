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
        state.res_movie = payload.res
        break
      case 'book':
        state.res_book = payload.res
        break
      case 'music':
        state.res_music = payload.res
        break
      default:
        console.log('have error')
    }
  }
}

const actions = {
  search ({ commit }, payload) {
    console.log(payload)
    axios
      .get(`/api/${payload.tag}/search?q=${payload.word}&count=3`)
      .then(function (res) {
        console.log(res)
        commit({
          type: 'search', // 类型
          tag: payload.tag, // 标签
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
