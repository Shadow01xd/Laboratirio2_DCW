import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Servicios from '@/views/Servicios.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Home },
  { path: '/servicios', name: 'Servicios', component: Servicios },
  { path: '/sobre-nosotros', name: 'SobreNosotros', component: SobreNosotros },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
