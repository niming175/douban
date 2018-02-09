import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Book from '../pages/Book'
import Movie from '../pages/Movie'
import Login from '../pages/Login'
import Default from '../pages/Default'
import Detail from '../pages/Detail' // 文章详情页

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Default,
    children: [{
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/book',
      name: 'Book',
      component: Book
    }, {
      path: '/movie',
      name: 'Movie',
      component: Movie
    }, {
      path: 'detail/:id',
      name: 'Detail',
      component: Detail
    }]
  }, {
    path: '/login',
    name: Login,
    component: Login
  }]
})
