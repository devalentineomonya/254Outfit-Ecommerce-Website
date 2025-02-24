// stores/compare-store.ts
import { create } from 'zustand';

interface CompareStore {
  isOpen: boolean;
  openCompare: () => void;
  closeCompare: () => void;
  toggleCompare: () => void;
}

export const useCompare = create<CompareStore>((set) => ({
  isOpen: false,
  openCompare: () => set({ isOpen: true }),
  closeCompare: () => set({ isOpen: false }),
  toggleCompare: () => set((state) => ({ isOpen: !state.isOpen })),
}));
