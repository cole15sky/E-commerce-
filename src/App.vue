<template>
  <div>
    <Navbar />
    <main class="container mx-auto">
      <router-view></router-view> <!-- This will render the component based on the route -->
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'; // Navbar stays at the top
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>
