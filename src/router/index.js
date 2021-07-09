import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/404.vue'
import Skills from '../views/Skills.vue'
import Tools from '../views/Tools.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'Not Found',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
