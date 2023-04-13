import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/Home')
    },
    {
      path: '/list',
      component: () => import('../components/List')
    },
    { 
      path: '/demo',
      component: () => import('../components/Demo')
    },
    {
      path: '/history',
      component: () => import('../components/History')
    },
     
    {
      path: '/hello',
      component: () => import('../components/HelloWorld')
    }
  ]
})

export default router
