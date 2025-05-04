<script setup>
import NavBar from './NavBar.vue';
import Intro from './Intro.vue';
import Slider from './Slider.vue';
import Footer from './Footer.vue';
import About from './About.vue';
</script>

<template>
  <div class="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    <NavBar />
    <div id="intro" class="scroll-smooth snap-always min-h-screen snap-start">
      <Intro />
    </div>
    <div id="about" class="scroll-smooth snap-always min-h-screen snap-start">
      <About />
    </div>
    <div id="slider" class="scroll-smooth snap-always min-h-screen snap-start">
      <Slider />
    </div>
    <div id="contact" class="scroll-smooth snap-always snap-start">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
</style>
