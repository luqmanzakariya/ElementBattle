import Vue from 'vue'
import Router from 'vue-router'
import Test from './views/Test.vue'
import Landingpage from './views/Landingpage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: Landingpage
    },
    {
      path: '/play/:id',
      name: 'play',
      component: Test
    }
  ]
})
