<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TeamSection from '@/components/TeamSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import CallToAction from '@/components/CallToAction.vue'
import Historia from '@/components/historia.vue'
</script>

<template>
  <Header />
  <main class="mt-10">
    
    <HeroSection />

    <!-- Nuestra Historia -->
    <Historia />

    <!-- Equipo -->
    <TeamSection />

    <!-- CTA -->
    <CallToAction />
  </main>
  <Footer />
</template>
