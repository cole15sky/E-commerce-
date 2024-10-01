
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),

  actions: {
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
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
    clearCart() {
      this.cartItems = [];
    },
  },

  getters: {
    cartTotal: (state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    totalItems: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),
  }
});
