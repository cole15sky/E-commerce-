<template>
  <div>
    <Navbar/>
    <ApiCall/>
    <CartUi />
  </div>
</template>

<script setup>
import CartUi from './components/CartUi.vue';
import Navbar from './components/Navbar.vue';
import ApiCall from './components/ApiCall.vue';
</script>

<style scoped>
</style>