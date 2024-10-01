
<template>
  <div>
    <Navbar />
    <main class="container mx-auto">
      <ApiCall />
      <CartUi />
    </main>
  </div>
</template>

<script setup>
import CartUi from './components/CartUi.vue';
import Navbar from './components/Navbar.vue';
import ApiCall from './components/ApiCall.vue';
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>
