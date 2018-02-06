import Vue from 'vue'

import router from '@/router'
import App from '@/components/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router
})
