<script setup>
import NavBar from './NavBar.vue';
import Intro from './Intro.vue';
import Slider from './Slider.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div id="home">
    <NavBar />
    <div id="about" class="scroll-smooth scroll-mt-6">
      <Intro />
    </div>

    <div id="slider" class="scroll-smooth scroll-mt-6">
      <Slider />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
