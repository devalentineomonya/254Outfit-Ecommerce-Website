import { create } from "zustand";

interface LayoutState {
  layout: "grid" | "list";
  setGridLayout: () => void;
  setListLayout: () => void;
}

export const useLayout = create<LayoutState>((set) => ({
  layout: "grid",
  setGridLayout: () => set({ layout: "grid" }),
  setListLayout: () => set({ layout: "list" }),
}));
