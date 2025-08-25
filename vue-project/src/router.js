// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Directives_vbind from './components/day02_0825/Directives_vbind.vue'
import Directives_vif from './components/day02_0825/Directives_vif.vue'
import Directives_vshow from './components/day02_0825/Directives_vshow.vue'

const routes = [
  { path: '/vbind', component: Directives_vbind },
  { path: '/vif', component: Directives_vif },
  { path: '/vshow', component: Directives_vshow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router