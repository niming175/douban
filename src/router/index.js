import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Book from '../pages/Book'
import Movie from '../pages/Movie'
import Login from '../pages/Login'
import Default from '../pages/Default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
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
        }
      ]
    }, {
      path: '/login',
      name: Login,
      component: Login
    }

  ]
})
