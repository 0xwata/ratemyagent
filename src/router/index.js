import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Agent from '@/views/Agent'
import New from '@/views/New'
import NotFound from '@/views/NotFound'
// import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent
      // beforeEnter (to, from, next) {
      //   if (store.getters['name'] === '') {
      //     next('/')
      //   } else {
      //     next()
      //   }
      // }
    },
    {
      path: '/reviews/new',
      name: 'NewReview',
      component: New
    },
    { path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
