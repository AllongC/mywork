import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
import { Toast } from 'vant'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.interceptors.response.use(res => {
  console.log(res);
  const { statusCode, message } = res.data
  if (statusCode == 401 && message == '用户信息验证失败') {
    Toast.fail(message)
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    router.replace('/login')
  }
  return res
})
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // const nameArr = ['Center', 'Edit']
  // console.log(nameArr.indexOf(to.name));
  if (to.meta.auth) {
    if (localStorage.getItem('token') && localStorage.getItem("userId")) {
      return next()
    } else {
      return router.push('/login')
    }
  } else {
    next();
  }
})
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
