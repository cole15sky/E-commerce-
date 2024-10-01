<template>
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>
  
      <!-- Check if the cart has items -->
      <div v-if="cartItems && cartItems.length > 0">
        <table class="table-auto w-full mb-6">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left">Product</th>
              <th class="px-4 py-2 text-left">Image</th>
              <th class="px-4 py-2 text-left">Quantity</th>
              <th class="px-4 py-2 text-left">Price</th>
              <th class="px-4 py-2 text-left">Total</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <!-- Display the product title -->
              <td class="px-4 py-2">{{ item.title }}</td>
  
              <!-- Display the product image -->
              <td class="px-4 py-2">
                <img :src="item.images[0]" :alt="item.title" class="w-16 h-16 object-cover rounded-lg" />
              </td>
  
              <!-- Display the quantity controls -->
              <td class="px-4 py-2">
                <div class="flex items-center">
                  <button @click="decreaseQuantity(item)" class="px-2 py-1 text-white bg-red-500 rounded-lg">-</button>
                  <span class="px-4">{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item)" class="px-2 py-1 text-white bg-green-500 rounded-lg">+</button>
                </div>
              </td>
  
              <!-- Display the product price -->
              <td class="px-4 py-2">${{ item.price }}</td>
  
              <!-- Display the total price for the item (price * quantity) -->
              <td class="px-4 py-2">${{ item.price * item.quantity }}</td>
  
              <!-- Remove button -->
              <td class="px-4 py-2">
                <button @click="removeFromCart(item.id)" class="px-4 py-2 text-white bg-red-700 hover:bg-red-800 rounded-lg">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
  
        <!-- Cart summary (total items and total price) -->
        <div class="text-right">
          <p class="text-lg font-bold">Total Items: {{ totalItems }}</p>
          <p class="text-lg font-bold">Total Price: ${{ cartTotal }}</p>
          <button @click="clearCart" class="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
            Clear Cart
          </button>
        </div>
      </div>
  
      <!-- Display if the cart is empty -->
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '@/stores/CartStore';
  
  const cartStore = useCartStore(); // Access the Pinia cart store
  
  // Computed properties to access cart items, total price, and total items from the store
  const cartItems = cartStore.cartItems;
  const cartTotal = cartStore.cartTotal;
  const totalItems = cartStore.totalItems;
  
  // Action to increase the quantity of a product in the cart
  const increaseQuantity = (item) => {
    cartStore.addToCart(item); // Add one more of this product
  };
  
  // Action to decrease the quantity of a product in the cart
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cartStore.removeFromCart(item.id); // Remove the item if quantity is 1
    }
  };
  
  // Action to remove an item from the cart
  const removeFromCart = (productId) => {
    cartStore.removeFromCart(productId);
  };
  
  // Action to clear the entire cart
  const clearCart = () => {
    cartStore.clearCart();
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    border-bottom: 1px solid #ddd;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  