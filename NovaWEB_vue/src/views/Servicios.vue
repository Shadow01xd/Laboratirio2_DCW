<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import HeroSection from '@/components/HeroSection.vue';
import CallToAction from '@/components/CallToAction.vue';
</script>

<template>
  <Header />
  <main class="mt-10">
    <!-- Hero -->
    <HeroSection />

    <!-- Servicios -->
    <ServicesSection />

    <!-- Call to Action -->
    <CallToAction />
  </main>
  <Footer />
</template>
