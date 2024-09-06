<template>
    <div>
        <svg
    @click="getData"
    class="absolute top-6 right-12"
    
    style="height: 50px; width: 50px; cursor: pointer;"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
    </svg>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="n in 16" :key="n"
        class="mt-20 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg"
            alt="Burger"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Spicy KFC Ham Burger with double cheese
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <!-- Star ratings -->
              <svg class="w-5 h-5 text-yellow-400" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                <path d="M10.979 1.686c.437-1.098 1.91-1.098 2.347 0l2.056 5.166 5.384.78c1.201.174 1.681 1.65.81 2.497l-3.898 3.8.92 5.363c.211 1.232-1.083 2.165-2.202 1.586l-4.81-2.53-4.81 2.53c-1.119.579-2.413-.354-2.202-1.586l.92-5.363-3.898-3.8c-.872-.847-.391-2.323.81-2.497l5.384-.78L10.979 1.686z"/>
              </svg>
              <!-- Repeat the stars as needed -->
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
</div>

  </template>
  
  <script setup>

  
  </script>
  
  <style scoped>
  </style>
  