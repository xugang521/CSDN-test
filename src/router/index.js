import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../components/news.vue'
import Focus from '../components/focus.vue'
// import News from '../components/news.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/focus',
    name: 'focus',
    component: Focus
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
