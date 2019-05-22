import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/form'
    },
    {
      path: '/components',
      name: 'components',
      component: () => import( /* webpackChunkName: "components" */ './views/Components.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import( /* webpackChunkName: "form" */ './views/Form.vue')
    }
  ]
})