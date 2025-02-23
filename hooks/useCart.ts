import { create } from 'zustand';

interface CartStore {
  isCartOpen: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));
