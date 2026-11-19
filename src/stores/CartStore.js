import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  addItem: '',
  removeItem: '',
  emptyCart: () => set({ cart: [] })
}));