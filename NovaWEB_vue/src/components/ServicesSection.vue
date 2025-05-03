<script setup>
import { ref, computed } from 'vue'
import icon1 from '@/assets/icon/diseño web.png'
import icon2 from '@/assets/icon/Desarrollo a medida.png'
import icon3 from '@/assets/icon/Optimizacion SEO.png'
import icon4 from '@/assets/icon/mantenimiento.png'
import icon5 from '@/assets/icon/marketing_digital.png'
import icon6 from '@/assets/icon/e-commerce.png'

const filtro = ref('') 

// array de los servicios 
const servicios = [
  { id: 1, titulo: 'Diseño Web', descripcion: 'Diseñamos sitios web modernos y funcionales que representan la esencia de tu negocio.', icono: icon1 },
  { id: 2, titulo: 'Desarrollo a Medida', descripcion: 'Construimos soluciones personalizadas adaptadas a las necesidades de cada cliente.', icono: icon2 },
  { id: 3, titulo: 'Optimización SEO', descripcion: 'Mejoramos la visibilidad de tu sitio en los motores de búsqueda para aumentar el tráfico.', icono: icon3 },
  { id: 4, titulo: 'Mantenimiento', descripcion: 'Brindamos soporte continuo para garantizar que tu sitio funcione sin problemas.', icono: icon4 },
  { id: 5, titulo: 'Marketing Digital', descripcion: 'Implementamos estrategias avanzadas de marketing para aumentar la conversión y visibilidad.', icono: icon5 },
  { id: 6, titulo: 'E-commerce', descripcion: 'Desarrollamos plataformas de comercio electrónico personalizadas para maximizar tus ventas.', icono: icon6 }
]

const serviciosFiltrados = computed(() => {
  return servicios.filter(s => s.titulo.toLowerCase().includes(filtro.value.toLowerCase()))
})
</script>

<template>
  <section id="servicios" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl text-center text-violet-600 mb-12 font-bold">Nuestros Servicios</h2>
      <p class="text-center text-gray-700 mb-12">En Novaweb Designers, nos especializamos en crear soluciones innovadoras que se adaptan a cada cliente.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="servicio in serviciosFiltrados"
          :key="servicio.id"
          class="bg-gray-50 p-8 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img :src="servicio.icono" :alt="servicio.titulo" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-2xl mb-4">{{ servicio.titulo }}</h3>
          <p>{{ servicio.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
