<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Navbar />
  <Header />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap");
#app {
  /* ! must be deleted */
  background: url(./assets/waterMarkGroup.png) fixed top center;
  background-size: cover;
}
</style>
