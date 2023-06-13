<template>
  <Navbar />
  <div class="bg-grey-300 p-32">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
</script>