import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Auth from '@/components/Auth'
import Create from '@/components/Create'
import Navbar from '@/components/Navbar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/registration',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/create',
      name: 'Create',
      components: Create
    }
  ]
})
