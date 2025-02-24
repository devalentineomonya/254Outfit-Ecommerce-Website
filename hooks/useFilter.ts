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
  toggleArrayFilter: <K extends keyof FilterFormValues>(
    key: K,
    value: string
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
        set((state) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [key]: _, ...restErrors } = state.errors;

          return {
            filters: { ...state.filters, [key]: value },
            errors: restErrors,
          };
        });
      },

      toggleArrayFilter: (key, value) => {
        set((state) => {
          const currentArray = state.filters[key] as string[];
          const newArray = currentArray.includes(value)
            ? currentArray.filter((item) => item !== value)
            : [...currentArray, value];
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [key]: _, ...restErrors } = state.errors;

          return {
            filters: { ...state.filters, [key]: newArray },
            errors: restErrors,
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
