import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'
import Register from '../views/register/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
