import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior( to, from, savedPosition){
    return {

    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ],
})

export default router
