import request from 'superagent'

const actions = {
	loadMore ({commit, state}) {
    request
      .get(`'https://api.douban.com/v2/event/list?loc=108288&start=${state.skip}&count=3`)
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'loadMore',
            res: res.body.event
          })
        }
      })
  }
}

export default {
  actions
}