import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Center from '@/views/personal/Center'
import Edit from '@/views/personal/Edit'
import Focus from '@/views/personal/Focus'
import Text from '@/views/personal/Text'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/center',
    name: 'Center',
    component: Center,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      auth: true
    }
  },
  {
    path: '/focus',
    name: 'Focus',
    component: Focus,
    meta: {
      auth: true
    }
  },
  {
    path: '/text',
    name: 'Text',
    component: Text,
  }
]

const router = new VueRouter({
  routes
})

export default router
