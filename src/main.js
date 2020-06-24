import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.name == 'Center') {
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
