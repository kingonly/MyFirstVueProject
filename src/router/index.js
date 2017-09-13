import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/HomeView'
import DetailView from '../components/DetailsView'
import PostView from '../components/PostView'
import SignInView from '../components/SignInView'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    }
  ]
})
