<template>
    <div class="search-box">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search for products..."
        @input="filterProducts"
        class="border p-2 rounded"
      />
      <div v-if="errorMessage" class="text-red-600">{{ errorMessage }}</div>
      <div v-if="filteredProducts.length">
        <h3>Search Results:</h3>
        <ul>
          <li v-for="product in filteredProducts" :key="product.id">
            <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useCartStore } from '@/stores/CartStore.js'; // Adjust the path as necessary
  
  const store = useCartStore();
  const searchTerm = ref('');
  const filteredProducts = ref([]);
  const errorMessage = ref('');
  
  const filterProducts = () => {
    const results = store.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  
    filteredProducts.value = results;
  
    if (results.length === 0 && searchTerm.value) {
      errorMessage.value = 'Items not found';
    } else {
      errorMessage.value = '';
    }
  };
  
  // Optional: Automatically filter as user types
  watch(searchTerm, filterProducts);
  </script>
  
  <style scoped>
  .search-box {
    margin-bottom: 1rem;
  }
  </style>
  