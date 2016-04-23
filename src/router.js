import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Stats from './components/Stats'
import Career from './components/Career'
import Shoes from './components/Shoes'

Vue.use(VueRouter)

class Router extends VueRouter {
  constructor () {
    super({
      hashbang: false,
      history: true,
      abstract: false,
      saveScrollPosition: false,
      transitionOnLoad: false
    })
    this.map({
      '*': {
        name: 'default',
        component: Home
      },
      '/': {
        name: 'home',
        component: Home
      },
      '/stats': {
        name: 'stats',
        component: Stats
      },
      '/career': {
        name: 'career',
        component: Career
      },
      '/shoes': {
        name: 'shoes',
        component: Shoes
      }
    })
  }
}

export default new Router()
