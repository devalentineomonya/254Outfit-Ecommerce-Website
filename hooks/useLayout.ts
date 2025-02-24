import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LayoutState {
  layout: "grid" | "list";
  setGridLayout: () => void;
  setListLayout: () => void;
}

export const useLayout = create<LayoutState>()(
  persist(
    (set) => ({
      layout: "grid",
      setGridLayout: () => set({ layout: "grid" }),
      setListLayout: () => set({ layout: "list" }),
    }),
    {
      name: "layout-preference",
    }
  )
);
