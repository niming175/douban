// 用户信息
// import axios from 'axios'

const state = {
  login_email: '',
  login_token: '',
  login_name: '',
  temp_email: '',
  temp_token: '',
  temp_name: ''
}

const getters = {
  currentUser: state => {
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}

const mutations = {
  updateInfo (state, payload) {
    console.log(payload)
    switch (payload.name) {
      case 'email':
        state.temp_email = payload.value
        break
      case 'token':
        state.temp_token = payload.value
        break
    }
  },
  getUserInfo (state) {
    state.login_email = localStorage.getItem('email')
    state.login_token = localStorage.getItem('token')
    state.login_name = localStorage.getItem('name')
  },
  setUser (state, payload) {
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.name
  }
}
const actions = {
  // 登陆方法, 因为接口不能用，暂时写个假的
  login ({ commit }, payload) {
    // return new Promise(function (resolve, reject) {
    // 登陆成功后，将信息填充到浏览器的本地存储
    localStorage.setItem('email', payload.email)
    localStorage.setItem('token', payload.token)
    localStorage.setItem('name', payload.email)
    commit({
      type: 'setUser',
      email: payload.email,
      token: payload.token,
      name: 'niming175'
    })
    // })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
