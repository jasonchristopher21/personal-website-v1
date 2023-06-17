<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import About from "./components/About.vue"
import Hero from './components/Hero.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="bg-grey-300 px-32">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
  <Footer />
</template>

<style lang="scss">

@font-face {
    font-family: "Gilroy";
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/Gilroy-ExtraBold.otf") format("opentype");
}

@font-face {
    font-family: "Metropolis";
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: url("@/fonts/Metropolis-Regular.otf") format("opentype");
}

@font-face {
    font-family: "Metropolis";
    font-weight: 500;
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/Metropolis-Medium.otf") format("opentype");
}

@font-face {
    font-family: "Metropolis";
    font-weight: 600;
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/Metropolis-SemiBold.otf") format("opentype");
}

@font-face {
    font-family: "Metropolis";
    font-weight: 700;
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/Metropolis-Bold.otf") format("opentype");
}

@font-face {
    font-family: "Metropolis";
    font-weight: 800;
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/Metropolis-ExtraBold.otf") format("opentype");
}

@font-face {
    font-family: "Roboto Mono";
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/RobotoMono-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Roboto Mono";
    font-weight: 500;
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/RobotoMono-Medium.ttf") format("truetype");
}

@font-face {
    font-family: "Roboto Mono";
    font-weight: 600;
    font-display: swap;
    font-style: normal;
    src:url("@/fonts/RobotoMono-SemiBold.ttf") format("truetype");
}

@font-face {
    font-family: "Roboto Mono";
    font-weight: 700;
    font-display: swap;
    font-style: normal;
    src: url("@/fonts/RobotoMono-Bold.ttf") format("truetype");
}

</style>
