<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HeroSection from '@/components/HeroSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ConsultationForm from '@/components/ConsultationForm.vue'
import EventsSection from '@/components/EventsSection.vue'
</script>

<template>
  <Header />
  <main class="mt-10">
    <HeroSection />
    <PortfolioSection />
    <ConsultationForm />
    <EventsSection />
  </main>
  <Footer />
</template>
