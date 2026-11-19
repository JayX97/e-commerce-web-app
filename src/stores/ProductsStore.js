import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: [],
  fillProducts: (products) => set({ products })
}));