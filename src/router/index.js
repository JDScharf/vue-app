import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterUser from '../components/RegisterUser.vue'
import AuthenticateUser from '../components/AuthenticateUser.vue'
import GetSignalData from '../components/GetSignalData.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/RegisterUser',
    name: 'RegisterUser',
    component: RegisterUser
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AuthenticateUser',
    name: 'AuthenticateUser',
    component: AuthenticateUser
  },
  {
    path: '/GetSignalData',
    name: 'GetSignalData',
    component: GetSignalData
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
