import { create } from 'zustand';

interface RecentlyViewedStore {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
}

export const useRecentlyViewed = create<RecentlyViewedStore>((set) => ({
  isVisible: false,
  show: () => set({ isVisible: true }),
  hide: () => set({ isVisible: false }),
}));
