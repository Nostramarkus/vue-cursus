import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VcButton from '@/components/Button.vue'
Vue.component('VcButton', VcButton)



Vue.use(VueAxios, axios) //https://www.npmjs.com/package/vue-axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
