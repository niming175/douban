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
  * 图书标签：
  * 作者/ 出版社名 / 页数 / 装订类型 / 售价 / 出版时间
  */
  subjectTag: state => {
    if (state.classify === 'movie') {
      return `${state.subject.year} /
              ${state.subject.genres.join(' / ')} /
              ${state.subject.directors.map(item => item.name).join(' / ')} /
              ${state.subject.casts.map(item => item.name).join(' / ')} /
              ${state.subject.countries.join(' / ')}`
    } else if (state.classify === 'book') {
      return `${state.subject.author.join(' / ')} /
              ${state.subject.translator.join(' / ')} /
              ${state.subject.publisher} /
              ${state.subject.binding} /
              ${state.subject.pages} /
              ${state.subject.price} /
              ${state.subject.pubdate}`
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
        case 'book':
          axios
            .get(`/api/${payload.classify}/${payload.id}`)
            .then(function (res) {
              console.log(res)
              commit({
                type: 'getSingleSubject',
                classify: payload.classify,
                res: res.data
              })
              resolve(res)
            })
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
