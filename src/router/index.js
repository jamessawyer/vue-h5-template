import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@pages/home'
import About from '@pages/about'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

// 拦截逻辑
router.beforeEach(async (to, from, next) => {
  next()
})

export default router
