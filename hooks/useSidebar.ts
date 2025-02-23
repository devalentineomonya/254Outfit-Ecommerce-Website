import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
