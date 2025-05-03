<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import logo from '@/assets/img/d8624d2c-5598-49f5-a392-f666ed71d940.png'

const route = useRoute()

const rutas = ['/', '/servicios', '/sobre-nosotros']

const clasesRuta = computed(() => {
  return rutas.reduce((acc, path) => {
    acc[path] = route.path === path ? 'text-violet-600 font-bold' : 'text-gray-900 font-semibold hover:text-violet-600 transition-colors duration-300'
    return acc
  }, {})
})
</script>

<template>
  <header class="fixed w-full top-0 z-50 bg-white/90 shadow-md transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4">
      <nav class="flex justify-between items-center py-4">
        <RouterLink to="/" class="flex items-center text-violet-600 font-bold text-2xl no-underline hover:text-red-400">
          <img :src="logo" alt="Logo" class="mr-2 w-10 h-10" />
          <span>Novaweb Designers</span>
        </RouterLink>
        <ul class="hidden md:flex space-x-8">
          <li><RouterLink to="/" :class="clasesRuta['/']">Inicio</RouterLink></li>
          <li><RouterLink to="/servicios" :class="clasesRuta['/servicios']">Servicios</RouterLink></li>
          <li><RouterLink to="/sobre-nosotros" :class="clasesRuta['/sobre-nosotros']">Sobre Nosotros</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
