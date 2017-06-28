import Vue from 'vue'
import Router from 'vue-router'
import { Indicator } from 'mint-ui'
import indexList from '@/components/indexList/indexList'
import detail from '@/components/detail/detail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'indexList',
      component: indexList
    },
    {
      path: '/:id&:month',
      name: 'detail',
      component: detail
    }
  ]
})

router.beforeEach((to, from, next) => {
  Indicator.open()
  next()
})

router.afterEach(route => {
  setTimeout(() => {
    Indicator.close()
  }, 300)
})

export default router

