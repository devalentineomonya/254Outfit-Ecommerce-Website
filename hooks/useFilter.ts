import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  filterSchema,
  type FilterFormValues,
} from "@/screens/shop/widgets/filterConfig";

type FilterState = {
  filters: FilterFormValues;
  errors: Record<string, string>;
  isMobileFilterOpen: boolean;
  setFilter: <K extends keyof FilterFormValues>(
    key: K,
    value: FilterFormValues[K]
  ) => void;
  toggleArrayFilter: <K extends "brands" | "categories">(
    key: K,
    value: string
  ) => void;
  toggleTupleFilter: <K extends "sizes" | "colors">(
    key: K,
    value: [string, number]
  ) => void;
  toggleMobileFilter: () => void;
  validateFilters: () => boolean;
  clearFilters: () => void;
  resetErrors: () => void;
};

const initialFilters: FilterFormValues = {
  categories: [],
  price: { min: null, max: null },
  sizes: [],
  brands: [],
  colors: [],
};

export const useShopFilter = create<FilterState>()(
  persist(
    (set, get) => ({
      filters: initialFilters,
      errors: {},
      isMobileFilterOpen: false,

      setFilter: (key, value) => {
        set((state) => ({
          filters: { ...state.filters, [key]: value },
          errors: Object.fromEntries(
            Object.entries(state.errors).filter(([k]) => k !== key)
          ),
        }));
      },

      toggleArrayFilter: (key, value) => {
        set((state) => {
          const currentArray = state.filters[key] as string[];
          const newArray = currentArray.includes(value)
            ? currentArray.filter((item) => item !== value)
            : [...currentArray, value];

          return {
            filters: { ...state.filters, [key]: newArray },
            errors: Object.fromEntries(
              Object.entries(state.errors).filter(([k]) => k !== key)
            ),
          };
        });
      },

      toggleTupleFilter: (key, value) => {
        set((state) => {
          const currentArray = state.filters[key] as Array<[string, number]>;
          const exists = currentArray.some(([name]) => name === value[0]);
          const newArray = exists
            ? currentArray.filter(([name]) => name !== value[0])
            : [...currentArray, value];

          return {
            filters: { ...state.filters, [key]: newArray },
            errors: Object.fromEntries(
              Object.entries(state.errors).filter(([k]) => k !== key)
            ),
          };
        });
      },

      validateFilters: () => {
        const result = filterSchema.safeParse(get().filters);
        if (!result.success) {
          const errors = result.error.issues.reduce((acc, issue) => {
            const path = issue.path.join(".");
            return { ...acc, [path]: issue.message };
          }, {});
          set({ errors });
          return false;
        }
        set({ errors: {} });
        return true;
      },

      clearFilters: () => {
        set({ filters: initialFilters, errors: {} });
      },

      resetErrors: () => {
        set({ errors: {} });
      },
      toggleMobileFilter: () => {
        set((state) => ({
          isMobileFilterOpen: !state.isMobileFilterOpen,
        }));
      },
    }),
    {
      name: "shop-filters",
      partialize: (state) => ({
        filters: state.filters,
        errors: state.errors,
      }),
    }
  )
);
