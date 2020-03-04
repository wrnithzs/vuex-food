import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateMenu from '../components/CreateMenu.vue'
import EditMenu from '../components/EditMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateMenu',
    component: CreateMenu
  },
  {
    path: '/edit:id',
    name: 'EditMenu',
    component: EditMenu
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
