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
    path:"/login",
    component: (resolve) =>require(['@/views/Admin/Login'],resolve)
  },
  {
    path: '/index',
    component: Index,
    children:[
      {
        path: '/',
        component: (resolve) =>require(['@/views/Blog'],resolve)
      },
      {
        path: '/technology',
        component: (resolve) =>require(['@/views/Technology'],resolve)
      },
      {
        path: '/life',
        component: (resolve) =>require(['@/views/Life'],resolve)
      },
      {
        path: '/aboutme',
        component: (resolve) =>require(['@/views/AboutMe'],resolve)
      },
      {
        path:"/admin",
        redirect: "/login",
        children: [
          {
            path:'/index',
            component: (resolve) =>require(['@/views/Admin/Index'],resolve)
          }
        ]
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
