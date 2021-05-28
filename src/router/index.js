import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/HomeIndex'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
    children:[
      {
        path: '/',
        component: (resolve) =>require(['@/views/Blog'],resolve)
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
