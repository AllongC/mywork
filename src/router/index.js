import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Detail from '@/views/Detail'
import MoreComment from '@/views/MoreComment'
import Search from '@/views/Search'

import Login from '@/views/Login'
import Register from '@/views/Register'

import Center from '@/views/personal/Center'
import Edit from '@/views/personal/Edit'
import Focus from '@/views/personal/Focus'
import Collect from "@/views/personal/Collect"
import MyComment from "@/views/personal/MyComment"

import Text from '@/views/personal/Text'

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/morecomment/:id',
    name: 'MoreComment',
    component: MoreComment
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
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
    path: '/collect',
    name: 'Collect',
    component: Collect,
    meta: {
      auth: true
    }
  },
  {
    path: '/mycomment',
    name: 'MyComment',
    component: MyComment,
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
