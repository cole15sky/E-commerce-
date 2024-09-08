<template>
  <div>

    <div
     v-if="products.length" class="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-8 mt-20">
      <div v-for="product in products" :key="product.id"
       class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       {{console.log(`Image for image id ${product.id} is ${product.images[0]}`)}}
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            :data-id="product.id" 
            :src=getImage(product.images[0]) 
            :alt="product.title" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {{ product.title }}
            </h5>
          </a>
          <div
           class="flex items-center mt-2.5 mb-5">
            <div
             class="flex items-center space-x-1 rtl:space-x-reverse">


              <!-- Star ratings -->
              <svg
               class="w-5 h-5 text-yellow-400" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                <path d="M10.979 1.686c.437-1.098 1.91-1.098 2.347 0l2.056 5.166 5.384.78c1.201.174 1.681 1.65.81 2.497l-3.898 3.8.92 5.363c.211 1.232-1.083 2.165-2.202 1.586l-4.81-2.53-4.81 2.53c-1.119.579-2.413-.354-2.202-1.586l.92-5.363-3.898-3.8c-.872-.847-.391-2.323.81-2.497l5.384-.78L10.979 1.686z"/>
              </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Loading products...
    </div>
  </div>
</template>

<script setup>
import DefaultImage from '../../../E-Commerce/src/assets/Hoodie.jpg';
import { ref, onMounted } from 'vue';

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    
    products.value = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error.message);
  }
};

onMounted(fetchProducts);

const getImage = (imagePath) => {
  
  
  if (imagePath.includes('[') || imagePath.includes(']')){
    return DefaultImage;
  } else {
    return imagePath;
  }
}

</script>

<style scoped>
</style>
