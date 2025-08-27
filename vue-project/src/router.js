// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Directives_vbind from './components/day02_0825/Directives_vbind.vue'
import Directives_vif from './components/day02_0825/Directives_vif.vue'
import Directives_vshow from './components/day02_0825/Directives_vshow.vue'
import Directives_vfor from './components/day02_0825/Directives_vfor.vue'
import Events_click from './components/day02_0825/Events_click.vue'
import Events_input from './components/day02_0825/Events_input.vue'
import Events_mousemove from './components/day02_0825/Events_mousemove.vue'
import Methods from './components/day03_0826/Methods.vue'
import E_Modifiers from './components/day03_0826/E_Modifiers.vue'
import Form from './components/day04_0827/Form.vue'
import Form_vmodel from './components/day04_0827/Form_vmodel.vue'
import Class_bind from './components/day04_0827/Class_bind.vue'
import Computed from './components/day04_0827/Computed.vue'
import Watchers from './components/day04_0827/Watchers.vue'
import WebDesign_b1 from './components/webDisign/webDesign_b1.vue'

const routes = [
  { path: '/vbind', component: Directives_vbind },
  { path: '/vif', component: Directives_vif },
  { path: '/vshow', component: Directives_vshow },
  { path: '/vfor', component: Directives_vfor },
  { path: '/click', component: Events_click },
  { path: '/input', component: Events_input },
  { path: '/mousemove', component: Events_mousemove },
  { path: '/methods', component: Methods },
  { path: '/methods', component: Methods },
  { path: '/modifiers', component: E_Modifiers },
  { path: '/form', component: Form },
  { path: '/vmodel', component: Form_vmodel },
  { path: '/classbind', component: Class_bind },
  { path: '/computed', component: Computed },
  { path: '/watchers', component: Watchers },
  { path: '/webdesign_b1', component: WebDesign_b1 },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router