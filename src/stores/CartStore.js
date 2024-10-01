import { defineStore } from 'pinia';

// Define the key to use for localStorage
const CART_STORAGE_KEY = 'cartItems';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [], // Load from localStorage or initialize as an empty array
  }),

  actions: {
    // Add product to cart
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({
          ...product,
          quantity: 1,
        });
      }
      this.saveCart(); // Save the updated cart to localStorage
    },

    // Remove product from cart
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
      this.saveCart(); // Save the updated cart to localStorage
    },

    // Clear the entire cart
    clearCart() {
      this.cartItems = [];
      this.saveCart(); // Save the updated cart to localStorage
    },

    // Save cart items to localStorage
    saveCart() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    },
  },

  getters: {
    // Calculate total price of all items in the cart
    cartTotal: (state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),

    // Calculate total number of items in the cart
    totalItems: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),
  },
});
