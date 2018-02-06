import Vue from 'vue'
import Router from 'vue-router'

import Languages from '@/components/Languages'
import Developers from '@/components/Developers'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'languages',
      path: '/',
      component: Languages
    },

    {
      name: 'developers',
      path: '/developers/:language',
      component: Developers,
      props: true
    }
  ]
})

export default router
