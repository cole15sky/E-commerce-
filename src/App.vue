
<template>
  <div>
    <Navbar />
    <main class="container mx-auto">
      <Product />
      <CartUi />
    </main>
  </div>
</template>

<script setup>
import CartUi from './components/CartUi.vue';
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>
