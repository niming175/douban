import axios from 'axios'
const state = {
  subject: {},
  classify: ''
}

const getters = {
  /*
  * subject的标签集合
  * 格式：
  * 分钟数 / 类型1 / 类型2 / 导演A / 导演B / 演员A / 演员B / 上映时间（上映地区）上映
  */
  subjectTag: state => {
    if (state.classify === 'movie') {
      return `${state.subject.year} /
              ${state.subject.genres.join(' / ')} /
              ${state.subject.directors.map(item => item.name).join(' / ')} /
              ${state.subject.casts.map(item => item.name).join(' / ')} /
              ${state.subject.countries.join(' / ')}`
    }
  }
}
const mutations = {
  getSingleSubject (state, payload) {
    state.classify = payload.classify
    state.subject = payload.res
  }
}

const actions = {
  getSingleSubject ({commit}, payload) {
    return new Promise(function (resolve, reject) {
      switch (payload.classify) {
        case 'movie':
          console.log(payload)
          axios
            .get(`/api/${payload.classify}/subject/${payload.id}`)
            .then(function (res) {
              console.log(res)
              commit({
                type: 'getSingleSubject',
                classify: payload.classify,
                res: res.data
              })
              resolve(res)
            })
          break
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
